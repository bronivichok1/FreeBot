import Header from '../components/Header'
import { redirect } from 'react-router-dom';
import { withAuth } from '../HOC/withAuth';


function FreeBorPanel() {
  return (
    <div >
      <main>
          <h1 align="center">
            FreeBotPanel
          </h1 >
        <p align="center">
              <button onClick={redirect("/Timer")}>
                Timer
              </button>
              <button onClick={redirect("/CommandList")}>
                CommandList
              </button>
        </p>
      </main>
    </div>
  )
}

export default FreeBorPanel