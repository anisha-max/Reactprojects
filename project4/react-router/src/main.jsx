import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from './App.jsx'
import Layout from './Layout/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Github, { GitHubLoader } from './pages/Github.jsx'

const router  = createBrowserRouter([
  {
    path: "/",
    element :<Layout/>,
    children:[
      {
        path: "home",
        element :<Home/>,
      },
      {
        path: "about",
        element :<About/>,
      },
      {
       
        path: "github/:id",
        element :<Github/>,
         loader: GitHubLoader,
      },
     
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
