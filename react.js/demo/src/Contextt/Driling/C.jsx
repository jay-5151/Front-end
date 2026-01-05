import React from "react";
import D from "./D";
function C(name,setname) {
  return (
    <div>
      <h2>hello this is something about self</h2>
      <h3>c:{name}</h3>
      <button onClick={()=>setname("jay")}>change name</button>
      <D name={name} setname={setname}/>
    </div>
  );
}

export default C;
