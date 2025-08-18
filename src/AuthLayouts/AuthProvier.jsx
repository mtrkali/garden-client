import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase_init';
const AuthProvier = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('')
    const [dbUser, setDbUser] = useState([]);

    // Register User --
    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //log in user --
    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //log out User --
    const logOut = () => {
        return signOut(auth)
    }

    //google signIn  --
    const provider = new GoogleAuthProvider();
    const goooleLogIn = () => {
        return signInWithPopup(auth, provider)
    }

    // Obserber --
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)

            //user extra info fatching[name, photo, email]
            fetch('http://localhost:3000/users')
                .then(res => res.json())
                .then(data => {
                    setDbUser(data);
                })
                .catch(err => {
                    console.log(err.message);
                })
        })
        return () => {
            return unsubscribe();
        }
    }, [])
      const profile = dbUser?.find(dbUserP => dbUserP.email === user?.email)

    const userInfo = {
        registerUser,
        logInUser,
        user,
        setUser,
        error,
        setError,
        logOut,
        loading,
        goooleLogIn,
        dbUser,
        setDbUser,
        profile
    }
    return (
        <AuthContext value={userInfo}>{children}</AuthContext>
    );
};

export default AuthProvier;