import React, { useEffect, useState } from "react";

const FeaturedGardeners = () => {
  const [gardeners, setGardeners] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/gardenaers?status=active")
      .then((res) => res.json())
      .then((data) => setGardeners(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto my-12">
      <h2 className="text-3xl font-bold text-center mb-8"> Featured Gardeners</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {gardeners.map((g, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-lg p-6 text-center"
          >
            <img
              src={g.image}
              alt={g.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-green-500"
            />
            <h3 className="text-xl font-semibold">{g.name}</h3>
            <p className="text-gray-600">{g.experiences}</p>
            <p className="text-sm text-green-700">Share Tips: {g.sharedTips}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedGardeners;
