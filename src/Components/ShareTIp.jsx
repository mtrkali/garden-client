import React, { useContext } from 'react';
import { AuthContext } from '../AuthLayouts/AuthContext';
import Swal from 'sweetalert2';

const ShareTIp = () => {
    const { user, profile } = useContext(AuthContext)


    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formValue = Object.fromEntries(formData.entries());
        const newTip = {
            like: 0,
            ...formValue
        }

        //post data to the DB --
        fetch('http://localhost:3000/tips', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTip)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your Tip successfully saved!!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div className='border-b-2 mb-10'>
            <h2 className="text-5xl text-green-500 mb-5">Share Your Garden Tip</h2>
            <p className="text-green-600">Share it with fellow garden lovers! Whether it’s about growing healthier plants, saving water, or keeping pests away naturally – your tips can help others create greener, happier gardens.
                Let’s grow together by sharing our knowledge and passion for gardening.</p>
            <form onSubmit={handleSubmit} className='my-5'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>

                    <fieldset className="fieldset bg-base-200 rounded-box  border p-4">
                        <legend className="fieldset-legend  font-bold text-lg">Title</legend>
                        <input type="text" className="input w-full " name='title'
                            placeholder="how i grow tomato indoors" required />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 rounded-box  border p-4">
                        <legend className="fieldset-legend  font-bold text-lg">Topic</legend>
                        <input type="text" className="input w-full " name='topic' placeholder="Plant Type" required />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 rounded-box  border p-4">
                        <legend className="fieldset-legend  font-bold text-lg">Difficulty Level </legend>
                        <select className="select select-bordered w-full mt-2 " name='difficulty' defaultValue='' required>
                            <option value='' disabled>Pick one</option>
                            <option value='eassy'>Eassy</option>
                            <option value='medium'>Medium</option>
                            <option value='hard'>hard</option>
                        </select>
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 rounded-box  border p-4">
                        <legend className="fieldset-legend  font-bold text-lg">Description</legend>
                        <input type="text" className="input w-full " name='description' placeholder="How you grow plant that explain here" required />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 rounded-box  border p-4">
                        <legend className="fieldset-legend  font-bold text-lg">Category</legend>
                        <select name='category' className="select select-bordered w-full mt-2 " defaultValue='' required>
                            <option value='' disabled>Pick one</option>
                            <option value='i.e.'>i.e.</option>
                            <option value='composting'>Composting</option>
                            <option value='plant care'>Plant Care</option>
                            <option value='vertical gardening'>Vertical Gardening</option>
                        </select>
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 rounded-box  border p-4">
                        <legend className="fieldset-legend  font-bold text-lg">Availability</legend>
                        <select name='availability' className="select select-bordered w-full mt-2 " defaultValue='' required>
                            <option value='' disabled >Pick one</option>
                            <option value='public'>public</option>
                            <option value='hidden'>Hidden</option>
                        </select>
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 rounded-box  border p-4">
                        <legend className="fieldset-legend  font-bold text-lg">Name </legend>
                        <input type="text" name='name' className="input w-full " value={profile?.name || user?.displayName} readOnly />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 rounded-box  border p-4">
                        <legend className="fieldset-legend  font-bold text-lg">Email </legend>
                        <input type="text" name='email' className="input w-full " value={user?.email || ''} readOnly />
                    </fieldset>
                </div>
                <fieldset className="fieldset bg-base-200 rounded-box border p-4 mt-5">
                    <legend className="fieldset-legend  font-bold text-lg">Photo URL</legend>
                    <input type="text" className="input w-full " name='photo' placeholder="Photo URL" required />
                </fieldset>
                <input className='btn  btn-accent px-20 mt-5' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ShareTIp;