import { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { FavoritesContext } from '../../context/FavoritesContext'
import * as Styled from "./styles";

const Favorites = () => {
  const [favorites, ] = useContext(FavoritesContext);

  return(
    <Styled.Div>
      <AiOutlineArrowLeft size="2rem" color="black" onClick = {() => window.history.back()} />    
      {favorites.length > 0 ?
      favorites.map(item =>
      <Styled.Grid key={item.id}>
        <Link to={{pathname: `/pokemons/${item.name}`,state: { pokemon: item }}}>
          <Styled.Item><img src={item.image_url} alt={item.name}/></Styled.Item>
        </Link>
        <Styled.Item><span>{item.number}</span></Styled.Item>
        <Styled.Item><span>{item.name}</span></Styled.Item>
        <br/>
      </Styled.Grid>)
      :
      <Styled.Text>Nao há nenhum pokemon favoritado</Styled.Text>}
    </Styled.Div>
  );
}

export default Favorites