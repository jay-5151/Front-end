import React from 'react'

function Hello() {
    const demo="jay"
    console.log(demo)

    let person={
        id:1,
        name:"vraj",
        course:"back-end"
    }
    // console.log(person)
    let  getdata=<ol>
        <li>home</li>
        <li>about us</li>
        <li>contact us</li>
        <li> help format</li>
        </ol>
  return (
    <div>
        <h2>hello this is something react js </h2>

        <h1>hello name:{person.name}</h1>
        {getdata}
    </div>
  )
}

export default Hello