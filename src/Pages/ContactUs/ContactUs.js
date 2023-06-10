import React from "react";
import "../AboutUs/AboutUs.css";

const ContactUs = () => {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-lg-8 col-md-10 col-12">
          <h1 className="fw-bold mb-3">Contact Us</h1>
          <div className="mt-4">
            <p>
              If you want to contact us: you can send an email to{" "}
              <a href="https://deshcareer.com" className=" email-address ">
                {" "}
                contact.deshcareer@gmail.com
              </a>
            </p>
            <p>
              If you want to meet with us, you can come to our office based on
              an appointment.
            </p>
          </div>
          <div>
            <h5 className="mb-4 mt-5">Our Office address:</h5>
            <p>House: 13/3,</p>
            <p>Road: 2,</p>
            <p>Shyamoly, Dhaka-1207</p>
            <p>+8801880811047</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
