import React, { useContext, useState } from 'react';
import singnupImage from "../assets/dl.beatsnoop 1.png"
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const { createNewUser, setUser } = useContext(AuthContext);
    const [error, setError] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const password = form.get("password");
        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                alert("ACCOUNT CREATED SUCCESSFULLY!");
            })
            .catch((err) => {
                setError({ ...error, register: err.code });
            });
    }

    return (
        <div className='flex flex-col-reverse md:flex-row md:gap-20 items-center my-10 mx-auto px-20'>
            <div>
                <img src={singnupImage} alt="" />
            </div>
            <div className="flex flex-col gap-5 md:w-1/4 p-5">
                <h1 className='text-4xl font-semibold'>Create an account</h1>
                <p>Enter your details below</p>
                <form onSubmit={handleSubmit} className='flex flex-col gap-5' action="">
                    <input
                        name='name'
                        type="text"
                        className="py-2 border-b-2 border-gray-200 focus:outline-none focus:border-none"
                        placeholder="Name"
                    />
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
                    <button type='submit' className='bg-red-500 text-white rounded-sm px-7 py-4  cursor-pointer'>
                        Create Account
                    </button>
                </form>
                <div className='flex flex-col gap-5'>

                    <button className='border-2 border-gray-200 text-black rounded-sm px-7 py-4 cursor-pointer flex items-center gap-2 font-semibold justify-center'>
                        <img className='w-6' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" alt="" />
                        Sign up with Google
                    </button>
                </div>
                <div className='text-gray-700 text-center'>
                    <p>Already have account?
                        <Link className='underline underline-offset-4 ml-2' to="/signup">Log in</Link></p>
                </div>
            </div>
            {
                error.register && (
                    <div className="toast">
                        <div className="alert alert-success bg-red-500 text-white">
                            <span>{error.register}</span>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Register;