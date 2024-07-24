import React from 'react'
import {BrowserRouter, Routes , Route} from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1>Home</h1>}></Route>
      <Route path="/about" element={<h1>About</h1>}></Route>
      <Route path="/signin" element={<h1>SignIn</h1>}></Route>
      <Route path="/signup" element={<h1>SignUp</h1>}></Route>
      <Route path="/projects" element= {<h1>Projects</h1>}></Route>
      <Route path="/dashboard" element= {<h1>Dashboard</h1>}></Route>

    </Routes>
    </BrowserRouter>
   
  )
}
