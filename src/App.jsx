import { useState } from 'react'
import './App.css'
import { ImageBoard } from './components/ImageBoard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ImageBoard/>
    </>
  )
}

export default App
