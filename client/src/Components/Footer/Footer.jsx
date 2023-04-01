import React from "react";
import { Link } from "react-router-dom";
import "../Footer/Footer.css"
const Footer = () => {
  return (
    <footer style={{backgroundColor:"#080B0F"}} className="text-center text-lg-start  text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom container">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        
      </section>

      <section className="footer">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 ">
              <h6 className="text-uppercase fw-bold mb-4" style={{color:"#FF4040"}}>
                <i className="fas fa-gem me-3"></i>Demo Too
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>

            

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <Link to="/" className="text-reset">
                  Home
                </Link>
              </p>
              <p>
                <Link to="/features" className="text-reset">
                  Features
                </Link>
              </p>
              <p>
                <Link to="/whyus" className="text-reset">
                  About Us
                </Link>
              </p>
              <p>
                <Link to="/contact" className="text-reset">
                  Help
                </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4 ms-3">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> Mohali, Phase 1, Punjab
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                info@adcratic.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> +91-8580400595
              </p>
              <p>
                <i className="fas fa-print me-3"></i> +91-9999999999
              </p>
            </div>
          </div>
        </div>
      </section>

      
    </footer>
  );
};

export default Footer;
