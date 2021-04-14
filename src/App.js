import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import * as Styled from './styles';
import axios from "axios";

import Page1 from './pages/Page1'
import Page2 from './pages/Page2'

export default function App() {
  const [pokemons, setPokemons] = useState([]);

  const getPokemon = () => {
    axios.get('https://pokedex20201.herokuapp.com/pokemons/')
      .then(res => {
        setPokemons(res.data.data.map(item => item))
      })
  }

  useEffect(() => {
    getPokemon();
  }, [])


  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/page2">
            <Page2 />
          </Route>
          <Route path="/">
            <Page1 />
          </Route>
        </Switch>
      </BrowserRouter>


      <Styled.Div>
        {pokemons.map(item =>
          <Styled.Grid key={item.id}>
            <Styled.Item><img src={item.image_url} /></Styled.Item>
            <Styled.Item><span>{item.number}</span></Styled.Item>
            <Styled.Item><span>{item.name}</span></Styled.Item>
          </Styled.Grid>)}
      </Styled.Div>
    </div>
  );
}