import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  margin: 10px 0;
  padding: 2px 20px;
  border-radius: 10px;
  background-color: white;
  justify-content: space-evenly;
`

export const Span = styled.span`
  background-color: #fa6555;
  padding: 1% 7% 1% 7%;
  margin: 0 15px;
  border-radius: 20px;
`

export const InfoPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: "Lucida Console", "Courier New", monospace;
  background: linear-gradient(40deg, ${props => props.color1} 50%, ${props => props.color2} 50%);
  width: 500px;
  font-size: 25px;
  border-radius: 20px;
  color: black;
  padding-top: 50px;
`

export const KindContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`

export const Img = styled.img`
  width: 150px;
  height: 150px;
  filter: drop-shadow(3px 0 0 white) drop-shadow(0 3px 0 white)
          drop-shadow(-3px 0 0 white) drop-shadow(0 -3px 0 white);
`