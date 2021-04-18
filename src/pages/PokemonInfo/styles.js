import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Item = styled.div`
  display: flex;
  justify-content: center;
`

export const InfoPage = styled.div`
  font-family: "Lucida Console", "Courier New", monospace;
  font-size: 25px;
  padding: 50px;
  margin: 300px;
  margin-top: 50px;
  color: purple;
  background-color: #A5FC7A;
  border: solid green;
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
  display: flex;
  justify-content: center;
  margin-top: 40px;
`

export const Img = styled.img`
  height:150px;
`