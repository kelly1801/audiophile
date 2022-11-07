import bgImg from "../../assets/home/desktop/image-hero.jpg";
import mobileImg from "../../assets/home/mobile/image-header.jpg";
import tabletImg from "../../assets/home/tablet/image-header.jpg";
import { Button, TextContainer, Banner } from "../../styles/sharedComponents";

const Header = () => {
  return (
    <Banner bg={mobileImg} tablet={tabletImg} desktop={bgImg}>
      <TextContainer>
        <span>NEW PRODUCT</span>
        <h3>XX99 Mark II HeadphoneS</h3>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button>SEE PRODUCT</Button>
      </TextContainer>
    </Banner>
  );
};

export default Header;
