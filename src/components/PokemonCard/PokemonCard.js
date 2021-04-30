import { useContext } from 'react';
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

import * as api from '../../api';
import { UserContext } from '../../context/UserContext';
import { FavoritesContext } from '../../context/FavoritesContext';
import { ModalContext } from '../../context/ModalContext';
import { kindColors, ColorByKind } from "../../utils/ColorByKind"
import * as Styled from './styles';

const PokemonCard = ({ pokemon, isFavorite }) => {
  const [user, ] = useContext(UserContext);
  const [, setModal] = useContext(ModalContext)
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
    < Styled.Container 
      color1 = { kindColors[ColorByKind(pokemon.kind, 0)]}
      color2 = { kindColors[ColorByKind(pokemon.kind, 1)]}
      favorite = {isFavorite}
    >
      <Styled.NameContainer login={user}>
        <Styled.Name login={user}>{pokemon.name}</Styled.Name>
        {user && (
        <Styled.FavButton onClick={() => { isFavorite ? removeFavorite(pokemon) : addFavorite(pokemon) }}>
          {isFavorite ? <AiFillStar size="30px" color="yellow" /> : <AiOutlineStar size="30px" color="yellow" />}
        </Styled.FavButton>
        )}
      </Styled.NameContainer>

      <Styled.Img className="poke-img" src={pokemon.image_url} alt={pokemon.name} onClick={() => setModal(pokemon)} animated/>
    
    </Styled.Container>
      
  )
}

export default PokemonCard
