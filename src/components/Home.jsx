import React from "react";
import Carousel from "./Carousel";
import Slideshow from "./Slideshow";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const icon = L.icon({
  iconUrl: "marker-icon.png",
  iconSize: [35, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const position = [48.8566, 2.3522];

const Home = ({ images }) => {
  const items = [
    {
      name: "Espresso",
      description: "A single shot of espresso",
      price: 2.49,
      image:
        "https://images.pexels.com/photos/9050518/pexels-photo-9050518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=550&dpr=1",
    },
    {
      name: "Double Espresso",
      description: "Two shots of espresso",
      price: 3.49,
      image:
        "https://images.pexels.com/photos/302904/pexels-photo-302904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=550&dpr=1",
    },
    {
      name: "Americano",
      description: "Espresso shots topped with hot water",
      price: 3.99,
      image:
        "https://images.pexels.com/photos/11247284/pexels-photo-11247284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=550&dpr=1",
    },
    {
      name: "Latte",
      description: "Espresso with steamed milk and a small layer of foam",
      price: 4.49,
      image:
        "https://images.pexels.com/photos/2318005/pexels-photo-2318005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=550&dpr=1",
    },
    {
      name: "Cappuccino",
      description: "Espresso with equal parts steamed milk and foam",
      price: 4.49,
      image:
        "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=550&dpr=1",
    },
    {
      name: "Flat White",
      description: "Espresso with steamed milk and a thin layer of microfoam",
      price: 4.99,
      image:
        "https://images.pexels.com/photos/7810107/pexels-photo-7810107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=550&dpr=1",
    },
    {
      name: "Macchiato",
      description: "Espresso with a small amount of steamed milk",
      price: 3.99,
      image:
        "https://images.pexels.com/photos/8284715/pexels-photo-8284715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=550&dpr=1",
    },
    {
      name: "Mocha",
      description: "Espresso with chocolate and steamed milk",
      price: 4.99,
      image:
        "https://images.pexels.com/photos/1006297/pexels-photo-1006297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=550&dpr=1",
    },
    {
      name: "Breve",
      description: "Espresso with half and half instead of milk",
      price: 4.99,
      image:
        "https://images.pexels.com/photos/15951103/pexels-photo-15951103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=550&dpr=1",
    },
    {
      name: "Affogato",
      description:
        "A shot of espresso poured over a scoop of vanilla ice cream",
      price: 5.49,
      image:
        "https://images.pexels.com/photos/6126245/pexels-photo-6126245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=550&dpr=1",
    },
    {
      name: "Iced Coffee",
      description: "Chilled coffee served over ice",
      price: 3.99,
      image:
        "https://images.pexels.com/photos/2615323/pexels-photo-2615323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=550&dpr=1",
    },
    {
      name: "Nitro Cold Brew",
      description:
        "Cold brew coffee infused with nitrogen for a creamy texture",
      price: 5.49,
      image:
        "https://images.pexels.com/photos/5947094/pexels-photo-5947094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=550&dpr=1",
    },
  ];

  return (
    <div>
      <Slideshow
        images={images}
        interval={8000}
        className="absolute z-0 h-80 w-screen transform transition-all duration-500 translate-x-0"
      />
      <div id="menu"></div>
      <br></br>
      <br></br>
      <h1 className="font-[Montserrat] text-center sm:text-6xl md:text-7xl lg:text-9xl">
        Menu
      </h1>
      <br></br>
      <br></br>
      <Carousel items={items} />
      <br></br>
      <br></br>
      <div className="flex flex-col md:flex-row">
        <div className="bg-[#9B2915] md:h-[600px] sm:h-[300px] md:w-6/12 sm:w-screen flex justify-start items-center font-[Acme] text-[#FFF] text-2xl p-8">
          <div>
            <p>
              Awaken your senses with our signature espresso blend, expertly
              crafted with notes of chocolate and citrus. Savor every sip as the
              bold flavors dance on your tongue.
            </p>
          </div>
        </div>
        <img
          className="md:h-[600px] md:w-6/12 sm:w-screen sm:h-[300px]"
          src="https://images.pexels.com/photos/323503/pexels-photo-323503.jpeg?auto=compress&cs=tinysrgb&w=1600"
        ></img>
      </div>
      <div className="flex flex-col-reverse md:flex-row">
        <img
          className="md:h-[600px] md:w-6/12 sm:w-screen sm:h-[300px]"
          src="https://images.pexels.com/photos/331107/pexels-photo-331107.jpeg?auto=compress&cs=tinysrgb&w=1600"
        ></img>
        <div className="bg-[#D2691E] md:h-[600px] sm:h-[300px] md:w-6/12 sm:w-screen flex justify-start items-center font-[Acme] text-[#FFF] text-2xl p-8">
          <div>
            <p>
              Indulge in the rich, velvety texture of our handcrafted hot
              chocolate. Made with only the finest ingredients, our decadent
              treat will warm you from the inside out.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="bg-[#9B2915] md:h-[600px] sm:h-[300px] md:w-6/12 sm:w-screen flex justify-start items-center font-[Acme] text-[#FFF] text-2xl p-8">
          <div>
            <p>
              Treat yourself to a little sweetness with our selection of
              artisanal pastries and baked goods. Made fresh daily, our treats
              are the perfect complement to your favorite coffee beverage.
            </p>
          </div>
        </div>
        <img
          className="md:h-[600px] md:w-6/12 sm:w-screen sm:h-[300px]"
          src="https://images.pexels.com/photos/2067431/pexels-photo-2067431.jpeg?auto=compress&cs=tinysrgb&w=1600"
        ></img>
      </div>
      <MapContainer center={position} zoom={10} id="findus">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={icon}>
          <Popup>Cafe Bar Location</Popup>
        </Marker>
      </MapContainer>
      <div
        className="bg-[#2E2D88] w-screen h-[300px] flex justify-center items-center space-x-6 flex-col bg-cover bg-center "
        style={{ backgroundImage: `url("/Meteor.svg")` }}
      >
        <div className="flex items-center space-x-6 gap-5">
          <FacebookIcon
            className="transform transition-all duration-300 hover:-translate-y-1 scale-[2] hover:text-[#D2691E]"
            onClick={() => alert("This should send you to the Facebook page")}
          />
          <a href="https://www.instagram.com/insta.iulian03/" target="_blank">
            <InstagramIcon className="transition-all scale-[2] hover:text-[#D2691E] hover:-translate-y-1" />
          </a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
            <YouTubeIcon className="transition-all scale-[2] hover:text-[#D2691E] hover:-translate-y-1" />
          </a>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="flex items-center space-x-6">
          <h1 className="font-[Montserrat] font-bold">Policy</h1>
          <h1 className="font-[Montserrat] font-bold">Cookies</h1>
          <h1 className="font-[Montserrat] font-bold">
            The Coffee Shop doesn't actually exist, it's only a project
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
