import Header from '../components/Header'
import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import React from  'react';
import { openInNewTab } from '../providers/OpenAdress';
import { CheckUser} from '../providers/CheckUser'

function Login() {

    const {user,setUser}=useContext(AuthContext)
    
    const [inputLogin, setInputLogin] = useState('');
    const [inputPassword, setInputPassword] = useState('');
   
    const handleChangeLogin = (event) => {
      inputLogin(event.target.value);
        }
   
        const handleChangePassword = (event) => {
      inputPassword(event.target.value);
        }
    
      function addData() {
  
      let newData = {
          Login: inputLogin,
          Password: inputPassword
      };
      return CheckUser(newData.Login,newData.Password) 
    }
    
    function adress(){
    if(addData==1)
    {
      return () => openInNewTab('/Home')
    }
    else{
        return () => openInNewTab('/Login')
    }

    }
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
                <button type="submit" value="Login"  onClick={addData&&adress}>
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