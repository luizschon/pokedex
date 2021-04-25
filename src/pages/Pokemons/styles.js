import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

export const PageButton = styled.button`
  font-family: "Lucida Console", "Courier New", monospace;
  background-color: MediumSeaGreen;
  color: purple;
  padding: 8px;
  margin-left: 50px;
  margin-right: 50px;
`

export const PageButtonsDiv= styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`

export const Input = styled.input`
  width: 50px;
  text-align: center;
  font-size: 30px;
`