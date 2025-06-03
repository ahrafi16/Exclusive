import React, { useContext, useState } from 'react';
import singnupImage from "../assets/dl.beatsnoop 1.png"
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const { userLogin, setUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState({});
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        userLogin(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                navigate(location?.state ? location.state : "/home");
            })
            .catch((err) => {
                setError({ ...error, login: err.code })
            });
    };



    return (
        <div className='flex flex-col-reverse md:flex-row md:gap-20 items-center my-10 mx-auto px-20'>
            <div>
                <img src={singnupImage} alt="" />
            </div>
            <div className="flex flex-col gap-5 md:w-1/4 p-5">
                <h1 className='text-4xl font-semibold'>Log in to Exclusive</h1>
                <p>Enter your details below</p>
                <form onSubmit={handleSubmit} className='flex flex-col gap-5' action="">
                    <input
                        name='email'
                        type="email"
                        className="py-2 border-b-2 border-gray-200 focus:outline-none focus:border-none"
                        placeholder="Email or Phone Number"
                    />

                    <div className='relative'>
                        <input
                            name='password'
                            type={showPassword ? "text" : "password"}
                            className="py-2 pr-10 w-full border-b-2 border-gray-200 focus:outline-none focus:border-none"
                            placeholder="Password"
                        />
                        <div
                            className='absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500'
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    </div>
                    <div className='flex gap-5 items-center justify-between'>
                        <button type='submit'
                            className='bg-red-500 text-white rounded-sm px-7 py-4  cursor-pointer'
                        >
                            Log In
                        </button>
                        <p className='text-red-500'>Fotget Password?</p>
                    </div>
                </form>

            </div>
            {
                error.login && (
                    <div className="toast">
                        <div className="alert alert-success bg-red-500 text-white">
                            <span>{error.login}</span>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default SignUp;