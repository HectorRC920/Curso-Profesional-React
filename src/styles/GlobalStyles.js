import { createGlobalStyle } from 'styled-components'
const GlobalStyles = createGlobalStyle`
html{
  box-sizing: border-box;
  font-size: 10px;
  *, *:before, *:after {
  box-sizing: inherit
}

body {
  padding: 0; 
  margin: 0;
  font-size: 1.5rem;
  font-family: sans-serif;
}

h1, h2, h3, h4, h5, p {
  margin: 0;
}
ul {
    list-style: none;
  }
  body {
    background: #fefefe;
    height: 100vh;
    margin: 0 auto;
    max-width: 500px;
    overscroll-behavior: none;
    width: 100%;
  }
  #app {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
  }
a { 
  text-decoration: none;
  color: #393939
}
}`
export default GlobalStyles
