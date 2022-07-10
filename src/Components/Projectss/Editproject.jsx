import React from "react";
import { Link } from "react-router-dom";

const Editproject = () => {
  return (
    <React.Fragment>
      <section className="Edit-project">
        <div className="container">
          <div className="row  p-4">
            <div className="col">
              <p className="h4 text-primary fw-bold p-2">Edit Project</p>
              <p className="fst-italic mb-2">
                Gaining experience over the past 20 years in international
                markets, allows us to grab a better understanding of our
                customer requirements and meet the demand of any project around
                the world. Today we feel proud to say that we export marble to
                more than 45 destinations around the globe. Marble world exports
                slabs, tiles and cut to size.
              </p>
            </div>
          </div>
          <div className="row p-4">
            <div className="col-md-6">
              <form>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="phtoturl"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="projectname"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Location"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="year"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Update"
                  />
                  <Link
                    to="/admin"
                    className="btn btn-danger ms-2"
                  >
                    Back
                  </Link>
                </div>
              </form>
            </div>

            <div className="col-md-6">
              <img
                src="https://secureservercdn.net/198.71.233.129/g6c.1a4.myftpupload.com/wp-content/uploads/2019/02/Al-Ajmi-Marble-Qatar-Air-Premium-Lounge-Bangkok-Airport-3.jpg"
                alt="err"
                className="contact-file"
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Editproject;
