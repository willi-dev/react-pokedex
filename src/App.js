import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Pokemon from './static/pokemon-logo.png'
import PokemonContainer from './components/pokemon/pokemon-container'
import PokemonsListContainer from './components/pokemonslist/pokemons-list-container'

const App = () => {
  return (
    <Fragment>
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full md:w-1/4 mb-4 mt-4">
            <Link to="/">
              <img src={Pokemon} alt="Pokemon | Pokedex"/>
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-5 mb-10">
        <Switch>
          <Route exact path="/" component={PokemonsListContainer} />
          <Route path="/pokemon/:pokemon" component={PokemonContainer} />
        </Switch>
      </div>
    </Fragment>
  );
}

export default App;
