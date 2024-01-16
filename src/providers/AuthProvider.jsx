import { useState } from "react";
import { createContext } from "react";
import React, { Component } from "react";
import { Provider, children } from 'react-redux'


export const AuthContext= createContext()

const AuthProvider =({children})=>{
const [user, setUser]=useState(null)

    return (<AuthContext.Provider value={{user, setUser}}>
        {children}
        </AuthContext.Provider>
) }

export default AuthProvider