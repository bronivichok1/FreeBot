import Header from '../components/Header'
import { redirect } from 'react-router-dom';
import { withAuth } from '../HOC/withAuth';


function CommandList() {
  const syze=10
  let i=0
  let CommandListArray=[syze]
  
  return (
    <div >
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
export default CommandList

