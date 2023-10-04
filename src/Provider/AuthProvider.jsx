/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


const auth = getAuth( app );

export const AuthContext = createContext( null );



const AuthProvider = ( { children } ) => {

    const [ user, setUser ] = useState( null );

    const logOut = () => {
        return signOut( auth );
    }

    
    const createUser = ( email, password ) => {
        return createUserWithEmailAndPassword( auth, email, password );
    };

    const userSingIn = ( email, password ) => {
        return signInWithEmailAndPassword( auth, email, password );
    }

    useEffect( () => {
        
        const unSubscribe = onAuthStateChanged( auth, ( currentUser ) => {
            setUser( currentUser );
        } );
        return () => { unSubscribe() };
    }, [] );

    const authInfo = {
        user,
        createUser,
        logOut,
        userSingIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;