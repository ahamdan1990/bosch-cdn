import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselImage } from "./Carousel_Fade_Slick_style";
import "./Carousel_Fade_Slick.css";

export default class CarouselFadeSlick extends Component {
    render() {
      const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
      };
      return (
        <div>
          <Slider {...settings}>
            <div>
                <CarouselImage src={"./carousel-cdn-1.jpg"}/>
            </div>
            <div>
                <CarouselImage src={"./carousel-cdn-2.jpg"} />
            </div>
            <div>
                <CarouselImage src={"./carousel-cdn-3.jpg"} />
            </div>
          </Slider>
        </div>
      );
    }
  }