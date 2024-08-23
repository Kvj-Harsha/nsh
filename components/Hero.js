import React from 'react'

const   Hero = () => {
  return (
    <div>
      <section className="bg-gray-900 text-white">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        National Spaceday Hackathon.

        <span className="sm:block"> ML + Web </span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        Browse through the two projects of "Crater Detection on lunar and other planetary surfaces using deep learning (YOLO)" and "Live Location of ISS with graphical representation using OpenNotify API"
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="/crater"
        >
          Crater Detection
        </a>

        <a
          className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="/iss"
        >
          Live ISS
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero
