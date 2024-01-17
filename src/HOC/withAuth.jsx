import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../index'

export const withAuth=(Components)=>(props)=>{
        const {user,setUser }=useContext(AuthContext)
        if(!user) 
        return 
        <p>You are not authorized to view this page
                    <BrowserRouter>
                        <Routes>
                            <Route path="*" element={<App/>} />
                        </Routes>
                    </BrowserRouter>
        </p>
    return <Components{...props}/>
}