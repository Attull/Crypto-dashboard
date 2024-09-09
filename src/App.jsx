import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'

const App = () => {
  return (
    <div className='app'>
        <Navbar/>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path="/coin/:coinId" element={<Coin/>} />
        </Routes>
    </div>
  )
}

export default App