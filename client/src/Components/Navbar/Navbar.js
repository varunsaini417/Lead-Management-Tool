import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = (props) => {
  const navigate = useNavigate();
  const handleLogout = (e)=>{
      axios.get("http://localhost:5000/user/logout")
        .then(res=> {
          console.log(res);
          navigate("/")
          window.location.reload(true)
        })
        .catch(err=>{
          console.log(err);
        })
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-4">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Lead Management
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav m-auto">
              <li class="nav-item">
                <Link class={`nav-link ${props.homeActive}`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link className={`nav-link ${props.featuresActive}`} to="/features">
                  Features
                </Link>
              </li>
              <li class="nav-item">
                <Link class={`nav-link ${props.whyActive}`} to="/Whyus">
                  Why Us?
                </Link>
              </li>

            </ul>
            {!props.isUserL ? (
                <div className="d-flex align-content-end">
                  <Link to='/sign-up'>
                    <button
                      type="button"
                      class="btn  btn-outline-secondary"
                    >
                      Get Started
                    </button>
                  </Link>
                  <Link to='/sign-in'>
                    <button type="button" class="btn btn-primary ms-sm-3 ">
                      Sign In
                    </button>
                  </Link>
                  
                </div>
              ) : (
                <div className="d-flex align-content-end  ">
                <Link to="/dashboard">
                    <button type="button" class="btn btn-outline-secondary">
                    Go to Dashboard
                    </button>
                  </Link>
                  <Link to="/">
                    <button onClick={handleLogout} type="button" className="btn btn-primary  ms-sm-3" style={{color:"white"}}>
                      Log Out
                    </button>
                  </Link>
                  
                </div>
              )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
