import React from "react";

const Services = () => {

  return (

    <div>

      <section id="service">

        <div className="container my-3 py-3">

          <div className="row p-3 mb-5">

            <div className="col-md-12">

              <h3 className="fs-5 text-center mb-1">Our Services</h3>
              <h1 className="display-6 text-center mb-2">
                Our <b>Marble Cutting Technology</b> servies
              </h1>
              <hr className="w-25 mx-auto mb-5" />

            </div>

            <div className="row mb-3 ">

              <div className="col-md-4 p-4">
                <h5 className="text-center">IFB -Wj</h5>
                <img
                  src="/assets/flow3.jpg"
                  alt="err"
                  className="contact-file1"
                />
              </div>

              <div className="col-md-4 p-4">
                <h5 className="text-center">NOAT-CNC Matrix</h5>
                <img
                  src="/assets/jpk.jpg"
                  alt="err"
                  className="contact-file1"
                />
              </div>

              <div className="col-md-4 p-4">
                <h5 className="text-center">Dynamic- XD Wj</h5>
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
