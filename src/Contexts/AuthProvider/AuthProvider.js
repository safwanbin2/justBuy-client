import React, { createContext } from 'react';
import { } from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const user = {
        displayName: "Monu Mia",
        email: "monu@mia.com",
        photoURL: "https://filmfare.wwmindia.com/thumb/content/2022/mar/salmankhantalksaboutsouthindian31648543539.jpg?width=1200&height=900"
    }
    const authInfo = { user }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;