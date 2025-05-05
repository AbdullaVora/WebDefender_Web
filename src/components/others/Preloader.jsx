import React from 'react';
import logo2 from "../../assets/logo2.png";

const Preloader = () => {
    return (
        <div className="absolute inset-0 flex flex-col justify-center items-center backdrop-blur-md z-20">
            <img src={logo2} alt="loader" width={300} className="me-7 z-30" />
            <span className="loader z-30"></span>
        </div>
    );
};

export default Preloader;
