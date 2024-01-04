import React from "react";

const Gallery = () => {
  return (
    <div className="container container-fluid">
      <h1 className="fw-bold">Photo <span className="fw-normal">Gallery</span></h1>
      <hr></hr>
      <div class="row">
    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
      <img
        src={process.env.PUBLIC_URL + "/assets/black-and-white.jpeg"}
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Boat on Calm Water"
      />

      <img
        src={process.env.PUBLIC_URL + "/assets/animals.jpeg"}
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Wintry Mountain Landscape"
      />
    </div>

    <div class="col-lg-4 mb-4 mb-lg-0">
      <img
        src={process.env.PUBLIC_URL + "/assets/city-2.jpeg"}
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Mountains in the Clouds"
      />

      <img
        src={process.env.PUBLIC_URL + "/assets/landscape-3.jpeg"}
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Boat on Calm Water"
      />
    </div>

    <div class="col-lg-4 mb-4 mb-lg-0">
      <img
        src={process.env.PUBLIC_URL + "/assets/portrait-2.jpeg"}
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Waves at Sea"
      />

      <img
        src={process.env.PUBLIC_URL + "/assets/cars-2.jpeg"}
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Yosemite National Park"
      />
  </div>
</div>
    </div>
  );
};

export default Gallery;
