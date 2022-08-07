import React from "react";
import axios from "axios";
import { Link,useNavigate} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Admin = () => {
  //let {_id } = useParams();
  const Navigate=useNavigate()
  const [datas, setData] = useState([]);
  console.log(datas);
  const getId = async () => {
    let res = await axios.get(`https://rak0000.herokuapp.com/data`);
    console.log(res);
    setData(res.data);
  };
  useEffect(() => {
    getId();
  }, []);
  const handlelogout = () => {
    localStorage.clear();
    //window.location.reload();
    Navigate('/')
    
    
  };
  const handleDelete = async (_id) => {
    console.log("working");

    await axios.delete(`https://rak0000.herokuapp.com/delete/${_id}`);
    getId();
  };

  return (
    <>
      <section className="project-search p-3">
        <div className="conatiner-fluid">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3 text-center p-2">
                  <Link
                    className="btn btn-primary ms-2"
                    to="/Components/Projectss/Addproject"
                  >
                    <i className="fa fa-plus-circle me-2" />
                    Add New Project
                  </Link>

                  <button
                    className="btn btn-success m-2"
                    onClick={handlelogout}
                  >
                    <i className="fa fa-sign-out p-1" aria-hidden="true"></i>
                    Logout
                  </button>
                </p>
                <p className="fst-italic">
                  Gaining experience over the past 20 years in international
                  markets, allows us to grab a better understanding of our
                  customer requirements and meet the demand of any project
                  around the world. Today we feel proud to say that we export
                  marble to more than 45 destinations around the globe. Marble
                  world exports slabs, tiles and cut to size.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="project-list">
        <div className="container-fluid">
          <div className="row mb-5">
            {datas.length > 0 &&
              datas.map((pro) => {
                return (
                  <div className="col-md-6" key={pro._id}>
                    <div className="card my-2">
                      <div className="card-body ">
                        <div className="row p-2 align-items-center d-flex justify-content-around ">
                          <div className="col-md-4">
                            <img
                              src={pro.photo}
                              alt="err"
                              className="contact-file"
                            />
                          </div>

                          <div className="col-md-7">
                            <ul className="list-group">
                              <li className="list-group-item list-group-item-action">
                                Project:
                                <span className="fw-bold">{pro.project}</span>
                              </li>
                              <li className="list-group-item list-group-item-action">
                                Location:
                                <span className="fw-bold">{pro.location}</span>
                              </li>
                              <li className="list-group-item list-group-item-action">
                                Year:
                                <span className="fw-bold">{pro.year}</span>
                              </li>
                            </ul>
                          </div>

                          <div className="col-md-1    d-flex flex-column  align-items-center ">
                            <Link
                              to={`/Components/Projectss/Editproject/${pro._id}`}
                              className="btn btn-secondary my-1"
                            >
                              <i className="fa fa-pen" />
                            </Link>
                            <button
                              onClick={(e) => handleDelete(pro._id)}
                              className="btn btn-success my-1"
                            >
                              <i className="fa fa-trash" />
                            </button>
                            <Link
                              to={`/Components/Projectss/Viewproject/${pro._id}`}
                              className="btn btn-primary my-1"
                            >
                              <i className="fa fa-eye" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};
export default Admin;
