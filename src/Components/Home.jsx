import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Project from "./Project";
import Client from "./Client";
const Home = () => {
  return (
    <>
      <section id="home ">
        <div className="container-fluid">
          <div className="row justify-content-end py-5">
            <div className="col-md-6 align-items-center">
              <h3 className="disply-4 fw-folder mb-4 text-center ">
                Welcome to Marble World
              </h3>
              <p className="mb-4">
                MARBLE WORLD WORLD CLASS BEIGE MARBLE FROM OMAN Since 1997, is a
                leading manufacturer and exporter of natural Omani marble and
                operates its own quarries located in Oman: Sohar, Ibri and Al
                Mudhaibi.Our Company uses latest Italian technologies for
                processing slabs, tiles and cut to size.

                MARBLE WORLD WORLD CLASS BEIGE MARBLE FROM OMAN Since 1997, is a
                leading manufacturer and exporter of natural Omani marble and
                operates its own quarries located in Oman: Sohar, Ibri and Al
                Mudhaibi.Our Company uses latest Italian technologies for
                processing slabs, tiles and cut to size.

                MARBLE WORLD WORLD CLASS BEIGE MARBLE FROM OMAN Since 1997, is a
                leading manufacturer and exporter of natural Omani marble and
                operates its own quarries located in Oman: Sohar, Ibri and Al
                Mudhaibi.Our Company uses latest Italian technologies for
                processing slabs, tiles and cut to size.

                
                
              </p>

              <p className="text-center">
                <Link
                  className=" btn btn-primary me-4 rounded-pill px-4 py-2 mb-2"
                  to="/contact"
                >
                  Get Quote
                </Link>

                <Link
                  className=" btn btn-primary  rounded-pill px-4 py-2 mb-2"
                  to="/services"
                >
                  Our Services
                </Link>
              </p>
            </div>

            <div className="col-md-6 ">
              <h3 className="disply-4 mb-4 fw-folder  text-center">
                Our Factory
              </h3>
              <img
                src="/assets/marble.jpg"
                alt="errr"
                className="rounded contact-file1"
              />
            </div>
          </div>
          <About />
          <Client />
          <Services />
          <Project />
          <Contact />
        </div>
      </section>
    </>
  );
};
export default Home;
