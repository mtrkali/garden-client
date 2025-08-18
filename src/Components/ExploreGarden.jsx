import React from 'react';
import { useLoaderData } from 'react-router';

const ExploreGarden = () => {
    const gardeners = useLoaderData();
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 my-5 justify-items-center'>
            {
                gardeners.map(gardener => <div key={gardener._id} className="card bg-base-100 shadow-xl border border-accent w-80">
                    <figure>
                        <img
                            src={gardener.image}
                            alt="Rafi Ahmed"
                            className="w-full h-48 object-cover"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-green-600">{gardener.name}</h2>
                        <p><strong>Age: </strong> {gardener.age} Years</p>
                        <p><strong>Gender: </strong> {gardener.gender}</p>
                        <p><strong>Status: </strong> {gardener.status}</p>
                        <p><strong>Experience: </strong>{gardener.experiences}</p>
                        <p><strong>Total Shared Tips: </strong> {gardener.sharedTips}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ExploreGarden;