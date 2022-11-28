import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SingleCategory from './SingleCategory';

const Categories = () => {
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://just-buy-server.vercel.app/categories')
            const data = await res.json()
            return data;
        }
    })
    return (
        <div className='my-10'>
            <h2 className='text-2xl font-semibold'>Categories: </h2>
            <div className='my-10 grid grid-cols-1 md:grid-cols-5 gap-5'>
                {categories.map((category, i) => <SingleCategory
                    key={i}
                    category={category}
                ></SingleCategory>)}
            </div>
        </div>
    );
};

export default Categories;