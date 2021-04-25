import styled, { css } from 'styled-components'

export const Button = styled.button`
  display: inline-block;
  width: 12rem;

  border-radius: 5px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  border: 1px solid white;

  cursor: pointer;

  ${props => props.type === 'submit' ? css`
    background: #fa6555;
    color: white;
  ` : css`
    background: white;
    color: black;
  `}
`