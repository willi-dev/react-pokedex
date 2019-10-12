import React from 'react'
import Box from './box'

const Boxes = ({ total }) => {
  return (
    [...Array(total)].map((comp, idx) => <Box key={idx} />)
  )
}
export default Boxes