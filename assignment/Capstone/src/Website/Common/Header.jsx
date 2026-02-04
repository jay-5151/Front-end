import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>

 <div>
  <div className="container-fluid bg-light p-0">
    <div className="row gx-0 d-none d-lg-flex">
      <div className="col-lg-7 px-5 text-start">
        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
          <small className="fa fa-map-marker-alt text-primary me-2" />
          <small>123 Street, New York, USA</small>
        </div>
        <div className="h-100 d-inline-flex align-items-center py-3">
          <small className="far fa-clock text-primary me-2" />
          <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
        </div>
      </div>
      <div className="col-lg-5 px-5 text-end">
        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
          <small className="fa fa-phone-alt text-primary me-2" />
          <small>+012 345 6789</small>
        </div>
        <div className="h-100 d-inline-flex align-items-center">
          <a className="btn btn-sm-square bg-white text-primary me-1" href><i className="fab fa-facebook-f" /></a>
          <a className="btn btn-sm-square bg-white text-primary me-1" href><i className="fab fa-twitter" /></a>
          <a className="btn btn-sm-square bg-white text-primary me-1" href><i className="fab fa-linkedin-in" /></a>
          <a className="btn btn-sm-square bg-white text-primary me-0" href><i className="fab fa-instagram" /></a>
        </div>
      </div>
    </div>
  </div>
  
  <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
    <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
      <h2 className="m-0 text-primary"><i className="fa fa-car me-3" />CarServ</h2>
    </a>
    <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto p-4 p-lg-0">
        <NavLink to="/" className="nav-item nav-link active">Home</NavLink>
        <NavLink to="/about" className="nav-item nav-link">About</NavLink>
        <NavLink to="/service" className="nav-item nav-link">Services</NavLink>
        <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
          <div className="dropdown-menu fade-up m-0">
            <NavLink to="/booking" className="dropdown-item">Booking</NavLink>
            <NavLink to="/technicians" className="dropdown-item">Technicians</NavLink>
            <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>
            <NavLink to="/notfound" className="dropdown-item">404 Page</NavLink>
          </div>
        </div>
        <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
        {(()=>{
          if(localStorage.getItem("Uid")){
            return(
              <li><Link className='nav-item nav-link active'>{localStorage.getItem("Uname")}</Link></li>
            )
          }
        })()}
      </div>
      <a href className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Get A Quote<i className="fa fa-arrow-right ms-3" /></a>
    </div>
  </nav>
  
  <div className="container-fluid p-0 mb-5">
    <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="w-100" src="img/carousel-bg-1.jpg" alt="Image" />
          <div className="carousel-caption d-flex align-items-center">
            <div className="container">
              <div className="row align-items-center justify-content-center justify-content-lg-start">
                <div className="col-10 col-lg-7 text-center text-lg-start">
                  <h6 className="text-white text-uppercase mb-3 animated slideInDown">// Car Servicing //</h6>
                  <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">Qualified Car Repair Service Center</h1>
                  <a href className="btn btn-primary py-3 px-5 animated slideInDown">Learn More<i className="fa fa-arrow-right ms-3" /></a>
                </div>
                <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                  <img className="img-fluid" src="img/carousel-1.png" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="w-100" src="img/carousel-bg-2.jpg" alt="Image" />
          <div className="carousel-caption d-flex align-items-center">
            <div className="container">
              <div className="row align-items-center justify-content-center justify-content-lg-start">
                <div className="col-10 col-lg-7 text-center text-lg-start">
                  <h6 className="text-white text-uppercase mb-3 animated slideInDown">// Car Servicing //</h6>
                  <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">Qualified Car Wash Service Center</h1>
                  <a href className="btn btn-primary py-3 px-5 animated slideInDown">Learn More<i className="fa fa-arrow-right ms-3" /></a>
                </div>
                <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                  <img className="img-fluid" src="img/carousel-2.png" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</div>


    </div>
  )
}

export default Header