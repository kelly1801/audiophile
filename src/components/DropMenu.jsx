import styled from "styled-components";
import CategoryMenu from "./CategoryMenu";
import earphonesImg from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import speakerImg from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import headphonesImg from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
const DropMenu = () => {
  return (
    <Menu>
      <CategoryMenu img={headphonesImg} title="HEADPHONES" />
      <CategoryMenu img={speakerImg} title="SPEAKERS" />
      <CategoryMenu img={earphonesImg} title="EARPHONES" />
    </Menu>
  );
};
export default DropMenu;
const Menu = styled.div`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 7.2%;
  left: 0;

  @media (min-width: 768px){
    flex-direction: row;
    justify-content: space-around;
    top: 5%;
    border-radius: 0 0  0.5rem 0.5rem;
    padding-top: 2rem;
  }

  @media (min-width: 1200px){
  display: none;
  }
`;
