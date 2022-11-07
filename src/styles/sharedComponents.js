import styled, { css } from "styled-components";

export const Button = styled.button`
  background-color: var(--primary);
  color: var(--white);
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  font-weight: bold;

  :hover {
    background-color: var(--primaryHover);
  }

  ${(props) =>
    props.buy &&
    css`
      background-color: transparent;
      color: var(--black);
      border: 2px solid var(--black);

      :hover {
        background-color: var(--black);
        color: var(--white);
      }
    `}

  ${(props) =>
    props.shop &&
    css`
      background: none;
      cursor: pointer;
      border: none;
      outline: none;
      margin: 0.5rem 0;
      color: var(--dark);
      display: flex;
      align-items: center;

      img {
        margin-left: 0.5rem;
        max-width: 10px;
      }
    `}
`;

export const Section = styled.section`
  background-color: var(--white);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    padding-top: 2rem;
  }

  @media (min-width: 1200px) {
    padding-right: 2rem;
  }
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem 0;
  width: 100%;

  @media (min-width: 768px) {
    width: calc(100% / 3);
    margin-left: 1rem;
  }
`;
export const Img = styled.img``;
export const Description = styled.figure`
  background-color: var(--lightGray);
  color: var(--black);
  width: 100%;
  padding: 3rem 2rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  ${Img} {
    width: 8rem;
    position: absolute;
    top: -30%;
  }
`;

export const Menu = styled.div`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem;
  position: absolute;
  top: 7%;
  left: 0;
  z-index: 6;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    top: 5%;
    border-radius: 0 0 0.5rem 0.5rem;
    padding-top: 2rem;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  width: 80%;

  h3 {
    margin: 1.5rem 0;
  }
  span {
    color: var(--primary);
    font-weight: bold;
    font-size: 2.2rem;
    line-height: 36px;
    letter-spacing: 1.15px;
  }
`;

export const Page = styled(Section)`
  flex-direction: column;
  img {
    border-radius: 0.5rem;
    width: 100%;
  }

  @media (min-width: 1200px) {
    flex-direction: row-reverse;
    ${TextWrapper} {
      width: 50%;
      text-align: left;
    }
  }
`;

export const PageFooter = styled.footer`
  background-color: var(--dark);
  padding: 0 2rem;
  width: 100%;
  color: var(--white);
  display: flex;

  justify-content: center;
`;
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  img {
    margin: 0 0.5rem;
    cursor: pointer;
  }
`;
export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  padding-bottom: 4rem;
  @media (min-width: 768px) {
    align-items: flex-start;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  width: 90%;

  @media (min-width: 768px) {
    justify-content: flex-start;
    text-align: left;
  }

  @media (min-width: 1200px) {
    width: 50%;

    p {
      max-width: 500px;
      margin: 0;
    }
  }
`;

export const BottomSection = styled(FooterSection)`
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    width: 100%;
  }
`;
export const FooterMenu = styled.menu`
  color: var(--white);
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
  
  }
  
  li {
    margin: 0.5rem;
    cursor: pointer;

    :hover {
      color: var(--primary);
    }
`;
/*
 * Header section starts
 * */

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 4rem;
  color: var(--white);
`;

export const Banner = styled.div`
  background-image: ${(props) => `url('${props.bg}')`};
  width: 100%;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (min-width: 768px) {
    background-image: ${(props) => `url('${props.tablet}')`};

    ${TextContainer} {
      max-width: 450px;
    }
  }
  @media (min-width: 1200px) {
    background-image: ${(props) => `url('${props.desktop}')`};
    justify-content: left;

    ${TextContainer} {
      text-align: left;
      align-items: flex-start;
    }
  }
`;

/*
 * Header section ends
 * */

/*
 * NavBar section starts
 * */
export const List = styled.menu`
  display: none;
  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
    li {
      margin-left: 0.5rem;
      cursor: pointer;

      :hover {
        color: var(--primary);
      }
    }
  }
`;
export const NavContainer = styled.div`
  background-color: var(--dark);
  color: var(--white);
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 4rem;

  border-bottom: 1px solid #979797;
`;
export const Icon = styled.figure`
  cursor: pointer;
`;
export const MenuMobile = styled.figure`
  cursor: pointer;

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  padding: 0;
  background-color: var(--dark);

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
  @media (min-width: 1200px) {
    padding: 0 4rem;
  }
`;

/*
 * NavBar section ends
 * */
