import React from "react";
import "./gallery.css";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();

  const handleRedirect = (route) => {
    // Redirect to the specified React route
    navigate(route);
  };
  
  return (
    <div id="gallery" className="container-fluid px-5 py-5">
      <h1 className="fw-bold">
        Photo <span className="fw-normal">Gallery</span>
      </h1>
      <hr></hr>
      <div className="row">
        <div className="col-lg-4 col-md-12">
          <div className="image-container mb-2 mb-md-4">
            <img
              src={
                process.env.PUBLIC_URL + "/assets/BandW/black-and-white.jpeg"
              }
              className="w-100 h-auto shadow-1-strong rounded"
              alt=""
            />
            <div className="overlay">
              <button className="gallery-btn text-uppercase" onClick={() => handleRedirect("/black-and-white")}>
                View Black and White Gallery
              </button>
            </div>
          </div>

          <div className="image-container mb-2 mb-md-4">
            <img
              src={process.env.PUBLIC_URL + "/assets/animals/animals.jpeg"}
              className="w-100 h-auto shadow-1-strong rounded"
              alt=""
            />
            <div className="overlay">
              <button className="gallery-btn text-uppercase" onClick={() => handleRedirect("/animals")}>
                View animal Gallery
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-12">
          <div className="image-container mb-2 mb-md-4">
            <img
              src={process.env.PUBLIC_URL + "/assets/street/6.jpeg"}
              className="w-100 h-auto shadow-1-strong rounded"
              alt=""
            />
            <div className="overlay">
              <button className="gallery-btn text-uppercase" onClick={() => handleRedirect("/city")}>
                View city Gallery
              </button>
            </div>
          </div>

          <div className="image-container mb-2 mb-md-4">
            <img
              src={process.env.PUBLIC_URL + "/assets/landscape/7.jpeg"}
              className="w-100 h-auto shadow-1-strong rounded"
              alt=""
            />
            <div className="overlay">
              <button className="gallery-btn text-uppercase" onClick={() => handleRedirect("/landscape")}>
                View landscape Gallery
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <div className="image-container mb-2 mb-md-4">
            <img
              src={process.env.PUBLIC_URL + "/assets/portrait-2.jpeg"}
              className="w-100 h-auto shadow-1-strong rounded"
              alt=""
            />
            <div className="overlay">
              <button className="gallery-btn text-uppercase" onClick={() => handleRedirect("/")}>
                View portraits Gallery
              </button>
            </div>
          </div>

          <div className="image-container mb-2 mb-md-4">
            <img
              src={process.env.PUBLIC_URL + "/assets/cars/13.jpeg"}
              className="w-100 h-auto shadow-1-strong rounded"
              alt=""
            />
            <div className="overlay">
              <button className="gallery-btn text-uppercase" onClick={() => handleRedirect("/cars")}>
                View car Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default Gallery;
