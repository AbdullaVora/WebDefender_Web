import React from 'react';
import logo2 from "../../assets/logo2.png";

const Preloader = () => {
  return (
  <>
    <div className="fullscreen-bg">
      <img src={logo2} alt="loader" className="loader-image" />
      <span className="loader"></span>
    </div>

    <style>
      {`
        .fullscreen-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #020B1C;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          backdrop-filter: blur(12px);
          z-index: 20;
        }

        .loader-image {
          margin-inline-end: 1.75rem;
          z-index: 30;
          width: 300px;
        }

      `}
    </style>
  </>
);

};

export default Preloader;
