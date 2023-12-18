import React from "react";
import "./services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="vh-100">
      <div className="row py-5 ps-5">
        <div className="col-md-6">
          <h1 className="text-start ms-5 ps-4">Services</h1>

          <div className="row d-flex justify-content-center">
            <div className="box col-md-4 text-start p-3">
              <FontAwesomeIcon
                icon={faCameraRetro}
                size="2x"
                className="text-black float-left"
              />
              <h6 className="fw-bold pt-3">Capturing Moments</h6>
              <p>
                Immerse yourself in a world of memories with our photography
                services. From candid shots to striking portraits, we freeze
                moments in time, ensuring every emotion and detail is
                beautifully preserved.
              </p>
            </div>
            <div className="box col-md-4 ms-4 text-start p-3">
              <FontAwesomeIcon
                icon={faCameraRetro}
                size="2x"
                className="text-black float-left"
              />
              <h6 className="fw-bold pt-3">Capturing Moments</h6>
              <p>
                Immerse yourself in a world of memories with our photography
                services. From candid shots to striking portraits, we freeze
                moments in time, ensuring every emotion and detail is
                beautifully preserved.
              </p>
            </div>
          </div>

          <div className="row d-flex justify-content-center mt-4">
            <div className="box col-md-4 text-start p-3">
              <FontAwesomeIcon
                icon={faCameraRetro}
                size="2x"
                className="text-black float-left"
              />
              <h6 className="fw-bold pt-3">Capturing Moments</h6>
              <p>
                Immerse yourself in a world of memories with our photography
                services. From candid shots to striking portraits, we freeze
                moments in time, ensuring every emotion and detail is
                beautifully preserved.
              </p>
            </div>
            <div className="box col-md-4 ms-4 text-start p-3">
              <FontAwesomeIcon
                icon={faCameraRetro}
                size="2x"
                className="text-black float-left"
              />
              <h6 className="fw-bold pt-3">Capturing Moments</h6>
              <p>
                Immerse yourself in a world of memories with our photography
                services. From candid shots to striking portraits, we freeze
                moments in time, ensuring every emotion and detail is
                beautifully preserved.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <img
            src={process.env.PUBLIC_URL + "/assets/paris.jpg"}
            alt="KRN"
            className="img-fluid shadow-lg"
            style={{ maxWidth: "55vh" }} // Adjust the max width as needed
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
