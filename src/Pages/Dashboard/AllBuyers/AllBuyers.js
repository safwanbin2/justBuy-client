import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {

    const [deleteId, setDeleteId] = useState(null)

    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['users', 'role'],
        queryFn: async () => {
            const res = await fetch(`https://just-buy-server.vercel.app/users?role=buyer`)
            const data = await res.json();
            return data;
        }
    });

    const { data } = useQuery({
        queryKey: ['users', deleteId],
        queryFn: async () => {
            if (deleteId) {
                const res = await fetch(`https://just-buy-server.vercel.app/users/${deleteId}`, {
                    method: "DELETE",
                    headers: {
                        authorization: `bearer ${localStorage.getItem('justbuy-token')}`
                    }
                })
                const data = await res.json()
                if (data.deletedCount) {
                    toast.success('item deleted successfully')
                    setDeleteId(null)
                    refetch();
                }
                return data
            }
        }
    })

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
                                <td><button onClick={() => setDeleteId(buyer._id)} className='btn btn-sm btn-error'>delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;