import styled, { css } from "styled-components";
export const Picture = styled.picture``;

export const ProductContainer = styled.div`
  margin: 1rem 0;
  background-color: var(--primary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--white);
  border-radius: 0.5rem;
  padding: 2rem;
  img {
    width: 12rem;
    margin: 1rem 0;
  }

  ${(props) =>
    props.tiny &&
    css`
      background: white;
      color: black;
    `}
`;

export const Product = styled.section`
  background-color: var(--white);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
`;
export const Description = styled.div`
  background-color: var(--lightGray);
  color: var(--black);
  width: 100%;
  padding: 3rem 2rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h3 {
    margin: 2rem 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;
  margin: 1rem 0;
  img {
    width: 100%;
    border-radius: 0.5rem;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: absolute;
    top: 40%;
    left: 5%;
  }
`;
