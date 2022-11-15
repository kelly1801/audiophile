import styled from "styled-components";
export const PageContainer = styled.main`
  text-align: center;
  span {
    color: var(--primary);
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
  align-items: center;
  justify-content: center;
  padding: 2rem;
  p {
    margin: 2rem 0;
  }
`;
export const ProductsSection = styled.article`
  @media (min-width: 1200px) {
    display: flex;
    text-align: left;
    justify-content: space-around;

    padding: 2rem;
    :nth-child(odd) {
      flex-direction: row-reverse;
    }

    ${Picture} {
      max-width: 500px;
    }
    ${TextWrapper} {
      align-items: flex-start;

      max-width: 500px;
    }
  }
`;
