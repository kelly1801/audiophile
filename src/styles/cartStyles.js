import styled from "styled-components";
export const CartContainer = styled.div`
  background-color: var(--light);

  padding: 2rem;
  border-radius: 0.5rem;
  position: absolute;
  top: 15%;
  right: 3%;
  z-index: 15;
`;

export const CartHeader = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 0.5rem;
  }
`;
export const CartProducts = styled.div`
  width: 100%;
  min-height: 200px;
  min-width: 200px;
  max-height: 250px;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    margin: 1rem;
    border-radius: 0.3rem;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
`;
export const CartFooter = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 0.5rem;
  }
`;

export const CartWrapper = styled.div`
  position: relative;
  color: var(--black);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CartItemContainer = styled.figure`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  align-items: center;

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  img {
    background-color: aqua;
  }
  span {
    font-size: 0.8rem;
    letter-spacing: normal;
    color: #8c959a;
    font-weight: 700;
  }
  figcaption {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 1rem;
    width: 3rem;
    h6 {
      font-size: 0.7rem;
      margin: 0;
    }
 
    
  }

  img {
    width: 3rem;
    border-radius: 0.5rem;
  }
`;
