import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const {createUser, logInWithGoogle, update} = useContext(AuthContext);
    return (
        <div>
            <h2>this is singup</h2>
        </div>
    );
};

export default SignUp;