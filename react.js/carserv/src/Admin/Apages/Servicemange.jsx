import React, { useState } from "react";
import Aheader from "../Acommon/Aheader";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Firebase/firestore";
import { useNavigate } from "react-router-dom";

function Servicemange() {
  const redirect = useNavigate();

  const [form, setform] = useState({
    img: "",
    name: "",
    desc: "",
  });

  // INPUT CHANGE
  const getchange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ADD SERVICE TO FIREBASE
  const addservice = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "technicians"), {
        img: form.img,
        name: form.name,
        desc: form.desc,
        createdAt: new Date(),
      });

      setform({
        img: "",
        name: "",
        desc: "",
      });

      redirect("/serviceadd");
    } catch (error) {
      console.error("Firebase add error:", error);
    }
  };

  return (
    <div>
      <Aheader />
      <div className="container">
        <form onSubmit={addservice}>
          <h1 className="text-center">Service Data Form</h1>

          <div className="row g-3 py-5 mx-5">
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="url"
                  value={form.img}
                  className="form-control"
                  onChange={getchange}
                  name="img"
                  placeholder="Enter image URL"
                  required
                />
                <label>Image URL</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  value={form.name}
                  className="form-control"
                  onChange={getchange}
                  name="name"
                  placeholder="Enter service name"
                  required
                />
                <label>Service Name</label>
              </div>
            </div>

            <div className="col-12">
              <div className="form-floating">
                <input
                  type="text"
                  value={form.desc}
                  className="form-control"
                  onChange={getchange}
                  name="desc"
                  placeholder="Enter description"
                  required
                />
                <label>Description</label>
              </div>
            </div>

            <div className="col-12">
              <button className="btn btn-primary w-100 py-3" type="submit">
                Add Service
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Servicemange;
