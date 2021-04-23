import { useLocation } from "react-router-dom";
import * as Styled from './styles';
import ColorByType from "./ColorByType"
import { AiOutlineArrowLeft } from "react-icons/ai";
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
        <AiOutlineArrowLeft size="2rem" color="black" onClick = {() => window.history.back()} />
      </Styled.PageButtonsDiv>
      <Styled.InfoPage style={{backgroundColor: ColorByType(state.pokemon.kind)}}>
        <Styled.Item><strong>{state.pokemon.id}</strong></Styled.Item>
        <Styled.Item><Styled.Img src={state.pokemon.image_url} alt={state.pokemon.name}/></Styled.Item>
        <Styled.Item><strong>Name: {state.pokemon.name}</strong></Styled.Item>
        <br/>
        <Styled.Item><strong>Weight: {state.pokemon.weight} m</strong></Styled.Item>
        <br/>
        <Styled.Item><strong>Height: {state.pokemon.height} kg</strong></Styled.Item>
        <br/>
        <Styled.Item><strong>Kind: {handleType(state.pokemon.kind)}</strong></Styled.Item>
      </Styled.InfoPage>
    </div>
  );
};

export default PokemonInfo;