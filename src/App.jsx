import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router";
import PlanetDetails from "./components/PlanetDetails/PlanetDetails";
import { BrowserRouter } from "react-router-dom";
import { NavigateContext } from "./context/nav-context";

const App = () => {
  return (
    <NavigateContext>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<PlanetDetails />} />
          <Route path={"/:planetId"} element={<PlanetDetails />} />
        </Routes>
      </BrowserRouter>
    </NavigateContext>
  );
};

export default App;
