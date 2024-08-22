import React from 'react'

const Stats = () => {
  return (
    <div>
              <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
  <div className="mx-auto max-w-3xl text-center">
    {/* <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Trusted by eCommerce Businesses</h2> */}

    <p className="mt-4 text-gray-500 sm:text-xl">
      Check out the statistics of our ML Model
    </p>
  </div>

  <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
    <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Total Raw Images</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">117</dd>
    </div>

    <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Trained Images</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">98</dd>
    </div>

    <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Testes Images</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">19</dd>
    </div>

    <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">mAP_0.5 Score</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">0.6919</dd>
    </div>
  </dl>
        </div>
    </div>
  )
}

export default Stats
