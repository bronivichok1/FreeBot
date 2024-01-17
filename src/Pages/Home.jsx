import Header from '../Components/Header'
import Button from '../Components/Button.jsx'
import styles from '../Style/App_module.css'
import { redirect } from 'react-router-dom';



 function Home() {
  return (
    <div >
      <Header></Header>
      <main>
          <h1 className={styles.item} align="center">
            FreeBot
          </h1 >
        <h1 align="center">Profile<br/>
              <button onClick={redirect("/Home")}>
                FreeBotPanel
              </button>
            
            
        </h1>
      </main>
    </div>
  )
}
export default withAuth(Home)