import React, {  createContext,useEffect,useState } from 'react'

import app from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {  onAuthStateChanged } from "firebase/auth";
//AuthContext: This is a variable name that's assigned the result of the createContext() function. It's conventionally named in PascalCase, 
//which is a common convention for naming contexts or components in React.
//createContext(): This is a function provided by React that creates a new context.
// In this line, createContext() is called without any arguments, creating a new context instance that will be stored in the variable AuthContext.
export const AuthContext = createContext();
//createContext() kiyana funtion eka result eka haduna gamanma eka AuthContext kiyana variable ekta assing wnwa.

const auth = getAuth(app);
const  googleprovider = new GoogleAuthProvider();

//const AuthProvider = () => { ... }: This declares a functional component named AuthProvider. 
//This component might serve as a container for managing authentication-related states and possibly providing them to other components via React Context or props

const AuthProvider = ({children}) => {

    const[user,setUser] = useState(null);
    const[loading,setLoading] = useState(true);

    const createUser = (email,password) => {
       setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password)
    }

     const loginwithGoogel = () =>{
      setLoading(true);
      return signInWithPopup(auth, googleprovider)

     }


 // sign in with user 
 const login =(email,password) =>{
  setLoading(true);
  return signInWithEmailAndPassword(auth, email, password)
 }








     useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth,currentUser =>{
              //console.log(currentUser);
              setUser(currentUser)
              setLoading(false);
     })
          return() =>{ 
            return unsubscribe();
          }
     },[])

     const authInfo =
     {
        user,
        createUser,
        loginwithGoogel,
        loading,
        login

     }
  return (
    <AuthContext.Provider value={authInfo} >
                        {children}                    
    </AuthContext.Provider>
  )
}

export default AuthProvider

/*--------------------------------usestate----------------------------
Okay, imagine you have a special box. Inside this box, you can keep a toy or anything you like.
useState is like having a magical box. But this box isn't for toys; it's for keeping a special piece of information in your computer. 
You can change this information whenever you want!
When you start, the box is empty. But you can put something inside it. Let's say you want to keep track of your favorite color. 
You put the name of your color inside the box.
Later, if you decide you like a different color, you can take out the old color and put the new one in. 
The box always keeps just one thing inside at a time.
So, useState is like your magical box where you can keep changing what's inside whenever you want!
Sure! Imagine you have two magical boxes this time. One is for holding the name of your favorite toy, and the other one is for telling whether you're busy playing or not.

The first box, user (which you got from useState(null)), is for holding the name of your favorite toy. At the beginning, it's empty. 
But when you decide your favorite toy is, let's say, a teddy bear named "Teddy," you put the name "Teddy" inside that box.
The second box, loading (which came from useState(true)), is for telling if you're busy playing or not. 
At first, you're super excited and playing a lot, so you put a note saying "Yes, playing!" inside the loading box.
Now, if something changes while you're playing—maybe your favorite toy changes or you need to pause your playtime—you can open these boxes and change what's inside.
For example, if your favorite toy changes from "Teddy" to "Robot," you take out "Teddy" from the user box and put "Robot" inside. Similarly, if you decide you want to take a break from playing,
 you change the note in the loading box from "Yes, playing!" to "No, taking a break."
These boxes (user and loading) are like special containers where you keep important information. And with useState, 
you can change what's inside these containers whenever you need to
 */