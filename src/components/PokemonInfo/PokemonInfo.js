import * as Styled from './styles';
import { kindColors, ColorByKind } from "../../utils/ColorByKind"

const PokemonInfo = ({ pokemon, closeModal }) => {
  //Se o pokemon tiver mais de um tipo, retorna os dois tipos separadamente
  let kind = null;

  if (pokemon.kind.includes(";")) {
    kind = pokemon.kind.split(";");
  } else {
    kind = pokemon.kind;
  }

  return (
    <div>

      <Styled.InfoPage color1 = { kindColors[ColorByKind(pokemon.kind, 0)]}
      color2 = { kindColors[ColorByKind(pokemon.kind, 1)]}>
        <Styled.Item><strong>{pokemon.id}</strong></Styled.Item>
        <Styled.Img src={pokemon.image_url} alt={pokemon.name} />
        <Styled.Item><strong>{pokemon.name}</strong></Styled.Item>
        <br />
        <Styled.Item><strong>{pokemon.weight/10} kg</strong></Styled.Item>
        <br />
        <Styled.Item><strong>{pokemon.height/10} m</strong></Styled.Item>
        <br />
        <Styled.KindContainer>
          {Array.isArray(kind) ? (
            <>
            <Styled.Span><strong>{kind[0]}</strong></Styled.Span>
            <Styled.Span><strong>{kind[1]}</strong></Styled.Span>
            </>
          ) : (
            <Styled.Span><strong>{kind}</strong></Styled.Span>
          )}
          </Styled.KindContainer>
        <br />
      </Styled.InfoPage>
    </div>
  );
};

export default PokemonInfo;