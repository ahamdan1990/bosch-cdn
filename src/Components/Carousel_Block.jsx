import React from "react";
import CarouselFadeSlick from './Carousel_Fade/Carousel_Fade_Slick';
import { CarouselContainer } from './Carousel_style';

const Carousel_Block = () => {
    return (
        <CarouselContainer>
            <CarouselFadeSlick></CarouselFadeSlick>
        </CarouselContainer>
    )
}

export default Carousel_Block;