import numpy as np
import pandas as pd
import os
import matplotlib.pyplot as plt
import tensorflow as tf
import cv2
import random
from PIL import ImageColor
import matplotlib.patches as mpatches

# Use dark background for the plots
plt.style.use("dark_background")

# Function to load images
def load_img(filename, channels=3):
    raw = tf.io.read_file(filename)
    try:
        image = tf.io.decode_image(raw, channels=channels)
    except:
        image = tf.convert_to_tensor(cv2.imread(filename, channels))
    return image

# Paths to images and masks
img_paths = [
    r"C:\Users\harsh\OneDrive\Documents\Desktop\kotta_hack\Semantic segmentation dataset\Tile 1\images",
    r"C:\Users\harsh\OneDrive\Documents\Desktop\kotta_hack\Semantic segmentation dataset\Tile 2\images",
    r"C:\Users\harsh\OneDrive\Documents\Desktop\kotta_hack\Semantic segmentation dataset\Tile 3\images",
    r"C:\Users\harsh\OneDrive\Documents\Desktop\kotta_hack\Semantic segmentation dataset\Tile 4\images",
    r"C:\Users\harsh\OneDrive\Documents\Desktop\kotta_hack\Semantic segmentation dataset\Tile 5\images",
    r"C:\Users\harsh\OneDrive\Documents\Desktop\kotta_hack\Semantic segmentation dataset\Tile 6\images",
]

msk_paths = [
    r"C:\Users\harsh\OneDrive\Documents\Desktop\kotta_hack\Semantic segmentation dataset\Tile 1\masks",
    r"C:\Users\harsh\OneDrive\Documents\Desktop\kotta_hack\Semantic segmentation dataset\Tile 2\masks",
    r"C:\Users\harsh\OneDrive\Documents\Desktop\kotta_hack\Semantic segmentation dataset\Tile 3\masks",
    r"C:\Users\harsh\OneDrive\Documents\Desktop\kotta_hack\Semantic segmentation dataset\Tile 4\masks",
    r"C:\Users\harsh\OneDrive\Documents\Desktop\kotta_hack\Semantic segmentation dataset\Tile 5\masks",
    r"C:\Users\harsh\OneDrive\Documents\Desktop\kotta_hack\Semantic segmentation dataset\Tile 6\masks",
]

dt_abb = ["MUD", "MUD", "SSDD", "SSAI", "SSAI", "SSAI", "SSAI", "SSAI", "SSAI", "SSAI", "SIM", "FBP", "ISPRS", "ISPRS", "SO", "SO", "SO"]

# Creating a DataFrame to store filenames and dataset information
df_files = pd.DataFrame()
for i, m, a in zip(img_paths, msk_paths, dt_abb):
    img_list = os.listdir(i)
    msk_list = os.listdir(m)
    img_list.sort()
    msk_list.sort()
    df_aux = pd.DataFrame(data={"filename_image": img_list, "filename_mask": msk_list})
    df_aux["filename_image"] = df_aux["filename_image"].apply(lambda x: i + '/' + x)
    df_aux["filename_mask"] = df_aux["filename_mask"].apply(lambda x: m + '/' + x)
    df_aux["dataset_abb"] = a
    df_files = pd.concat([df_files, df_aux], ignore_index=True)

# Function to get a random image and mask from the dataset
def get_data(df, dataset=None):
    if dataset is None:
        num_images = len(df)
        random_idx = random.randint(0, num_images - 1)
        filename_img, filename_mask, dt_abb = df.loc[random_idx]
    else:
        df_aux = df_files[df_files["dataset_abb"] == dataset]
        num_images = len(df_aux)
        random_idx = random.randint(0, num_images - 1)
        filename_img, filename_mask, dt_abb = df_aux.iloc[random_idx]
    image = load_img(filename_img, 3)
    mask = load_img(filename_mask, 3)
    return image, mask, dt_abb

# Function to normalize the colors in a mask
def norm_colors(mask, colors, colors_conv):
    boolean_all = tf.zeros(shape=[tf.shape(mask)[0], tf.shape(mask)[1]], dtype=tf.bool)
    for x, y in zip(colors, colors_conv):
        boolean_mask = tf.reduce_all(tf.equal(mask, tf.constant(x, dtype=tf.uint8)), axis=-1)
        boolean_all = tf.logical_or(boolean_all, boolean_mask)
        R = tf.where(boolean_mask, tf.constant(y, dtype=tf.uint8)[0], mask[..., 0])
        G = tf.where(boolean_mask, tf.constant(y, dtype=tf.uint8)[1], mask[..., 1])
        B = tf.where(boolean_mask, tf.constant(y, dtype=tf.uint8)[2], mask[..., 2])
        mask = tf.stack([R, G, B], axis=-1)
    unlabeled = tf.constant((0, 0, 0), dtype=tf.uint8)
    R = tf.where(boolean_all, mask[..., 0], unlabeled[0])
    G = tf.where(boolean_all, mask[..., 1], unlabeled[1])
    B = tf.where(boolean_all, mask[..., 2], unlabeled[2])
    mask = tf.stack([R, G, B], axis=-1)
    return mask

# Function to get color patches for legend in plots
def get_patches(mask, list_colors, list_classes):
    colors, _ = tf.raw_ops.UniqueV2(x=tf.reshape(mask, (-1, 3)), axis=[0])
    colors = colors.numpy()

    patches = []
    for color in colors:
        idx_classes = np.where(list_colors == tuple(color))[0]
        color = tuple(color / 255)
        if len(idx_classes) > 0:
            obj = list_classes[idx_classes[0]]
            patches.append(mpatches.Patch(color=color, label=obj))
    return patches

# Function to resize images and masks
def resize_image(img, mask, major_size, padding=True):
    if padding:
        img = tf.image.resize_with_pad(img, target_height=major_size, target_width=major_size)
        mask = tf.image.resize_with_pad(mask, target_height=major_size, target_width=major_size)
    else:
        img_shape = tf.shape(img)[0:2]
        ar = img_shape[1] / img_shape[0]  # W/H
        img = tf.image.resize(img, size=(major_size, major_size * ar) if img_shape[0] > img_shape[1] else (major_size / ar, major_size))
        mask = tf.image.resize(mask, size=(major_size, major_size * ar) if img_shape[0] > img_shape[1] else (major_size / ar, major_size))
    return tf.cast(img, dtype=tf.uint8), tf.cast(mask, dtype=tf.uint8)

# Function to plot a single sample
def plot_sample(img, mask, df_colors, num_img=1, num_cols=2, ind=0, norm=False, df_colors_conv=None, size_img=None):
    plt.subplot(num_img, num_cols, ind + 1)
    plt.imshow(img)
    plt.tick_params(bottom=False, top=False, left=False, right=False, labelbottom=False, labelleft=False)
    plt.title("Aerial image", fontsize=8)

    plt.subplot(num_img, num_cols, ind + 2)
    plt.imshow(mask)
    plt.tick_params(bottom=False, top=False, left=False, right=False, labelbottom=False, labelleft=False)
    patches = get_patches(mask, df_colors["Color_RGB"], df_colors["Classes"])
    plt.legend(handles=patches, fontsize=6.5, facecolor='white', labelcolor='black')
    plt.title("Original mask", fontsize=8)

    if norm:
        mask_norm = norm_colors(mask, df_colors["Color_RGB"], df_colors["Convertion"])
        plt.subplot(num_img, num_cols, ind + 3)
        plt.imshow(mask_norm)
        plt.tick_params(bottom=False, top=False, left=False, right=False, labelbottom=False, labelleft=False)
        patches = get_patches(mask_norm, df_colors_conv["Color_RGB"], df_colors_conv["Classes"])
        plt.legend(handles=patches, fontsize=6.5, facecolor='white', labelcolor='black')
        plt.title("Re-Colorized mask", fontsize=8)

# Function to plot multiple samples
def plot_samples(dataset, df_colors, df_files, num_img=4, w_disp=10, h_disp=18, norm=False, df_colors_conv=None, size_img=None):
    num_cols = 2
    if norm:
        num_cols = 3

    plt.figure(figsize=(w_disp, h_disp))

    for i in range(num_img):
        df_colors_ = df_colors.copy()
        ind = i * num_cols
        img, mask, abb = get_data(df_files, dataset=dataset)

        if size_img is not None:
            img, mask = resize_image(img, mask, size_img)

        if abb == "SO":
            mask = norm_colors(mask, df_colors_["Color_RGB"], df_colors["Re-Color"])
            df_colors_["Color_RGB"] = df_colors_["Re-Color"]

        if abb == "ISPRS":
            img = img[..., ::-1]

        plot_sample(img, mask, df_colors_, num_img, num_cols, ind, norm, df_colors_conv)

# Set image size
size = 1024

# Semantic segmentation classes
seg_classes = ["Building", "Land", "Road", "Vegetation", "Water", "Object", "Unlabeled", "Unlabeled"]

color_hex = [
    "#3C1098", "#8429F6", "#6EC1E4", "#FEDD3A", "#E2A929", "#E8623C", "#000000", "#9B9B9B"
]

color_rgb = [tuple(np.array(ImageColor.getcolor(hex_, "RGB"))) for hex_ in color_hex]
SSAI_colors = pd.DataFrame(data={"Classes": seg_classes, "Color_HEX": color_hex, "Color_RGB": color_rgb})

# Plot samples from SSAI dataset
plot_samples("SSAI", SSAI_colors, df_files, size_img=size)

# Function to get color baseline
def get_color_baseline(cat):
    return SSAI_colors.loc[SSAI_colors["Classes"] == cat, "Color_RGB"].values[0]

# Function to get class based on color
def get_classes_baseline(color):
    return SSAI_colors.loc[SSAI_colors["Color_RGB"] == color, "Classes"].values[0]

# Adding color conversion information
SSAI_colors["Convertion"] = [
    get_color_baseline("Building"),
    get_color_baseline("Land"),
    get_color_baseline("Road"),
    get_color_baseline("Vegetation"),
    get_color_baseline("Water"),
    get_color_baseline("Object"),
    get_color_baseline("Unlabeled"),
    get_color_baseline("Unlabeled")
]

# Plot normalized samples
plot_samples("SSAI", SSAI_colors, df_files, norm=True, df_colors_conv=SSAI_colors, w_disp=15, size_img=size)

# Save the plots if needed, e.g., plt.savefig('output.png')
plt.show()
