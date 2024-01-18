import Header from '../Components/Header'
import Button from '../Components/Button.jsx'
import styles from '../Style/App_module.css'
import { redirect } from 'react-router-dom';
import { withAuth } from '../HOC/withAuth';
import { openInNewTab } from '../providers/OpenAdress';

 function Home() {

  return (
    
    <div >
      <main>
          <div className={styles.item} align="center">
              <br/>
              PROFILE
              <br/>
              <br/>
              <button onClick={() => openInNewTab('/FreeBotPanel')}>
                FreeBotPanel
              </button>
        </div>
      </main>
    </div>
  )
}
export default Home