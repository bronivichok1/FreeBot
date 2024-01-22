import Header from '../components/Header'
import { redirect } from 'react-router-dom';
import { withAuth } from '../HOC/withAuth';
import { openInNewTab } from '../providers/OpenAdress';

 function Home() {

  return (
    
    <div >
      <main>
          <div align="center">
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