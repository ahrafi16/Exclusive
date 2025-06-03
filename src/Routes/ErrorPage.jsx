
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center space-y-5 mx-auto text-center h-screen'> 
            <h1 className='text-8xl'>404 Not Found</h1>
            <p>Your visited page not found. You may go home page.</p>
            <Link to="/"><button className='bg-red-500 text-white rounded-sm px-7 py-4 cursor-pointer'>Back to home page</button></Link>
        </div>
    );
};

export default ErrorPage;