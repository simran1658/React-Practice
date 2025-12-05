import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(0)

 // let counter=15
  const addValue=()=>{
    // console.log("clicked",counter)
    if(counter<20){
      counter=counter+1
      setCounter(counter)
    }
    else{
      counter=20
      setCounter(counter)
    }
  }

  const removeValue=()=>{
    if(counter>0){
      counter=counter-1
      setCounter(counter)
    }
    else{
      counter=0
      setCounter(counter)
    }
  }

  return (
    <>
    <h1> heyheyhey</h1>
    <h2>Counter value:{counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <br></br>
    <br></br>
    <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App
