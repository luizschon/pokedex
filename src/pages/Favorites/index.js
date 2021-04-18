import { Link, useLocation} from "react-router-dom";
import * as Styled from "./styles";

const Favorites = () => {
  //Define state.favorites como uma lista contendo as informações dos pokemons favoritos
  const { state } = useLocation();

  return(
    <div>
      <Styled.Div>
        <Styled.PageButton onClick = {() => window.history.back()}>Back to Pokemons</Styled.PageButton>
      </Styled.Div>
      
      {state.favorites.map(item =>
      <Styled.Grid key={item.id}>
        <Styled.Item><img src={item.image_url} alt={item.name}/></Styled.Item>
        <Styled.Item><span>{item.number}</span></Styled.Item>
        <Styled.Item><span>{item.name}</span></Styled.Item>
        <br/>
        <Styled.Item><Link to={{pathname: `/pokemons/${item.name}`,state: { pokemoninfo: item }}}>
        <Styled.InfoButton>Info</Styled.InfoButton></Link></Styled.Item>
        <br/>
      </Styled.Grid>)
      }
    </div>
  );
}

export default Favorites