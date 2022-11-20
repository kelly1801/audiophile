import styled, { css } from "styled-components";
export const PageContainer = styled.main`
  text-align: center;
  position: relative;

  span {
    color: var(--primary);
  }
`;
export const ContentWrapper = styled.div`
  padding: 1rem;
  position: relative;

  @media (min-width: 1200px) {
    padding: 2rem;
  }
`;
export const Header = styled.header`
  background-color: var(--dark);
  color: var(--white);
  text-align: center;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 800px) {
    height: 230px;
  }
  @media (min-width: 1200px) {
    height: 300px;
  }
`;

export const TopSection = styled.section``;
export const Picture = styled.picture`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem;
  text-align: left;

  p {
    margin: 2rem 0;
  }

  span {
    margin: 1rem 0;
    color: var(--primary);
  }

  ${(props) =>
    props.box &&
    css`
    
      p {
        margin: 0;
      }

      span {
        margin: 0;
      }
    `}
`;

export const SectionDivider = styled.div``;
export const ProductsSection = styled.article`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 ${SectionDivider} {
   width: 100%;
 }
   
 }



  @media (min-width: 1200px) {
    display: flex;
    text-align: left;
    justify-content: space-between;
  
 
 ${SectionDivider} {
   display: flex;
   align-items: center;

   ${Picture} {
 
     max-width: 600px;
  
     img {
       width: 100%;
     }
   }
   ${TextWrapper} {
     max-width: none;
     width: 50%;
   
 
   }
 }
   
    ${(props) =>
      props.product &&
      css`
        flex-direction: row;
      `}

    

    :nth-child(even) {
      flex-direction: row-reverse;
    }

   
`;
export const Quantity = styled.div`
  background-color: var(--lightGray);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  width: 3rem;
border-radius: 0.2rem;
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  
  
    :nth-child(odd) {
      cursor: pointer;
    }
  }
`;
export const GroupButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
`;
export const IncludedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  span {
    display: flex;
    font-weight: bolder;
    letter-spacing: 0;
  }
`;
