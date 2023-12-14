import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface CardCarouselProps {
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  image6: string;
}

const CardCarousel: React.FC<CardCarouselProps> = ({ image1 , image2 , image3 , image4 , image5 , image6}) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 769 },
      items: 4,
      slidesToSlide: 1,
    },
    small: {
      breakpoint: { max:768 , min: 551 },
      items: 3,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };

  return (
    <Carousel
      swipeable
      draggable
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      arrows={false}
      pauseOnHover
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <div className="m-4">
        <Image src={image1} width={170} height={170} alt="sliderImage" />
      </div>

      <div className="m-4">
        <Image src={image2} width={170} height={170} alt="sliderImage" />
      </div>

      <div className="m-4">
        <Image src={image3} width={170} height={170} alt="sliderImage" />
      </div>

      <div className="m-4">
        <Image src={image4} width={170} height={170} alt="sliderImage" />
      </div>

      <div className="m-4">
        <Image src={image5} width={170} height={170} alt="sliderImage" />
      </div>

      <div className="m-4">
        <Image src={image6} width={170} height={170} alt="sliderImage" />
      </div>
    </Carousel>
  );
};

export default CardCarousel;
