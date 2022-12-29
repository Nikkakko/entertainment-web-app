import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}
  body {
    background: #10141E;
    font-family: 'Outfit', sans-serif;
    font-style: normal;
    color:#ffff;
    overflow-x: hidden;
  }

  a{
    text-decoration: none;
    color:inherit;
  }

  
`;
