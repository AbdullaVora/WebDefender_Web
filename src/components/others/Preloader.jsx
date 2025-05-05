import React from 'react';
import logo2 from "../../assets/logo2.png";

const Preloader = () => {
   return (
  <>
    <div className="loader-container">
      <img src={logo2} alt="loader" className="loader-image" />
      <span className="loader"></span>
    </div>

    <style>
      {`
        .loader-container {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          backdrop-filter: blur(12px); /* Matches backdrop-blur-md */
          z-index: 20;
        }

        .loader-image {
          margin-inline-end: 1.75rem; /* Matches me-7 */
          z-index: 30;
          width: 300px;
        }
      `}
    </style>
  </>
);

};

export default Preloader;
