import React from 'react';
import dash from '../../assets/dash.jpg';

const Dashboard = () => {
    return (
        <div className="hero h-[500px]" style={{ backgroundImage: `url(${dash})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Control your Orders and wishlist . And if You are seller or admin, you will have more power to do stuffs</p>
                    <button className="btn btn-primary btn-disabled">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;