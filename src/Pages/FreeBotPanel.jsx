import Header from '../Components/Header'
import Button from '../Components/Button.jsx'
import InputData from '../Components/InputData'
import styles from '../Style/App_module.css'
import { redirect } from 'react-router-dom';
import { withAuth } from '../HOC/withAuth';


function FreeBorPanel() {
  return (
    <div >
      <Header></Header>
      <main>
          <h1 className={styles.item} align="center">
            FreeBotPanel
          </h1 >
        <h1 align="center">
              <button onClick={redirect("/Timer")}>
                Timer
              </button>
            <button onClick={redirect("/CommandList")}>
              CommandList
            </button>
        </h1>
      </main>
    </div>
  )
}

export default withAuth(FreeBorPanel)