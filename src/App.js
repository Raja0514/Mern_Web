import "./App.css";
import { Routes, Route } from "react-router-dom";

//components

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Project from "./Components/Project";
import Client from "./Components/Client";
import Admin from "./Components/Admin";

//crud operation

import Editproject from "./Components/Projectss/Editproject";
import Addproject from "./Components/Projectss/Addproject";
import Viewproject from "./Components/Projectss/Viewproject";
import AddClient from "./Components/Projectss/AddClient";

//private route

import PrivateRoutes from "./utils/privateRoutes";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/project" element={<Project />} />
        <Route path="/client" element={<Client />} />

       <Route element={<PrivateRoutes/>}>

       <Route path="/admin" element={<Admin />} />

       </Route>

        

        <Route
          path="/Components/Projectss/Editproject:ProjectId"
          element={<Editproject />}
        />
        <Route
          path="/Components/Projectss/Addproject"
          element={<Addproject />}
        />
        <Route path="/Components/Projectss/Addclient" element={<AddClient />} />
        <Route
          path="/Components/Projectss/Viewproject/:_id"
          element={<Viewproject />}
        />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
