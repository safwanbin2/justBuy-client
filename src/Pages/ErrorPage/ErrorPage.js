import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../assets/error.png';

const ErrorPage = () => {
    return (
        <div className='min-h-screen flex justify-center items-center flex-col'>
            <img className='w-[100px]' src={error} alt="" />
            <p className='text-4xl font-semibold'>Page not Found</p>
            <Link to='/' className='text-xl text-blue-600'>go back</Link>
        </div>
    );
};

export default ErrorPage;