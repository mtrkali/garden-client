 import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../AuthLayouts/AuthContext';
const Register = () => {
    const { registerUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const {name, email, password} = Object.fromEntries(formData.entries());

        registerUser(email, password)
        .then(result => {
            alert('success fully create a user')
        }).catch(err => {
            alert(err.message)
        })
    }
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className="font-semibold text-2xl text-center">Register Your Accrount</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        {/* Name */}
                        <label className="label">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="input"
                            placeholder="Name"
                            required />

                        {/* email */}
                        <label className="label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="input"
                            placeholder="Email"
                            required />

                        {/* password */}
                        <label className="label">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="input"
                            placeholder="Password"
                            required />


                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral bg-blue-500 mt-4">Register</button>
                        <p className="font-semibold text-center mt-5">Already have an account?  Please <Link className='text-accent underline'>Log In</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;