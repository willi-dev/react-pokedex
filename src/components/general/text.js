import React from 'react'

const styleText = (styleType) => (styleType === 'title') ? 'font-bold text-xl mb-2' : 'text-gray-700 text-base'

/**
 * Text
 * text component 
 * @author willi <https://github.com/willi-dev>
 * @param {*} props 
 */
const Text = ({ styleType, children }) => <p className={styleText(styleType)}>{children}</p>

Text.defaultProps = {
  styleType: 'base',
  children: 'default'
}

export default Text