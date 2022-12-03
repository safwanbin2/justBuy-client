import React from 'react';

const Loader = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            {/* <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full flex justify-center items-center" role="status">
                <span className="visually-hidden">X</span>
            </div> */}
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-blue-400"></div>
        </div>
    );
};

export default Loader;