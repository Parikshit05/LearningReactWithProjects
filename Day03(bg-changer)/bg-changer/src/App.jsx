import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
     const [color, setColor] = useState("white")

  return (
    <>
      <div className=" w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="button p-1 duration-100 fixed bottom-7 rounded-2xl left-30" style={{backgroundColor: color}}>
        <button className="text-xl text-white bg-[#00FF00]" onClick={() => setColor("#00FF00")}>Green</button>
        <button className="text-xl text-white bg-black" onClick={() => setColor("black")}>Black</button>
        <button className="text-xl text-white bg-[#FF0000]" onClick={() => setColor("#FF0000")}>Red</button>
        <button className="text-xl text-black bg-[#FFFF00]" onClick={() => setColor("#FFFF00")}>Yellow</button>


        <button className="text-xl text-white bg-[#0000FF]" onClick={() => setColor("#0000FF")}>Blue</button>
        <button className="text-xl text-white bg-[#CD97F6]" onClick={() => setColor("#CD97F6")}>Queen Lilac</button>
        <button className="text-xl text-white bg-[#1C7C7D]" onClick={() => setColor("#1C7C7D")}>Elm</button>
        <button className="text-xl text-white bg-[#040E4D]" onClick={() => setColor("#040E4D")}>Blue Ribbon</button>
        <button className="text-xl text-black bg-[#D1F9FF]" onClick={() => setColor("#D1F9FF")}>Pastel Light Sky Blue</button>
        </div>
      </div>
    </>
  )
}

export default App
