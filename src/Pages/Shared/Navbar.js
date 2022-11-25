import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Logged out successfully')
            })
            .catch(err => {
                console.log(err)
            })
    }
    const navItmes = <>
        <li><Link to='/'>Home</Link></li>
        {
            user ? <>
                <li><Link to='/dashboard'>Dashborad</Link></li>
                <li><button onClick={handleLogOut}>Logout</button></li>
            </>
                : <li><Link to='/login'>Login</Link></li>
        }
        <li><Link to='/' className="">BLog</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navItmes
                        }
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">justBuy</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {
                        navItmes
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <label htmlFor="my-drawer-2" className="btn btn-circle swap swap-rotate lg:hidden">


                    <input type="checkbox" />


                    <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>


                    <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                </label>
            </div>
        </div>
    );
};

export default Navbar;