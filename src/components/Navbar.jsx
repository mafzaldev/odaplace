import React from "react";
import NavbarLogo from "../assets/odaplace.jpg";
import Notification from "../assets/notifications.svg";
import Caret from "../assets/keyboard_arrow_down.svg";
import Cart from "../assets/shopping_cart.svg";
import LocationPin from "../assets/place.svg";
import Email from "../assets/email.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between my-2">
      <a href="#" className="flex items-center gap-2 ">
        <img src={NavbarLogo} className="rounded-full w-10" />
        <p className="font-bold">Odaplace</p>
      </a>
      <div className="flex justify-between items-center border border-gray-200 w-2/4 h-10 p-2 rounded-full">
        <div className="flex items-center gap-2">
          <img src={LocationPin} className="w-5" />
          <p className="text-sm">New York</p>
          <img src={Caret} className="w-5" />
        </div>
        <input type="text" className="w-7/12 h-8 border-none" />
        <button
          type="submit"
          className="bg-[#FB6A00] text-white text-sm rounded-full w-24 h-8 border-none"
        >
          Search
        </button>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center text-sm">
          EN <img src={Caret} className="w-5" />
        </div>
        <div className="flex items-center gap-3">
          <img src={Cart} alt="" className="w-5" />
          <img src={Notification} alt="" className="w-5" />
          <img src={Email} alt="" className="w-5" />
        </div>
        <img
          src="https://i.pinimg.com/originals/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg"
          alt=""
          className="rounded-full w-8"
        />
      </div>
    </div>
  );
};

export default Navbar;
