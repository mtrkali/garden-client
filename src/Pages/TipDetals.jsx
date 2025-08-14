import React from 'react';

const TipDetals = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-sm">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                    alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">like</button>
                </div>
            </div>
        </div>
    );
};

export default TipDetals;