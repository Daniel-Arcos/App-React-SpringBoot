import { useState } from 'react'
import './App.css'

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          El contador es {count}
        </button>
      </div>
    </>
  )
}

