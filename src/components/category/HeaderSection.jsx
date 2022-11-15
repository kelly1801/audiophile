import {TopSection, Picture} from "../../styles/categoryStyles";
import React from "react";
export const HeaderSection = ({mobileImg, tabletImg, desktopImg}) => {
    return (
        <TopSection>
            <Picture>
                <source srcSet={mobileImg} media="(max-width: 568px)" />
                <source srcSet={tabletImg} media="(max-width: 865px)" />
                <img src={desktopImg} alt="category" />
            </Picture>

        </TopSection>
    )
}