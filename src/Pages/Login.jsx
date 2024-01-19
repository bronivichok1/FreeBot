import Header from '../Components/Header'
import Button from '../Components/Button.jsx'
import InputData from '../Components/InputData'
import styles from '../Style/App_module.css'
import { redirect } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import React from  'react';
import { openInNewTab } from '../providers/OpenAdress';


function Login() {

    const {user,setUser}=useContext(AuthContext)
    
    const [inputLogin, setInputLogin] = useState('');
    const [inputPassword, setInputPassword] = useState('');
  
    function addData() {
  
      let newData = {
          Login: inputLogin,
          Password: inputPassword
      };}
    return (
    <div >
      <main>
          <div align="center">Login<br/>
              <input
              placeholder="Enter Login"
              value={inputLogin} 
              title="Login" 
              onChange={(event) => setInputLogin(event.target.value)}>
              </input>
            <br/>
              <input 
              placeholder="Enter Password"
              value={inputPassword}
              title="Password" 
              onChange={(event) => setInputPassword(event.target.value)}>
              </input>
            <br/>
              <button type="submit" value="Login"  onClick={/*()=>setUser({name:"Lesha"})&&*/addData&&(() => openInNewTab('/Home'))} >
              Login
              </button>
              
            <button type="submit" value="Registrate" onClick={() => openInNewTab('/Registrate')}>
              Registrate
            </button>
        </div>
      </main>
    </div>
  )
}
export default Login