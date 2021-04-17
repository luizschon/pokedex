import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Link, Redirect, useParams } from 'react-router-dom';
import * as Styled from './styles';
import axios from "axios";

import ShowPokemonInfo from './ShowPokemonInfo';

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
          <Styled.Item><img src={item.image_url} alt={item.name}/></Styled.Item>
          <Styled.Item><span>{item.number}</span></Styled.Item>
          <Styled.Item><span>{item.name}</span></Styled.Item>
          <br/>
          <Styled.Item><Link to={{
            pathname: `/pokemons/${item.name}`,
            state: { pokemoninfo: item }
          }}><Styled.Button>Info</Styled.Button></Link></Styled.Item>
          <br/>
        </Styled.Grid>)

        }
    </Styled.Div>
    );
}

export default Pokemons
