import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../Pages/Login'

export const withAuth=(Components)=>(props)=>{
        const {user,setUser }=useContext(AuthContext)
        if(!user) 
        return 
        <p>You are not authorized to view this page
                    <BrowserRouter>
                        <Routes>
                            <Route path="*" element={<Login/>} />
                        </Routes>
                    </BrowserRouter>
        </p>
    return <Components{...props}/>
}