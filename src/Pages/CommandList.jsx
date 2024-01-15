import Header from '../Components/Header'
import Button from '../Components/Button.jsx'
import InputData from '../Components/InputData'
import styles from '../Style/App_module.css'
import { redirect } from 'react-router-dom';

const syze=10
let i=0
let CommandList=[syze]

 export default function App() {
  return (
    <div >
      <Header></Header>
      <main>
        <h1 align="center">CommandList<br/>
            <ul>
                <li>
{while (i<syze) {
    CommandList[i]
    i++
}
              </li>
            </ul>
        </h1>
      </main>
    </div>
  )
}


