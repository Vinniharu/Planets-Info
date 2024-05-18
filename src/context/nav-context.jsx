import React, { useState } from "react";

const NavContext = React.createContext({
  toggle: false,
  toggleFunction: () => {},
});

export const NavigateContext = (props) => {
   const [toggle, useToggle] = useState(true);

   const toggleFunction = () => {
      useToggle(!toggle)
   }

  const NavValue = {
    toggle,
    toggleFunction,
  };

  return (
    <NavContext.Provider value={NavValue}>{props.children}</NavContext.Provider>
  );
};

export default NavContext