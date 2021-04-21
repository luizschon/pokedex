import { useContext } from "react";
import { Link } from "react-router-dom";

import { FavoritesContext } from '../../context/FavoritesContext'
import * as Styled from "./styles";

const Favorites = () => {
  const [favorites, ] = useContext(FavoritesContext);

  return(
    <Styled.Div>
      <Styled.PageButton onClick = {() => window.history.back()}>Back to Pokemons</Styled.PageButton>    
      {favorites.map(item =>
      <Styled.Grid key={item.id}>
        <Link to={{pathname: `/pokemons/${item.name}`,state: { pokemon: item }}}>
          <Styled.Item><img src={item.image_url} alt={item.name}/></Styled.Item>
        </Link>
        <Styled.Item><span>{item.number}</span></Styled.Item>
        <Styled.Item><span>{item.name}</span></Styled.Item>
        <br/>
      </Styled.Grid>)
      }
    </Styled.Div>
  );
}

export default Favorites