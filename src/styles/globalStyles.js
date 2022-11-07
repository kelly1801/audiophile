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

h1, h2,h3,h4,h5,h6, span {
  text-transform: uppercase;
  margin: 0.5rem 0;
}
h1{
  font-weight: bold;
  font-size: 3.5rem;
  line-height: 58px;
  letter-spacing: 2px;
}
h2 {
  font-weight: bold;
  font-size: 2.5rem;
  line-height: 44px;
  letter-spacing: 1.5px;
}
h3 {
  font-weight: bold;
  font-size: 2.2rem;
  line-height: 36px;
  letter-spacing: 1.15px;
}
h4 {
  font-weight: bold;
  font-size: 1.75rem;
  line-height: 38px;
  letter-spacing: 2px;
}
  h5 {
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 33px;
    letter-spacing: 1.3px;
  }
  h6 {
    font-weight: bold;
    font-size: 1.1rem;
    line-height: 24px;
    letter-spacing: 1.3px;
  }
  p {
    font-size: 0.9rem;
    line-height: 25px;
    margin: 1rem 0;
    font-weight: 200;
  }
span {
  font-size: 0.8rem;
  letter-spacing: 10px;
  font-weight: 200;
  line-height: 19px;
}

.subtitle {
  font-size: 0.8rem;
  letter-spacing: 1px;
  line-height: 25px;
  font-weight: bold;
}
`