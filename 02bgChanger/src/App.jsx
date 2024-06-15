import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-screen h-screen duration-200"
    style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center
      bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap gap-3 shadow-lg
        bg-white px-3 py-2 rounded-2xl">
          <button
          onClick={() => setColor("red")} 
          className="outline-none px-4 py-1 rounded-full" 
          style={{background: 'red'}}>Red</button>
          <button 
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full" 
          style={{background: 'blue'}}>Blue</button>
          <button 
          onClick={() => setColor("black")}
          className="outline-none px-4 py-1 rounded-full" 
          style={{background: 'black'}}>Black</button>
          <button 
          onClick={() => setColor("white")}
          className="outline-none px-4 py-1 rounded-full text-black" 
          style={{background: 'white'}}>White</button>
          <button 
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full" 
          style={{background: 'green'}}>Green</button>
        </div>
      </div>
    </div>
  )
}

export default App