import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import User from './components/User'

function App() {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <><Navbar/><Home/></>
      },
      {
        path: "/login",
        element: <><Navbar/><Login/></>
      },
      {
        path: "/about",
        element: <><Navbar/><About/></>
      },
      {
        path: "/user/:username",
        element: <><Navbar/><User/></>
      },
    ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
