import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  justify-content: center
`

export const Span = styled.span`
  box-sizing: border-box;
  display: inline;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
  background-color: tomato;
  padding: 1% 7% 1% 7%;
  border-radius: 20px;
`

export const InfoPage = styled.div`
  font-family: "Lucida Console", "Courier New", monospace;
  background: linear-gradient(35deg, ${props => props.color1} 42%, ${props => props.color2} 42%);
  font-size: 25px;
  height: 30%;
  border-radius: 20px;
  margin-top: 50px;
  color: black;
`

export const Img = styled.img`
  height:150px;
`