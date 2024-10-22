import { useState } from "react"

function App() {
const [color,setColor]=useState("olive")
  return (
    <>
<div className="w-full h-screen duration-200"
style={{backgroundColor:color}}>
  <p className="text-white text-2xl text-center pt-32">
    {color}
  </p>
</div>

<div className="fixed flex flex-wrap  justify-center right-10 inset-y-0 py-14 ">
  <div className="flex  flex-col flex-wrap justify-center gap-4 shadow-xl bg-white px-2 py-3 rounded-md">
    <button 
    onClick={()=>setColor("red")}
    className="outline-none px-2 py-1 rounded-full text-white"
    style={{backgroundColor:"red"}}
    >Red</button>
        <button
            onClick={()=>setColor("green")}

    className="outline-none px-2 py-1 rounded-full text-white"
    style={{backgroundColor:"green"}}
    >Green</button>    
    <button
        onClick={()=>setColor("yellow")}

    className="outline-none px-2 py-1 rounded-full text-white"
    style={{backgroundColor:"yellow"}}
    >yellow</button>   
     <button
         onClick={()=>setColor("blue")}

    className="outline-none px-2 py-1 rounded-full text-white"
    style={{backgroundColor:"blue"}}
    >Blue</button>
     <button
         onClick={()=>setColor("black")}

    className="outline-none px-2 py-1 rounded-full text-white"
    style={{backgroundColor:"black"}}
    >Black</button>
     <button
         onClick={()=>setColor("grey")}

    className="outline-none px-2 py-1 rounded-full text-white"
    style={{backgroundColor:"grey"}}
    >Grey</button>
     <button
         onClick={()=>setColor("purple")}

    className="outline-none px-2 py-1 rounded-full text-white"
    style={{backgroundColor:"purple"}}
    >Purple</button>
    <button
        onClick={()=>setColor("orange")}

    className="outline-none px-2 py-1 rounded-full text-white"
    style={{backgroundColor:"orange"}}
    >Orange</button>
    </div></div>
    </>
  )
}

export default App
