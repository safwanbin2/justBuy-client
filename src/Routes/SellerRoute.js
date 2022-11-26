import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Components/Loader';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import useSeller from '../Hooks/useSeller';

const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useSeller(user?.email);
    const location = useLocation();

    if (loading || isSellerLoading) {
        return <Loader></Loader>
    }
    if (user && isSeller) {
        return children;
    }

    if (!user && !isSeller) {
        return (
            <Navigate to='/login' state={{ from: location }} replace></Navigate>
        );
    }
};

export default SellerRoute;