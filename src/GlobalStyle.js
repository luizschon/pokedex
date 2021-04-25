import { createGlobalStyle, css } from 'styled-components'

const BarlowFont = css`
  @import url('https://fonts.googleapis.com/css2?family=Barlow:ital@1&display=swap');
`

export const GlobalStyle = createGlobalStyle`
  ${BarlowFont}
  body {
    font: 1rem 'Barlow', sans-serif;
    margin: 0px;
    background-color: white;
  }
`