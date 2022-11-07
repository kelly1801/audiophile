import arrow from "../../assets/shared/desktop/icon-arrow-right.svg";
import { Category, Description, Button, Img } from "../../styles/sharedComponents";
const CategoryMenu = ({img, title}) => {
  return (
    <Category>
      <Description>
        <Img src={img} alt={title} />
        <h6>{title}</h6>
        <Button shop>
          SHOP
          <img src={arrow} alt="arrow" />
        </Button>
      </Description>
    </Category>
  );
};
export default CategoryMenu;

