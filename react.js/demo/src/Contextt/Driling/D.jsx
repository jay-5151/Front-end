import React from 'react'

function D(name,setname) {
  return (
    <div>
        <h2>hello this is something about your seld</h2>
        <h1>D:{name}</h1>
        <button onClick={()=>setname("yash")}>chang name</button>
    </div>
  )
}

export default D