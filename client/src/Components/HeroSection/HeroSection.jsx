import React from "react";
import "../HeroSection/hero-section.css";
import Cards from "../Cards/Cards";
import parallex from "../../Effects/Parallex/parallex";
import JourneyCard from "../Cards/Journey-Card//JourneyCard";
import Footer from "../Footer/Footer";
import { Link } from 'react-router-dom';

const HeroSection = (props) => {
  return (
    <>
      <div style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container mw-50  pt-5 ">
          <div className="row t-5">
            <div className="col-lg-5 ">
              <div className="h1">Your business deservers this.</div>
              <div className="h4 text-muted pt-5">
                See and check leads in one place. LMS as your work manager,
                you’ll stay on top of everything, your competitors are doing.
              </div>

              {!props.isUserL ? (
                <div className="d-flex align-content-end  mt-5">
                  <Link to='/sign-up'>
                    <button
                      type="button"
                      class="btn border-0 border-right btn-danger mt-5"
                    >
                      Get Started
                    </button>
                  </Link>
                  <Link to='/sign-in'>
                    <button type="button" class="btn btn-primary ms-sm-3 mt-5">
                      Sign In
                    </button>
                  </Link>
                  
                </div>
              ) : (
                <div className="d-flex align-content-end pt-5 ">
                  <Link to="/dashboard">
                    <button type="button" class="btn btn-primary  mt-3">
                      {"Go to Dashboard"}
                    </button>
                  </Link>
                </div>
              )}
            </div>
            <div className="col-lg effectImage" onMouseMove={parallex}>
              <img
                className="img-fluid"
                style={{ height: "80%" }}
                src="/Images/2.jpg"
                alt=""
              />
            </div>
          </div>
          <section id="home-card-section">
            <Cards />
          </section>
          <section id="home-check-section">
            <div className="h1 text-center mb-5 ">Our Journey</div>
            <div className="row">
              <JourneyCard />
              
            </div>
          </section>

          <section id="call-to-action" className="mt-5 mb-5">
                <div className="h2 text-center "> Manage your leads at one place</div>
                <div className="d-flex justify-content-center">
                <button className="btn btn-danger  mb-5 mt-5">Let's get started</button>
                </div>
          </section>

          
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HeroSection;
