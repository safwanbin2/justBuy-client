import React from 'react';

const SendMail = () => {
    return (
        <div className='my-10'>
            <h2 className='text-2xl font-semibold my-10'>Send a Mail: </h2>
            <div className='w-8/12 mx-auto'>
                <input type="text" placeholder="Your email" className="input input-bordered input-warning w-full my-2" />
                <input type="text" placeholder="Message" className="input input-bordered input-warning w-full h-28 my-2" />
                <input className='btn btn-primary my-2 w-3/12' type="submit" value="Send" />
            </div>
        </div>
    );
};

export default SendMail;