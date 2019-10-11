import React from 'react'

const styleText = {
  color: `#ccc`,
  backgroundColor: `#ccc`,
  fontSize: `14px`
}

const Box = () => (
  <div className="w-1/4 wrounded overflow-hidden">
    <div className="mb-2 mx-1 shadow-lg">
      <div className="h-64 lg:h-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" 
        style={{ backgroundColor: `#ccc`, backgroundPosition: `center center`, backgroundSize: `cover`}} title="loading" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2" style={styleText}>Loading Monster</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 py-4">
        <span style={styleText} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">loading...</span>
        <span style={styleText} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">loading...</span>
        <span style={styleText} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">loading...</span>
      </div>
    </div>
  </div>
)

export default Box