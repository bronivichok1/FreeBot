import Header from '../Components/Header'
import Button from '../Components/Button.jsx'
import InputData from '../Components/InputData'
import styles from '../Style/App_module.css'
import { redirect } from 'react-router-dom';
import { withAuth } from '../HOC/withAuth';
const syze=10
let i=0
let CommandListArray=[syze]

function CommandList() {

  return (
    <div >
      <Header></Header>
      <main>
        <h1 align="center">CommandList<br/>
            <ul>
              <li>

              </li>
            </ul>
        </h1>
      </main>
    </div>
  )
}
export default withAuth(CommandList)

