import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Login = () => {
    const {logIn, logInWithGoogle} = useContext(AuthContext);
    return (
        <div>
           <h2>this is signup</h2> 
        </div>
    );
};

export default Login;