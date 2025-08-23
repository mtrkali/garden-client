import React from 'react';

const PlantCare = () => {
    const tips = [
        { id: 1, title: "Water Regularly", description: "Give light water to the base of the plants every morning." },
        { id: 2, title: "Sunlight is Essential", description: "Keep the plants under sunlight for at least 4-6 hours daily." },
        { id: 3, title: "Use Organic Fertilizer", description: "Apply organic fertilizer once a month to keep plants healthy." }
    ];

    return (
        <div className="p-6 bg-green-200 rounded-2xl shadow-md my-5">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Plant Care Tips</h2>
            <ul className="space-y-3">
                {tips.map(tip => (
                    <li key={tip.id} className="p-3 bg-base-300 rounded-xl shadow">
                        <h3 className="font-semibold text-lg text-green-600">{tip.title}</h3>
                        <p>{tip.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PlantCare;