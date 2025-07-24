import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [answer,setAnswer]=useState("")
  const [loading,setLoading]=useState(false)
  function sendmessage()
  {
    setLoading(true)
    axios.post("http://localhost:3000/chat",
      {
        chat:document.getElementById("prompt").value
      }
    ).then(response=>{
      setAnswer(response.data.ans)
      setLoading(false)
    })
  }
  return (
    <>
      <div className='app-container'>
       <h1>gemini chat</h1>
        <div>
          {loading? "....":answer}
        </div>
        <input id='prompt' placeholder='chat'></input>
        <button onClick={sendmessage}>send</button>
      </div>
    </>
  )
}

export default App
