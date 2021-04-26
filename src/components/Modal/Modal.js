import { AiOutlineClose } from "react-icons/ai";

import * as Styled from './styles'
import {ColorByKind} from "../../utils/ColorByKind"

const Modal = ({ pokemon, children, closeModal }) => {
  return (
    <Styled.Curtain onClick={closeModal}>
      <Styled.PopUp >
        { children }
      </Styled.PopUp>
    </Styled.Curtain>
  )
}

export default Modal