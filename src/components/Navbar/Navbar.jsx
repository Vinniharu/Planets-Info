import React, { useContext } from "react";
import data from "../../../data.json";
import NavContext from "../../context/nav-context";

const Navbar = () => {
  const NavToggle = useContext(NavContext);

  return (
    <nav className="block md:flex items-center justify-between z-10 text-white md:border-b-2 border-[#c4c4c4b6] h-[10vh] relative px-[2rem]">
      <span className="flex items-center justify-between h-[10vh]">
        <h1 className="text-[1.6rem] font-[Antonio]">The Planets</h1>
        <button className="block md:hidden" onClick={NavToggle.toggleFunction}>
          <img
            src={"public/images/icon-hamburger.svg"}
            className={`w-[1.4rem] ${NavToggle ? "text-white" : "text-[grey]"}`}
          />
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
            className="flex items-center justify-between w-full px-[0.4rem]"
          >
            <p className="m-[1rem] text-xl md:text-base">{planet.name}</p>
            <img
              src="public/images/icon-chevron.svg"
              className="w-[0.8rem] block md:hidden"
            />
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
