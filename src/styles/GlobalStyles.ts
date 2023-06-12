import { createGlobalStyle, css } from "styled-components";

export const FlexCSS = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default createGlobalStyle`
  :root{
    --primary: #1ED760;
    --secondary: #312144;
    --white: #fff;
    --black: #000;
    --dark-100: #3A3A3A;
    --dark-200: #282828;
    --dark-300: #1D1D1D;
    --gray: #353535;

    --xl: 4rem;
    --l: 3rem;
    --m: 2rem;
    --sm: 1.8rem;
    --xsm: 1.6rem;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  html{
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
  }

  section{
    width: 100%;
    height: 100vh;
    padding: 3rem 6rem;
    background-color: var(--dark-300);
  }
`;
