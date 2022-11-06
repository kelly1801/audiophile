import arrow from "../assets/shared/desktop/icon-arrow-right.svg";
import styled from "styled-components";
const CategoryMenu = ({img, title}) => {
  return (
    <Category>
      <Description>
        <Img src={img} alt="" />
        <h6>{title}</h6>
        <Btn className="">
          SHOP
          <img src={arrow} alt="" />
        </Btn>
      </Description>
    </Category>
  );
};
export default CategoryMenu;
const Img = styled.img`

`;
const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
margin: 4rem 0;
  
  @media (min-width: 865px){
    width: calc(100% / 3);
  }
`;
const Description = styled.figure`
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
const Btn = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;
  margin: 0.5rem 0;
  img {
    margin-left: 0.5rem;
  }
`;
