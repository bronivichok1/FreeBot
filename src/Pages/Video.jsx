import Header from '../components/Header'
import { withAuth } from '../HOC/withAuth';
import { openInNewTab } from '../providers/OpenAdress';
import React, { useState, useEffect } from 'react';




function Video() {
  const [count, setCount] = useState(0)
  const [inputLink, setInputLink] = useState('');
  const[videoLink,SetvideoLink]=useState([])

    function SendRequest(method,url,body=null){
      return fetch(url).then(response=>{
        return response.text()
      })
    }
    SendRequest('POST','http://localhost:3000/ConnectSQL.php')
    .then(data=>SetvideoLink(data.split(' ')))

    const requestURL='http://localhost:3000/ConnectSQL.php'
    function goAuth(method,url,body=null){
      return new Promise((resolve,reject)=> {
      const xhr=new XMLHttpRequest()
      xhr.open(method,url)
      xhr.responseType='json'
      xhr.onload=()=>{
        resolve(xhr.response)
      }
      xhr.onerror=()=>{
        reject(xhr.response)
      }
      xhr.send(JSON.stringify(body))
    })}
    goAuth('GET',requestURL);
  /*function clickHandler(){
    fetch("http://localhost:3000/ConnectSQL.php",{
      method: 'POST',

      body : JSON.stringify()
      
    })
    .then (response=>response.text())
    .then (response=>{ SetvideoLink(response.split(' '));
     })

  }
*/
  /*let arr = InfoString.split(' ');
  Array.prototype.push.apply(arr, videoLink);*/

  const handleChange = (event) => {
      setInputLink(event.target.value);
   
        }

  function newLinkForMas(Link){
     
    videoLink.push(Link)
    }

  function deleteLinkForMas(number){
         videoLink.splice(number,1)
        }

  function srcCount(number){
    if(number<videoLink.length&&number>=0)
    {
      return videoLink[number-1]
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
              <iframe width="1100" height="560" 
              src={srcCount(count)} 
              title="YouTube video player" 
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
              >
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
