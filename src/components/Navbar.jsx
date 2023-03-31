import React from "react";

const Navbar = () => {
  return (
    <div
      className="fixed bg-[#754F44] w-screen h-20 flex justify-evenly items-center z-10 bg-cover bg-center"
      style={{ backgroundImage: `url("/Contour Line.svg")` }}
    >
      <a href="#menu" className="scroll-smooth">
        <h3 className="font-[Montserrat] text-[#F5DEB3] md:text-[20px] sm:text-[15px] font-bold">
          Menu
        </h3>
      </a>
      <h3 className="font-[Montserrat] text-[#F5DEB3] md:text-[32px] sm:text-[25px] font-bold">
        Steamy Beans
      </h3>
      <a href="#findus">
        <h3 className="font-[Montserrat] text-[#F5DEB3] md:text-[20px] sm:text-[15px] font-bold">
          Find Us
        </h3>
      </a>
    </div>
  );
};

export default Navbar;
