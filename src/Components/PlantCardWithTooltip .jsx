import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip"; //
import "react-tooltip/dist/react-tooltip.css";

const PlantCardWithTooltip = () => {
  const plants = [
    { name: "Rose", tip: "Roses need full sun and regular watering." },
    { name: "Tulip", tip: "Tulips grow best in cool climates." },
    { name: "Sunflower", tip: "Sunflowers always face the sun!" },
    { name: "Orchid", tip: "Orchids need indirect sunlight." },
  ];

  return (
    <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-lg my-16">
      <h2 className="text-3xl font-bold text-green-700 dark:text-green-300 mb-6 text-center">
        Plant Cards
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plants.map((plant, index) => (
          <div
            key={index}
            id={`plant-${index}`}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md text-center font-semibold text-gray-700 dark:text-gray-200 cursor-pointer border border-green-100 dark:border-gray-700 hover:border-green-400 hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            {plant.name}
            <ReactTooltip
              anchorId={`plant-${index}`}
              content={plant.tip}
              place="top"
              className="!bg-green-600 !text-white dark:!bg-green-400 dark:!text-gray-900 font-medium px-3 py-1 rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantCardWithTooltip;
