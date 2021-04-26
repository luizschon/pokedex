import styled from 'styled-components'

export const Curtain = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.5);
  backdrop-filer: blur(1px);
`

export const PopUp = styled.div`
  border-radius: 20px;
  height: 75%;
  width: 500px;
`