import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';

const DashboardLayout = () => {
    const buyerMenu = <>
        <li><Link to='/dashboard/myorders'>My Orders</Link></li>
    </>

    const sellerMenu = <>
        <li><Link>My Products</Link></li>
        <li><Link to='/dashboard/addproducts'>Add a Product</Link></li>
        <li><Link>My Buyers</Link></li>
    </>

    const adminMenu = <>
        <li><Link>All Sellers</Link></li>
        <li><Link>All Buyers</Link></li>
        <li><Link>Reported Items</Link></li>
    </>
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {
                            buyerMenu
                        }
                        {
                            sellerMenu
                        }
                        {
                            adminMenu
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;