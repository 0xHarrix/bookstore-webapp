// HomePage.js

import React from "react";
import Navbar from "./Navbar";
import "./styles/Hero.css";

function HomePage({ user, signOut }) {
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <Navbar />
      <h1 className="herotext1">
        The <span className="orange">Smart</span> <br /> Choice For
        <span className="orange"> Future</span>
      </h1>
      <h2 className="herotext2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
      </h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          top: "490px",
          left: "194px",
        }}
      >
        <div style={{ position: "relative", width: "300px" }}>
          <input
            type="text"
            placeholder="Search"
            style={{
              padding: "14px 32px 14px 32px", // Adjust padding to accommodate image and text
              borderRadius: "24px",
              border: "1px solid #ccc",
              width: "100%", // Adjust width as needed
              backgroundImage: "url(Search.png)",
              backgroundPosition: "10px center", // Adjust position of the image // Add the path to your image here
              backgroundRepeat: "no-repeat",
              backgroundSize: "12px 12px", // Adjust size of the image
            }}
          />
          <button
            style={{
              padding: "12px 20px",
              borderRadius: "24px",
              backgroundColor: "#4D2C5E",
              color: "white",
              border: "none",
              cursor: "pointer",
              position: "absolute",
              top: "50%", // Align button to the vertical center
              transform: "translateY(-50%)", // Move button up by half of its height
              left: "90.5%",
              height: "100%",
            }}
          >
            Continue
          </button>
        </div>
      </div>
      <div class="container1">
        <div class="layout">
          <img
            src="online-test1.png"
            alt="Image 1"
            style={{ height: "80px", width: "80px" }}
          />
          <div class="content">
            <h2>Learn The Latest Skills</h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a BC, making it over 2000 years old.
            </p>
          </div>
        </div>
        <div class="layout">
          <img
            src="online-test2.png"
            alt="Image 2"
            style={{ height: "80px", width: "80px" }}
          />
          <div class="content">
            <h2>Get Ready For a Career</h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a BC, making it over 2000 years old.
            </p>
          </div>
        </div>
        <div class="layout">
          <img
            src="online-test3.png"
            alt="Image 3"
            style={{ height: "80px", width: "80px" }}
          />
          <div class="content">
            <h2>Earn a Certificate</h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a BC, making it over 2000 years old.
            </p>
          </div>
        </div>
      </div>
      <div class="about-us-container">
        <div class="about-us-content">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.{" "}
          </p>
        </div>
        <div class="about-us-image">
          <img src="About.png" alt="About Us Image" />
        </div>
      </div>
      <section class="our-tracks-section">
        <h2 className="track">Our Tracks</h2>
        <div class="tracks-container">
          <div class="track-card">
            <img src="1.png" alt="Track 1" />
            <p>UI/UX Design</p>
            <h4>JEE 2024</h4>
            <h3>$98</h3>
            <hr/>
            <div class="course-details">
            <div class="detail">
                <img src="time.png" alt="Time Icon" />
                <h5>10 hours</h5>
              </div>
              <div class="detail">
                <img src="video.png" alt="Video Icon" />
                <h5>10 hours</h5>
              </div>
              <div class="detail">
                <img src="download.png" alt="Download Icon" />
                <h5>10 hours</h5>
              </div>
            </div>
            <div className="joinbutton">
              <h1></h1>
            <button class="join-course-btn">Join course</button>
            <h2></h2>
            </div>
          </div>
          <div class="track-card">
            <img src="2.png" alt="Track 1" />
            <p>Description of Track 1 goes here.</p>
            <h4>NEET 2024 </h4>
            <h3>$98</h3>
            <hr/>
            <div class="course-details">
            <div class="detail">
                <img src="time.png" alt="Time Icon" />
                <h5>10 hours</h5>
              </div>
              <div class="detail">
                <img src="video.png" alt="Video Icon" />
                <h5>10 hours</h5>
              </div>
              <div class="detail">
                <img src="download.png" alt="Download Icon" />
                <h5>10 hours</h5>
              </div>
            </div>
            <div className="joinbutton">
              <h1></h1>
            <button class="join-course-btn">Join course</button>
            <h2></h2>
            </div>
          </div>
          <div class="track-card">
            <img src="3.png" alt="Track 1" />
            <p>Description of Track 1 goes here.</p>
            <h4>GATE 2024</h4>
            <h3>$98</h3>
            <hr/>
            <div class="course-details">
              <div class="detail">
                <img src="time.png" alt="Time Icon" />
                <h5>10 hours</h5>
              </div>
              <div class="detail">
                <img src="video.png" alt="Video Icon" />
                <h5>10 hours</h5>
              </div>
              <div class="detail">
                <img src="download.png" alt="Download Icon" />
                <h5>10 hours</h5>
              </div>
            </div>
            <div className="joinbutton">
              <h1></h1>
            <button class="join-course-btn">Join course</button>
            <h2></h2>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="learning">
          <h1 className="learningtext">Premium <span>Learning</span><br/> Experience</h1>
          <div className="flex-text">
          <img src="11.png" className="learningtext1"></img>
          <div>
          <h2 className="text1">Easily Accessible</h2>
          <h3 style={{paddingLeft: '25px',marginTop: '-10px'}} className="text3">Learning Will fell Very Comfortable With Courslab.</h3>
          </div>
          </div>
          <div className="flex-text">
          <img src="12.png" className="learningtext2"></img>
          <div>
          <h2 className="text2">Fun learning expe</h2>
          <h3 style={{paddingLeft: '25px',marginTop: '-10px'}} className="text3">Learning Will fell Very Comfortable With Courslab.</h3>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
