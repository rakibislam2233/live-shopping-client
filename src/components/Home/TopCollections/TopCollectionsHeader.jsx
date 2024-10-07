import React from 'react'

const TopCollectionsHeader = () => {
  return (
    <section className="w-full">
    <div className="flex justify-between items-center">
      <div className="flex gap-3">
        <div className="w-2 h-24 bg-[#D43961] rounded-r-lg"></div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl text-[#D43961] font-semibold">
          Top Quality
          </h1>
          <h1 className="text-5xl font-semibold">Top-Selling Product of The
          year Collection</h1>
        </div>
      </div>
      <div className="border-2 border-[#c90739] p-0.5 rounded-lg">
        <button className="bg-[#c90739] px-8 py-3 text-white rounded-md">
        Shop Now
        </button>
      </div>
    </div>
    <div className="border-b border-[#C6D0DF] my-6"></div>
  </section>
  )
}

export default TopCollectionsHeader