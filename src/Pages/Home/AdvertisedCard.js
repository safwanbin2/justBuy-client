import React from 'react';
import { MdVerified } from 'react-icons/md';
import { FaLocationArrow } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdvertisedCard = ({ phone }) => {
    const { img, title, category, sellPrice, buyPrice, used, postDate, sellerName, isVerified, condition, description, location} = phone;
    return (
        <div className="card lg:card-side grid grid-cols-1 md:grid-cols-2 bg-base-100 shadow-xl">
            <figure><img className='w-full h-full' src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title} <span className='text-sm'>({condition})</span></h2>
                <h3 className='flex items-center'>{sellerName} <span className='text-blue-600 ml-2'>{isVerified && <MdVerified />}</span> </h3>
                <p className='text-base'><small className='flex items-center'>Location: {location} <span className='text-primary ml-2'><FaLocationArrow /></span></small></p>
                <p className='text-base'><small>Used: {used}</small></p>
                <p className='text-base'><small>Posted on {postDate}</small></p>
                <p className='text-base'><small>Category: {category}</small></p>
                <p className='text-base'><small>Buying price: {buyPrice}tk</small></p>
                <p className='text-sm'>Selling price: <span className='text-lg font-semibold text-primary'>{sellPrice}</span>tk</p>
                <p>{description.length > 100 ? `${description.slice(0, 100)}...` : description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/category/${category}`} className="btn btn-primary">Visit</Link>
                </div>
            </div>
        </div>
    );
};

export default AdvertisedCard;