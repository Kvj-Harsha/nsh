import React from 'react'
import Featuresimg from './Featuresimg'

const Imghero = () => {
  return (
    <div>
      <section className="bg-gray-900 text-white">
        <div className='max-w-auto'>
            <center>
              <h1 className="p-8 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                Sattelite Image Classification!
              </h1>
              
            </center>
        </div>

<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header>
      <h2 className="text-xl font-bold text-white-900 sm:text-3xl">Description</h2>

      <p className="mt-4 max-w-auto text-gray-500">
      This Python project provides a foundation for working with aerial image semantic 
      segmentation datasets. It streamlines the loading, visualization, and basic 
      preprocessing of images and their corresponding masks. By organizing file
       information and offering customizable visualization options, it enables
        researchers and developers to gain insights into their data, aiding in 
        tasks such as model development, evaluation,
       and understanding the distribution of semantic classes in aerial imagery.
      </p>
    </header>

    <div className="mt-8 sm:flex sm:items-center sm:justify-between">
      <div className="block sm:hidden">
        <button
          className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
        >
          <span className="text-sm font-medium"> Filters & Sorting </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 rtl:rotate-180"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

    </div>

    <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative bg-white pt-3">
            <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
              Example 1
            </h3>

            <p className="mt-2">
              <span className="sr-only"> Regular Price </span>

              <span className="tracking-wider text-gray-900"> E1 </span>
            </p>
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative bg-white pt-3">
            <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
              Example 2
            </h3>

            <p className="mt-2">
              <span className="sr-only"> Regular Price </span>

              <span className="tracking-wider text-gray-900"> E2 </span>
            </p>
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative bg-white pt-3">
            <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
              example 3
            </h3>

            <p className="mt-2">
              <span className="sr-only"> E3 </span>

              <span className="tracking-wider text-gray-900"> E3 </span>
            </p>
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative bg-white pt-3">
            <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
              example 4
            </h3>

            <p className="mt-2">
              <span className="sr-only"> Regular Price </span>

              <span className="tracking-wider text-gray-900"> E4 </span>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</section>

        <Featuresimg/>

        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
  <div className="mx-auto max-w-3xl text-center">
    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Trusted by eCommerce Businesses</h2>

    <p className="mt-4 text-gray-500 sm:text-xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore
      provident impedit esse recusandae facere libero harum sequi.
    </p>
  </div>

  <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
    <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Total Sales</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">$4.8m</dd>
    </div>

    <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Official Addons</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
    </div>

    <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Total Addons</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
    </div>

    <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Downloads</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86k</dd>
    </div>
  </dl>
</div>

</section>
    </div>
  )
}

export default Imghero
