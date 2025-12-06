import React, { useEffect, useState } from 'react'

function DataType() {
       const [user,setuser]=useState([])
    useEffect(() => {
        getdata()
    }, [])


    const getdata = () => {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "GET"
        })
            .then((res) => {
                return res.json()
            })
            .then((demo) => {
                console.log(demo)
                setuser(demo)
            })
    }
    return (

        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">email</th>
                        <th scope="col">company</th>
                    </tr>
                </thead>
                <tbody>
                    {

                     user && user.map((demo,index)=>{
                     return(
                   
                    <tr>
                        <th scope="row">{demo.id}</th>
                        <td>{demo.name}</td>
                        <td>{demo.email}</td>
                        <td>{demo.company.name}</td>
                    </tr>
                    )
                      })
                     }
                    
                </tbody>
            </table>

        </div>
    )
}

export default DataType