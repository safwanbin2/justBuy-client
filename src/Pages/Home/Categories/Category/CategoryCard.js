import React, { useState } from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import CategoryCardModal from './CategoryCardModal';

const CategoryCard = ({ phone }) => {
    const { img, title, category, sellPrice, buyPrice, used, postDate, sellerName, isVerified, condition, description, location } = phone;
    const [bookingPhone, setBookingPhone] = useState(null);
    return (
        <>
            <div style={{ gridTemplateColumns: "1fr 2fr" }} className="card lg:card-side grid bg-base-100 shadow-xl my-5">
                <figure><img className='w-full h-[300px]' src={img} alt="Album" /></figure>
                <div style={{display: "grid", gridTemplateColumns: "1fr 2fr"}} className="card-body">
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
                    <div>
                        <p>{description}</p>
                        <div className="card-actions justify-end">
                            {/* The button to open modal */}
                            <label onClick={() => setBookingPhone(phone)} htmlFor="categorymodal" className="btn btn-primary">Book Now</label>
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