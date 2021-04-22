import React, { useEffect, useState, useContext } from "react";
import { Link, useParams, useHistory } from 'react-router-dom';

import * as api from '../../api'
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { UserContext } from '../../context/UserContext'
import { FavoritesContext } from '../../context/FavoritesContext'
import * as Styled from './styles';

const Pokemons = () => {
  
  let history = useHistory();
  //Armazena a rota da url atual em id
  let { id } = useParams();

  const [user, ] = useContext(UserContext);
  const [favorites, setFavorites] = useContext(FavoritesContext);

  const [pokemons, setPokemons] = useState([]);
  const [originalPage, setOriginalPage] = useState("1");
  const [page, setPage] = useState(originalPage);

  //Armazena a lista de pokemons da página atual
  const getPokemon = (id) => {
    setPokemons([]);
    // !! TODO mudar isso ^^^
    api.getAllPokemons(id)
      .then(result => {
        setPokemons(result.data.data)
      });
  }

  //Volta para a página anterior se a página atual nao for a primeira
  const handlePreviousPage = (id) => {
    if (id === "1"){
      return id;
    }
    return parseInt(id)-1;
  }

  //Avança para a proxima página se a página atual nao for a última
  const handleNextPage = (id) => {
    if (id === "33"){
      return id;
    }
    return parseInt(id)+1;
  }

  // Redireciona o usuário para a página desejada usando o input
  // Se o input não for válido, retorna o texto para o número da página atual
  const redirect = (page) => {
    if (page > 0 && page < 34){
      history.push({
        pathname: `/${page}`,
      });
    } else {
      setPage(originalPage)
      return;
    }
  }

  //Armazena a lista de pokemons favoritos
  const getFavorites = (username) => {
    api.getFavorites(username)
      .then((result) => {
        setFavorites(result.data.pokemons)
      }) 
  }

  //Atualiza os pokemons mostrados quando a página muda
  //Atualiza a lista de favoritos quando a página muda
  //Atualiza a página atual e a página mostrada no input quando a página muda
  useEffect(() => {
    getPokemon(id);
    setPage(id)
    setOriginalPage(id);
    if (user !== null) {
      getFavorites(user);
    }
    
  }, [id, user])

  return (
    <Styled.Div>
        {pokemons ? (
          pokemons.map(pokemon =>
            <Styled.Grid key={pokemon.id}>
              <PokemonCard 
                pokemon={pokemon} 
                isFavorite={favorites.some((favPokemon) => favPokemon.name === pokemon.name)} 
              />
            </Styled.Grid>)
        ) : (
          <h1>Carregando!</h1>
        )
        }

      <Styled.PageButtonsDiv>
        <Link to={{pathname: `/${handlePreviousPage(id)}`}}>
          <Styled.PageButton>Previous</Styled.PageButton>
        </Link>
        <Styled.Input
          type="text"
          maxLength="2"
          value={page}
          onChange={(event) => setPage(event.target.value)}
          onKeyPress={(event) => event.key === "Enter" && redirect(page)}
        />
        <Link to={{pathname: `/${handleNextPage(id)}`}}>
          <Styled.PageButton>Next</Styled.PageButton>
        </Link>
      </Styled.PageButtonsDiv> 
      </Styled.Div>
  );
}

export default Pokemons
