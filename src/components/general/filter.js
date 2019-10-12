import React, {useState} from 'react'
import { connect } from 'react-redux'
import pokeIcon from '../../static/pokeball.png'
import Text from './text'

import { setFilter } from '../../store/pokemon/action'

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
  width: `270px`, 
  top: `50%`, 
  transform: `translate(0%, -50%)`,
  backgroundColor: `white`,
  overflow: `auto`
}

/**
 * Filter
 * filter component
 * @author willi <https://github.com/willi-dev>
 * @param {*} props 
 */
const Filter = (props) => {
  const [isOpen, setIsOpen] = useState('is-close')
  const uniqueClass = [...new Set(props.classification)]

  const openFilter = () => {
    if (isOpen !== 'is-open') {
      setIsOpen('is-open')
    } else {
      setIsOpen('is-close')
    }
  }

  return (
    <div>
      <div style={styleFilterPanel} className={`shadow-lg filter-panel p-5 ${isOpen}`}>
        <Text styleType="title">
          Monster <br/>
          Filter Classification
        </Text>
        <div className="mr-2 text-xs inline-block mb-1 bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 class-capsule">
          <label htmlFor="class-capsule-none">
            <input
              type="radio"
              id="class-capsule-none"
              name="classification-monster"
              value=""
              onChange={() => props.filtering('')} />
            <p className="ml-3">Show All</p>
          </label>
        </div>
        {
          uniqueClass.map((cl, index) => (
            <div className="mr-2 text-xs inline-block mb-1 bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 class-capsule" key={index}>
              <label htmlFor={`class-capsule-${index}`}>
                <input
                  type="radio" id={`class-capsule-${index}`} 
                  name="classification-monster"
                  value={cl}
                  onChange={() => props.filtering(cl)}/>
                <p className="ml-3">{cl}</p>
              </label>
            </div>
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
  }),
  activeFilter: store.pokemon.filter
})

const mapDispatchToProps = dispatch => ({
  filtering: (classification) => {
    dispatch(setFilter(classification))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Filter)