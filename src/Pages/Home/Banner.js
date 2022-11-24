import React from 'react';
import iphone from '../../assets/banner/iphone.jpg';
import samsung from '../../assets/banner/samsung.jpg';
import motherboard from '../../assets/banner/motherboard.jpg';

const Banner = () => {
    return (
        <div className="carousel h-[500px] w-full my-10 rounded-lg">
            <div id="slide1" className="carousel-item relative w-full">
                <img alt='' src={motherboard} className="w-full opacity-70	" />
                <div className="absolute flex justify-between transform bottom-8 right-8">
                    <a href="#slide3" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute top-[30%] left-[10%] w-8/12'>
                    <h3 className='text-5xl font-semibold'>Super conditioned phones</h3>
                    <p className='mt-8 font-semibold'>Buy phones that are on a good condition within your budget Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit, unde quibusdam quam blanditiis fugit quas fuga ipsa similique voluptas!</p>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img alt='' src={samsung} className="w-full opacity-70	" />
                <div className="absolute flex justify-between transform bottom-8 right-8">
                    <a href="#slide1" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute top-[30%] left-[10%] w-8/12'>
                    <h3 className='text-5xl font-semibold'>Super conditioned phones</h3>
                    <p className='mt-8 font-semibold'>Buy phones that are on a good condition within your budget Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit, unde quibusdam quam blanditiis fugit quas fuga ipsa similique voluptas!</p>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img alt='' src={iphone} className="w-full opacity-70" />
                <div className="absolute flex justify-between transform bottom-8 right-8">
                    <a href="#slide2" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute top-[30%] left-[10%] w-8/12'>
                    <h3 className='text-5xl font-semibold'>Super conditioned phones</h3>
                    <p className='mt-8 font-semibold'>Buy phones that are on a good condition within your budget Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit, unde quibusdam quam blanditiis fugit quas fuga ipsa similique voluptas!</p>
                </div>
            </div>
            </div>
    );
};

export default Banner;