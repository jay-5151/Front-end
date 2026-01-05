import React from 'react'
import { Link, useNavigate,} from 'react-router-dom'

function NotFound() {
    const jay=useNavigate()
    const backto=()=>{
        jay("/")
    }
  return (
    <div>
        
        <h1>hello this is 404 Not Found Page</h1>
        <Link to="/" className="btn btn-primary">Back To Home </Link>
        <button onClick={backto} className='btn mx-2 btn-info'>back to home page</button>
    </div>
  )
}

export default NotFound