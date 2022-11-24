import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Login = () => {
    const {logIn, logInWithGoogle} = useContext(AuthContext);
    return (
        <h2>nothing</h2>
        // <div className='flex justify-center items-center flex-col min-h-screen'>
        //     <div className="w-96 p-8 shadow-lg ">
        //         <h2 className='text-xl text-center'>Sign Up</h2>
        //         <form onSubmit={handleSubmit(handleFormSubmit)}>
        //             <label className="label">
        //                 <span className="label-text">Name</span>
        //             </label>
        //             <input
        //                 {...register("name", {
        //                     required: "name can not be empty"
        //                 })}
        //                 className="input input-bordered w-full" type="text" />
        //             {errors.name && <p className='text-error text-sm my-2'>{errors.name.message}</p>}

        //             <label className="label">
        //                 <span className="label-text">Email</span>
        //             </label>
        //             <input
        //                 {...register("email", {
        //                     required: "email can not be empty",
        //                 })}
        //                 className="input input-bordered w-full" type="email" />
        //             {errors.email && <p className='text-error text-sm my-2'>{errors.email.message}</p>}

        //             <label className="label">
        //                 <span className="label-text">Password</span>
        //             </label>
        //             <input
        //                 {...register("password", {
        //                     required: "password can not be empty",
        //                     minLength: { value: 6, message: "password should at least be 6 character long" },
        //                     pattern: { value: /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])/, message: "password should be strong" }
        //                 })}
        //                 className="input input-bordered w-full" type="password" />
        //             {errors.password && <p className='text-error text-sm my-2'>{errors.password.message}</p>}

        //             {/* submiting */}
        //             <input type="submit" value="Login" className='btn btn-neutral w-full mt-6' />
        //         </form>
        //         <p className='text-sm text-center my-4'>Already have an account? <Link to='/login' className='text-semibold text-secondary'>Sign Up</Link></p>

        //         <div className="divider">OR</div>

        //         <button onClick={handleGoogle} className='btn btn-outline w-full'>continue with google</button>
        //     </div>
        // </div>
    );
};

export default Login;