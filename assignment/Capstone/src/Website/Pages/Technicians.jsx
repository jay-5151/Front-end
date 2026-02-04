import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/firestore";

function Technicians() {
  const [tech, settech] = useState([]);

  const fetchdata = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "technicians"));
      const techData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      settech(techData);
    } catch (error) {
      console.error("Error fetching technicians:", error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <Header />

      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center">
            <h6 className="text-primary text-uppercase">// Our Technicians //</h6>
            <h1 className="mb-5">Our Expert Technicians</h1>
          </div>

          <div className="row g-4">
            {tech.map((data) => (
              <div key={data.id} className="col-lg-3 col-md-6">
                <div className="team-item">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid" src={data.img} alt={data.name} />
                    <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                      <a className="btn btn-square mx-1" href="#"><i className="fab fa-facebook-f" /></a>
                      <a className="btn btn-square mx-1" href="#"><i className="fab fa-twitter" /></a>
                      <a className="btn btn-square mx-1" href="#"><i className="fab fa-instagram" /></a>
                    </div>
                  </div>
                  <div className="bg-light text-center p-4">
                    <h5 className="fw-bold mb-0">{data.name}</h5>
                    <small>{data.desc}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Technicians;
