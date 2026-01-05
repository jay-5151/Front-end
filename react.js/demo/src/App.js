import React from "react";
// import Home from './Layout/Page/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Layout/Page/Home";
import About from "./Layout/Page/About";
import Contect from "./Layout/Page/Contect";
import NotFound from "./Layout/Page/NotFound";
import Boot from "./Layout/Task/Boot";
import Hello from "./jsx/Hello";
import Class from "./Prop/Class";
import Fn from "./Prop/Fn";
import Main from "./Prop/Main";
import Fun from "./Commpent/Fun";
import Classcom from "./Sfop/Classcom";
import A from "./Contextt/Driling/A";

function App() {
  return (
    // <BrowserRouter>
      <div>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contect" element={<Contect />} />
          <Route path="*" element={<NotFound />} />
          
           
        </Routes> */}
            {/* <Boot/> */}
            {/* <Hello/> */}
            {/* <Class/> */}
            {/* <Fn/> */}
            {/* <Main/> */}
            {/* <Fun/> */}
            {/* <Classcom/> */}
             {/* <Contextt/> */}
             <Driling/>
             <A/>
      </div>
    // </BrowserRouter>
  );
}

export default App;
