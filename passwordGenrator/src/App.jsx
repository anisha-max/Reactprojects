import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password, setPassword] = useState("")
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [length, setLength] = useState(8)
  const passref = useRef(null)

  const passwordGenrator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let char = "!@#$%^&*()_+-"
    let num = "1234567890"
    let pass = ""
    if (number) { str += num }
    if (character) { str += char }

    for (let i = 1; i <= length; i++) {
      let randomIndex = Math.floor(Math.random() * (str.length + 1))
      pass += str.charAt(randomIndex)

    }
    setPassword(pass)

  }, [number, character, length, password])

const copyBtn = ()=>{
  window.navigator.clipboard.write(password)
  passref.current?.select()
}


  useEffect(() => {
    passwordGenrator()

  }, [length, number, character, setPassword])
  return (
    <>
      <div className='bg-slate-600 w-full max-w-md mx-auto text-center  my-10 p-10 rounded-lg'>
        <h1 className='text-center  text-white text-4xl'>Password Genrator</h1>
        <div className='flex overflow-hidden my-5'>
        <input
          type='text'
          value={password}
          className=' w-full outline-none px-3 py-2 rounded'
          placeholder='password'
          readOnly
          ref={passref}
           />
        <button className='outline-none shrink-0 px-3 py-0.5 bg-blue-600 text-white rounded' onClick={copyBtn}>Copy</button>
        </div>
        <div className='flex justify-around'>

          <input
            type='range'
            value={length}
            min="8" max="50"
            onChange={
              (e) => {
                setLength(e.target.value)
              }
            }
          />
          <label className='text-orange-500 '>Length({length})</label>

          <input
            type='checkbox'
            value={number}
            onChange={() => {
              setNumber((prev) => !prev)
            }} />
          <label className='text-orange-500 '>Number</label>

          <input
            type='checkbox'
            value={character}
            onChange={() => {
              setCharacter((prev) => !prev)
            }} />
          <label className='text-orange-500 '>Charcter</label>
        </div>
      </div>
    </>
  )
}

export default App