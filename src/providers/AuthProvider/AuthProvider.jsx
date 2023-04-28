import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from '../../firebasse/firebase_config';


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const user = null;

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser,{ displayName: name, photoURL: photo })
    }
    const authInfo = {
        user,
        createUser,
        loginUser,
        updateUser,
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;