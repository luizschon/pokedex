import { AiOutlineArrowLeft } from "react-icons/ai";
import * as Styled from './styles'

const Modal = ({ children, closeModal }) => {
  return (
    <Styled.Curtain>
      <Styled.PopUp>
        <AiOutlineArrowLeft size="2rem" color="black" onClick={closeModal} />
        { children }
      </Styled.PopUp>
    </Styled.Curtain>
  )
}

export default Modal
