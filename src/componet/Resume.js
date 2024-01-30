import React from "react";
import "./About.css";

function Resume() {
  return (
    <div className="aboutDiv">
      <div id="content4">
        <h2>Download My Resume</h2>
        <p className="aboutPara">
          Curious to learn more about my professional journey? Feel free to
          download my resume to get a comprehensive overview of my skills,
          experience, and projects.
        </p>

        <div className="downloadFile">
          <a href="./file/Rajesh_Resume_2024_New.pdf" download>
            <img
              src="https://media4.giphy.com/media/j4tkXKMHSJaeTpx4a6/giphy.webp?cid=790b7611fshbfxslcq4qi7of6cx79ldcc7cfcw9l33physb3&ep=v1_gifs_search&rid=giphy.webp&ct=g"
              alt=""
            />
          </a>
        </div>
        <p className="aboutPara">
          Don't hesitate to reach out if you have any questions or if there's an
          exciting opportunity you'd like to discuss.
          <br />
          Let's connect and make things happen!
        </p>
      </div>
    </div>
  );
}

export default Resume;
