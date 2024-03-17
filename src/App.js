import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Navbar from './Component/Navbar'
import Service from './Component/Service'
import Blog from './Component/Blog'
import Portfolio from './Component/Portfolio'


const App = () => {
  return (
    <div className='bg-[#111827] w-screen min-h-screen '>

        <Navbar/>

        <Routes>

            <Route path='/' element = {<Home/>} />
            <Route path='/about' element = {<About/>} />
            <Route path='/blog' element = {<Blog/>} />
            <Route path='/service' element = {<Service/>} />
            <Route path='/portfolio' element = {<Portfolio/>} />
            <Route path='/contact' element = {<Contact/>} />

        </Routes>

    </div>
  )
}

export default App

