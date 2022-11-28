import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from './CategoryCard';

const Category = () => {
    const phones = useLoaderData();
    return (
        <div className='w-11/12 mx-auto my-10'>
            <h2 className='text-2xl font-semibold'>results for: {phones[0].category}</h2>
            <div className='my-10'>
                {
                    phones.map((phone, i) => <CategoryCard
                        key={i}
                        phone={phone}
                    ></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Category;