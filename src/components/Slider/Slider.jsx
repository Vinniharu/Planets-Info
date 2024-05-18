import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import data from "../../../data.json";
import { useParams } from "react-router";
import SliderDetails from "./SliderDetails";
import DataReading from "../DataReading/DataReading";

const Slider = (props) => {
  const [planet, usePlanet] = useState({});
  const [shownItem, setShownItem] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    usePlanet(
      data.filter((planet) => {
        if (!props.planet) {
          return planet.name === "Mercury";
        }
        return planet.name === props.planet;
      })
    );
  }, [id]);

  const imgSelected = (index) => {
    setShownItem(index);
  };

  return (
    <section>
      <Carousel
        showStatus={false}
        showThumbs={false}
        selectedItem={shownItem}
        showIndicators={false}
        showArrows={false}
        className="w-[90vw] my-[2rem] md:m-[6rem] mx-auto"
      >
        <div className="flex items-center justify-around flex-wrap md:flex-nowrap gap-[2rem] mx-2">
          <div className="w-[10rem] md:w-[20rem] flex items-center justify-center">
            <img src={planet[0]?.images.planet} />
          </div>
          <SliderDetails
            title={planet[0]?.name}
            info={planet[0]?.overview}
            func={imgSelected}
            current={"overview"}
          />
        </div>
        <div className="flex items-start justify-around flex-wrap md:flex-nowrap gap-[2rem] mx-2">
          <div className="w-[10rem] md:w-[20rem] flex items-center justify-center">
            <img src={planet[0]?.images.internal} />
          </div>
          <SliderDetails
            title={planet[0]?.name}
            info={planet[0]?.structure}
            func={imgSelected}
            current={"structure"}
          />
        </div>
        <div className="flex items-start justify-around flex-wrap md:flex-nowrap gap-[2rem] mx-2">
          <div className="relative mb-[2rem] w-[10rem] md:w-[20rem] flex items-center justify-center">
            <img src={planet[0]?.images.planet} />
            <section className="w-[3rem] md:w-[6rem] absolute top-[7rem] md:top-[14rem] left-[1rem] md:left-[2rem] rotate-45">
              <img src={planet[0]?.images.geology} />
            </section>
          </div>
          <SliderDetails
            title={planet[0]?.name}
            info={planet[0]?.geology}
            func={imgSelected}
            current={"geology"}
          />
        </div>
      </Carousel>
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-[1rem] max-w-[65rem] m-auto p-6 md:p-0">
        <DataReading title="Rotation" data={planet[0]?.rotation} />
        <DataReading title="Revolution" data={planet[0]?.revolution} />
        <DataReading title="Radius" data={planet[0]?.radius} />
        <DataReading title="Temperature" data={planet[0]?.temperature} />
      </div>
    </section>
  );
};

export default Slider;
