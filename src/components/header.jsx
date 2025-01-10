import HeaderLogo from "./headerLogo";
import NavMenu from "./navMenu";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" mt-3 relative ">
      <div className="relative flex mx-0.5 justify-between items-center font-raleway text-darkgray bg-backgroundcolo rounded-full px-7 py-5 shadow-insideshadow md:mx-5 md:px-5 lg:px-9 lg:py-6 lg:mx-20">
        <HeaderLogo />
        {isOpen && (
          <div className=" overflow-hidden " id="menu">
            <div class="animate-swipein flex flex-col space-y-1.5  text-lg items-center md:hidden">
              <NavMenu title="Home" />
              <NavMenu title="Products" href="#products" />
              <NavMenu title="About Us" href="#about" />
              <NavMenu title="Contact Us" href="#contact" />
            </div>
          </div>
        )}

        <div class=" hidden text-lg items-center md:space-x-2 md:flex lg:space-x-6">
          <a
            href=""
            class="px-3.5 py-3 shadow-buttonshadow rounded-full hover:shadow-insideshadow hover:text-brightgray"
          >
            Home
          </a>
          <NavMenu title="Products" href="#products" />
          <NavMenu title="About Us" href="#about" />
          <NavMenu title="Contact Us" href="#contact" />
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          id="hamburger"
          className="flex flex-col items-end space-y-[0.25rem] px-1.5 py-[0.39rem] rounded-md outline outline-1 outline-lightgray z-10 md:hidden "
        >
          <span
            className={`w-5 h-[3px] bg-darkgray transition duration-500 ease-in-out ${
              isOpen && "rotate-45 translate-y-1.5"
            }`}
          ></span>
          <span
            className={`w-5 h-[3px] bg-darkgray transition duration-500 ease-in-out ${
              isOpen && "opacity-0"
            }`}
          ></span>
          <span
            className={`w-5 h-[3px] bg-darkgray transition duration-500 ease-in-out ${
              isOpen && "-rotate-45 -translate-y-2"
            }`}
          ></span>
        </div>
      </div>
    </nav>
  );
}
