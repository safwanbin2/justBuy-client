import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {

    const [deleteId, setDeleteId] = useState(null);
    const [verifyId, setVerifyId] = useState(null);

    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['users', 'role'],
        queryFn: async () => {
            const res = await fetch(`https://just-buy-server.vercel.app/users?role=seller`)
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

    const { data: verifyResult } = useQuery({
        queryKey: ['users', verifyId],
        queryFn: async () => {
            const res = await fetch(`https://just-buy-server.vercel.app/users/${verifyId}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('justbuy-token')}`
                }
            })
            const data = await res.json()
            if (data.modifiedCount) {
                toast.success('Verified Successfully')
                refetch();
            }
            return data;
        }
    })

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
                                <td>{seller.isVerified ? <button className='btn btn-sm btn-disabled'>Verify</button>
                                    : <button onClick={() => setVerifyId(seller._id)} className='btn btn-sm btn-info'>Verify</button>}</td>
                                <td><button onClick={() => setDeleteId(seller._id)} className='btn btn-sm btn-error'>delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;