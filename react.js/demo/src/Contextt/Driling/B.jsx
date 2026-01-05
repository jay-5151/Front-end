import React, { useState } from 'react'
import C from './C'
function B({name,setname}) {
  return (
    <div>
        <h2>hello this is something about self</h2>
        <h3>B:{name}</h3>
        <button onClick={()=>setname("hello")}>change name</button>
        <C name={name} setname={setname}/>
    </div>
  )
}

export default B