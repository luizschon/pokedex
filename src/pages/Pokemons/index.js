import React, { useEffect, useState, useContext } from "react";
import { Link, useParams, useHistory } from 'react-router-dom';

import * as api from '../../api'
import { UserContext } from '../../context/UserContext'
import { FavoritesContext } from '../../context/FavoritesContext'
import * as Styled from './styles';
import { StyledLink } from './styles';

const Pokemons = () => {
  
  let history = useHistory();
  //Armazena a rota da url atual em id
  let { id } = useParams();

  const [user, ] = useContext(UserContext);
  const [favorites, setFavorites] = useContext(FavoritesContext);

  const [pokemons, setPokemons] = useState([]);
  const [originalPage, setOriginalPage] = useState("1");
  const [page, setPage] = useState(originalPage);
  const [ids, setIds] = useState([]);

  //Armazena a lista de pokemons da página atual
  const getPokemon = (id) => {
    setPokemons([]);
    // !! TODO mudar isso ^^^
    api.getAllPokemons(id)
      .then(result => {
        setPokemons(result.data.data.map(item => item))
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
        setFavorites(result.data.pokemons.map(item => item))
        setIds(result.data.pokemons.map(item => item.id))
      })
  }

  //Adiciona o pokemon favoritado à API
  //Adiciona as informações do pokemon à lista de favoritos
  //Adiciona o id do pokemon à lista de ids dos pokemons favoritos
  const addFavorite = (username, item) => {
    api.addFavorite(username, item.name)
      .then((result) => {
        setFavorites([...favorites, item]);
        setIds([...ids,item.id])
      })
  }

  //Remove o pokemon favoritado da API
  //Remove as informações do pokemon da lista de favoritos
  //Remove o id do pokemon da lista de ids dos pokemons favoritos
  const removeFavorite = (username, item) => {
    api.removeFavorite(username, item.name)
      .then((result) => {
        setFavorites(favorites.filter((fav) => fav.id !== item.id));
        setIds(ids.filter((fav) => fav !== item.id));
      });
  }

  //Atualiza os pokemons mostrados quando a página muda
  //Atualiza a lista de favoritos quando a página muda
  //Atualiza a página atual e a página mostrada no input quando a página muda
  useEffect(() => {
    getPokemon(id);
    getFavorites(user);
    setPage(id)
    setOriginalPage(id)
  }, [id, user])

  return (
    <Styled.Div>
      <StyledLink to={{pathname: `/favorites`}}>Favorites</StyledLink>

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

        {pokemons.map(item =>
          <Styled.Grid key={item.id}>
            <Link to={{pathname: `/pokemons/${item.name}`,state: { pokemoninfo: item }}}>
              <Styled.Item><img src={item.image_url} alt={item.name}/></Styled.Item>
            </Link>
            <Styled.Item><span>{item.number}</span></Styled.Item>
            <Styled.Item><span>{item.name}</span></Styled.Item>
            <br/>
            <Styled.Item>
              <Styled.FavButton 
                onClick = {() => ids.includes(item.id) ? removeFavorite(user,item) : addFavorite(user,item)}>
                  {ids.includes(item.id) ? "Remove Favorite":"Favorite"}</Styled.FavButton>
              </Styled.Item>
            <br/>
          </Styled.Grid>)
          }     
      </Styled.Div>
  );
}

export default Pokemons
