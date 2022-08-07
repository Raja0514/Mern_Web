import React, { Component } from "react";
import axios from "axios";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      message: "",
    };
  }
  handleChange = (e) => {
    //console.log(e.target.name);
    //console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name !== "" && this.state.message !== "") {
      axios
        .post("https://rak0000.herokuapp.com/contact", this.state)
        .then((res) => {
          this.setState({ name: "", message: "" });
          console.log(res);
        });
    }
  };
  render() {
    return (
      <div>
        <section id="contact">
          <div className="container-fluid py-5">
            <div className="row mb-5">
              <div className="col-md-12">
                <h3 className="fs-5 text-center mb-0">Contact Us</h3>
                <h1 className="display-6 text-center">
                  For Marble <b>Enquiry ?</b>
                </h1>
                <hr className="w-25 mx-auto " />
              </div>
            </div>
            <div className="row mt-1">
              <div className="col-md-6">
                <img
                  src="/assets/Customer.jpg"
                  alt="err"
                  className="contact-file1"
                />
              </div>
              <div className="col-md-6">
                <form onSubmit={this.handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Enter Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      onChange={(e) => this.handleChange(e)}
                      value={this.state.name}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Enter your message</label>

                    <textarea
                      type="text"
                      className="form-control"
                      rows="5"
                      name="message"
                      onChange={(e) => this.handleChange(e)}
                      value={this.state.message}
                    />
                  </div>
                  <button type="submit" className="btn btn-outline-primary">
                    send message<i className="fa fa-paper-plane ms-2"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Contact;
