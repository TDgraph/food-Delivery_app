import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'

const App = () => {
  return (

    <div className='app'>
      {/* import the navbar component */}
      <Navbar/>
      
      {/* within this route we will create multiple routes */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
        
      </Routes>

      {/* setup the routes */}
    </div>
  )
}

export default App
