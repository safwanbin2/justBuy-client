import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const phone = useLoaderData();
    console.log(phone)
    return (
        <div>
            <h2>this is payment</h2>
        </div>
    );
};

export default Payment;