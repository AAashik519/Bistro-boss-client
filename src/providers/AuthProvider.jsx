import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
 
import { getAuth } from "firebase/auth";
import app from '../config/firebase.config';
const auth = getAuth(app);

 
export const AuthContext= createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading , setLoading]= useState(true)
    console.log( user);

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }

    const logOutUser=()=>{
        setLoading(true)
        return signOut(auth)
    }

    const  updateUserProfile=(name ,photo)=>{
        setLoading(true)
       return updateProfile(auth.currentUser, {
            displayName:name, photoURL: photo 
          }) 
    }




    useEffect(()=>{
      const unSubscribe= onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            setLoading(false)
        });
        return ()=>{
            return unSubscribe
        }
    },[])




    const authInfo={
        user,
        loading,
        createUser,
        loginUser,
        logOutUser,
        updateUserProfile
        
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider