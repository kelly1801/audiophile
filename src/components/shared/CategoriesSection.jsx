import CategoryMenu from "./CategoryMenu";
import headphonesImg from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakerImg from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import {Section} from "../../styles/sharedComponents";
const CategoriesSection = () => {
  return (
    <Section>
      <CategoryMenu img={headphonesImg} title="HEADPHONES" />
      <CategoryMenu img={speakerImg} title="SPEAKERS" />
      <CategoryMenu img={earphonesImg} title="EARPHONES" />
    </Section>
  );
};

export default CategoriesSection;


