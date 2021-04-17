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

  const handlePreviousPage = (id) => {
    if (id === "1"){
      return id;
    }
    return parseInt(id)-1;
  }

  const handleNextPage = (id) => {
    if (id === "33"){
      return id;
    }
    return parseInt(id)+1;
  }


  return (
    <div>
    <Styled.Page>
      <Link to={{
        pathname: `/${handlePreviousPage(id)}`,
        }}><Styled.PageButton>Previous</Styled.PageButton></Link>
      <Styled.Span>{id}</Styled.Span>
      <Link to={{
        pathname: `/${handleNextPage(id)}`,
        }}><Styled.PageButton>Next</Styled.PageButton></Link>

</Styled.Page>


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
          }}><Styled.InfoButton>Info</Styled.InfoButton></Link></Styled.Item>
          <br/>
        </Styled.Grid>)
        }
        
    </Styled.Div>

    </div>
    );
}

export default Pokemons
