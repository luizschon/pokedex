import { useLocation } from "react-router-dom";
import * as Styled from './styles';

const PokemonInfo = () => {

//Define state.pokemoninfo como as informações do pokemon
const { state } = useLocation();

//Se o pokemon tiver mais de um tipo, retorna os dois tipos separadamente
  const handleType = (kind) => {
    if (kind.includes(";")){
      kind = kind.split(";")
      return (kind[0]+" and "+kind[1]);
    } else {
      return kind;
    }
  }

  return (
    <div>
      <Styled.PageButtonsDiv>
        <Styled.PageButton onClick = {() => window.history.back()}>Back to Pokemons</Styled.PageButton>
      </Styled.PageButtonsDiv>
      <Styled.InfoPage>
        <Styled.Item><strong>{state.pokemoninfo.id}</strong></Styled.Item>
        <Styled.Item><Styled.Img src={state.pokemoninfo.image_url} alt={state.pokemoninfo.name}/></Styled.Item>
        <Styled.Item><strong>Name: {state.pokemoninfo.name}</strong></Styled.Item>
        <br/>
        <Styled.Item><strong>Weight: {state.pokemoninfo.weight} m</strong></Styled.Item>
        <br/>
        <Styled.Item><strong>Height: {state.pokemoninfo.height} kg</strong></Styled.Item>
        <br/>
        <Styled.Item><strong>Kind: {handleType(state.pokemoninfo.kind)}</strong></Styled.Item>
      </Styled.InfoPage>
    </div>
  );
};

export default PokemonInfo;