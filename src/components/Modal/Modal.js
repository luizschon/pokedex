import { AiOutlineClose } from "react-icons/ai";
import * as Styled from './styles'
import ColorByType from "../../components/PokemonInfo/ColorByType"

const Modal = ({ pokemon, children, closeModal }) => {
  return (
    <Styled.Curtain>
      <Styled.PopUp style={{ backgroundColor: ColorByType(pokemon.kind) }}>
        <AiOutlineClose size="2rem" color="black" style={{ marginLeft: 20, marginTop: 20 }} onClick={closeModal} />
        { children }
      </Styled.PopUp>
    </Styled.Curtain>
  )
}

export default Modal