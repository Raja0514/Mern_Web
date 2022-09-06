import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link,useParams} from "react-router-dom";

const Viewproject = () => {

   let { _id } = useParams();

   let [image,setImage]=useState("");
   let [projectname,setProjectname]=useState(" ");
   let [year,setYear]=useState(" ");
   let [location,setLocation]=useState(" ");
   let [logo,setLogo]=useState("");
  useEffect(()=>{

  const getId = async()=>{
  let res= await axios.get(`https://rak0000.herokuapp.com/${_id}`)
  
  console.log(res)
  
    setImage(res.data.photo)
    setLocation(res.data.location)
    setYear(res.data.year)
    setProjectname(res.data.project)
    setLogo(res.data.logo)
    
  
}
getId();
},[_id])





  return (
    <React.Fragment>
      {/* <h6>{_id}</h6> */}
      <section className="view-contact-intro p-3">
        <div className="container-fluid mb-5">
          <div className="row p-1 mb-4">
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
        <div className="container-fluid">
          <div className="row align-items-center p-1 mb-5">
            <div className="col-md-4">
              <img
                src={image}
                onChange={(e)=>setImage(e.target.value)}
                alt="err"
                className="contact-file01"
              />
            </div>

            <div className="col-md-4">
              <ul className="list-group">
                <li className="list-group-item list-group-item-action">
                  Project Name:<span className="fw-bold" value={projectname} onChange={(e)=>setProjectname(e.target.value)}>{projectname}</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Loaction:<span className="fw-bold" value={location} onChange={(e)=>setLocation(e.target.value)}>{location}</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  year:<span className="fw-bold" value={year} onChange={(e)=>setYear(e.target.value)}>{year}</span>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <img
                src={logo}
                onChange={(e)=>setLogo(e.target.value)}
                alt="err"
                className="contact-file01"
              />
            </div>

          </div>
          

          <div className="row p-2 mb-4">
            <div className="col">
              <Link to="/project" className="btn btn-warning">
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
