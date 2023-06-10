import React from "react";
import "../AboutUs/AboutUs.css";

const Advertise = () => {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-lg-8 col-md-10 col-12">
          <h1 className="fw-bold mb-3">Advertise </h1>
          <div className="mt-4">
            <p>Our audience age is 20-35 Year.</p>
            <p>We focus on Career related content.</p>
            <p>
              If you want to promote your product to our audience, you can give
              advertisement, Sponsored Content.
            </p>
            <p>
              Our contact email:{" "}
              <a href="https://deshcareer.com" className=" email-address ">
                contact.deshcareer@gmail.com
              </a>{" "}
              and phone number: +8801880811047
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
