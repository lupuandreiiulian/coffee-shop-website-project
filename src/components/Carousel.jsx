import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
          centerMode: true,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div key={index} className="md:w-5/6 sm:pr-5 ">
          <img
            className="rounded-lg max-w-full h-auto"
            src={item.image}
            alt={item.name}
          />
          <h3 className="font-[Acme] text-2xl">{item.name}</h3>
          <p className="font-[Montserrat]">{item.description}</p>
          <p className="font-[Montserrat] font-bold">${item.price}</p>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
