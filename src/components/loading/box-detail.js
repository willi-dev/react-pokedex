import React from 'react'
import Text from '../general/text'

const styleText = {
  color: `#eee`,
  backgroundColor: `#eee`,
  fontSize: `14px`
}

const BoxDetail = () => (
  <div className="w-full md:w-1/3 wrounded overflow-hidden">
    <div className="shadow-lg mx-5 mb-5 px-4 py-4">
      <img src="https://place-hold.it/500x500" alt="monster" />
      <p className="font-bold text-xl mb-2" style={styleText}>Loading Monster....</p>
      <span style={styleText} className="text-xs inline-block mb-1 bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2">.........</span>
      <p className="text-gray-700 text-base mb-1" style={styleText}>
        MaxCP: Loading...
      </p>
      <p className="text-gray-700 text-base mb-1" style={styleText}>
        FleeRate: Loading...
      </p>
      <p className="text-gray-700 text-base mb-1" style={styleText}>
        height: Loading...
      </p>
      <p className="text-gray-700 text-base mb-1" style={styleText}>
        weight: Loading...
      </p>
      <Text>
        Types &nbsp;
        <span style={styleText} className="text-xs inline-block mb-1 bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2">.........</span>
      </Text>
      <Text >
        Weaknesses
      </Text>
        <span style={styleText} className="text-xs inline-block mb-1 bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2">.........</span>
      <Text >
        Resistant
      </Text>
      <span style={styleText} className="text-xs inline-block mb-1 bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2">.........</span>
      <Text >
        Attacks Fast
      </Text>
        <span style={styleText} className="text-xs inline-block mb-1 bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2">.........</span>
        <span style={styleText} className="text-xs inline-block mb-1 bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2">.........</span>
      <Text>
        Attacks Special
      </Text>
        <span style={styleText} className="text-xs inline-block mb-1 bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2">.........</span>
        <span style={styleText} className="text-xs inline-block mb-1 bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2">.........</span>
    </div>
  </div>
)

export default BoxDetail