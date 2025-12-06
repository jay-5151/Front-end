import React, { useState } from 'react'

function Funobj() {

  const [data, setdata] = useState({
    name: "harsh",
    count: 0,
    isImage: true
  })

  return (
    <div>
      <h1>Hello name : {data.name}</h1>

      <button onClick={() => setdata(prev => ({ ...prev, name: "rishi" }))}>
        Change name
      </button>

      <button onClick={() => setdata(prev => ({ ...prev, name: "shubham" }))}>
        Change name2
      </button>

      <h1>Hello count : {data.count}</h1>

      <button onClick={() => setdata(prev => ({ ...prev, count: prev.count + 1 }))}>
        Increment
      </button>
      <button onClick={()=>setdata(prev=>({...prev,count:prev.count-1}))}>decremewnt </button>
      

    </div>
  )
}

export default Funobj
