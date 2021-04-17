import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  Redirect,
  useParams,
} from "react-router-dom";
import * as Styled from "./styles";
import axios from "axios";

const Pokemons = () => {
  let { pageNumber } = useParams();

  const [user, setUser] = useState(localStorage.getItem("user"));
  const [pokemons, setPokemons] = useState([]);

  const getPokemon = (pageNumber) => {
    setPokemons([]);
    axios
      .get("https://pokedex20201.herokuapp.com/pokemons?page=" + pageNumber)
      .then((res) => {
        setPokemons(res.data.data.map((item) => item));
      });
  };

  useEffect(() => {
    getPokemon(pageNumber);
  }, [pageNumber]);

  return (
    <Styled.Div>
      {pokemons.map((item) => (
        <Styled.Grid key={item.id}>
          <Styled.Item>
            <img src={item.image_url} alt={item.name} />
          </Styled.Item>
          <Styled.Item>
            <span>{item.number}</span>
          </Styled.Item>
          <Styled.Item>
            <span>{item.name}</span>
          </Styled.Item>
          <br />
          <Styled.Item>
            <Link
              to={{
                pathname: `/pokemons/${item.name}`,
                state: { pokemoninfo: item },
              }}
            >
              <Styled.Button>Info</Styled.Button>
            </Link>
          </Styled.Item>
          <br />
        </Styled.Grid>
      ))}
    </Styled.Div>
  );
};

export default Pokemons;
