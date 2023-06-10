import React from "react";
import "./Footer.css";
import logo from "../../assets/images/short-logo.png";

const Footer = () => {
  return (
    <div className="bg-footer">
      <div className="container">
        <div className="text-center pt-5 pb-4">
          <a href="https://www.facebook.com/">
            <i className="fa-brands fa-facebook text-white py-1 px-2 mx-1 border border-light rounded"></i>
          </a>
          <a href="https://www.youtube.com/" className="">
            <i className="fa-brands fa-youtube text-white py-1 px-2 mx-1 border border-light rounded"></i>
          </a>
          <a href="https://www.linkedin.com/" className="">
            <i className="fa-brands fa-linkedin-in text-white py-1 px-2 mx-1 border border-light rounded"></i>
          </a>
        </div>
        <div className="row g-3  footer">
          <div className="col-lg-5 col-12">
            <div className="pb-2">
              <a href="https://deshcareer.com">
                <img src={logo} alt="" width="200px" />
              </a>
            </div>
            <p className="footer-p lh-lg">
              Desh Career is Career based newsletter in Bengali language. This
              newsletter has published weekly.&nbsp;This is published in every
              Saturday at 12.00 PM.&nbsp;
            </p>
          </div>
          <div className="col-lg-4 col-6 text-align-center footer-privacy">
            <h4 className="text-white mb-3 text-center">Privacy And Terms</h4>
            <div className="d-flex flex-column special-links text-center">
              <a href="https://deshcareer.com">Privacy Policy</a>
              <a href="https://deshcareer.com">Terms Condition</a>
              <a href="https://deshcareer.com/new/faqs">FAQ</a>
            </div>
          </div>
          <div className="col-lg-3 col-6 text-align-center footer-support pe-2">
            <h4 className="text-white mb-3 text-end">Support</h4>
            <div className="d-flex flex-column special-links text-end">
              <a href="https://deshcareer.com">Affiliate Link</a>
              <a href="https://deshcareer.com">Contact us</a>
              <a href="https://deshcareer.com">Advertise with us</a>
            </div>
          </div>
        </div>
      </div>
      <hr className="text-white mx-5" />
      <div className="container pb-4">
        <div className="d-flex justify-content-between ">
          <div className="text-start text-white ">
            <small>
              © 2023 Newsletter E-mail Service: All Copy right reserved
            </small>
          </div>
          <div className="d-flex footer-bottom">
            <a href="https://deshcareer.com">Terms</a>
            <a href="https://deshcareer.com">Cookie Policy</a>
            <a href="https://deshcareer.com">Terms</a>
            <a href="https://deshcareer.com">Privacy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
