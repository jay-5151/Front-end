import React, { useEffect, useState } from "react";
import Aheader from "../Acommon/Aheader";
import axios from "axios";

function RoomMange() {
  const [rooms, setrooms] = useState([]);
  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/rooms");
    // console.log(res.data)
    setrooms(res.data);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const [single, setsingle] = useState({
    id: "",
    name: "",
    guests: "",
    price: "",
    type: "",
    img: "",
  });

  const singlecard = async (id) => {
    const res = await axios.get(`http://localhost:3000/rooms/${id}`);
    console.log(res.data);
    setsingle(res.data);
  };
  return (
    <div>
      <Aheader />
      <div className="container">
        <h1 className="text-center my-5">Room Mange</h1>
        <table className="table">
          <thead>
            <tr className="text-center">
              <th scope="col">id</th>
              <th scope="col">img</th>
              <th scope="col">Name</th>
              <th scope="col">guests</th>
              <th scope="col">type</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
            rooms &&
              rooms.map((data, index) => {
                // console.log(data);
                return (
                  <tr key={index} className="text-center">
                    <th scope="row">{data.id}</th>
                    <td>
                      <img src={data.img} style={{ width: "100px" }} alt="" />
                    </td>
                    <td>{data.name}</td>
                    <td>{data.guests}</td>
                    <td>{data.type}</td>
                    <td>
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        className="btn btn-info"
                        onClick={() => singlecard(data.id)}
                      >
                        view
                      </button>
                      <button className="btn btn-success mx-2">edit</button>
                      <button className="btn btn-danger">delete</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="col-12">
                  <div className="room-card">
                    <div className="room-image">
                      <img
                        src={single.img}
                        alt="Deluxe Ocean Suite"
                        className="img-fluid"
                      />
                      <div className="room-features">
                        <span className="feature-badge ocean">
                          {single.type}
                        </span>
                      </div>
                    </div>
                    <div className="room-content">
                      <div className="room-header">
                        <h3>{single.name}</h3>
                        <div className="room-rating">
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                        </div>
                      </div>
                      <p className="room-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <div className="room-amenities">
                        <span>
                          <i className="bi bi-people" /> {single.guests} guests
                        </span>
                        <span>
                          <i className="bi bi-wifi" /> Free WiFi
                        </span>
                        <span>
                          <i className="bi bi-tv" /> Smart TV
                        </span>
                      </div>
                      <div className="room-footer">
                        <div className="room-price">
                          <span className="price-from">From</span>
                          <span className="price-amount"></span>
                          <span className="price-period">/ night</span>
                        </div>
                        <a
                          href="room-details.html"
                          className="btn-room-details"
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomMange;
