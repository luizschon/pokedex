import * as Styled from './styles';
import { AiOutlineClose } from "react-icons/ai";
import { kindColors, ColorByKind } from "../../utils/ColorByKind"

const PokemonInfo = ({ pokemon, closeModal }) => {
  //Se o pokemon tiver mais de um tipo, retorna os dois tipos separadamente
  const handleType = (kind) => {
    if (kind.includes(";")) {
      kind = kind.split(";")
      return (
      <div>
        <Styled.Span>{kind[0]}</Styled.Span>
        <Styled.Span>{kind[1]}</Styled.Span>
      </div>
      );
    } else {
      return(
        <Styled.Span>{kind}</Styled.Span>
      );
    }
  }

  return (
    <div>

      <Styled.InfoPage color1 = { kindColors[ColorByKind(pokemon.kind, 0)]}
      color2 = { kindColors[ColorByKind(pokemon.kind, 1)]}>
        <AiOutlineClose size="2rem" color="black" cursor="pointer" style={{ marginLeft: 20, marginTop: 20 }} onClick={closeModal} />
        <Styled.Item><strong>{pokemon.id}</strong></Styled.Item>
        <Styled.Item><Styled.Img src={pokemon.image_url} alt={pokemon.name} /></Styled.Item>
        <Styled.Item><strong>{pokemon.name}</strong></Styled.Item>
        <br />
        <Styled.Item><strong>{pokemon.weight/10} kg</strong></Styled.Item>
        <br />
        <Styled.Item><strong>{pokemon.height/10} m</strong></Styled.Item>
        <br />
        <Styled.Item><strong>{handleType(pokemon.kind)}</strong></Styled.Item>
        <br />
      </Styled.InfoPage>
    </div>
  );
};

export default PokemonInfo;