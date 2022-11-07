import CategoryMenu from "./CategoryMenu";
import earphonesImg from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import speakerImg from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import headphonesImg from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import {Menu} from "../../styles/sharedComponents";

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
