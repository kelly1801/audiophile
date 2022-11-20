
import logo from "../../assets/shared/desktop/logo.svg";
import fbIcon from "../../assets/shared/desktop/icon-facebook.svg";
import twIcon from "../../assets/shared/desktop/icon-twitter.svg";
import instIcon from "../../assets/shared/desktop/icon-instagram.svg";
import {PageFooter, FooterContainer, FooterSection, FooterMenu, BottomSection, IconContainer} from "../../styles/sharedComponents";
import {useNavigate} from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate()
  return (
    <PageFooter>
      <FooterContainer>
        <FooterSection>
          <img src={logo} alt="" />
        </FooterSection>

        <FooterMenu>
          <li onClick={() => navigate('/')}>HOME</li>
          <li onClick={() => navigate('/headphones')}>HEADPHONES</li>
          <li onClick={() => navigate('/speakers')}>SPEAKERS</li>
          <li onClick={() => navigate('/earphones')}>EARPHONES</li>
        </FooterMenu>

        <FooterSection>
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
        </FooterSection>

        <BottomSection>
          <div>
            <p>Copyright 2021. All Rights Reserved</p>
          </div>

          <IconContainer>
            <figure>
              <img src={fbIcon} alt="" />
            </figure>
            <figure>
              <img src={twIcon} alt="" />
            </figure>
            <figure>
              {" "}
              <img src={instIcon} alt="" />
            </figure>
          </IconContainer>
        </BottomSection>
      </FooterContainer>
    </PageFooter>
  );
};

export default Footer;

