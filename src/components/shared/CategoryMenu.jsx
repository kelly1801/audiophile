import arrow from "../../assets/shared/desktop/icon-arrow-right.svg";
import { Category, Description, Button, Img } from "../../styles/sharedComponents";
import {useNavigate} from "react-router-dom";

const CategoryMenu = ({img, title}) => {
const navigate = useNavigate()

  function goToCategory(title) {

  navigate(`/${title}`)
  }

  return (
    <Category>
      <Description>
        <Img src={img} alt={title} />
        <h6>{title}</h6>

          <Button shop onClick={() => goToCategory(title.toLowerCase())}>
            SHOP
            <img src={arrow} alt="arrow" />
          </Button>


      </Description>
    </Category>
  );
};
export default CategoryMenu;

