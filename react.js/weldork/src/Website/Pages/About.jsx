import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

function About() {
  return (
    <div>
        <Header/>
<div className="container-fluid page-header pt-5 mb-6 wow fadeIn" data-wow-delay="0.1s">
  <div className="container text-center pt-5">
    <div className="row justify-content-center">
      <div className="col-lg-7">
        <div className="bg-white p-5">
          <h1 className="display-6 text-uppercase mb-3 animated slideInDown">About</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item"><a href="#">Pages</a></li>
              <li className="breadcrumb-item" aria-current="page">About</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>


     <div className="container-fluid pt-6 pb-6">
  <div className="container">
    <div className="row g-5">
      <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
        <div className="about-img">
          <img className="img-fluid w-100" src="img/about.jpg" />
        </div>
      </div>
      <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
        <h1 className="display-6 text-uppercase mb-4">Ultimate Welding and Quality Metal Solutions</h1>
        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue,
          iaculis id elit eget, ultrices pulvinar tortor. Quisque vel lorem porttitor, malesuada arcu
          quis, fringilla risus. Pellentesque eu consequat augue.</p>
        <div className="row g-5 mb-4">
          <div className="col-sm-6">
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0 btn-xl-square bg-light me-3">
                <i className="fa fa-users-cog fa-2x text-primary" />
              </div>
              <h5 className="lh-base text-uppercase mb-0">Certified Expert &amp; Team</h5>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0 btn-xl-square bg-light me-3">
                <i className="fa fa-tachometer-alt fa-2x text-primary" />
              </div>
              <h5 className="lh-base text-uppercase mb-0">Fast &amp; Reliable Services</h5>
            </div>
          </div>
        </div>
        <p><i className="fa fa-check-square text-primary me-3" />Many variations of passages of lorem ipsum
        </p>
        <p><i className="fa fa-check-square text-primary me-3" />Many variations of passages of lorem ipsum
        </p>
        <p><i className="fa fa-check-square text-primary me-3" />Many variations of passages of lorem ipsum
        </p>
        <div className="border border-5 border-primary p-4 text-center mt-4">
          <h4 className="lh-base text-uppercase mb-0">We’re Good in All Metal Works Using Quality Welding Tools</h4>
        </div>
      </div>
    </div>
  </div>
</div>

        <Footer/>
    </div>
  )
}

export default About