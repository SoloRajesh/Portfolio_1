import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="homeDiv">
      <div className="homeProfile">
        <img
          src="https://imgcdn.floweraura.com/avenger-groot-planter-9871337pl-A_0.jpg"
          alt="NA"
          id="profile"
        />
        <div className="welcomeNote">
          <p id="content2">I'm Rajesh. I'm a Full Stack Developer.</p>
          <p id="content3">
            Write a program for Responsive and Attractive Websites.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
