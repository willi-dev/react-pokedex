import React from 'react'

const TextCapsule = ({ children })  => (
  <span className="text-xs inline-block mb-1 bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2">
    {children}
  </span>   
)

export default TextCapsule