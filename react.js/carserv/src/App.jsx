import React from 'react'
import Home from './Website/Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Website/Pages/About'
import Service from './Website/Pages/Service'
import Booking from './Website/Pages/Booking'
import Technicians from './Website/Pages/Technicians'
import Testimonial from './Website/Pages/Testimonial'
import Notfound from './Website/Pages/Notfound'
import Contact from './Website/Pages/Contact'
import Dashboard from './Admin/Apages/Dashboard'
import Serviceadd from './Admin/Apages/Serviceadd'
import Servicemange from './Admin/Apages/Servicemange'
import Alogin from './Admin/Apages/Alogin'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/service' element={<Service />} />
      <Route path='/booking' element={<Booking />} />
      <Route path='/technicians' element={<Technicians />} />
      <Route path='/testimonial' element={<Testimonial />} />
      <Route path='/notfound' element={<Notfound />} />
      <Route path='/contact' element={<Contact />} />
      {/* <admin></admin> */}
      <Route path='/dash' element={<Dashboard/>}/>
      <Route path='/serviceadd' element={<Serviceadd/>}/>
      <Route path='/servicemange' element={<Servicemange/>}/>
      <Route path='/alogin' element={<Alogin />} />
      </Routes>

    </div>
    </BrowserRouter>
  )
}

export default App