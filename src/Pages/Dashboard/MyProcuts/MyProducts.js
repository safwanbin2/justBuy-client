import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loader from '../../../Components/Loader';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const { data: phones = [], isLoading } = useQuery({
        queryKey: ['phones', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/phones?email=${user?.email}`)
            const data = await res.json();
            return data;
        }
    });
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className='w-full mt-[-250px]'>
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
                                <td><button className='btn btn-primary'>Advertise</button></td>
                                <td><button className='btn btn-error'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;