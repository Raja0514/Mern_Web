import React from "react";

const Services = () => {
  return (
    <section id="service">
      <div className="container-fluid mt-5">
        <div className="row mb-5 ">
          <div className="col mb-2">
            <h3 className="fs-5 text-center ">Our Services</h3>
            <h1 className="display-6 text-center">
              Our <b>Marble Cutting Technology</b> servies
            </h1>
            <hr className="w-25 mx-auto " />
          </div>
        </div>
          <div className="row mb-5  ">
            <div className="col mb-2">
              <h5 className="text-center mb-1 ">IFB -Wj</h5>
              <img
                src="/assets/flow3.jpg"
                alt="err"
                className="contact-file1"
              />
            </div>

            <div className="col mb-2">
              <h5 className="text-center mb-1">NOAT-CNC Matrix</h5>
              <img src="/assets/jpk.jpg" alt="err" className="contact-file1" />
            </div>

            <div className="col mb-2">
              <h5 className="text-center mb-1 ">Dynamic- XD Wj</h5>
              <img
                src="/assets/flow2.jpg"
                alt="err"
                className="contact-file1"
              />
            </div>
          </div>
        </div>
      
    </section>
  );
};
export default Services;
