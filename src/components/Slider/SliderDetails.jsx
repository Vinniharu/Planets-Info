import React, { useEffect, useState } from "react";
import { BsLink45Deg } from "react-icons/bs";

const SliderDetails = (props) => {
  const [selected, setSelected] = useState("overview");

  const data = [
    { name: "overview", display: "Overview" },
    { name: "structure", display: "Internal Structure" },
    { name: "geology", display: "Surface Geology" },
  ];

  const sectionChange = (planet, index) => {
    setSelected(planet.name);
    props.func(index);
  };

  useEffect(() => {
    setSelected(props.current);
  }, [selected]);

  return (
    <div className="flex flex-col md:flex-row justify-center w-[25rem] flex-wrap">
      <section className="w-full md:text-left">
        <h1 className="text-white md:text-9xl text-3xl font-100 font-[Antonio] mb-[1rem] md:mb-[2rem]">
          {props.title}
        </h1>
        <p className="text-sm text-gray-400 font-bold mb-[2rem]">
          {props.info?.content}
        </p>
        <div>
          <p className="flex items-center justify-start font-semibold text-gray-500 gap-2">
            Source:
            <a
              href={props.info?.source}
              className="flex items-center gap-1 font-bold underline"
            >
              Wikipedia
              <div className="w-4">
                <BsLink45Deg/>
              </div>
            </a>
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-4 w-full mt-[2rem]">
        {data.map((planet, index) => (
          <span
            className={`w-full md:w=[30rem] hover:bg-gray-600 text-white flex font-bold gap-[0.6rem] items-center justify-start py-[0.4rem] border px-[2rem] ${selected === planet.name ? "bg-[#6666e7]" : ""}`}
            key={index}
            onClick={() => sectionChange(planet, index)}
          >
            <p className="font-bold text-gray-400">{`0${index + 1}`}</p>
            {planet.display}
          </span>
        ))}
      </section>
    </div>
  );
};

export default SliderDetails;
