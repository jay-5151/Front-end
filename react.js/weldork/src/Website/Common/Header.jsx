import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
 <div>
  <div className="container-fluid bg-primary text-white d-none d-lg-flex wow fadeIn" data-wow-delay="0.1s">
    <div className="container py-3">
      <div className="d-flex align-items-center">
        <a href="index.html">
          <h2 className="text-white fw-bold m-0">WELDORK</h2>
        </a>
        <div className="ms-auto d-flex align-items-center">
          <small className="ms-4"><i className="fa fa-map-marker-alt me-3" />123 Street, New York, USA</small>
          <small className="ms-4"><i className="fa fa-envelope me-3" />info@example.com</small>
          <small className="ms-4"><i className="fa fa-phone-alt me-3" />+012 345 67890</small>
          <div className="ms-3 d-flex">
            <a className="btn btn-sm-square btn-light text-primary ms-2" href><i className="fab fa-facebook-f" /></a>
            <a className="btn btn-sm-square btn-light text-primary ms-2" href><i className="fab fa-twitter" /></a>
            <a className="btn btn-sm-square btn-light text-primary ms-2" href><i className="fab fa-linkedin-in" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid bg-white sticky-top wow fadeIn" data-wow-delay="0.1s">
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-white navbar-light p-lg-0">
        <a href="index.html" className="navbar-brand d-lg-none">
          <h1 className="fw-bold m-0">WELDORK</h1>
        </a>
        <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav">
            <NavLink to="/" className="nav-item nav-link active">Home</NavLink>
            <NavLink to="/about" className="nav-item nav-link">About</NavLink>
            <NavLink to="/service" className="nav-item nav-link">Services</NavLink>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
              <div className="dropdown-menu bg-light rounded-0 rounded-bottom m-0">
                <NavLink to="/feature"   className="dropdown-item">Features</NavLink>
                <NavLink to="/Ourteam" className="dropdown-item">Our Team</NavLink>
                <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>
                <NavLink to="/appoinment"   className="dropdown-item">Appoinment</NavLink>
                <NavLink to="/notfound"   className="dropdown-item">404 Page</NavLink>
              </div>
            </div>
            <NavLink to="/contact"  className="nav-item nav-link">Contact</NavLink>
          </div>
          <div className="ms-auto d-none d-lg-block">
            <a href className="btn btn-primary py-2 px-3">Get A Quote</a>
          </div>
        </div>
      </nav>
    </div>
  </div>
</div>

        
    </div>
  )
}

export default Header