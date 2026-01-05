import React, { useState } from 'react'
import B from './B'
function A() {
    const[name,setname]=useState("neer patel")
  return (
    <div>
        <h2>hello this is something about self</h2>
        <h3>A:{name}</h3>
        <B name={name} setname={setname}/>
    </div>
  )
}

export default A