import React from 'react'
import { Route, Switch } from 'react-router-dom'

import PokemonContainer from './components/pokemon/pokemon-container'
import PokemonsListContainer from './components/pokemonslist/pokemons-list-container'

const App = () => {
  return (
    <div className="container mx-auto mt-5 mb-10">
      <Switch>
        <Route exact path="/" component={PokemonsListContainer} />
        <Route path="/pokemon/:pokemon" component={PokemonContainer} />
      </Switch>
    </div>
  );
}

export default App;
