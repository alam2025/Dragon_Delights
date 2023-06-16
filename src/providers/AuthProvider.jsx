

import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider= new GithubAuthProvider();

const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null)
      const [loading, setLoading] = useState(true)
      //user create using email and password
      const createUser = (email, pass) => {
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, pass);
      }

      //Sign in User using  email pass
      const logIn = (email, pass) => {
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, pass);
      }

      //sign in using google
      const googleSignIn = () => {
            setLoading(true);
            return signInWithPopup(auth, googleProvider);
      }


      //github sign in
      const gitHubSignIn=()=>{
            setLoading(true);
            return signInWithPopup(auth,githubProvider);
      }
      //log out
      const logOut = () => {
            setLoading(true);
            return signOut(auth);
      }

      //profile setUp
      const setProfile = (name, photoUrl) => {
            setLoading(true)
            return updateProfile(auth.currentUser, {
                  displayName: name,
                  photoURL: photoUrl
            })
      }

      useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                  setUser(currentUser);

                  

                  setLoading(false)
            })

            return () => {
                  return unsubscribe()
            }
      }, [])





      const authInfo = {
            createUser,
            logIn,
            logOut,
            googleSignIn,
            setProfile,
            gitHubSignIn,
            user,
            loading
      }
      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;