import React, { useState } from 'react';
import { AiFillLike } from 'react-icons/ai';
import { useLoaderData } from 'react-router';

const TipDetals = () => {
    const [like, setLike] = useState(false);
    const plant = useLoaderData();
    const {
        title,
        plantType,
        difficultyLevel,
        description,
        photo,
        category,
        name,
        email
    } = plant;
    return (
        <div className="flex justify-center py-10">
            <div className="card w-full max-w-3xl bg-base-100 shadow-xl border border-accent">

                <figure>
                    <img src={photo} alt={title} className="w-96 h-64 object-cover" />
                </figure>

            
                <div className="card-body">
                    
                    <h2 className="card-title text-3xl font-bold">{title}</h2>

                    
                    <div className="flex flex-wrap gap-3 text-sm opacity-80">
                        <span className="badge badge-outline"> {plantType}</span>
                        <span className="badge badge-outline"> {category}</span>
                        <span className="badge badge-outline"> {difficultyLevel}</span>
                    </div>

                    {/* বর্ণনা */}
                    <p className="mt-4">{description}</p>

                    
                    <div className="mt-6 p-4 rounded-lg bg-base-200">
                        <h3 className="text-lg font-semibold mb-2">Tip Provided By:</h3>
                        <p> {name}</p>
                        <p> {email}</p>
                    </div>

                    {/* like button */}
                    <button onClick={()=>setLike(!like)} className={`btn btn-secondary ${like?'':'btn-outline'}`}>{like?'liked':'like'}</button>
                </div>
            </div>
        </div>
    );
};




export default TipDetals;