import React from "react";
import NavbarLogo from "../assets/odaplace.jpg";
import Notification from "../assets/notifications.svg";
import Caret from "../assets/keyboard_arrow_down.svg";
import Cart from "../assets/shopping_cart.svg";
import LocationPin from "../assets/place.svg";
import Email from "../assets/email.svg";
import Flag from "../assets/flag.png";
import Search from "../assets/search.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between my-1">
      <a href="#" className="inline-block">
        <img src={NavbarLogo} className="inline-block rounded-full w-10 mr-2" />
        <p className="font-bold inline-block">Odaplace</p>
      </a>
      <div className="flex justify-between items-center border border-gray-200 w-2/4 h-10 p-2 rounded-full">
        <div className="inline-block">
          <img src={LocationPin} className="w-5 inline-block mr-2" />
          <p className="text-sm inline-block mr-2">New York</p>
          <img src={Caret} className="w-6 inline-block" />
        </div>
        <input type="text" className="w-7/12 h-8 border-none" />
        <button
          type="submit"
          className="bg-[#FB6A00] text-white text-sm rounded-full w-24 h-8 border-none"
        >
          <img src={Search} className="inline-block" />
          <span>Search</span>
        </button>
      </div>
      <div className="flex items-center gap-4">
        <span>
          <img src={Flag} className="w-5 h-4 inline-block rounded-full mr-2" />
          <span className="inline-block text-sm">EN</span>
          <img src={Caret} className="w-5 inline-block" />
        </span>
        <span>
          <img src={Cart} className="w-5 inline-block mr-2" />
          <img src={Notification} className="w-5 inline-block mr-2" />
          <img src={Email} className="w-5 inline-block" />
        </span>
        <img
          src="https://i.pinimg.com/originals/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg"
          className="rounded-full w-8 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
