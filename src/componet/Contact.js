import React from "react";
import "primeicons/primeicons.css";
import "./Contact.css";

function Contact() {
  return (
    <div className="contactDiv">
      <h2>Contact Me</h2>
      <div className="contactDetails">
        <li className="addressList">
          <i className="pi pi-phone" style={{ fontSize: "1.5rem" }}>
            {" "}
            +91 8883521656
          </i>
        </li>
        <li className="addressList">
          <i className="pi pi-envelope" style={{ fontSize: "1.5rem" }}>
            {" "}
            solomonrajesh123@gmail.com
          </i>
        </li>
        <li className="addressList">
          <i className="pi pi-map-marker" style={{ fontSize: "1.5rem" }}>
            {" "}
            Tiruchirappalli
          </i>
        </li>
      </div>
      <div>
        <h2>More</h2>
        <div className="contactDetails">
          <li className="addressList">
            <i className="pi pi-linkedin" style={{ fontSize: "1.5rem" }}>
              {" "}
              s-rajesh-profile
            </i>
          </li>
          <li className="addressList">
            <i className="pi pi-github" style={{ fontSize: "1.5rem" }}>
              {" "}
              SoloRajesh
            </i>
          </li>
          <li className="addressList">
            <i className="pi pi-instagram" style={{ fontSize: "1.5rem" }}>
              {" "}
              Solo_Rajez
            </i>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Contact;
