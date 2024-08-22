 import React from 'react'
 
 const Casaroule = () => {
   return (
     <div>
                 <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
              <header>
                <h2 className="text-xl font-bold text-white-900 sm:text-3xl">Description</h2>

                <p className="mt-4 max-w-auto text-gray-500">
                This project is dedicated to detecting and analyzing
                craters on the surfaces of the Moon and other planets.
                  Craters are circular depressions formed by the impact
                of asteroids and comets. By identifying these craters,
                  we can gain valuable insights into the history, 
                  surface conditions, and 
                geological activity of various celestial bodies.
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
                      src="a.jpg"
                      alt="a.jpg"
                      className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />

                    <div className="relative bg-white pt-3">
                      <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                        Example 1
                      </h3>

                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" className="group block overflow-hidden">
                    <img
                      src="d.jpg"
                      alt="d.jpg"
                      className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />

                    <div className="relative bg-white pt-3">
                      <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                        Example 2
                      </h3>

                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" className="group block overflow-hidden">
                    <img
                      src="b.jpg"
                      alt="b.jpg"
                      className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />

                    <div className="relative bg-white pt-3">
                      <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                        example 3
                      </h3>

                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" className="group block overflow-hidden">
                    <img
                      src="c.jpg"
                      alt="c.jpg"
                      className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />

                    <div className="relative bg-white pt-3">
                      <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                        example 4
                      </h3>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </section>
     </div>
   )
 }
 
 export default Casaroule
 