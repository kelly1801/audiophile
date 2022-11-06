import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: 'Manrope', sans-serif;
  }

:root {
  --primary: #D87D4A;
  --dark: #101010;
  --lightGray: #F1F1F1;
  --white: #FAFAFA;
  --primaryHover: #FBAF85;
  --light: #FFFFFF;
  --black:#000000;
}

h1, h2,h3,h4,h5,h6 {
  text-transform: uppercase;
}
h1{
  font-weight: bold;
  font-size: 3.5rem;
  line-height: 3.6rem;
  letter-spacing: 2px;
}
h2 {
  font-weight: bold;
  font-size: 2.5rem;
  line-height: 2.7rem;
  letter-spacing: 1.5px;
}
h3 {
  font-weight: bold;
  font-size: 2.2rem;
  line-height: 2.1rem;
  letter-spacing: 1.15px;
}
h4 {
  font-weight: bold;
  font-size: 1.75rem;
  line-height: 2.3rem;
  letter-spacing: 2px;
}
  h5 {
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2rem;
    letter-spacing: 1.3px;
  }
  h6 {
    font-weight: bold;
    font-size: 1.1rem;
    line-height: 1.5rem;
    letter-spacing: 1.3px;
  }
`