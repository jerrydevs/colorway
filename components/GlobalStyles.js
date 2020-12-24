import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

export default createGlobalStyle`
  ${styledNormalize}
  html {
    box-sizing: border-box;
    font-size: 8px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    padding: 0;
    font-size: 2rem;
    line-height: 2;
    background: #1D1E1F;
    font-family: 'Montserrat', sans-serif;
    text-size-adjust: 100%;
  }
  * {
      transition: all 0.2s linear;
      transition-property: background, background-color, border-color, background-image;
  }
  body::-webkit-scrollbar {
    width: 1em;
  }
  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  body::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
`
