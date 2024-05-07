import { useState } from 'react'
import './App.css'
import { HashRouter as Router } from "react-router-dom"
import { Routes, Route, Navigate } from "react-router-dom"
import Navbar from  './components/Navbar'
import Footer from './components/Footer'
import Terms from './components/Terms'
import Privacy from './components/Privacy'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Products'
import NotFound from './pages/NotFound'
import Banner from './product-pages/Banner'
import BusinessCards from './product-pages/BusinessCards'
import BusinessLogo from './product-pages/BusinessLogo'
import Cards from './product-pages/Cards'
import Flyer from './product-pages/Flyer'
import Poster from './product-pages/Poster'
import Sticker from './product-pages/Sticker'

function App() {
  return (
    <>
    <div className="background">
     <Navbar/>
     <Routes>
     {/* <Route path='/zion-graphics' element={<Homepage/>} /> */}
     <Route path='/' element={<Homepage/>}/>
     <Route path='/zion-graphics' element={<Navigate to='/' />} />
     <Route path='/zion-graphics/terms' element={<Terms/>}/>
     <Route path='/zion-graphics/privacy' element={<Privacy/>}/>
     <Route path='/zion-graphics/about-us' element={<About/>}/>
     <Route path='/zion-graphics/contact' element={<Contact/>}/>
     <Route path='/zion-graphics/products' element={<Product/>}/>
     <Route path='/zion-graphics/products/banners' element={<Banner/>}/>
     <Route path='/zion-graphics/products/business-cards' element={<BusinessCards/>}/>
     <Route path='/zion-graphics/products/business-logos' element={<BusinessLogo/>}/>
     <Route path='/zion-graphics/products/id-cards' element={<Cards/>}/>
     <Route path='/zion-graphics/products/stickers' element={<Sticker/>}/>
     <Route path='/zion-graphics/products/flyers' element={<Flyer/>}/>
     <Route path='/zion-graphics/products/posters' element={<Poster/>}/>
     <Route path='*' element={<NotFound/>}/>
     </Routes>
     <Footer/>
     </div>
    </>
  )
}

export default App
