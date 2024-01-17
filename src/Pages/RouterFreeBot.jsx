
import { redirect } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { BrowserRouter, Routes, Route,Navigate,useNavigate } from 'react-router-dom';
import Registrate from './Registrate';
import App from './App'



function RouterFreeBot() 
{

    return (
        <Routes>
            <Route path="/" element={<App/>}/>
                <Route index element={<App />} />
                <Route path="Registrate" element={<Registrate/>}>
            </Route>
        </Routes>
    )
}

export default RouterFreeBot