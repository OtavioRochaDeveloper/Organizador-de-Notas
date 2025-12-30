import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;
    letter-spacing: 0.5px;
  }

  a {
    text-decoration: none;
    letter-spacing: 0.5px;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  input::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    letter-spacing: 0.5px;
  }

  textarea::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    letter-spacing: 0.5px;
  }

  section {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    letter-spacing: 0.5px;
    margin: 0;
    padding: 0;
  }

  ul, ol, li {
    list-style: none;
  }
`