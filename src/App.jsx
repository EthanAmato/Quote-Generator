import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [quoteData, setQuoteData] = useState("")

  useEffect(() => {
    axios.get("https://api.api-ninjas.com/v1/quotes", {
      params: {
        'limit': 1,
      },
      headers: {
        'X-Api-Key': import.meta.env.VITE_API_KEY
      },
    }).then((res) => {
      setQuoteData(res.data[0])
    }).catch(err => {
      console.log(err)
      alert("Error getting the quote of the day...")
    })

  }, [])


  return (
    <div className="App">
      <h1>The Quote of the day is:</h1>
      {quoteData &&
        <>
          <p className='quote'>"{quoteData.quote}"</p>
          <p className='author-subject'>Spoken by {quoteData.author}</p>
        </>
      }
    </div >
  )
}

export default App
