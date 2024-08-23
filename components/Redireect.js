import React from 'react'

const Redireect = () => {
  return (
    <div>
    
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 bg-[#111827]">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt=""
          src="moon1.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl text-white font-bold sm:text-4xl">Crater Detection</h2>

        <p className="mt-4 text-white">
          Check out our ML model on crater detection using image classfication using OpenCv, Numpy, Pandas, Matplotlib. Click the below link.   
        </p>

        <a
          href="/crater"
          className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Crater Detection
        </a>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Redireect
