import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase_init';
import Swal from 'sweetalert2';
const AuthProvier = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('')
    const [dbUser, setDbUser] = useState([]);
    const [profile, setProfile] = useState(null);

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

            if (currentUser) {
                //user extra info fatching[name, photo, email]
                fetch('https://garden-server-zeta.vercel.app/users')
                    .then(res => res.json())
                    .then(data => {
                        setDbUser(data);
                        const userProfile = data.find(u => u.email === currentUser.email);
                        setProfile(userProfile);
                    })
                    .catch(err => {
                        Swal.fire({
                            position: 'center',
                            icon: "success",
                            title: `${err.message}`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })
            } else {
                setProfile(null);
            }
        });
        return () => unsubscribe();
    }, [])

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