import Header from '../components/Header'
import { withAuth } from '../HOC/withAuth';
import { openInNewTab } from '../providers/OpenAdress';
import React, { useState } from 'react';




function Video() {
 
  let videoLink=["https://www.youtube.com/embed/9bZkp7q19f0?si=40XaBkK_mnYWpdcT","https://www.youtube.com/embed/b-lb7UOJ_pM?si=seGHPbKnhauhEAiF","https://www.youtube.com/embed/cEhgYbPdjkI?si=dCadj_qBpP1wD5dp"]
  
  const [count, setCount] = useState(0)
  const [inputLink, setInputLink] = useState('');

  const handleChange = (event) => {
      setInputLink(event.target.value);
        }
  
  function newLinkForMas(Link){
      if(Link!==null){
         videoLink.push(Link)
      }
      else{}
    }

  function deleteLinkForMas(number){
         videoLink.splice(number,1)
        }

  function srcCount(number){
    if(number<videoLink.length&&number>=0)
    {
      return videoLink[number]
    }
    else{
      return videoLink[0]&&setCount(0)
    }
  }
  return (
    
    <div >
      <main>
          <div align="center">
              <br/>
              <iframe width="560" height="315" 
              src={srcCount(count)} 
              title="YouTube video player" 
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" >
              </iframe>
            <div alright="center">
              <button alright="right" onClick={() => setCount(count + 1)}>
                Next
              </button>
              <button alright="left" onClick={() => setCount(count - 1)} >
                Back
              </button>
            </div>
                <div >
                  <main>
                    <div align="center">
                        <input placeholder="Enter link"
                          value={inputLink}
                          onChange={handleChange}></input>
                          <button onClick={newLinkForMas(inputLink)}>
                            Add
                          </button>
                          <button onClick={deleteLinkForMas(count)}>
                            Delete this
                          </button>
                    </div>
                  </main>
                </div>      
        </div>
      </main>
    </div>
  )
}
export default Video
