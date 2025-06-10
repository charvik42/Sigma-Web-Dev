import { useEffect } from "react"
import React from 'react'

const Navbar = ({ color }) => {

    useEffect(() => {
        alert("Hey I will run on every render")
    })

    useEffect(() => {
        alert("Hey I will run on first render")
    }, [])

    useEffect(() => {
        alert("Hey I am running because color was changed")
    }, [color])
    
    useEffect(() => {
        alert("Hey I will run on first render of app.jsx")
    //Cleanup function
        return ()=>{
            alert("Component was unmounted")
        }
    }, [])

  return (
    <div>
      I am a navbar of {color} color
    </div>
  )
}

export default Navbar
