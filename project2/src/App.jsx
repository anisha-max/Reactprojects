import { useState } from 'react'
import InuputBox from './InuputBox'
import useCurrencyHook from './customHook/useCurrencyHook'

import './App.css'

function App() {
const [amount ,setAmount] = useState(0)
const [from ,setFrom] = useState("usd")
const [to ,setTo] = useState("inr")
const [convertedAmmount , setConvertedAmount] = useState(0)


const currencyInfo = useCurrencyHook(from)
const options = Object.keys(currencyInfo)

const swap = ()=>{
  setTo(from)
  setFrom(to)
}

const convert = ()=>{
  setConvertedAmount(amount * currencyInfo[to])
}

  return (
    <>
  my currency convertor
 <form onSubmit={(e)=>{
  e.preventDefault()
  convert()
 }}>

  <InuputBox 
  lable = "from"
  amount = {amount}
  currencyOptions = {options}
  onAmountChange = {(e)=> setAmount(e.target.value)}
  onCurrencyChange ={(e)=>{setCurrency(e.target.value)}}
  selectCurrency = {from}
  ></InuputBox>

<InuputBox 
  lable = "to"
  amount = {convertedAmmount}
  currencyOptions = {options}
  onAmountChange = {(e)=> setConvertedAmount(e.target.value)}
  onCurrencyChange ={(e)=>{setCurrency(e.target.value)}}
  selectCurrency = {from}
  ></InuputBox>
 </form>
    </>
  )
}

export default App
