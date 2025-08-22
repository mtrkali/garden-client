import React from 'react';
import { useLocation } from 'react-router';
import Swal from 'sweetalert2';

const UpdateTips = () => {
    const location = useLocation();
    const { myTip } = location.state || {};

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedTip = Object.fromEntries(formData.entries());

        //update data to the database --
        fetch(`http://localhost:3000/tips/${myTip._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTip)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Successfully updated your Tip",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div className='border-b-2 mb-10'>
            <h2 className="text-5xl text-green-500 mb-5">Update Your Garden Tip</h2>
            <p className="text-green-500">Have a better way to explain your tip? Found a new method that works even better?
                Update your gardening tips anytime to keep them fresh, accurate, and helpful for everyone.
                Your updated knowledge can inspire others and make the gardening community even stronger!</p>
            <form onSubmit={handleUpdate} className='my-5'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    <fieldset className="fieldset bg-base-200 rounded-box  border p-4 border-green-500">
                        <legend className="fieldset-legend text-green-500 font-bold text-lg">Title</legend>
                        <input type="text" className="input w-full text-green-500 border-green-500" name='title' placeholder="how i grow tomato indoors" defaultValue={myTip?.title} />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 rounded-box  border p-4 border-green-500">
                        <legend className="fieldset-legend text-green-500 font-bold text-lg">Topic</legend>
                        <input type="text" className="input w-full text-green-500 border-green-500" name='topic' placeholder="Plant Type" defaultValue={myTip?.topic} />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 rounded-box  border p-4 border-green-500">
                        <legend className="fieldset-legend text-green-500 font-bold text-lg">Difficulty Level </legend>

                        <select className="select select-bordered w-full mt-2 text-green-500 border-green-500" name='difficulty' defaultValue={myTip?.difficulty}>
                            <option value='' disabled>Pick one</option>
                            <option value='eassy'>Eassy</option>
                            <option value='medium'>Medium</option>
                            <option value='hard'>hard</option>
                        </select>
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 rounded-box  border p-4 border-green-500">
                        <legend className="fieldset-legend text-green-500 font-bold text-lg">Description</legend>
                        <input type="text" className="input w-full text-green-500 border-green-500" name='description' placeholder="How you grow plant that explain here" defaultValue={myTip?.description} />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 rounded-box  border p-4 border-green-500">
                        <legend className="fieldset-legend text-green-500 font-bold text-lg">Category</legend>

                        <select className="select select-bordered w-full mt-2 text-green-500 border-green-500" name='category' defaultValue={myTip?.category}>
                            <option value='' disabled>Pick one</option>
                            <option value='composting'>Composting</option>
                            <option value='plant care'>Plant Care</option>
                            <option value='vertical gardening'>Vertical Gardening</option>
                        </select>
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 rounded-box  border p-4 border-green-500">
                        <legend className="fieldset-legend text-green-500 font-bold text-lg">Availability</legend>

                        <select className="select select-bordered w-full mt-2 text-green-500 border-green-500" name='availability' defaultValue={myTip?.availability}>
                            <option value='' disabled>Pick one</option>
                            <option value='public'>public</option>
                            <option value='hidden'>Hidden</option>
                        </select>
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 rounded-box  border p-4 border-green-500">
                        <legend className="fieldset-legend text-green-500 font-bold text-lg">Name </legend>
                        <input type="text" className="input w-full text-green-500 border-green-500" name='name' value={myTip?.name || ''} readOnly />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 rounded-box  border p-4 border-green-500">
                        <legend className="fieldset-legend text-green-500 font-bold text-lg">Email </legend>
                        <input type="text" className="input w-full text-green-500 border-green-500" name='email' value={myTip?.email || ''} readOnly />
                    </fieldset>
                </div>
                <fieldset className="fieldset bg-base-200 rounded-box border p-4 mt-5 border-green-500">
                    <legend className="fieldset-legend text-green-500 font-bold text-lg">Photo URL</legend>
                    <input type="text" className="input w-full text-green-500 border-green-500" name='photo' placeholder="Photo URL" defaultValue={myTip?.photo} />
                </fieldset>
                <input className='btn  btn-accent px-20 mt-5' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UpdateTips;