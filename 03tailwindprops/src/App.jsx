import { useState } from 'react'
import './App.css'
import Card from './components/card'


function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"shivi",
    age:20
  }

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
    <Card username="Sirman" btnText="click Me" />
    <br/><br/>
    <Card username="Shalini" btnText="visit Me"/>
    </>
  )
}

export default App
