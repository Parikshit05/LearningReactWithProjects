import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className="text-red-700 bg-black p-4 rounded-full">Trial</h1>
     <div>
     <Card title="Nike"/>
     <Card title="Adidas"/>
     <Card title="Campus"/>
     </div>
    </>
  )
}

export default App
