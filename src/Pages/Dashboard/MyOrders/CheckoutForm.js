import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const CheckoutForm = ({ phone }) => {
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const { sellPrice, _id, productId } = phone;
    const { user } = useContext(AuthContext);

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://just-buy-server.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('justbuy-token')}`
            },
            body: JSON.stringify({ sellPrice }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [sellPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setCardError(error.message)
        } else {
            setCardError('')
        }
        setSuccess('');
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName,
                        email: user?.email
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }

        if (paymentIntent.status === "succeeded") {
            const payment = {
                sellPrice,
                transactionId: paymentIntent.id,
                buyerEmail: user?.email,
                bookingId: _id,
                productId
            }
            fetch('https://just-buy-server.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('justbuy-token')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        setSuccess('Congrats! your payment completed');
                        setTransactionId(paymentIntent.id);
                        toast.success("payment completed successfully")
                    }
                })
        }
        setProcessing(false);

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success mt-8' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-red-600'><small>{cardError}</small></p>}
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;