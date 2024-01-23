import Header from '../components/Header'
import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import React from  'react';
import { openInNewTab } from '../providers/OpenAdress';
import {User, UserList} from '../providers/CheckUser'

 function Registrate() {

  const {user,setUser}=useContext(AuthContext)
  
  const [inputMail, setInputMail] = useState('');
  const [inputLogin, setInputLogin] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  function addData() {

    let newData = {
        Mail: inputMail,
        Login: inputLogin,
        Password: inputPassword
    };
    UserList= new User(newData.Mail,newData.Login,newData.Password)
  }

  return (
    <div >
      <main>
        <h1 align="center">Registrate
        <br/>
            <input 
            placeholder="Enter Mail"
            value={inputMail} 
            title="Mail" 
            onChange={(event) => setInputMail(event.target.value)}>
            </input>
            <br/>
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
            <button  type="submit" value="Registrate"  onClick={() => openInNewTab('/Login')&&addData}>
              Registrate
            </button>
        </h1>
      </main>
    </div>
  )
}
export default Registrate