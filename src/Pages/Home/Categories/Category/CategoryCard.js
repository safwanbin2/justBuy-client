import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaLocationArrow, FaSmile } from 'react-icons/fa';
import { MdBookmarkAdd, MdVerified } from 'react-icons/md';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';
import CategoryCardModal from './CategoryCardModal';

const CategoryCard = ({ phone }) => {
    const { user } = useContext(AuthContext);
    const { img, title, category, sellPrice, buyPrice, used, postDate, sellerName, isVerified, condition, description, location } = phone;
    const [bookingPhone, setBookingPhone] = useState(null);

    const handleAddToWishList = phone => {
        const newItem = {
            phoneId: phone._id,
            title: phone.title,
            sellPrice: phone.sellPrice,
            buyerEmail: user.email,
            img: phone.img
        }
        fetch('http://localhost:5000/wishlist', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Item Added to wish List.')
                }
                else{
                    toast.error(data.message)
                }
            })
    }

    return (
        <>
            <div style={{ gridTemplateColumns: "1fr 2fr" }} className="card lg:card-side grid bg-base-100 shadow-xl my-5">
                <figure><img className='w-full h-[300px]' src={img} alt="Album" /></figure>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }} className="card-body relative">
                    <div>
                        <h2 className="card-title">{title} <span className='text-sm'>({condition})</span></h2>
                        <h3 className='flex items-center'>{sellerName} <span className='text-blue-600 ml-2'>{isVerified && <MdVerified />}</span> </h3>
                        <p className='text-base'><small className='flex items-center'>Location: {location} <span className='text-primary ml-2'><FaLocationArrow /></span></small></p>
                        <p className='text-base'><small>Used: {used}</small></p>
                        <p className='text-base'><small>Posted on {postDate}</small></p>
                        <p className='text-base'><small>Category: {category}</small></p>
                        <p className='text-base'><small>Buying price: {buyPrice}tk</small></p>
                        <p className='text-sm'>Selling price: <span className='text-lg font-semibold text-primary'>{sellPrice}</span>tk</p>
                    </div>
                    <div className="divider divider-horizontal absolute h-full right-[50%]"> <p className='text-2xl text-yellow-600'><FaSmile></FaSmile></p> </div>
                    <div>
                        <p>{description}</p>
                        <div className="card-actions justify-end absolute right-6 bottom-6">
                            <button onClick={() => handleAddToWishList(phone)} className='btn btn-primary btn-sm' title='Wishlist'> <MdBookmarkAdd></MdBookmarkAdd> </button>
                            {/* The button to open modal */}
                            <label onClick={() => setBookingPhone(phone)} htmlFor="categorymodal" className="btn btn-primary btn-sm">Book</label>
                        </div>
                    </div>
                </div>
            </div>
            {bookingPhone && <CategoryCardModal
                phone={bookingPhone}
                setBookingPhone={setBookingPhone}
            ></CategoryCardModal>}
        </>
    );
};

export default CategoryCard;