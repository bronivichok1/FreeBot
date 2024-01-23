import Header from '../components/Header'
import { redirect } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link, BrowserRouter, Routes, Route,Navigate,useNavigate } from 'react-router-dom';
import Registrate from './Registrate';
import Login from './Login';
import CommandList from './CommandList';
import Timer from './Timer';
import Home from './Home';
import FreeBotPanel from './FreeBotPanel';
import Music from '../Music';
import Video from './Video';


 
function App() {
  return (
    <div >
      <Header></Header>
      <main>
          <h1  align="center">
            FreeBot
          </h1 >
          <BrowserRouter>
            <Routes>
              <Route path="Login" element={<Login/>} />
              <Route path="Registrate" element={<Registrate/>} />
              <Route path="CommandList" element={<CommandList/>} />
              <Route path="Timer" element={<Timer/>} />
              <Route path="Home" element={<Home/>} />
              <Route path="FreeBotPanel" element={<FreeBotPanel/>} />
              <Route path="Music" element={<Music/>} />
              <Route path="Video" element={<Video/>} />

            </Routes>
          </BrowserRouter>
      </main>
    </div>
  )
}

export default App
