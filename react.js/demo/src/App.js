import React from 'react'
// import Home from './Layout/Page/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Layout/Pages/Home";
import About from "./Layout/Pages/About";
import Contact from "./Layout/Pages/Contact";
import NotFound from "./Layout/Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
    <div>
       <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
    </div>
     </BrowserRouter>
  )
}

export default App