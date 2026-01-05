import React from 'react'
import Home from './Website/Pages/Home'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Website/Pages/About'
import Service from './Website/Pages/Service'
import Feature from './Website/Pages/Feature'
import Ourteam from './Website/Pages/Ourteam'
import Testimonial from './Website/Pages/Testimonial'
import Appoinment from './Website/Pages/Appoinment'
import Notfound from './Website/Pages/Notfound'
import Contact from './Website/Pages/Contact'
import Dashboard from './admin/Apages/Dashboard'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/feature' element={<Feature/>}/>
        <Route path='/ourteam' element={<Ourteam/>}/>
        <Route path='/ourteam' element={<Ourteam/>}/>
        <Route path='/testimonial' element={<Testimonial/>}/>
        <Route path='/appoinment' element={<Appoinment/>}/>
        <Route path='/notfound' element={<Notfound/>}/>
        <Route path='/contact' element={<Contact/>}/> 
        {/* {admin side} */}
        <Route path='/dashboard' element={<Dashboard/>}/> 


      

        
      </Routes>
      
    </div>
    </BrowserRouter>
  )
}

export default App