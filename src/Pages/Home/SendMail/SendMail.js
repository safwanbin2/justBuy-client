import React from 'react';

const SendMail = () => {
    return (
        // <div className='my-10 bg-base-200 p-2 md:p-5 rounded-lg'>
        //     <div className='w-11/12 md:w-8/12 mx-auto'>
        //         <h2 className='text-2xl font-semibold my-4'>Send a Mail: </h2>
        //         <input type="text" placeholder="Your email" className="input input-bordered input-warning w-full my-2" />
        //         <input type="text" placeholder="Message" className="input input-bordered input-warning w-full h-28 my-2" />
        //         <input className='btn btn-primary my-2 w-3/12' type="submit" value="Send" />
        //     </div>
        // </div>

        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100 my-10">
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                    <div className="dark:text-gray-400">Write Bellow if anything pops up on your Mind</div>
                </div>
                <img src="https://mambaui.com/assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
            </div>
            <form novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div>
                    <label for="name" className="text-sm">Full name</label>
                    <input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-700" />
                </div>
                <div>
                    <label for="email" className="text-sm">Email</label>
                    <input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-700" />
                </div>
                <div>
                    <label for="message" className="text-sm">Message</label>
                    <textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-700" spellcheck="false"></textarea>
                </div>
                <button type="submit" disabled className=" w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-blue-400 dark:text-gray-900">Send Message</button>
            </form>
        </div>
    );
};

export default SendMail;