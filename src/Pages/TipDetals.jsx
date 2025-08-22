import React, { useState } from 'react';
import { AiFillLike } from 'react-icons/ai';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const TipDetals = () => {
    const plant = useLoaderData();
    const { title, plantType, difficultyLevel, description, photo, category, name, email, like: initialLike } = plant;
    const [liked, setLiked] = useState(false)
    const [like, setLike] = useState(initialLike || 0);
    const handleLike = () => {
        setLiked(!liked);
        const newLike = like + 1;
        setLike(newLike);
        fetch('http://localhost:3000/tips', {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email, like: newLike })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'center',
                        icon: "success",
                        title: "you Like is Added !!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

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
                    <button onClick={() => handleLike()} className={`btn btn-secondary ${liked ? '' : 'btn-outline'}`}>{liked ? 'liked' : 'like'}</button>
                </div>
            </div>
        </div>
    );
};




export default TipDetals;