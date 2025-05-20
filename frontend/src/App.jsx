import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/About'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/placeorder' element={<PlaceOrder/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App