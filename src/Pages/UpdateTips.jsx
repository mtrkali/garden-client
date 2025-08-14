import React from 'react';

const UpdateTips = () => {
    return (
        <div className='border-b-2 mb-10'>
            <h2 className="text-5xl text-green-500 mb-5">Update Your Garden Tip</h2>
            <p className="text-green-500">Have a better way to explain your tip? Found a new method that works even better?
                Update your gardening tips anytime to keep them fresh, accurate, and helpful for everyone.
                Your updated knowledge can inspire others and make the gardening community even stronger!</p>
            <form className='my-5'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    <fieldset className="fieldset bg-base-200 rounded-box  border p-4 border-green-500">
                        <legend className="fieldset-legend text-green-500 font-bold text-lg">Title</legend>
                        <input type="text" className="input w-full text-green-500 border-green-500" placeholder="how i grow tomato indoors" defaultValue='' />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 rounded-box  border p-4 border-green-500">
                        <legend className="fieldset-legend text-green-500 font-bold text-lg">Topic</legend>
                        <input type="text" className="input w-full text-green-500 border-green-500" placeholder="Plant Type" defaultValue=''  />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 rounded-box  border p-4 border-green-500">
                        <legend className="fieldset-legend text-green-500 font-bold text-lg">Difficulty Level </legend>

                        <select className="select select-bordered w-full mt-2 text-green-500 border-green-500" defaultValue='' >
                            <option disabled selected>Pick one</option>
                            <option>Eassy</option>
                            <option>Medium</option>
                            <option>hard</option>
                        </select>
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 rounded-box  border p-4 border-green-500">
                        <legend className="fieldset-legend text-green-500 font-bold text-lg">Description</legend>
                        <input type="text" className="input w-full text-green-500 border-green-500" placeholder="How you grow plant that explain here" defaultValue='' />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 rounded-box  border p-4 border-green-500">
                        <legend className="fieldset-legend text-green-500 font-bold text-lg">Category</legend>

                        <select className="select select-bordered w-full mt-2 text-green-500 border-green-500" defaultValue='' >
                            <option disabled selected>Pick one</option>
                            <option>i.e.</option>
                            <option>Composting</option>
                            <option>Plant Care</option>
                            <option>Vertical Gardening</option>
                        </select>
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 rounded-box  border p-4 border-green-500">
                        <legend className="fieldset-legend text-green-500 font-bold text-lg">Availability</legend>

                        <select className="select select-bordered w-full mt-2 text-green-500 border-green-500" defaultValue=''>
                            <option disabled selected>Pick one</option>
                            <option>public</option>
                            <option>Hidden</option>
                        </select>
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 rounded-box  border p-4 border-green-500">
                        <legend className="fieldset-legend text-green-500 font-bold text-lg">Name </legend>
                        <input type="text" className="input w-full text-green-500 border-green-500" value="selim" readOnly />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 rounded-box  border p-4 border-green-500">
                        <legend className="fieldset-legend text-green-500 font-bold text-lg">Email </legend>
                        <input type="text" className="input w-full text-green-500 border-green-500" value="selim@gmail.com" readOnly />
                    </fieldset>
                </div>
                <fieldset className="fieldset bg-base-200 rounded-box border p-4 mt-5 border-green-500">
                    <legend className="fieldset-legend text-green-500 font-bold text-lg">Photo URL</legend>
                    <input type="text" className="input w-full text-green-500 border-green-500" placeholder="Photo URL"  defaultValue=''/>
                </fieldset>
                <input className='btn  btn-accent px-20 mt-5' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UpdateTips;