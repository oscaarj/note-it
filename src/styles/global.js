import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @media screen and (-webkit-min-device-pixel-ratio: 2), screen and (min-resolution: 2dppx) {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: 'IBM Plex Mono', monospace;
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
  }

  *, 
  *:before, 
  *:after {
    box-sizing: inherit;
    font-family: inherit;
  }
`

export default GlobalStyle
