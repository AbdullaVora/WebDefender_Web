import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ReactWOW from "react-wow";

const BlogV3 = () => {
  const handleEmail = (event) => {
    event.preventDefault();
    event.target.reset();
    toast.success("Thanks for Your Email");
  };

  const navigate = useNavigate();

  // State for floating animation
  const [floatPosition, setFloatPosition] = useState(0);

  // Create floating animation effect
  useEffect(() => {
    const floatInterval = setInterval(() => {
      setFloatPosition(prev => (prev === 0 ? 10 : 0));
    }, 3000);

    return () => clearInterval(floatInterval);
  }, []);

  return (
    <>
      <div
        id="home"
        className="banner-style-three-area overflow-hidden"
        style={{ backgroundImage: "url(/img/shape/banner-5.jpg)" }}
      >
        <div className="banner-style-three pt-150 pt-md-120 pt-xs-60">
          <div className="container">
            <div className="content">
              <div className="row align-center">
                <div className="col-xl-6 col-lg-6 pr-50 pr-md-15 pr-xs-15 mt--80 mt-md-0 mt-xs-0">
                  <div className="information">
                    <ReactWOW
                      animation="fadeInUp"
                      duration="400ms"
                      delay="500ms"
                    >
                      <h2>
                        Scan Smarter, Not Harder
                        is your all-in-one toolkit on your{" "}
                        <strong>web Scanner</strong>
                      </h2>
                    </ReactWOW>
                    <ReactWOW
                      animation="fadeInUp"
                      delay="900ms"
                      duration="400ms"
                    >
                      <p>
                      uncover hidden vulnerabilities before attackers do. Whether you're defending a startup or an enterprise, we simplify the penetration testing process—no elite hacker skills required.
                      </p>
                    </ReactWOW>
                    <ReactWOW
                      animation="fadeInDown"
                      delay="1200ms"
                      duration="400ms"
                    >
                      <div className="mt-3 mb-5">
                        <a href="https://web-defender-admin.vercel.app/">
                          <button>Get Started</button>
                        </a>
                      </div>
                    </ReactWOW>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 pl-60 pl-md-15 pl-xs-15">
                  <div className="thumb">
                    {/* Main images with floating animation */}
                    <div className="main-dashboard-container">
                      <ReactWOW animation="fadeIn">
                        <div
                          className="floating-image-container"
                          style={{
                            transform: `translateY(${floatPosition === 0 ? -5 : 5}px)`,
                            transition: 'transform 3s ease-in-out'
                          }}
                        >
                          <img
                            src="/img/banner/b1.png"
                            alt="Dashboard"
                            className="main-image"
                            style={{
                              width: '100%',
                              maxWidth: '800px',
                              borderRadius: '12px',
                              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)'
                            }}
                          />
                        </div>
                      </ReactWOW>
                      <ReactWOW animation="fadeIn" delay="300ms">
                        <div
                          className="floating-image-container"
                          style={{
                            transform: `translateY(${floatPosition === 0 ? 5 : -5}px)`,
                            transition: 'transform 3.5s ease-in-out',
                            marginTop: '20px'
                          }}
                        >
                          <img
                            src="/img/banner/b2.png"
                            alt="Dashboard"
                            className="main-image transparent-bg"
                            style={{
                              width: '100%',
                              maxWidth: '900px',
                              borderRadius: '12px',
                              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)'
                            }}
                          />
                        </div>
                      </ReactWOW>
                    </div>

                    {/* Floating overlay elements */}
                    <div className="admin-dashboard-overlay">
                      <div className="admin-label">Admin Dashboard</div>
                    </div>

                    <div className="admin-analytics-overlay"
                      style={{
                        transform: `translateY(${floatPosition === 0 ? 8 : 0}px)`,
                        transition: 'transform 3.5s ease-in-out'
                      }}
                    >
                      <div className="admin-label">Security Reports</div>
                    </div>

                    <div className="security-reports-overlay"
                      style={{
                        transform: `translateY(${floatPosition === 0 ? 5 : -5}px)`,
                        transition: 'transform 4s ease-in-out'
                      }}
                    >
                      <div className="admin-label">Admin Analytics</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styling for the floating images */}
      <style jsx>{`
        .thumb {
          position: relative;
        }
        
        .main-dashboard-container {
          position: relative;
          z-index: 2;
          margin: 0 auto;
        }
        
        .main-image {
          background-color: transparent;
        }
        
        .transparent-bg {
          background-color: transparent !important;
        }
        
        .floating-image-container {
          position: relative;
          will-change: transform;
        }
        
        /* Overlays for floating labels */
        .admin-dashboard-overlay {
          position: absolute;
          top: -45px;
          right: 25%;
          z-index: 10;
        }
        
        .admin-analytics-overlay {
          position: absolute;
          bottom: 20%;
          left: -40px;
          z-index: 11;
        }
        
        .security-reports-overlay {
          position: absolute;
          top: 40%;
          right: -40px;
          z-index: 12;
        }
        
        .admin-label {
          background-color: rgba(16, 34, 53, 0.9);
          color: #00e8c5;
          padding: 4px 12px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 5px;
          border: 1px solid #00e8c5;
          position: relative;
          z-index: 6;
          box-shadow: 0 2px 10px rgba(0, 232, 197, 0.2);
          text-shadow: 0 0 2px rgba(0, 232, 197, 0.3);
          cursor: default;
          white-space: nowrap;
        }
        
        @media (max-width: 1200px) {
          .admin-dashboard-overlay {
            right: 20%;
          }
          
          .admin-analytics-overlay {
            left: -30px;
          }
          
          .security-reports-overlay {
            right: -30px;
          }
        }
        
        @media (max-width: 992px) {
          .admin-dashboard-overlay {
            right: 15%;
          }
          
          .admin-analytics-overlay {
            left: -20px;
            bottom: 15%;
          }
          
          .security-reports-overlay {
            right: -20px;
            top: 35%;
          }
        }
        
        @media (max-width: 768px) {
          .admin-dashboard-overlay,
          .admin-analytics-overlay,
          .security-reports-overlay {
            display: none;
          }
          
          .main-image {
            max-width: 100% !important;
          }
        }
      `}</style>
    </>
  );
};

export default BlogV3;