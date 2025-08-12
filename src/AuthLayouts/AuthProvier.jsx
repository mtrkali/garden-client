import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase_init';
const AuthProvier = ( {children} ) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState('')
    // Register User --
    const registerUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //log in user --
    const logInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //log out User --
    const logOut = () =>{
        return signOut(auth)
    }

    // Obserber --
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        })
        return () =>{
            return unsubscribe();
        }
    },[])

    const userInfo = {
        registerUser,
        logInUser,
        user,
        setUser,
        error,
        setError,
        logOut,
        loading,
    }
    return (
        <AuthContext value={userInfo}>{children}</AuthContext>
    );
};

export default AuthProvier;