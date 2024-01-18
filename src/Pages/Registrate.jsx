import Header from '../Components/Header'
import Button from '../Components/Button.jsx'
import InputData from '../Components/InputData'
import styles from '../Style/App_module.css'
import { redirect } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';



 function Registrate() {
  const red = () => {
    redirect('/login');
  }

  return (
    <div >
      <main>
        <h1 align="center">Registrate<br/>
            <InputData title="mail"></InputData>
            <InputData title="Login"></InputData>
            <InputData title="Password"> </InputData>
            <button onClick={red}>
              Registrate
            </button>
        </h1>
      </main>
    </div>
  )
}
export default Registrate