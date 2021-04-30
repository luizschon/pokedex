import { AiOutlineClose } from "react-icons/ai";
import * as Styled from './styles'

const Modal = ({ children, closeModal }) => {
  return (
    <Styled.Curtain>
      <Styled.PopUp >
        <AiOutlineClose size="30px" color="black" cursor="pointer" style={{ marginLeft: 20, marginTop: 20, position: "absolute" }} onClick={closeModal} />
        { children }
      </Styled.PopUp>
    </Styled.Curtain>
  )
}

export default Modal