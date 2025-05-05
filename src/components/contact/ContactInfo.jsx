import React from "react";
import SocialShare2 from "../others/SocialShare2";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-style-one-info">
        <div className="mb-40">
          <h2>Contact Information</h2>
          <p>
            Have a question, feedback, or just want to say hello? We're here to
            help! Whether you're looking for more information about our
            services, need technical support, or want to explore potential
            collaborations, feel free to reach out.
          </p>
        </div>
        <ul className="contact-address">
          <li className="wow fadeInUp">
            <div className="content">
              <h4 className="title">Phone</h4>
              <a href="tel:8320867446">+91 8320867446</a>
            </div>
          </li>

          <li className="wow fadeInUp" data-wow-delay="500ms">
            <div className="info">
              <h4 className="title">Official Email</h4>
              <a href="mailto:skaif0229@gmail.com">skaif0229@gmail.com</a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactInfo;
