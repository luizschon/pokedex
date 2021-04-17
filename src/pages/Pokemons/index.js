import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Link, useParams} from 'react-router-dom';
import * as Styled from './styles';
import axios from "axios";

const Pokemons = () => {

  let { id } = useParams();

  const [pokemons, setPokemons] = useState([]);

  const getPokemon = (id) => {
    setPokemons([])
    axios.get('https://pokedex20201.herokuapp.com/pokemons?page=' + id)
      .then(res => {
        setPokemons(res.data.data.map(item => item))
      })
  }

  useEffect(() => {
    getPokemon(id);
  }, [id])

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
