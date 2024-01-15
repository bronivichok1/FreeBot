import Header from '../Components/Header'
import Button from '../Components/Button.jsx'
import InputData from '../Components/InputData'
import styles from '../Style/App_module.css'
import { redirect } from 'react-router-dom';



 export default function App() {
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
              <button onClick={redirect("/Home")}>
                Login
              </button>
            <button onClick={redirect("/Registrate")}>
              Registrate
            </button>
        </h1>
      </main>
    </div>
  )
}


