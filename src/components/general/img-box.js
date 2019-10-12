import React from 'react'

const ImgBox = (props) => (
  <div className="h-64 lg:h-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" 
    style={{ 
      backgroundImage: `url(${props.image})`, 
      backgroundPosition: `center center`, 
      backgroundSize: `cover`
    }} 
    title={props.text} />
)

ImgBox.defaultProps = {
  image: '',
  text: 'default'
}

export default ImgBox