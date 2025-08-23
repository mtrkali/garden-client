import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../AuthLayouts/AuthContext';
import { FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';
const Register = () => {
    const { registerUser, setUser, goooleLogIn, setError } = useContext(AuthContext)
    const [passErr, setPassErr] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/;


    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const { email, password, ...rest } = Object.fromEntries(formData.entries());

        if (!passwordRegex.test(password)) {
            setPassErr("Password must be at least 8 characters, include 1 uppercase, 1 lowercase, and 1 special character.")
            return;
        }
        // creating user --
        registerUser(email, password)
            .then(result => {
                setUser(result.user);
                navigate(`${location.state ? location.state : '/'}`)
                const newUser = {
                    email, ...rest
                }
                // send this user to the DB --
                fetch('https://garden-server-zeta.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "User Successfully added !!",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }).catch(err => {
                setError(err.message)
            })


    }

    const googleSignIn = () => {
        goooleLogIn()
            .then(result => {
                setUser(result.user);
                navigate(`${location.state ? location.state : '/'}`)
                Swal.fire({
                    position: 'center',
                    icon: "success",
                    title: "successfully googleSign In !!",
                    showConfirmButton: false,
                    timer: 1500
                });
            }).catch(err => {
                setError(err.message)
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

                        {/* phot URL */}
                        <label className="label">Photo</label>
                        <input
                            type="text"
                            name="photo"
                            className="input"
                            placeholder="photo URL"
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
                        {passErr && <p className='text-sm font-bold text-red-500'>{passErr}</p>}


                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral bg-blue-500 mt-4">Register</button>
                        <p className="font-semibold text-center mt-5">Already have an account?  Please <Link to='/login' className='text-accent underline'>Log In</Link></p>
                    </fieldset>

                </form>
                <button onClick={() => googleSignIn()} className="btn bg-white text-black border-[#e5e5e5]">
                    <FaGoogle></FaGoogle>
                    Sign Up with Google
                </button>
            </div>
        </div>
    );
};

export default Register;