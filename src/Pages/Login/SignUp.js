import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser, logInWithGoogle, update } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const handleSignUp = data => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                updateUser(data.name)
                console.log(user)
            })
            .catch(error => {
                console.log(error)
            })

        // updating name
        const updateUser = (name) => {
            update(name)
                .then(() => {
                    toast.success('updated ')
                    saveUser(data.name, data.email, data.role);
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    const handleGoogle = () => {
        logInWithGoogle()
            .then(result => {
                const user = result.user;
                saveUser(user.displayName, user.email);
                console.log(user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const saveUser = (name, email, role = 'buyer') => {
        const userData = {
            name,
            email,
            role
        }
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                navigate('/')
            })
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
                </form>
                <p className='text-sm text-center my-4'>Already have an account? <Link to='/login' className='text-semibold text-secondary'>Sign Up</Link></p>
                {/* divider */}
                <div className="divider">OR</div>
                {/* google login */}
                <button onClick={handleGoogle} className='btn btn-outline btn-primary w-full'>
                    <p className='text-2xl'><FaGoogle /></p>
                </button>
            </div>
        </div>
    );
};

export default SignUp;