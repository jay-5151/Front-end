import React from "react";
import Home from "./Website/pages/Home";
import About from "./Website/pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rooms from "./Website/pages/Rooms";
import Amenities from "./Website/pages/Amenities";
import Location from "./Website/pages/Location.jsx";
import Restaurent from "./Website/pages/Restaurent";
import Offers from "./Website/pages/Offers";
import Gallery from "./Website/pages/Gallery";
import Booking from "./Website/pages/Booking";
import Privacy from "./Website/pages/Privacy";
import PageNot from "./Website/pages/PageNot.jsx";
import Roomdetails from "./Website/pages/Roomdetails.jsx";
import Terms from "./Website/pages/Terms.jsx";
import Event from "./Website/pages/Event.jsx";
import Dashboard from "./Admin/Apage/Dashboard.jsx";
import RoomMange from "./Admin/Apage/Roommange.jsx";
// import RoomMange from "./Admin/Apage/Roommange.jsx";
import RoomAdd from "./Admin/Apage/RoomAdd.jsx";



function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/location" element={<Location />} />
          <Route path="/roomdetails" element={<Roomdetails />} />
          <Route path="/restaurent" element={<Restaurent />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/event" element={<Event />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<PageNot />} />
          {/* <Route path="/dash" element={<Dashboard />} /> */}
          <Route path="/dash" element={<Dashboard/>} />
            <Route path="/roommange" element={<RoomMange/>}/>
            <Route path="/roomadd" element={<RoomAdd/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
