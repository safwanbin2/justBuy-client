import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser, logInWithGoogle, update } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleSignUp = data => {
        console.log(data)
    }
    return (
        <div className='w-11/12 mx-auto my-10 min-h-screen'>
            <div className='w-96 mx-auto shadow-md p-6'>
                <h2 className='text-2xl mb-2'>Create Account: </h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    {/* name */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name: </span>
                        </label>
                        <input {...register('name', {
                            required: 'name can not be empty'
                        })} type="text" placeholder="Full Name" className="input input-bordered w-full" />
                        {errors.name && <p className='text-red-500'><small>{errors.name.message}</small></p>}
                    </div>
                    {/* email */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email: </span>
                        </label>
                        <input {...register('email', {
                            required: "email can not be empty"
                        })} type="email" placeholder="example@gmail.com" className="input input-bordered w-full " />
                        {errors.email && <p className='text-red-500'><small>{errors.email.message}</small></p>}
                    </div>
                    {/* user role */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Account type?</span>
                        </label>
                        <select {...register('role', {
                            
                        })} defaultValue='buyer' className="select select-bordered">
                            <option>buyer</option>
                            <option>seller</option>
                        </select>
                    </div>
                    {/* passowrd */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password: </span>
                        </label>
                        <input {...register('password', {
                            required: "password can not be empty",
                            minLength: { value: 6, message: "password can not be less than six chars" },
                            pattern: { value: /(?=.*[0-9])/, message: "password should a least contain one number" }
                        })} type="password" placeholder="Passwprd" className="input input-bordered w-full " />
                        {errors.password && <p className='text-red-500'><small>{errors.password.message}</small></p>}
                    </div>
                    {/* submitting form */}
                    <input className='btn w-full mt-4' type="submit" value="Sign up" />
                    <p className='text-sm text-center my-4'>Already have an account? <Link to='/login' className='text-semibold text-secondary'>Sign Up</Link></p>
                    {/* divider */}
                    <div className="divider">OR</div>
                    {/* google login */}
                    <button className='btn btn-outline btn-primary w-full'>
                        <p className='text-2xl'><FaGoogle /></p>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;