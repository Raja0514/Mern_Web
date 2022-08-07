import axios from "axios";
import React from "react";
//import { Link } from "react-router-dom";
class Client extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    };
  }
  componentDidMount = () => {
    axios.get("https://rak0000.herokuapp.com/data").then((res) => {
      const datac = res.data;
      console.log(datac);
      this.setState({ datas: datac });
    });
  };

  render() {
    return (
      <React.Fragment>
        <section className="client">
          <div className="conatiner">
            <div className="row p-4 mb-5">
              <div className="col">
                <p className="h3 text-center">
                  List of Our Clients

                  <hr className="w-25 mx-auto mb-4"></hr>

                  {/* <Link
                    className="btn btn-primary ms-2"
                    to="/Components/Projectss/Addclient"
                  >
                    <i className="fa fa-plus-circle me-2" />
                    Add New Client
                  </Link> */}

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

          <div className="row  ">
            {this.state.datas.length > 0 &&
              this.state.datas.map((pro) => {
                return (
                  <div className="col-md-4" key={pro._id}>
                    <div className="card my-1">
                      <div className="card-body ">
                        <div className="row justify-content-center align-items-center">
                          <div className="col p-1">
                            <img
                              src={pro.logo}
                              alt="err"
                              className="contact-file0"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Client;
