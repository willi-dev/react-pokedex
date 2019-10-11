import React from 'react'

const styleText = {
  color: `#eee`,
  backgroundColor: `#eee`,
  fontSize: `14px`
}

const Box = () => (
  <div className="w-1/4 wrounded overflow-hidden">
    <div className="mb-4 mx-2 shadow-lg">
      <div className="h-64 lg:h-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" 
        style={{ backgroundColor: `#eee`, backgroundPosition: `center center`, backgroundSize: `cover`}} title="loading" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2" style={styleText}>Loading Monster</div>
        <p className="text-gray-700 text-base mb-1" style={styleText}>
          MaxCP: Loading...
        </p>
        <p className="text-gray-700 text-base mb-1" style={styleText}>
          height: Loading...
        </p>
        <p className="text-gray-700 text-base mb-1" style={styleText}>
          weight: Loading...
        </p>
      </div>
      <div className="px-6 py-4">
        <span style={styleText} className="text-xs inline-block mb-1 bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2">....</span>
        <span style={styleText} className="text-xs inline-block mb-1 bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2">...</span>
        <span style={styleText} className="text-xs inline-block mb-1 bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2">.......</span>
      </div>
    </div>
  </div>
)

export default Box