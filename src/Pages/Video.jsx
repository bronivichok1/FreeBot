import Header from '../components/Header'
import { redirect } from 'react-router-dom';
import { withAuth } from '../HOC/withAuth';
import { openInNewTab } from '../providers/OpenAdress';

 function Video() {

  return (
    
    <div >
      <main>
          <div align="center">
              <br/>
              <iframe width="560" height="315" 
              src="https://www.youtube.com/embed/9bZkp7q19f0?si=40XaBkK_mnYWpdcT" 
              title="YouTube video player" f
              rameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen>
              </iframe>
        </div>
      </main>
    </div>
  )
}
export default Video
