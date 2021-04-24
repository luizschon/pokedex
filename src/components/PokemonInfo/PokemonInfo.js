import * as Styled from './styles';
import ColorByType from "./ColorByType"

const PokemonInfo = ({ pokemon }) => {
  //Se o pokemon tiver mais de um tipo, retorna os dois tipos separadamente
  const handleType = (kind) => {
    if (kind.includes(";")) {
      kind = kind.split(";")
      return (kind[0] + " and " + kind[1]);
    } else {
      return kind;
    }
  }

  return (
    <div>
      <Styled.InfoPage style={{ backgroundColor: ColorByType(pokemon.kind) }}>
        <Styled.Item><strong>{pokemon.id}</strong></Styled.Item>
        <Styled.Item><Styled.Img src={pokemon.image_url} alt={pokemon.name} /></Styled.Item>
        <Styled.Item><strong>Name: {pokemon.name}</strong></Styled.Item>
        <br />
        <Styled.Item><strong>Weight: {pokemon.weight} m</strong></Styled.Item>
        <br />
        <Styled.Item><strong>Height: {pokemon.height} kg</strong></Styled.Item>
        <br />
        <Styled.Item><strong>Kind: {handleType(pokemon.kind)}</strong></Styled.Item>
        <br />
      </Styled.InfoPage>
    </div>
  );
};

export default PokemonInfo;