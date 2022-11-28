import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Wishlist = () => {
    const { user } = useContext(AuthContext);
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        axios.get(`https://just-buy-server.vercel.app/wishlist?email=${user?.email}`)
            .then(data => {
                setPhones(data.data);
            })
    }, [user?.email])
    return (
        <div className='w-full'>
            <h2 className='my-4'>My Wishlist:</h2>
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
                            phones?.map((phone, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <div className="avatar">
                                    <div className="w-16 rounded-full">
                                        <img src={phone.img} alt="" />
                                    </div>
                                </div>
                                <td>{phone.title}</td>
                                <td>{phone.sellPrice}$</td>
                                <td>
                                    {phone.sellPrice && !phone.paid ? <Link to={`/dashboard/payment/${phone._id}`}><button className='btn btn-sm btn-primary'>Pay</button></Link> 
                                    : <button className='btn btn-disabled btn-sm'>Paid</button>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Wishlist;