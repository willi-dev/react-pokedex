const POKEMON_ATTRIBUTE = `
  id
  number
  name
  weight {
    minimum
    maximum
  }
  height {
    minimum
    maximum
  }
  classification
  types
  resistant
  attacks {
    fast {
      name
      type
      damage
    }
    special {
      name
      type
      damage
    }
  }
  weaknesses
  fleeRate
  maxCP
  image
`
/**
 * MONSTER_PER_PAGE
 * monster per page 
 * @author willi <https://github.com/willi-dev>
 */
export const MONSTER_PER_PAGE = 8

/**
 * MONSTER_LIST
 * monster list query 
 * @author willi <https://github.com/willi-dev>
 */
export const MONSTER_LIST = `
  query monsterList($first: Int!) {
    pokemons(first: $first) {
      ${POKEMON_ATTRIBUTE}
    }
  }
`
/**
 * MONSTER
 * monster query
 * @author willi <https://github.com/willi-dev>
 */
export const MONSTER = `
  query monsterItem($id: String, $name: String) {
    pokemon(id: $id, name: $name) {
      ${POKEMON_ATTRIBUTE}
    }
  }
`