import styled, {css} from 'styled-components'

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(35deg, ${props => props.color1} 42%, ${props => props.color2} 42%);
  width: 250px;
  height: 250px;
  margin: 20px 20px;
  border-radius: 20px;
  border: ${ props => props.favorite ? '6px solid yellow' : '2px solid gray' };

  transform: translate(0%);
  transition: 0.2s ease-out;

  
`

export const Img = styled.img`
  width: 150px;
  height: 150px;
  filter: drop-shadow(3px 0 0 white) drop-shadow(0 3px 0 white)
          drop-shadow(-3px 0 0 white) drop-shadow(0 -3px 0 white);
  cursor: pointer;

  transform: translate(0%);
  transition: 0.3s ease-out;

  ${props => props.animated && css`
    &:hover {
      transform: translate(0%, -10%);
      transition: 0.5s ease-out;
    }
  `}
`

export const NameContainer = styled.div`
  display: flex;
  justify-content: ${ props => props.login ? 'space-between' : 'center'};
  align-items: center;
  width: 95%;
  height: 30%;
  margin-top: 7px;
  background-color: white;
  border-radius: 20px;
`

export const Name = styled.h2`
  margin-left: ${ props => props.login ? '15px' : '0'};
  font-style: italic;
  color: gray;
`

export const FavButton = styled.button`
  margin-right: 10px;
  cursor: pointer;
  border: none;
  background: none;
`