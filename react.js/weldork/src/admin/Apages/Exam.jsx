import React, { useEffect, useState } from 'react'
import Aheader from '../Acomman/Aheader'
import axios from 'axios'

function Servicemnge() {

    const [service, setservice] = useState([])


    useEffect(() => {
        fetchdata()
    }, [])


    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/service")
        console.log(res.data)
        setservice(res.data)

    }

    // Single get view...
    const [single, setsingle] = useState({
        id: "",
        name: "",
        desc: "",
        img: ""
    })

    const singlecard = async (id) => {
        const res = await axios.get(`http://localhost:3000/service/${id}`)
        console.log(res.data);
        setsingle(res.data)

    }

    // For delete card...

    const deletecard = async (id) => {
        const res = await axios.delete(`http://localhost:3000/service/${id}`)
        console.log(res.data);
        fetchdata()

    }

    // Update Process Modal...
    const [edit, setedit] = useState(null)

    // for data show...
    const [edited, setedited] = useState({
        id: "",
        name: "",
        desc: "",
        img: ""
    })

    // for data get and open modal..
    const getdata = (data) => {
        console.log(data);
        setedit(data)
        setedited(data)
    }

    // for data change...
    const getchange = (e) => {
        setedited({
            ...edited,
            [e.target.name]: e.target.value
        })
    }

    const submitdata = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.put(`http://localhost:3000/service/${edited.id}`, edited)
            console.log(res.data);
            setedited({
                id: "",
                name: "",
                desc: "",
                img: ""
            })
            setedit(null)
            fetchdata()



        } catch (error) {
            console.log("Api data not found", error);


        }
    }


    return (
        <div>

            <Aheader />
            <div className=''>
                <h1 className='text-center p-3'> Service Manage</h1>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Desc</th>
                            <th scope="col">Action</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            service && service.map((data, index) => {
                                console.log(data);
                                return (
                                    <tr>
                                        <th scope="row">{data.id}</th>
                                        <td>
                                            <img src={data.img} alt="" style={{ width: "100px" }} />
                                        </td>
                                        <td>{data.name}</td>
                                        <td>{data.desc.slice(0, 100)}...</td>
                                        <td>
                                            <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => singlecard(data.id)}>View</button>
                                            <button className='btn btn-success mx-2' onClick={() => getdata(data)}  >Edit </button>
                                            <button className='btn btn-danger' onClick={() => deletecard(data.id)}>Delete</button>

                                        </td>
                                    </tr>
                                )

                            })
                        }

                    </tbody>
                </table>

                {/* View Modal... */}
                {/* <!-- Modal --> */}
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div className="row g-4">
                                    <div className="col-lg-12 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="service-item">
                                            <div className="service-inner pb-5">
                                                <img className="img-fluid w-100" src={single.img} alt />
                                                <div className="service-text px-5 pt-4">
                                                    <h5 className="text-uppercase">{single.name}</h5>
                                                    <p>
                                                        {single.desc}
                                                    </p>
                                                </div>
                                                <a className="btn btn-light px-3" href>Read More<i className="bi bi-chevron-double-right ms-1" /></a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Edit Form... */}
                        {
                            edit && (
                                <div className="row g-3">
                    <form action="">
                        <div className="col-sm-6">
                            <div className="form-floating">
                                <input type="text" value={edited.name} onChange={getchange} name='name' className="form-control border-0 bg-light" id="name" placeholder="Your Name" />
                                <label htmlFor="name">Your Name</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-floating">
                                <input value={edited.desc} onChange={getchange} name='desc' type="text" className="form-control border-0 bg-light" id="desc" placeholder="Your Desc" />
                                <label htmlFor="desc">Your Desc</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-floating">
                                <input type="url" value={edited.img} onChange={getchange} name='img' className="form-control border-0 bg-light" id="img" placeholder="Your Image" />
                                <label htmlFor="mobile">Your Mobile</label>
                            </div>
                        </div>


                        <div className="col-6 text-center">
                            <button className="btn btn-primary w-100 py-3" type="submit" onClick={submitdata}>Submit Now</button>
                        </div>
                        <div className="col-6 text-center">
                            <button className="btn btn-primary w-100 py-3" type="submit" onClick={() => setedit(null)}>Cancel</button>
                        </div>
                    </form>
                </div>
                            )
                        }
                
            </div>
        </div>
    )
}

export default Servicemnge