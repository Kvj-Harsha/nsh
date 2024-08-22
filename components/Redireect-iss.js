import React from 'react'
import Gitbut from './Gitbut'

const Redireecti = () => {
  return (
    <div>
    
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 bg-[#111827]">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt=""
          src="iss.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl text-white font-bold sm:text-4xl">Live ISS Location</h2>

        <p className="mt-4 text-white">
        This sub-project provides real-time tracking and visualization of the International Space Station (ISS) using Leaflet on a Next.js website
          </p>

        <a
          href="/crater"
          className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Spacial Image Classification
        </a>
      </div>
    </div>
  </div>
  <Gitbut className="bg-red-500" href="https://github.com/Kvj-Harsha/nsh" />
    </div>
  )
}

export default Redireecti
