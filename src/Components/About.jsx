import React from "react";
const About = () => {
  return (
    <div>
      
        <div className="container-fluid">
          <div className="row mt-3">
            <div className="col-md-12 align-items-center">
              <div className="fs-5  text-center">About Us</div>
              <h1 className="display6 mb-2 text-center">
                who <b>We</b> are
                <hr className="w-25 mx-auto" />
              </h1>
              <p className="mb-2 ">
                Since 1997, Marble world is a leading Omani marble manufacturing
                Company and exporter of natural Omani marble. Starting with just
                one quarry in 1997, today we own three quarries located in Oman:
                Sohar, Ibri and Al Mudaibi.
              </p>
             
            </div>
          </div>
          <div className="row  ">
            <div className="col-md-4">
              <h5 className="text-center ">Al Mudaibi quarry</h5>
              <img
                src="/assets/quarry1.jpg"
                alt="err"
                className="contact-file1"
              />
            </div>
            <div className="col-md-4 ">
              <h5 className="text-center ">Ibri Quarry</h5>
              <img
                src="/assets/quarry2.jpg"
                alt="err"
                className="contact-file1"
              />
            </div>
            <div className="col-md-4">
              <h5 className="text-center ">Sohar Quarry</h5>
              <img
                src="/assets/quarry3.jpg"
                alt="err"
                className="contact-file1"
              />
            </div>
          </div>
        </div>
      </div>
    
  );
};
export default About;
