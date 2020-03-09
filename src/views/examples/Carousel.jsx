import React from 'react';
import Slider from 'react-slick';
/**
 * CSS para o carousel
 */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TIMING = 6000;
const baseSettings = {
  infinite: true,
  autoplay: true,
  speed: TIMING,
  autoplaySpeed: TIMING,
  slidesToShow: 1,
  slidesToScroll: 1
};

export const Carousel = ({
  children,
  settings = {}
}) => (
  <Slider {...Object.assign(baseSettings, settings)}>
    { children }
  </Slider>
);
