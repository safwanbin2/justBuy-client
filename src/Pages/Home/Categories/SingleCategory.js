import React from 'react';
import { Link } from 'react-router-dom';

const SingleCategory = ({ category }) => {
    const { category: title} = category;
    return (
        <Link to={`/category/${title}`} className='shadow-lg border flex justify-center items-center p-4 rounded-full hover:bg-base-200' >
            <h2 className='uppercase'>{title}</h2>
        </Link>
    );
};

export default SingleCategory;