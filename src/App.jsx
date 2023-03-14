import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Quote from './Quote'
import useGetQuote from './hooks/useGetQuote'
import useLocalStorage from './hooks/useLocalStorage'

//Great Resource: https://usehooks.com - collection of custom react hooks
function App() {
  const [currentQuote, setCurrentQuote] = useLocalStorage('new', 'new')
  const [isToggled, setIsToggled] = useState(false)

  return (
    <div className="App">
      <button onClick={e => setIsToggled(!isToggled)}>Toggle Activity</button><br />
      {isToggled ?
        <Quote /> :
        <>
          <input
            type="text"
            value={currentQuote}
            onChange={e => setCurrentQuote(e.target.value)}
          />
          <h2>{currentQuote}</h2>
        </>
      }
    </div >
  )
}

export default App
