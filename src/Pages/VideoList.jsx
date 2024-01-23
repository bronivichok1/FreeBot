import React, { useState } from 'react';


const syze=100
export let videoLink=[syze]
videoLink=["https://www.youtube.com/embed/9bZkp7q19f0?si=40XaBkK_mnYWpdcT","https://www.youtube.com/embed/b-lb7UOJ_pM?si=seGHPbKnhauhEAiF"]


function VideoList(){

const [inputLink, setInputLink] = useState('');
videoLink=["https://www.youtube.com/embed/9bZkp7q19f0?si=40XaBkK_mnYWpdcT","https://www.youtube.com/embed/b-lb7UOJ_pM?si=seGHPbKnhauhEAiF"]

const handleChange = (event) => {
    setInputLink(event.target.value);
      }

function newLinkForMas(Link){
    for (let i = 0; i < syze; i++) {
        if(videoLink[i]==null){
            videoLink[i]=Link
        }
        else{
            i++
        }
      }

}
    return(

    <div >
      <main>
        <div align="center">
            <input placeholder="Enter link"
              value={inputLink}
              title="Password" 
              onChange={handleChange}></input>
              <button onClick={newLinkForMas(inputLink)}>
                Добавить
              </button>
        </div>
      </main>
    </div>
    )

  }
export default VideoList