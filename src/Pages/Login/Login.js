import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { logIn, logInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleLogIn = data => {
        logIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                getJWTtoken(user.email);
                toast.success('Logged in successfully')
                navigate('/')
            })
            .catch(err => {
                console.error(err)
            })
    }

    const handleGoogle = () => {
        logInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
                getJWTtoken(user.email)
                toast.success('Logged in successfully')
                navigate('/')
            })
            .catch(error => {
                console.error(error)
            })
    }

    // get jwt token
    const getJWTtoken = email => {
        if (email) {
            fetch(`http://localhost:5000/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data.token)
                    localStorage.setItem('justbuy-token', data.token)
                })
        }
    }

    return (
        <div className='w-11/12 mx-auto my-10 min-h-screen'>
            <div className='w-96 mx-auto shadow-md p-6'>
                <h2 className='text-2xl mb-2'>Create Account: </h2>
                <form onSubmit={handleSubmit(handleLogIn)}>
                    {/* email */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email: </span>
                        </label>
                        <input {...register('email', {
                            required: "email can not be empty"
                        })} type="email" placeholder="admin@gmail.com" className="input input-bordered w-full " />
                        {errors.email && <p className='text-red-500'><small>{errors.email.message}</small></p>}
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
                        })} type="password" placeholder="admin123" className="input input-bordered w-full " />
                        {errors.password && <p className='text-red-500'><small>{errors.password.message}</small></p>}
                    </div>
                    {/* submitting form */}
                    <input className='btn w-full mt-4' type="submit" value="Login" />
                </form>
                <p className='text-sm text-center my-4'>Don't have an account? <Link to='/signup' className='text-semibold text-secondary'>Sign Up</Link></p>
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

export default Login;