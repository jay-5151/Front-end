import React, { useState } from 'react'
import Aheader from '../Acommon/Aheader'
import axios from 'axios'
import { useAsyncValue, useNavigate } from 'react-router-dom'

function RoomAdd() {
  const redirect= useNavigate()

  const [form,setform]= useState({
         id:"",
         name:"",
         guests:"",
         price:"",
         type:"",
         img:""
  })

   const getchange=(e)=>{
 
    setform({
      ...form,
      id: new Date().getTime().toString(),
      [e.target.name]:e.target.value
    })
    console.log(form)
   }
   const addroom=async(e)=>{
     e.preventDefault()
     try {
      const res= await axios.post("http://localhost:3000/rooms",form)
      console.log(res.data)
      setform({
          id:"",
         name:"",
         guests:"",
         price:"",
         type:"",
         img:""
      })
      redirect("/roommange")
     } catch (error) {
      console.log("Api Data Not Found",error)
     }
   }
  return (
    <div>
    <Aheader/>
       <div className="row justify-content-center mb-5" data-aos="fade-up" data-aos-delay={200}>
        <div className="col-lg-10">
          <div className="contact-form-wrapper">
            <h2 className="text-center my-5">Room Add data</h2>
            <form method="post" onSubmit={addroom}  className="php-email-form">
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-group">
                    <input  value={form.name}  type="text" onChange={getchange} className="form-control" name="name" placeholder="Enter Your Name " required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input  value={form.type} type="text" onChange={getchange}  className="form-control" name="type" placeholder="Enter Your Email" required />
                  </div>
                </div>
                <div className="col-6">
                <div className="form-group">
                      <label htmlFor="guest-count" className="form-label">Total Guests</label>
                      <select  value={form.guests} className="form-select"  onChange={getchange} id="guest-count" name="guests" required>
                        <option value hidden >Choose guests</option>
                        <option value={1}>1 Guests</option>
                        <option value={2}>2 Guests</option>
                        <option value={3}>3 Guests</option>
                        <option value={4}>4 Guests</option>
                        <option value={5}>5 Guests</option>
                        <option value={6}>6 Guests</option>
                        <option value={7}>7 Guests</option>
                      </select>
                    </div>
                    </div>
                     <div className="col-md-6">
                  <div className="form-group">
                    <input  value={form.price}  type="text" className="form-control" onChange={getchange} name="price" placeholder="Enter Your Price" required />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input value={form.img} type="url" className="form-control"  onChange={getchange} name="img" placeholder="Enter Your img" required />
                  </div>
                </div>
                <div className="col-12">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-primary">Add Rooms</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>


    </div>
  )
}

export default RoomAdd
