import React, { useEffect, useState } from "react";
import Aheader from "../Acommon/Aheader";
import axios from "axios";

function ServiceManege() {
const [service,setservice]=useState([])
useEffect(()=>{
    fetchdata()
},[])
const fetchdata=async()=>{
    const res=await axios.get("http://localhost:3000/service")
    console.log(res.data)
    setservice(res.data)
}
  return (
    // const [service,setservice]=useState([])
    <div>
      <Aheader />
      <h1 className="text-center mt-5">service manege</h1>
    </div>
  );
}

export default ServiceManege;
