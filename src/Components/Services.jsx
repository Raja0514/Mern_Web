import React from "react";

const Services = () => {
  return (
    
      <div className="container-fluid mt-5 ">
        <div className="row mb-5 py-2 ">
          <div className="col mb-2">
            <h3 className="fs-5 text-center ">Our Services</h3>
            <h1 className="display-6 text-center">
              Our <b>Marble Cutting Technology</b> servies
            </h1>
            <hr className="w-25 mx-auto " />
          </div>
        </div>
          <div className="row mb-5  ">
            <div className="col-md-4 mb-3">
              <h5 className="text-center mb-3 ">IFB -Wj</h5>
              <img
                src="/assets/flow3.jpg"
                alt="err"
                className="contact-file1 "
              />
            </div>

            <div className="col-md-4 mb-3">
              <h5 className="text-center mb-3">NOAT-CNC Matrix</h5>
              <img src="/assets/jpk.jpg" alt="err" 
              className="contact-file1 " />
            </div>

            <div className="col-md-4 mb-3">
              <h5 className="text-center mb-3 ">Dynamic- XD Wj</h5>
              <img
                src="/assets/flow2.jpg"
                alt="err"
                className="contact-file1"
              />
            </div>
          </div>
        </div>
      
    
  );
};
export default Services;
