import { AiOutlineClose } from "react-icons/ai";

import * as Styled from './styles'
import {ColorByKind} from "../../utils/ColorByKind"

const Modal = ({ pokemon, children, closeModal }) => {
  return (
    <Styled.Curtain>
      <Styled.PopUp style={pokemon ? { backgroundColor: ColorByKind(pokemon.kind) } : {}}>
        <AiOutlineClose size="2rem" color="black" cursor="pointer" style={{ marginLeft: 20, marginTop: 20 }} onClick={closeModal} />
        { children }
      </Styled.PopUp>
    </Styled.Curtain>
  )
}

export default Modal