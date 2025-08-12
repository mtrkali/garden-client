import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router';
import { AuthContext } from '../AuthLayouts/AuthContext';
const Login = () => {

    const { logInUser, setUser, setError } = useContext(AuthContext)
    const location = useLocation();
    console.log(location);
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { email, password } = Object.fromEntries(formData.entries());
        console.log(email, password);
        // user login --
        logInUser(email, password)
        .then(result => {
            setUser(result.user)
        }).catch(err=>{
            setError(err.message)
        })
    }

    return (
        <div className='min-h-screen flex justify-center items-center shadow-md'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className="font-semibold text-2xl text-center">Login Your Accrount</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
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
                        <button type='submit' className="btn btn-neutral bg-blue-500 mt-4">Login</button>
                        <p className="font-semibold text-center mt-5">Don't have an account?  Please <Link className='text-red-500'>Register</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;