import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    };
  }
  componentDidMount = () => {
    axios.get("http://localhost:8080/router1/data").then((res) => {
      const datac = res.data;
      console.log(datac);
      this.setState({ datas: datac });
    });
  };

  deleteProject = () => {
    console.log("deleted");
  };
  handlelogout=()=>{

    localStorage.clear();
    window.location.reload();

  }
  render() {
    return (
      <>
        <section className="project-search p-3">
          <div className="conatiner">
            <div className="grid">

              <div className="row">

                <div className="col">
                
                  <p className="h3 text-center p-2">
                    <Link
                      className="btn btn-primary ms-2 p-2 mb-2"
                      to="/Components/Projectss/Addproject"
                    >
                      <i className="fa fa-plus-circle me-2" />
                      Add New Project
                    </Link>
                    
                    <Link
                      className="btn btn-primary ms-2 p-2 mb-2"
                      to="/Components/Projectss/Addclient"
                    >
                      <i className="fa fa-plus-circle me-2 " />
                      Add New Client
                    </Link>

                    <button className="btn btn-success ms-2 p-2 mb-2 "

                    onClick={this.handlelogout}
                     
                    >
                      <i className="fa fa-sign-out p-1" aria-hidden="true"></i>

                      logout</button>

                  </p>
                </div>



              </div>
            </div>
          </div>


        </section>
        <section className="project-list">
          <div className="container">
            <div className="row mb-5">
              {this.state.datas.length > 0 &&
                this.state.datas.map((pro) => {
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
                                  <span className="fw-bold">
                                    {pro.location}
                                  </span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                  Year:
                                  <span className="fw-bold">{pro.year}</span>
                                </li>
                              </ul>
                            </div>

                            <div className="col-md-1    d-flex flex-column  align-items-center ">
                              <Link
                                to="/Components/Projectss/Editproject:ProjectId"
                                className="btn btn-secondary my-1"
                              >
                                <i className="fa fa-pen" />
                              </Link>

                              <button
                                onClick={this.deleteProject}
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
  }
}
export default Admin;
