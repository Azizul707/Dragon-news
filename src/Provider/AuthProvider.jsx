/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


const auth = getAuth( app );

export const AuthContext = createContext( null );
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()



const AuthProvider = ( { children } ) => {

    const [ user, setUser ] = useState( null );
    const [ isLoading, setIsLoading ] = useState( true );

    const googleLogin = () => {
        return signInWithPopup( auth, googleProvider );

    }

    const githubLogin = () => {
        return signInWithPopup( auth, githubProvider );

    }

    const logOut = () => {
        setIsLoading(true)
        return signOut( auth );
    }

    
    const createUser = ( email, password ) => {
        setIsLoading( true );
        return createUserWithEmailAndPassword( auth, email, password );
        
    };

    const userSingIn = ( email, password ) => {
        setIsLoading(true)
        return signInWithEmailAndPassword( auth, email, password );
    }

    useEffect( () => {
        
        const unSubscribe = onAuthStateChanged( auth, ( currentUser ) => {
            setUser( currentUser );
            setIsLoading(false)
        } );
        return () => { unSubscribe() };
    }, [] );

    const authInfo = {
        user,
        isLoading,
        createUser,
        logOut,
        userSingIn,
        googleLogin,
        githubLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;