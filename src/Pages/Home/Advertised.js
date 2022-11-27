import React from 'react';
import AdvertisedCard from './AdvertisedCard';

const Advertised = ({ phones }) => {
    return (
        <div className='my-10'>
            <h2 className='text-2xl font-semibold'>Advertised Items : </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-10'>
                {
                    phones.map((phone, i) => <AdvertisedCard
                        key={i}
                        phone={phone}
                    ></AdvertisedCard>)
                }
            </div>
        </div>
    );
};

export default Advertised;