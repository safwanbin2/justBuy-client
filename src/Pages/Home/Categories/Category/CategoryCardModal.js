import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';

const CategoryCardModal = ({ phone, setBookingPhone }) => {
    const { title, sellPrice, category, sellerEmail, img } = phone;
    const { user } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
        const buyerPhone = e.target.buyerPhone.value;
        const buyerLocation = e.target.buyerLocation.value;

        const booking = {
            title,
            sellPrice,
            sellerEmail,
            img,
            category,
            buyerPhone,
            buyerLocation,
            buyerEmail: user.email
        }

        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Items booked successfully')
                setBookingPhone(null)
            })
    }

    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="categorymodal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="categorymodal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit}>
                        <input type="text" defaultValue={user.displayName} disabled placeholder="Name" className="input input-bordered w-full my-2" />
                        <input type="email" defaultValue={user.email} disabled placeholder="email" className="input input-bordered w-full my-2" />
                        <input type="text" defaultValue={title} disabled placeholder="Name" className="input input-bordered w-full my-2" />
                        <input type="text" defaultValue={sellPrice} disabled placeholder="Name" className="input input-bordered w-full my-2" />
                        <input type="tel" placeholder="phone" required className="input input-bordered w-full my-2" name='buyerPhone' />
                        <input type="text" placeholder="location" required className="input input-bordered w-full my-2" name='buyerLocation' />
                        <input type="submit" className='btn btn-primary' value="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CategoryCardModal;