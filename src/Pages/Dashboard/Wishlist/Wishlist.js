import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Wishlist = () => {
    const { user } = useContext(AuthContext);
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/wishlist?email=${user?.email}`)
            .then(data => {
                setPhones(data.data);
            })
    }, [user?.email])
    console.log(phones)
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
                                <td><button className='btn btn-sm btn-primary'>Pay</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Wishlist;