import { useEffect, useState } from "react";

const TopTrendingTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch("https://garden-server-zeta.vercel.app/tips?availability=public&limit=6")
      .then((res) => res.json())
      .then((data) => setTips(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Top Trending Tips
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip) => (
          <div
            key={tip._id}
            className="shadow-lg rounded-2xl overflow-hidden border hover:shadow-xl transition"
          >
            <img
              src={tip.photo}
              alt={tip.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{tip.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{tip.description}</p>

              <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
                <span>👤 {tip.name}</span>
                <span>👍 {tip.like || 0}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopTrendingTips;
