import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loader from '../../../Components/Loader';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const { data: orders = [], isLoading } = useQuery({
        queryKey: ['myorders', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myorders?email=${user?.email}`)
            const data = await res.json();
            return data;
        }
    })
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
                            <th>Name</th>
                            <th>Avatar</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <div className="avatar">
                                    <div className="w-16 rounded-full">
                                        <img src={order.img} alt="" />
                                    </div>
                                </div>
                                <td>{order.title}</td>
                                <td>{order.sellPrice}$</td>
                                <td><button className='btn btn-sm btn-primary'>Pay</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;