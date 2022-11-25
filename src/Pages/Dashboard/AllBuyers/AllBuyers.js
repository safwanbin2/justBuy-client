import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyers = () => {
    const { data: buyers = [] } = useQuery({
        queryKey: ['users', 'role'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?role=buyer`)
            const data = await res.json();
            return data;
        }
    });
    console.log(buyers)
    return (
        <div className='w-full'>
            <h2 className='my-4'>All Buyers:</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers?.map((buyer, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td><button className='btn btn-sm btn-error'>delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;