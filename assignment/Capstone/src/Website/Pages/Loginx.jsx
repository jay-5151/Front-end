import React, { useEffect, useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Loginx() {
  const redirect = useNavigate()
  useEffect (()=>{
    if(localStorage.getItem("Uid")){
      redirect("/")
    }
  },[])
    const [form,setform]=useState({
        email:"",
        password:""
    })

    const getchange=(e)=>{
      setform({
        ...form,
        [e.target.name]:e.target.value
      })
    }
    const submiteddata=async(e)=>{
        e.preventDefault()
        try {
            const{email,password}=form

            if(email == "" || password == ""){
              console.log("pls required data..")
              return false;
            }
            const res=await axios.get(`http://localhost:3000/users?email=${email}`)
            console.log(res.data)
            if(res.data.length === 0){
              console.log("email does not match")
              return false; 
            }
            const admin=res.data[0]
            console.log(admin)

            if(admin.password != password){
              console.log("password does not match..!")
              return false
            }
            localStorage.setItem("Uid",admin.id)
            localStorage.setItem("Uname",admin.name )
            console.log("sucessfully login..")
            redirect("/")
        } catch (error) {
            console.log("api data not found",error)
        }
    }
  return (
    <div>
      <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
           <form action="">
               <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase text-light">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <MDBInput value={form.email} name='email' onChange={getchange}  wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput  value={form.password} name='password' onChange={getchange}  wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg"/>

              <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
              <MDBBtn onClick={submiteddata} outline className='mx-2 px-5 text-light' color='white' size='lg'>
                Login
              </MDBBtn>

              <div className='d-flex flex-row mt-3 mb-5'>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='facebook-f' size="lg"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='twitter' size="lg"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='google' size="lg"/>
                </MDBBtn>
              </div>

              <div>
                <p className="mb-0">Don't have an account? <Link to="/register" class="text-white-50 fw-bold">Sign Up</Link></p>

              </div>
            </MDBCardBody>
           </form>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>


    </div>
  )
}

export default Loginx