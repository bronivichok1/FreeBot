import Header from '../components/Header'
import { redirect } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link, BrowserRouter, Routes, Route,Navigate,useNavigate } from 'react-router-dom';
import Registrate from './Registrate';


 function AuthHome() {
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

export default AuthHome
