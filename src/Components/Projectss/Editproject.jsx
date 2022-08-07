import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";
import {Link, useParams } from "react-router-dom";
const Editproject = () => {
  let { _id } = useParams();
   let [image,setImage]=useState("");
   let [projectname,setProjectname]=useState(" ");
   let [year,setYear]=useState(" ");
   let [location,setLocation]=useState(" ");
   
   
  useEffect(()=>{
  const getId = async()=>{
  let res= await axios.get(`https://rak0000.herokuapp.com/${_id}`)
  
  console.log(res)
  
    setImage(res.data.photo)
    setLocation(res.data.location)
    setYear(res.data.year)
    setProjectname(res.data.project)

}
getId();
},[_id])

const data={

photo:image,
project:projectname,
location: location,
year:year,
}

const update=()=>{


  axios.put(`https://rak0000.herokuapp.com/update/${_id}`,data)

}




  return (
  <React.Fragment>
      <section className="Edit-project">
        <div className="container-fluid">
          <div className="row p-3 mb-5">
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
          <div className="row p-4 mb-5">

            <div className="col-md-6">
              <form>
                <div className="mb-2">
                  <label></label>
                  <input
                    type="text"
                    value={image}
                    onChange={(e)=>setImage(e.target.value)}
                    className="form-control"
                    placeholder="phtoturl"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    value={projectname}
                    onChange={(e)=>setProjectname(e.target.value)}
                    className="form-control"
                    placeholder="projectname"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    value={location}
                    onChange={(e)=>setLocation(e.target.value)}
                    className="form-control"
                    placeholder="Location"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    value={year}
                    onChange={(e)=>setYear(e.target.value)}
                    className="form-control"
                    placeholder="year"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Update"
                    onClick={update}
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
              alt="err"
              className="contact-file"
              src={image}
              onChange={(e)=>setImage(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Editproject;
