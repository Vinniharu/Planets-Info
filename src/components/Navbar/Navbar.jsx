import React, { useContext } from "react";
import data from "../../../data.json";
import NavContext from "../../context/nav-context";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { CgArrowRight } from "react-icons/cg";

const Navbar = () => {
  const NavToggle = useContext(NavContext);

  return (
    <nav className="block md:flex items-center justify-between z-10 text-white md:border-b-2 border-[#c4c4c4b6] h-[10vh] relative px-[2rem]">
      <span className="flex items-center justify-between h-[10vh]">
        <h1 className="text-[1.6rem] font-[Antonio]">The Planets</h1>
        <button
          className="block md:hidden text-2xl"
          onClick={NavToggle.toggleFunction}
        >
          {NavToggle.toggle ? <BiMenu /> : <CgClose />}
        </button>
      </span>
      <ul
        className={`flex items-center flex-col md:flex-row absolute left-0 md:static md:h-auto w-full md:w-fit z-40 bg-[#0c0c2c] transition-all ${
          NavToggle.toggle
            ? "h-[0] overflow-hidden"
            : "h-[90vh] justify-between"
        }`}
      >
        {data.map((planet, index) => (
          <a
            key={index}
            href={`/${planet.name}`}
            className="flex items-center justify-between w-full ps-[0.4rem] pe-[0.8rem]"
          >
            <p className="m-[1rem] text-xl md:text-base">{planet.name}</p>
            <span className="text-2xl block md:hidden">
              <CgArrowRight />
            </span>
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
