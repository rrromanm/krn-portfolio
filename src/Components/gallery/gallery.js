import React from "react";
import './gallery.css';

const Gallery = () => {
  return (
    <div id="gallery" className="container-fluid px-5 py-5">
      <h1 className="fw-bold">Photo <span className="fw-normal">Gallery</span></h1>
      <hr></hr>
      <div className="row">
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            src={process.env.PUBLIC_URL + "/assets/BandW/black-and-white.jpeg"}
            className="w-100 h-auto shadow-1-strong rounded mb-4"
            alt=""
          />

          <img
            src={process.env.PUBLIC_URL + "/assets/animals.jpeg"}
            className="w-100 h-auto shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src={process.env.PUBLIC_URL + "/assets/city-2.jpeg"}
            className="w-100 h-auto shadow-1-strong rounded mb-4"
            alt=""
          />

          <img
            src={process.env.PUBLIC_URL + "/assets/landscape/7.jpeg"}
            className="w-100 h-auto shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src={process.env.PUBLIC_URL + "/assets/portrait-2.jpeg"}
            className="w-100 h-auto shadow-1-strong rounded mb-4"
            alt=""
          />

          <img
            src={process.env.PUBLIC_URL + "/assets/cars-2.jpeg"}
            className="w-100 h-auto shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default Gallery;
