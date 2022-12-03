import React from 'react';
import { Link } from 'react-router-dom';
// import iphone from '../../assets/banner/iphone.jpg';
// import samsung from '../../assets/banner/samsung.jpg';
// import motherboard from '../../assets/banner/motherboard.jpg';

const Banner = () => {
    return (
        // <div classNameName="carousel h-[500px] w-full my-10 rounded-lg">
        //     <div id="slide1" classNameName="carousel-item relative w-full">
        //         <img alt='' src={motherboard} classNameName="w-full opacity-70" />
        //         <div classNameName="absolute flex justify-between transform bottom-8 right-8">
        //             <a href="#slide3" classNameName="btn btn-circle mr-4">❮</a>
        //             <a href="#slide2" classNameName="btn btn-circle">❯</a>
        //         </div>
        //         <div classNameName='absolute top-[30%] left-[10%] w-8/12 text-white'>
        //             <h3 classNameName='text-5xl font-semibold'>Super conditioned phones</h3>
        //             <p classNameName='mt-8 font-semibold'>Buy phones that are on a good condition within your budget Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit, unde quibusdam quam blanditiis fugit quas fuga ipsa similique voluptas!</p>
        //         </div>
        //     </div>
        //     <div id="slide2" classNameName="carousel-item relative w-full">
        //         <img alt='' src={samsung} classNameName="w-full opacity-70	" />
        //         <div classNameName="absolute flex justify-between transform bottom-8 right-8">
        //             <a href="#slide1" classNameName="btn btn-circle mr-4">❮</a>
        //             <a href="#slide3" classNameName="btn btn-circle">❯</a>
        //         </div>
        //         <div classNameName='absolute top-[30%] left-[10%] w-8/12 text-white'>
        //             <h3 classNameName='text-5xl font-semibold'>Super conditioned phones</h3>
        //             <p classNameName='mt-8 font-semibold'>Buy phones that are on a good condition within your budget Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit, unde quibusdam quam blanditiis fugit quas fuga ipsa similique voluptas!</p>
        //         </div>
        //     </div>
        //     <div id="slide3" classNameName="carousel-item relative w-full">
        //         <img alt='' src={iphone} classNameName="w-full opacity-70" />
        //         <div classNameName="absolute flex justify-between transform bottom-8 right-8">
        //             <a href="#slide2" classNameName="btn btn-circle mr-4">❮</a>
        //             <a href="#slide1" classNameName="btn btn-circle">❯</a>
        //         </div>
        //         <div classNameName='absolute top-[30%] left-[10%] w-8/12'>
        //             <h3 classNameName='text-5xl font-semibold'>Super conditioned phones</h3>
        //             <p classNameName='mt-8 font-semibold'>Buy phones that are on a good condition within your budget Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit, unde quibusdam quam blanditiis fugit quas fuga ipsa similique voluptas!</p>
        //         </div>
        //     </div>
        //     </div>
        // style={{ backgroundImage: `url(${samsung})` }}

        <section className="dark:text-gray-800">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-center">
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src="https://mambaui.com/assets/svg/Business_SVG.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">just
                        <span className="dark:text-blue-400">Buy</span>
                    </h1>
                    <h3 className="my-2 text-2xl font-bold leading-none sm:text-2xl">
                        <span className="">- Buy & Sell old phones</span>
                    </h3>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">an online platform for buying and selling phones
                        <br className="hidden md:inline lg:hidden" />We prvoide online payment through <span className='text-blue-400 font-semibold text-xl'>Stripe</span>
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link to='/blog' rel="noopener noreferrer" className="px-8 py-3 text-lg font-semibold rounded dark:bg-blue-400 dark:text-gray-900">Blog</Link>
                        <Link to='/login' rel="noopener noreferrer" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Get Started</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;