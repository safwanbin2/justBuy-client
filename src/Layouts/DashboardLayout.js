import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Loader from '../Components/Loader';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useSeller from '../Hooks/useSeller';
import Navbar from '../Pages/Shared/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const [isSeller, isSellerLoading] = useSeller(user?.email);

    if (isAdminLoading || isSellerLoading) {
        return <Loader></Loader>;
    }

    const buyerMenu = <>
        <li><Link to='/dashboard/myorders'>My Orders</Link></li>
        <li><Link to='/dashboard/wishlist'>Wishlist</Link></li>
    </>

    const sellerMenu = <>
        <li><Link to='/dashboard/myproducts'>My Products</Link></li>
        <li><Link to='/dashboard/addproducts'>Add a Product</Link></li>
    </>

    const adminMenu = <>
        <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
        <li><Link to='/dashboard/allsellers'>All Sellers</Link></li>
    </>
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content m-5">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {
                            !isSeller && !isAdmin && buyerMenu
                        }
                        {
                            isSeller && sellerMenu
                        }
                        {
                            isAdmin && adminMenu
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;