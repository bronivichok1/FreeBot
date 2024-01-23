import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Pages/App'
import AuthProvider from './providers/AuthProvider'
import { BrowserRouter, Routes, Route,Navigate,useNavigate } from 'react-router-dom';
import Registrate from './Pages/RouterFreeBot';
import RouterFreeBot from './Pages/RouterFreeBot';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <AuthProvider>
    <App/>
    </AuthProvider>
    </React.StrictMode>
);