import React, {useState} from 'react'
import { connect } from 'react-redux'
import pokeIcon from '../../static/pokeball.png'
import TextCapsule from './text-capsule'
import Text from './text'

const styleFilterButton = {
  borderRadius: `50%`,
  position: `fixed`,
  bottom: `25px`,
  right: `25px`,
  cursor: `pointer`,
  width: `60px`,
  height: `60px`
}
const styleFilterPanel = { 
  height: `100%`, 
  position: `fixed`, 
  width: `300px`, 
  top: `50%`, 
  transform: `translate(0%, -50%)`,
  backgroundColor: `white`,
  overflow: `auto`
}

const Filter = (props) => {
  const { classification } = props
  const [isOpen, setIsOpen] = useState('is-close')
  const uniqueClass = [...new Set(props.classification)]

  const openFilter = () => {
    if (isOpen !== 'is-open') {
      setIsOpen('is-open')
    } else {
      setIsOpen('is-close')
    }
  }
  console.log(classification)
  return (
    <div>
      <div style={styleFilterPanel} className={`shadow-lg filter-panel p-5 ${isOpen}`}>
        <Text styleType="title">
          Filter Classification
        </Text>
        {
          uniqueClass.map((cl, index) => (
            <TextCapsule key={index}>
              <p>{cl}</p>
            </TextCapsule>
          ))
        }
      </div>
      <div style={styleFilterButton} className={`shadow-lg filter-button ${isOpen}`} onClick={openFilter}>
        <img src={pokeIcon} alt="pokeball"/>
      </div>
    </div>
  )
}

const mapStateToProps = store => ({
  classification: store.pokemon.pokemonsList.map((value) => {
    return value.classification
  })
})

export default connect(mapStateToProps, null)(Filter)