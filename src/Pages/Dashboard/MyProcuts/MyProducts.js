import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import Loader from '../../../Components/Loader';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [advertiseId, setAdvertiseId] = useState(null);
    const [deleteId, setDeleteId] = useState(null);

    const { data: phones = [], isLoading, refetch } = useQuery({
        queryKey: ['phones', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/phones?email=${user?.email}`)
            const data = await res.json();
            return data;
        }
    });

    const { data: result = {} } = useQuery({
        queryKey: ['phones', advertiseId],
        queryFn: async () => {
            if (advertiseId) {
                const res = await fetch(`http://localhost:5000/phones/advertise/${advertiseId}`)
                const data = await res.json()
                if (data.acknowledged) {
                    toast.success('Advertised Successfully')
                    setAdvertiseId(null)
                    refetch();
                }
                return data;
            }
        }
    })

    const { data } = useQuery({
        queryKey: ['phones', deleteId],
        queryFn: async () => {
            if (deleteId) {
                const res = await fetch(`http://localhost:5000/phones/${deleteId}`, {
                    method: "DELETE",
                    headers: {
                        authorization: `bearer ${localStorage.getItem('justbuy-token')}`
                    }
                })
                const data = await res.json()
                if (data.deletedCount) {
                    toast.success('Item deleted successfully')
                    refetch();
                }
                return data;
            }
        }
    })

    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className='w-full'>
            <h2 className='my-4'>My orders:</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Advertise</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            phones?.map((phone, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <div className="avatar">
                                    <div className="w-16 rounded-full">
                                        <img src={phone.img} alt="" />
                                    </div>
                                </div>
                                <td>{phone.title}</td>
                                <td>{phone.sellPrice}$</td>
                                <td>{phone.status}</td>
                                <td>{phone.isAdvertised ? <button className='btn btn-disabled btn-sm'>Advertise</button>
                                    : <button onClick={() => setAdvertiseId(phone._id)} className='btn btn-sm btn-primary'>Advertise</button>}</td>
                                <td><button onClick={() => setDeleteId(phone._id)} className='btn btn-sm btn-error'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;