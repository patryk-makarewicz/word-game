import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
    font-size: 62.5%;
    font-family: 'Poppins', sans-serif;
}

body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    color: #242424;
    background-color: #ffffff;
}
`;

export default GlobalStyle;
