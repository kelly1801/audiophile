import { Picture } from "../../styles/categoryStyles";
import { Section } from "../../styles/sharedComponents";
const GallerySection = ({ galleryImages }) => {
  const { first, second, third } = galleryImages;

  return (
    <Section gallery>
        <div>
            <Picture>
                <source srcSet={`.${first.mobile}`} media="(max-width: 568px)" />
                <source srcSet={`.${first.tablet}`} media="(max-width: 768px)" />
                <img src={`.${first.desktop}`} alt="" />
            </Picture>
            <Picture>
                <source srcSet={`.${second.mobile}`} media="(max-width: 568px)" />
                <source srcSet={`.${second.tablet}`} media="(max-width: 768px)" />
                <img src={`.${second.desktop}`} alt="" />
            </Picture>
        </div>

      <Picture>
        <source srcSet={`.${third.mobile}`} media="(max-width: 568px)" />
        <source srcSet={`.${third.tablet}`} media="(max-width: 768px)" />
        <img src={`.${third.desktop}`} alt="" />
      </Picture>
    </Section>
  );
};
export default GallerySection;
