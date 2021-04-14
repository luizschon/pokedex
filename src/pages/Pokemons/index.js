import React, { useEffect, useState } from "react";
import * as Styled from './styles';
import axios from "axios";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  const getPokemon = () => {
    axios.get('https://pokedex20201.herokuapp.com/pokemons')
      .then(res => {
        setPokemons(res.data.data.map(item => item))
      })
  }

  useEffect(() => {
    getPokemon();
  }, [])

  return (
    <Styled.Div>
      {pokemons.map(item =>
        <Styled.Grid key={item.id}>
          <Styled.Item><img src={item.image_url} /></Styled.Item>
          <Styled.Item><span>{item.number}</span></Styled.Item>
          <Styled.Item><span>{item.name}</span></Styled.Item>
        </Styled.Grid>)}
    </Styled.Div>
  )
}

export default Pokemons
