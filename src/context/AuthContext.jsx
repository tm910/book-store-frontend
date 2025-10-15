import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

const AuthContext = createContext()
export const useAuth = () => {
    return useContext(AuthContext)
}

//auth Provider
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({})
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()
    // register a user
    const registerUser = async (email, password) => {
       return await createUserWithEmailAndPassword(auth, email, password)
    }
     // login a user
    const loginUser = async (email, password) => {
       return await signInWithEmailAndPassword(auth, email, password)
    }

    // register with google
    const signupWithGoogle = async () => {
        return await signInWithPopup(auth, googleProvider)
    }
    //logout
    const logout = () => {
        return signOut(auth)
    }
    // manage user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        console.log("Firebase user object:", user);
        if (user) {
            const { email, displayName, photoURL } = user;
            const userData = {email, username: displayName, photo: photoURL}
      } 
      
    });

    return () => unsubscribe();
    }, []);
    console.log("current user google auth =======>>>>>", currentUser)
    const value = {
        loading,
        currentUser,
        registerUser,
        loginUser,
        signupWithGoogle,
        logout
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}