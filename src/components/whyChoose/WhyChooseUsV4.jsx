import React from 'react';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { HashLink as Link } from 'react-router-hash-link'
import ReactWOW from 'react-wow';
import WhyChooseUsV4Data from '../../jsonData/WhyChooseUsV4Data.json'
import SingleChooseV3 from './SingleChooseV4';

const WhyChooseUsV4 = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div id='whyus' className="choose-us-style-one-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 choose-us-style-one">
                            <h4 className="sub-title">Why Choose Us</h4>
                            <h2 className="title">We're on a mission <br /> to safe your web</h2>
                            <div className="choose-us-thumb mt-50 mt-xs-40">
                                {/* First image */}
                                <div className="floating-img img-one">
                                    <ReactWOW animation='fadeInUp'>
                                        <img 
                                            src="/img/illustration/ill1.png" 
                                            alt="Vulnerability Detection" 
                                            className="img-fluid" 
                                            style={{background: 'transparent'}}
                                        />
                                    </ReactWOW>
                                </div>

                                {/* Second image */}
                                <div className="floating-img img-two">
                                    <ReactWOW animation='fadeInDown'>
                                        <img 
                                            src="/img/illustration/ill2.png" 
                                            alt="Domain Discovery" 
                                            className="img-fluid"
                                            style={{background: 'transparent'}}

                                        />
                                    </ReactWOW>
                                </div>

                                {/* Third image */}
                                <div className="floating-img img-three">
                                    <ReactWOW animation='fadeInRight'>
                                        <img 
                                            src="/img/illustration/ill3.png" 
                                            alt="Threat Insights" 
                                            className="img-fluid"
                                            style={{background: 'transparent'}}

                                        />
                                    </ReactWOW>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 pl-70 pl-md-15 pl-xs-15 choose-us-style-one">
                            <div className="curve-text">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" version="1.1">
                                    <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                                    <text><textPath href="#textPath">Vulnerabilities Scanner</textPath></text>
                                </svg>
                            </div>
                            <ul className="feature-process mt-75 mt-xs-0">
                                {WhyChooseUsV4Data.map(choose =>
                                    <SingleChooseV3 choose={choose} key={choose.id} />
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS for floating effect */}
            <style jsx>{`
                .choose-us-thumb {
                    position: relative;
                    min-height: 400px;
                    width: 100%;
                    overflow: visible;
                }

                .floating-img {
                    position: absolute;
                    width: auto;
                }

                .img-one {
                    top: 0;
                    left: 0;
                    width: 1400px;
                    animation: float 6s ease-in-out infinite;
                }

                .img-two {
                    top: 220px;
                    left: 120px;
                    width: 1400px;
                    animation: float 7s ease-in-out infinite;
                    animation-delay: 0.5s;
                }

                .img-three {
                    top: 420px;
                    left: 30px;
                    width: 1400px;
                    animation: float 8s ease-in-out infinite;
                    animation-delay: 1s;
                }

                .floating-img img {
                    width: 100%;
                    height: auto;
                    display: block;
                }

                @keyframes float {
                    0% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                    100% {
                        transform: translateY(0px);
                    }
                }

                @media (max-width: 768px) {
                    .choose-us-thumb {
                        min-height: 300px;
                    }
                    
                    .floating-img {
                        max-width: 150px;
                    }
                    
                    .img-one {
                        left: 0;
                    }
                    
                    .img-two {
                        top: 100px;
                        left: 80px;
                    }
                    
                    .img-three {
                        top: 200px;
                        left: 20px;
                    }
                }
            `}</style>
        </>
    );
};

export default WhyChooseUsV4;