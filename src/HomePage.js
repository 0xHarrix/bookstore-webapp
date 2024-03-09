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
      <section className="about">
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
      </section>
      <section class="our-tracks-section">
        <h2 className="track">Our Tracks</h2>
        <div class="tracks-container">
          <div class="track-card">
            <img src="1.png" alt="Track 1" />
            <p>UI/UX Design</p>
            <h4>JEE 2024</h4>
            <h3>$98</h3>
            <hr />
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
            <hr />
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
            <hr />
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
          <h1 className="learningtext">
            Premium <span>Learning</span>
            <br /> Experience
          </h1>
          <div className="flex-text">
            <img src="11.png" className="learningtext1"></img>
            <div>
              <h2 className="text1">Easily Accessible</h2>
              <h3
                style={{ paddingLeft: "25px", marginTop: "-10px" }}
                className="text3"
              >
                Learning Will fell Very Comfortable With Courslab.
              </h3>
            </div>
          </div>
          <div className="flex-text">
            <img src="12.png" className="learningtext2"></img>
            <div>
              <h2 className="text2">Fun learning expe</h2>
              <h3
                style={{ paddingLeft: "25px", marginTop: "-10px" }}
                className="text3"
              >
                Learning Will fell Very Comfortable With Courslab.
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section class="our-student-section">
        <div class="student-text">
          <h2>What student’s say</h2>
          <h3>Lorem Ipsum is simply dummy text of the printing.</h3>
        </div>
        <div class="card-container">
          <div class="card">
            {" "}
            <div class="content">
              “Teachings of the great explore of truth, the master-builder of
              human happiness. no one rejects,dislikes, or avoids pleasure
              itself, pleasure itself”{" "}
            </div>
            <div class="image-container">
              <img src="Profile1.png" alt="Profile Image" height="47px" />
              <h2>
                <span>Clara R. Altman</span>
                <br />
                UI&UX Design
              </h2>
            </div>
          </div>
          <div class="card">
            <div class="content">
              “Complete account of the system and expound the actual Contrary to
              popular belief, Lorem Ipsum is not simply random text. It has
              roots”
            </div>
            <div class="image-container">
              <img src="Profile2.png" alt="Profile Image" height="47px" />
              <h2>
                <span>Dannette P. Cervantes</span>
                <br />
                Web Design
              </h2>
            </div>
          </div>
          <div class="card">
            <div class="content">
              “There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour”
            </div>
            <div class="image-container">
              <img src="Profile3.png" alt="Profile Image" height="47px" />
              <h2>
                <span>Finlay Kirk </span>
                <br />
                Web Developer
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="faculty">
        <h2 className="track">Our Faculty</h2>
        <h3 className="track1">
          Lorem Ipsum is simply dummy text of the printing.
        </h3>
        <div class="tracks-container">
          <div class="track-card">
            <img src="21.png" alt="Track 1" />
            <p>Matthew E. McNatt</p>
            <h4>Professor @George Brown College</h4>
            <p>
              Ut enim ad minim veniam, quis nost exercitation ullamco laboris
              nisi ut allquip ex commodo.
            </p>
            <h3>Engineering physics</h3>
            <div class="course-details">
              <div class="detail1">
                <img src="insta.png" alt="Time Icon" />
              </div>
              <div class="detail2">
                <img src="linkedin.png" alt="Video Icon" />
              </div>
            </div>
          </div>
          <div class="track-card">
            <img src="22.png" alt="Track 1" />
            <p>Tracy D. Wright</p>
            <h4>Professor @George Brown College</h4>
            <p>
              Ut enim ad minim veniam, quis nost exercitation ullamco laboris
              nisi ut allquip ex commodo.
            </p>
            <h3>Engineering physics</h3>
            <div class="course-details">
              <div class="detail1">
                <img src="insta.png" alt="Time Icon" />
              </div>
              <div class="detail2">
                <img src="linkedin.png" alt="Video Icon" />
              </div>
            </div>
          </div>
          <div class="track-card">
            <img src="23.png" alt="Track 1" />
            <p>Cynthia A. Nelson</p>
            <h4>Professor @George Brown College</h4>
            <p>
              Ut enim ad minim veniam, quis nost exercitation ullamco laboris
              nisi ut allquip ex commodo.
            </p>
            <h3>Engineering physics</h3>
            <div class="course-details">
              <div class="detail1">
                <img src="insta.png" alt="Time Icon" />
              </div>
              <div class="detail2">
                <img src="linkedin.png" alt="Video Icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="subscribe">
        <h2>Subscribe to our newsletter<br/><span>Lorem Ipsum is simply dummy text of the printing.</span></h2>
        <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingLeft:'550px'
        }}
      >
        <div style={{ position: "relative", width: "300px" }}>
          <input
            type="text"
            placeholder="Email Address"
            style={{
              padding: "14px 32px 14px 32px", // Adjust padding to accommodate image and text
              borderRadius: "24px",
              border: "1px solid #ccc",
              width: "100%", // Adjust width as needed
            }}
          />
          <button
            style={{
              padding: "12px 20px",
              borderRadius: "24px",
              backgroundColor: "orange",
              color: "white",
              border: "none",
              cursor: "pointer",
              position: "absolute",
              top: "50%", // Align button to the vertical center
              transform: "translateY(-50%)", // Move button up by half of its height
              left: "99%",
              height: "100%",
            }}
          >
            Send
          </button>
        </div>
      </div>
      </div>
      <footer>
    <div class="footer-content">
        <div class="footer-section about">
          <img src="logo.png"/>
            <h2>Book Store</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lacus eget enim consequat cursus.</p>
            <div class="contact">
                <span><i class="fas fa-phone"></i> 123-456-7890</span>
                <span><i class="fas fa-envelope"></i> info@example.com</span>
            </div>
            <div class="socials">
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
            </div>
        </div>
        <div class="footer-section linkss">
            <h2>Quick Links</h2>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </div>
    <div class="footer-bottom">
        &copy; 2024 Your Website | Designed by You
    </div>
</footer>
    </div>
  );
}

export default HomePage;
