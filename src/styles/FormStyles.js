import styled, { css } from "styled-components";

export const FormWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  background-color: var(--white);

  h2 {
    text-align: left;
    font-size: 1.75rem;
    padding: 0 2rem;
  }
`;
export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 765px) {
    flex-wrap: wrap;
    flex-direction: row;
    gap: 0.5rem;

    label {
      width: 49%;
    }
    ${(props) =>
      props.address &&
      css`
        label:first-child {
          width: 99%;
        }
      `}

    ${(props) =>
      props.methods &&
      css`
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
  
  h2 {
    text-align: left;
    font-size: 1.75rem;
    padding: 0 2rem;
  }
  ${(props) =>
    props.alert &&
    css`
      position: absolute;
      margin: 0 auto;
      left: 0;
      right: 0;
      text-align: center;
      justify-content: flex-start;
      max-width: 240px;
      border-radius: 0.5rem;
      z-index: 10;
      img {
        width: 2rem;
      }
      
      @media(min-width: 1200px) {
        max-width: 540px;
      }
    `}
`;
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

  ${(props) =>
    props.radio &&
    css`
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

  ${(props) =>
    props.grandTotal &&
    css`
      h6 {
        color: var(--primary);
      }
    `}
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  padding: 1rem;
  background-color: var(--white);
`;
export const CheckoutContainer = styled.section`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  h6 {
    font-size: 1rem;
  }
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
    max-width: 730px;
  }
  ${CheckoutSection}{
    border-radius: 0.5rem;
    max-width: 350px;
    align-self: flex-start;
    margin-top: -2px;
    
  }
},`;

export const Items = styled.div`
background-color: var(--lightGray);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
  hr {
    background-color: var(--lightGray);

    width: 90%;
    height: 1px;
  }

  span {
    
    font-size: 0.7rem;
    letter-spacing: normal;
    color: #8c959a;
    font-weight: 700;
    text-align: left;
  }
`;
export const Total = styled.div`
  background-color: var(--dark);
  color: var(--lightGray);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 0.7rem;
  padding: 1rem;
  h6 {
    color: var(--white);
    font-size: 0.7rem;
  }
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  border-radius: 1rem;
  margin: 2rem 0;
  
  @media (min-width: 1200px) {
    flex-direction: row;
    
    ${Items} {
      width: 60%;
    }
    ${Total} {
      width: 40%;
    }
  }
`;


