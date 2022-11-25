import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {
    const { data: sellers = [] } = useQuery({
        queryKey: ['users', 'role'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?role=seller`)
            const data = await res.json();
            return data;
        }
    });
    console.log(sellers);
    return (
        <div className='w-full'>
            <h2 className='my-4'>All Sellers:</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verify</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers?.map((seller, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td><button className='btn btn-sm btn-info'>Verify</button></td>
                                <td><button className='btn btn-sm btn-error'>delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;