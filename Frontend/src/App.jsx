import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/Signin'
import Dashboard from './pages/Dashboard'
import SignUp from './pages/Signup'
import Header from './components/Header'
import FooterComponent from './components/Footer'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home</h1>}></Route>
        <Route path="/about" element={<h1>About</h1>}></Route>
        <Route path="/signin" element={<h1>SignIn</h1>}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/projects" element={<h1>Projects</h1>}></Route>
        <Route path="/dashboard" element={<h1>Dashboard</h1>}></Route>
      </Routes>
      <FooterComponent/>
    </BrowserRouter>
  )
}
