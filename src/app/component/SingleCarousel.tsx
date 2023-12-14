import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

const SingleCarousel = () => {
  interface CarouselItemProps {
    imgSrc: string;
    text: string;
    subtext: string;
  }

  const CarouselItem: React.FC<CarouselItemProps> = ({
    imgSrc,
    text,
    subtext,
  }) => {
    return (
      <div className="carousel-item relative">
        <img src={imgSrc} className="w-full" alt="Carousel Item" />
        <div className="overlay"></div>

        <div className="overlay-text text-center absolute lg:w-auto w-full text-white md:p-0 px-7">
          <h1
            className="md:text-5xl  text-xl font-black  mb-3"
          >
            {text}
          </h1>
          <p className="md:text-xl text-md  font-semibold">{subtext}</p>
        </div>
      </div>
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        {/* <div>
          <CarouselItem
            imgSrc="/banner1.jpg"
            text="We provide to customer complete value in terms of service, quality and better relationship"
            subtext="We follow a dedicated and experienced  developer team system where our team provide a better Solution according your requirement."
          />
        </div>

        <div>
          <CarouselItem
            imgSrc="/banner2.jpg"
            text="Digital and interactive marketing that drives business"
            subtext="We convert the latest digital technology into competitive tools to give your business the critical advantage needed in the digital space. From website design to search engine optimization to digital advertising we give your brand the tech-edge to compete and win."
          />
        </div> */}

        <div>
          <CarouselItem
            imgSrc="/banner3.jpg"          
            text="Building Secure Technologies For A Connected World"
            subtext="Protecting and creting the new world with cybersafe development and new technologies."
          />
        </div>
      </Slider>
    </div>
  );
};

export default SingleCarousel;