import React from "react";

const Services = () => {

  return (

    <div className="container-fluid">

      <section id="service">

        <div className="container-fluid py-5">

          <div className="row">

            <div className="col-md-12">

              <h3 className="fs-5 text-center mb-1">Our Services</h3>
              <h1 className="display-6 text-center">
                Our <b>Marble Cutting Technology</b> servies
              </h1>
              <hr className="w-25 mx-auto mb-4" />

            </div>

            <div className="row mb-4 py-2">

              <div className="col-md-4 ">
                <h5 className="text-center p-1">IFB -Wj</h5>
                <img
                  src="/assets/flow3.jpg"
                  alt="err"
                  className="contact-file1"
                />
              </div>

              <div className="col-md-4 ">
                <h5 className="text-center p-1">NOAT-CNC Matrix</h5>
                <img
                  src="/assets/jpk.jpg"
                  alt="err"
                  className="contact-file1"
                />
              </div>

              <div className="col-md-4 ">
                <h5 className="text-center p-1">Dynamic- XD Wj</h5>
                <img
                  src="/assets/flow2.jpg"
                  alt="err"
                  className="contact-file1"
                />
              </div>



            </div>
            
          </div>

        </div>

      </section>



    </div>
  );
};
export default Services;
