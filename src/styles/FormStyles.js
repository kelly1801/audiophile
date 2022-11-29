import styled, { css } from "styled-components";

export const FormWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
background-color: var(--white);
  
h2{
  text-align: left;
  font-size: 1.75rem;
  padding: 0 2rem;
}
`;
export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  @media(min-width: 765px) {
    
    flex-wrap: wrap;
    flex-direction: row;
    gap: 0.5rem;
   
    label {
     width: 49%;
    }
    ${props => props.address && css`

      label:first-child {
        width: 99%;
      }
  `}

    ${props => props.methods && css`
     
div {
  
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
}
  `}
  }
  
`;
export const CheckoutSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  padding: 1rem;
  width: 100%;
  background-color: var(--white);
  h2{
    text-align: left;
    font-size: 1.75rem;
    padding: 0 2rem;
  }
`
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 0.7rem;
  line-height: 1rem;
  margin: 0.2rem 0;
 
  input {
    width: 100%;
    background: none;
    border: 2px solid var(--lightGray);
    padding: 0.5rem;
    border-radius: 0.5rem;
    outline-color: var(--primary);

    :hover {
      border-color: var(--primary);
    }
  }

  ${props => props.radio && css`
    border: 2px solid var(--lightGray);
    padding: 0.5rem;
    border-radius: 0.5rem;
    flex-direction: row;
    align-items: center;
    width: 100%;
    outline-color: var(--primary);
    margin: 0.5rem 0;

    :hover {
      border-color: var(--primary);
    }
    input {
      width: 10%;
      accent-color: var(--primary);
    }
  `}
`;
export const Heading = styled.h4`
  color: var(--primary);
  font-size: 0.8rem;
  text-align: left;
`;
export const TotalItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  span {
    font-size: 0.9rem;
    letter-spacing: normal;
    color: #8c959a;
    font-weight: 700;
    text-align: left;
  }
`
export const Container = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  padding: 1rem;
  background-color: var(--white);
  
`

export const CheckoutContainer = styled.section`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
@media(min-width: 1200px) {
  flex-direction: row;
  background-color: var(--lightGray);
  position: relative;
  padding: 4rem 8rem;
  gap: 1rem;
  
  button:first-child{
  
    position: absolute;
    left: 6rem;
    top: 0;
  }
  
  ${FormWrapper} {
    border-radius: 0.5rem;
    padding: 2rem;
  }
  ${CheckoutSection}{
    border-radius: 0.5rem;
    max-width: 350px;
    align-self: flex-start;
    margin-top: -2px;
    
  }
},`
