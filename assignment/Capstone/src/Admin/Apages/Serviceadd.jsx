import React, { useEffect, useState } from "react";
import Aheader from "../Acommon/Aheader";
import {
  collection,
  doc,
  deleteDoc,
  updateDoc,
  onSnapshot,
  getDoc,
} from "firebase/firestore";
import { db } from "../../Firebase/firestore";

function Serviceadd() {
  const [service, setservice] = useState([]);
  const [edit, setedit] = useState(null);

  // 🔹 SINGLE VIEW DATA
  const [single, setsingle] = useState({
    img: "",
    name: "",
    desc: "",
  });

  // 🔹 EDIT DATA
  const [edited, setedited] = useState({
    id: "",
    img: "",
    name: "",
    desc: "",
  });

  // 🔥 REALTIME FETCH
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "technicians"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setservice(data);
    });

    return () => unsub();
  }, []);

  // 🔹 VIEW SINGLE
  const singlecard = async (id) => {
    const docRef = doc(db, "technicians", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setsingle(docSnap.data());
    }
  };

  // 🔹 DELETE
  const deletecard = async (id) => {
    await deleteDoc(doc(db, "technicians", id));
  };

  // 🔹 EDIT SET
  const getdata = (data) => {
    setedit(data);
    setedited(data);
  };

  // 🔹 INPUT CHANGE
  const getchange = (e) => {
    setedited({
      ...edited,
      [e.target.name]: e.target.value,
    });
  };

  // 🔹 UPDATE
  const submitdata = async (e) => {
    e.preventDefault();
    const docRef = doc(db, "technicians", edited.id);
    await updateDoc(docRef, {
      img: edited.img,
      name: edited.name,
      desc: edited.desc,
    });
    setedit(null);
  };

  return (
    <div>
      <Aheader />
      <div className="container mt-4">
        <h1 className="text-center mb-4">Service Management</h1>

        {/* TABLE */}
        <table className="table table-bordered text-center">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {service.length > 0 ? (
              service.map((data) => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>
                    <img src={data.img} width="80" alt="service" />
                  </td>
                  <td>{data.name}</td>
                  <td>{data.desc}</td>
                  <td>
                    <button
                      className="btn btn-info btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#viewModal"
                      onClick={() => singlecard(data.id)}
                    >
                      View
                    </button>
                    <button
                      className="btn btn-success btn-sm mx-2"
                      onClick={() => getdata(data)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deletecard(data.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No Services Found</td>
              </tr>
            )}
          </tbody>
        </table>

        {/* EDIT FORM */}
        {edit && (
          <div className="card p-4 mt-4">
            <h3 className="text-center">Update Service</h3>
            <form onSubmit={submitdata}>
              <input
                className="form-control my-2"
                name="img"
                value={edited.img}
                onChange={getchange}
                placeholder="Image URL"
                required
              />
              <input
                className="form-control my-2"
                name="name"
                value={edited.name}
                onChange={getchange}
                placeholder="Service Name"
                required
              />
              <textarea
                className="form-control my-2"
                name="desc"
                value={edited.desc}
                onChange={getchange}
                placeholder="Description"
                required
              />
              <button className="btn btn-primary w-100">Update Service</button>
              <button
                type="button"
                className="btn btn-secondary w-100 mt-2"
                onClick={() => setedit(null)}
              >
                Cancel
              </button>
            </form>
          </div>
        )}
      </div>

      {/* VIEW MODAL */}
      <div
        className="modal fade"
        id="viewModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Service Details</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body text-center">
              <img src={single.img} width="150" alt="" className="mb-3" />
              <h5>{single.name}</h5>
              <p>{single.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Serviceadd;
