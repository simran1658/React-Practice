import { useState } from 'react'
import { InputBox} from '../../06currencyconverter/src/components';
import useCurrencyInfo from './hooks/useCurrencyinfo';
import './App.css'

function App() {
  const [amount,setAmount]=useState(0);
  const [from,setFrom]=useState("usd");
  const [to,setTo]=useState("inr");
  const [convertedAmount, setConvertedAmount]=useState(0);

  const currencyInfo=useCurrencyInfo(from)



  return (
    <>

    </>
  )
}

export default App
