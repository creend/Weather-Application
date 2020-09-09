import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root{
    font-size:62.5%;
  }
  *,*::before,*::after{
    box-sizing:border-box;
    margin:0;
    padding:0;
  }
  
  body {
    overflow-x:hidden;
    font-size:1.6rem;
    background-image: linear-gradient(to bottom, hsl(236.9,61.1%,43.3%) 0%, hsl(202, 82%, 44%) 100%);
    background-repeat:no-repeat;
    background-attachment:fixed;
    font-family: Montserrat, "Open Sans", sans-serif;
  }
`

export default GlobalStyle;