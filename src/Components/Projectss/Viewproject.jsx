import React from "react";
import { Link} from "react-router-dom";
const Viewproject = () => {
  //  let { _id } = useParams();
  return (
    <React.Fragment>
      <section className="view-contact-intro p-3">
        <div className="container">
          <div className="row p-1">
            <div className="col">
              <p className="h3 text-success fw-bold">View Project</p>
              <p className="fst-italic">
                Gaining experience over the past 20 years in international
                markets, allows us to grab a better understanding of our
                customer requirements and meet the demand of any project around
                the world. Today we feel proud to say that we export marble to
                more than 45 destinations around the globe. Marble world exports
                slabs, tiles and cut to size.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="view-contact ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <img
                src="https://secureservercdn.net/198.71.233.129/g6c.1a4.myftpupload.com/wp-content/uploads/2019/02/Al-Ajmi-Marble-Qatar-Air-Premium-Lounge-Bangkok-Airport-3.jpg"
                alt="err"
                className="contact-file"
              />
            </div>

            <div className="col-md-8">
              <ul className="list-group">
                <li className="list-group-item list-group-item-action">
                  Project Name:<span className="fw-bold">City center</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Loaction:<span className="fw-bold">Sur</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  year:<span className="fw-bold">2020</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="row p-2">
            <div className="col">
              <Link to="/admin" className="btn btn-warning">
                Back
              </Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Viewproject;
