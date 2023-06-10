import React from "react";
import { FiMail } from "react-icons/fi";
import "./Home.css";

const Home = () => {
  document.title = "Newsteller Home Page";
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-9 col-lg-8 col-xl-8 home">
          <h1>Get Smarter about your career </h1>
          <p>
            Get the <strong> 5-minute newsletter</strong> keeping about smart
            career
          </p>
          <div className="subcription">
            <form action="https://deshcareer.com/subscribe" method="post">
              <div className="input-area d-flex align-items-center">
                <span className="mail-icon text-center ">
                  <FiMail fontSize={25} />
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="Your E-mail address"
                  required=""
                />
                <button className="btn btn-danger custom-button">
                  Join Free
                </button>
              </div>
            </form>

            <p className="my-4 lh-lg">
              <span>
                We're committed to your privacy. DashCareer uses the information
                you provide to contact you about our relevant content and
                services. You may unsubscribe from these communications at any
                time. For more information, check out our Privacy Policy.
              </span>
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-4 col-xl-4"></div>
      </div>
    </div>
  );
};

export default Home;
