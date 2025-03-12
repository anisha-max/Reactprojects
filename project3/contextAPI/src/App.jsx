import { useEffect, useState } from 'react'
import './App.css'
import {ThemeProvider} from "./context/ThemeContext.js"
import ToggleBtn from './components/ToggleBtn.jsx'
import Card from './components/Card.jsx'

function App() {
  const [theme  , setTheme] = useState("light")
  const darkMode = ()=>{
      setTheme("dark")
  }
  const lightMode = ()=>{
      setTheme("light")
  }

useEffect(()=>{
  const Htmlclass = document.querySelector("html").classList
  Htmlclass.remove("dark" , "light")
  Htmlclass.add(theme)
  
} , [theme])


  return (
    <ThemeProvider value={{theme , darkMode , lightMode}}>
<div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ToggleBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  
  )
}

export default App
