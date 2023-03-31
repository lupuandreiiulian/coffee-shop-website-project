import React, { useState, useEffect } from "react";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Slideshow = ({ interval }) => {
  const [index, setIndex] = useState(0);
  const image = [
    "https://images.pexels.com/photos/5220092/pexels-photo-5220092.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/302894/pexels-photo-302894.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === image.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);
    return () => clearInterval(timer);
  }, [interval, image.length]);

  useEffect(() => {
    const imageContainer = document.getElementById("image-container");
    if (imageContainer) {
      imageContainer.style.transition = "background-image 0.5s ease-in-out";
      imageContainer.style.backgroundImage = `url(${image[index]})`;
    }
  }, [index, image]);

  const prevSlide = () => {
    const isFirstSlide = index === 0;
    const newIndex = isFirstSlide ? image.length - 1 : index - 1;
    setIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = index === image.length - 1;
    const newIndex = isLastSlide ? 0 : index + 1;
    setIndex(newIndex);
  };

  return (
    <div className="h-[970px] w-screen m-auto relative flex justify-between items-center">
      <div
        id="image-container"
        className="max-w-full max-h-full w-full h-full bg-center bg-cover m-auto duration-500 object-cover"
      ></div>
      <ArrowBackIosNewIcon
        onClick={prevSlide}
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 cursor-pointer"
      />
      <ArrowForwardIosIcon
        onClick={nextSlide}
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 cursor-pointer"
      />
    </div>
  );
};

export default Slideshow;
