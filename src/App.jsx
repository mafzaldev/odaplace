import NavbarLogo from "./assets/odaplace.jpg";
import Notification from "./assets/notifications.svg";
import Caret from "./assets/keyboard_arrow_down.svg";
import Cart from "./assets/shopping_cart.svg";
import LocationPin from "./assets/place.svg";
import Search from "./assets/search.svg";
import Email from "./assets/email.svg";

function App() {
  return (
    <div className="flex flex-col p-4">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <img src={NavbarLogo} className="rounded-full w-12" />
          <p className="font-bold">Odaplace</p>
        </div>
        <div className="flex justify-between items-center border border-gray-200 w-2/4 h-10 p-2 rounded-full">
          <div className="flex items-center gap-2">
            <img src={LocationPin} className="w-5" />
            <p className="text-sm">New York</p>
            <img src={Caret} className="w-6" />
          </div>
          <input type="text" className="w-7/12 h-8 border-none" />
          <button
            type="submit"
            className="bg-[#FB6A00] text-white text-sm rounded-full w-24 h-8 border-none"
          >
            Search
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center">
            EN <img src={Caret} className="w-6" />
          </div>
          <div className="flex items-center gap-2">
            <img src={Cart} alt="" className="w-6" />
            <img src={Notification} alt="" className="w-6" />
            <img src={Email} alt="" className="w-6" />
          </div>
          <img
            src="https://i.pinimg.com/736x/99/07/a1/9907a1a7bcfb2f7372f536e072aea159.jpg"
            alt=""
            className="rounded-full w-8"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
