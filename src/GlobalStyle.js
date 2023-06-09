import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: lightgrey;
    font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
  }
  img {
    display: block;
    max-width: 100%;
  }
  ul {
    margin: 0;
    padding-left: 0;
    list-style: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  a {
    color: inherit;
  }
`;

export default GlobalStyle;