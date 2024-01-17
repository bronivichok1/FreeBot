import Header from '../Components/Header'
import Button from '../Components/Button.jsx'
import InputData from '../Components/InputData'
import styles from '../Style/App_module.css'
import { redirect } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { BrowserRouter, Routes, Route,Navigate,useNavigate } from 'react-router-dom';
import Registrate from './Registrate';
import App from './App'

const Redirect = <Navigate to="/new-page" replace={true} state={{from: 'old-page'}} />

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