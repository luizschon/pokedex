import { BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom';
import { useState } from 'react';
import Pokemons from './pages/Pokemons/index'
import * as Styled from './pages/Pokemons/styles';
import {StyledLink} from './pages/Pokemons/styles';

import ShowPokemonInfo from './pages/Pokemons/ShowPokemonInfo';

export default function App() {

  return (
    <Styled.Div>
      <BrowserRouter>
        <StyledLink to="/favorites">Favorites</StyledLink>

        <Switch>
          <Route exact path="/" render={() => {
            return (
              <Redirect to="/1" />
            )
            }} />
          <Route path="/pokemons/:name" component={ShowPokemonInfo}/>
          <Route path="/:id" children={<Pokemons />} />
        </Switch>
      </BrowserRouter>
    </Styled.Div>
      );
    }