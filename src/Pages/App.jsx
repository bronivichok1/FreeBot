import Header from '../Components/Header'
import Button from '../Components/Button.jsx'
import InputData from '../Components/InputData'
import styles from '../Style/App_module.css'
import { redirect } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registrate from './Registrate';


 function App() {
  const {user,setUser}=useContext(AuthContext)
  return (
    <div >
      <Header></Header>
      <main>
          <h1 className={styles.item} align="center">
            FreeBot
          </h1 >
          <h1 align="center">Login<br/>
            <InputData title="Login"></InputData>
            <InputData title="Password"> </InputData>
            {user?(
              <>
                <h1>
                  Welcom. {user.name}!
                </h1>
                <button onClick={()=>setUser(null)}>
                  Logout
                </button>
              </>): <button onClick={()=>setUser({name:"Lesha"})}>
                  Login
                </button>
              }
              
              <BrowserRouter>
                <Routes>
                  <Route path="Registrate" element={<Registrate/>} />
                </Routes>
              </BrowserRouter>
            <button >
              Registrate
            </button>
          </h1>
      </main>
    </div>
  )
}

export default App
