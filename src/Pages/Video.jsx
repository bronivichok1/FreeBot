import Header from '../components/Header'
import { withAuth } from '../HOC/withAuth';
import { openInNewTab } from '../providers/OpenAdress';
import React, { useState } from 'react';

 

const syze=100
let videoLink=[syze]
videoLink=["https://www.youtube.com/embed/9bZkp7q19f0?si=40XaBkK_mnYWpdcT","https://www.youtube.com/embed/b-lb7UOJ_pM?si=seGHPbKnhauhEAiF"]

function Video() {

  const [count, setCount] = useState(0)
  const [inputLink, setInputLink] = useState('');

  const handleChange = (event) => {
      setInputLink(event.target.value);
        }
  
  function newLinkForMas(Link){
      if(Link!=0||null){
        videoLink.push(Link)
      }
        else{}
        }
  
  return (
    
    <div >
      <main>
          <div align="center">
              <br/>
              <iframe width="560" height="315" 
              src={videoLink[count]} 
              title="YouTube video player" f
              rameborder="1" 
              allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen>
              </iframe>
            <div alright="center">
              <button alright="left" onClick={() => setCount(count + 1)}>
                Next
              </button>
              <button alright="right" onClick={() => setCount(count - 1)} >
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
                            Добавить
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
