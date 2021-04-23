import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import * as api from '../../api'
import { FavoritesContext } from '../../context/FavoritesContext'
import { UserContext } from '../../context/UserContext';
import * as Styled from '../../pages/Pokemons/styles'

const PokemonCard = ({ pokemon, isFavorite }) => {
  const [user, ] = useContext(UserContext);
  const [favorites, setFavorites] = useContext(FavoritesContext);

  //Adiciona o pokemon favoritado à API
  //Adiciona as informações do pokemon à lista de favoritos
  //Adiciona o id do pokemon à lista de ids dos pokemons favoritos
  const addFavorite = () => {
    api.addFavorite(user, pokemon.name)
      .then((result) => {
        setFavorites([...favorites, pokemon]);
      })
  }

  //Remove o pokemon favoritado da API
  //Remove as informações do pokemon da lista de favoritos
  //Remove o id do pokemon da lista de ids dos pokemons favoritos
  const removeFavorite = (exFavorite) => {
    api.removeFavorite(user, exFavorite.name)
      .then((result) => {
        setFavorites(favorites.filter((fav) => fav.id !== exFavorite.id));
      });
  }

  return (
    <div>
      <Link to={{ pathname: `/pokemons/${pokemon.name}`, state: {pokemon} }}>
        <Styled.Item><img src={pokemon.image_url} alt={pokemon.name} /></Styled.Item>
      </Link>
      <Styled.Item><span>{pokemon.number}</span></Styled.Item>
      <Styled.Item><span>{pokemon.name}</span></Styled.Item>
      <Styled.Item>
      {user && (
        <Styled.FavButton onClick={() => {isFavorite ? removeFavorite(pokemon) : addFavorite(pokemon)}}>
          {isFavorite ? <AiFillStar size="2rem" color="yellow" /> : <AiOutlineStar size="2rem" color="yellow" />}
        </Styled.FavButton>
      )}
        
      </Styled.Item>
    </div>
  )
}

export default PokemonCard
