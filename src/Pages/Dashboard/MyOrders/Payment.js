import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const phone = useLoaderData();
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
    return (
        <div>
            <h2 className='text-xl font-semibold'>Payment for {phone.title}: </h2>
            <p>Amount <span className='text-xl font-semibold text-black'>{phone.sellPrice}</span> $</p>
            <div className='w-96 my-10'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        phone={phone}
                    ></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;