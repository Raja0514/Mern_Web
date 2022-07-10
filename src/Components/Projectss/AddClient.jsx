import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class AddClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logourl: "",
    };
  }
  handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.logourl !== "") {
      axios
        .post("http://localhost:8080/router2/logopost", this.state)
        .then((res) => {
          this.setState({ logourl: "" });
          console.log(res);
        });
    }
  };
  render() {
    return (
      <React.Fragment>
        <section className="Add-project p-3">
          <div className="container">
            <div className="row  py-4">
              <div className="col">
                <p className="h4 text-success fw-bold p-1">Add New Client</p>
                <p className="fst-italic">
                  Gaining experience over the past 20 years in international
                  markets, allows us to grab a better understanding of our
                  customer requirements and meet the demand of any project
                  around the world. Today we feel proud to say that we export
                  marble to more than 45 destinations around the globe. Al Ajmi
                  Marble exports slabs, tiles and cut to size.
                </p>
              </div>
            </div>

            <div className="row  mt-5 mb-5 py-5">
              <div className="col-md-4">
                <form onSubmit={this.handleSubmit}>
                  <div className="mb-5">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Clientlogo"
                      name="logourl"
                      onChange={(e) => this.handleChange(e)}
                      value={this.state.logourl}
                    />
                  </div>

                  <div className="mb-4 ">
                    <input
                      type="submit"
                      className="btn btn-success"
                      value="Add"
                    />

                    <Link to="/admin" className="btn btn-danger ms-2 ">
                      Back
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default AddClient;
