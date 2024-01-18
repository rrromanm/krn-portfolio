import React from "react";
import "./services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImagePortrait, faEarthEurope, faCamera, faBriefcase  } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const cardsData = [
    { id: 1, title: 'Dynamic Portraits', text: 'Express your essence with our expert portrait photography, capturing your unique personality and style.', icon: faImagePortrait},
    { id: 2, title: 'Event Memories', text: 'Relive special moments through our candid event photography, creating timeless memories of weddings, parties, and corporate events.', icon: faCamera },
    { id: 3, title: 'Product Showcase', text: 'Make your products stand out with our high-impact photography, highlighting features and enhancing your brand image.', icon: faBriefcase},
    { id: 4, title: 'Global Perspectives', text: 'Explore the world in a glance through our lens, showcasing stunning landscapes and cultural snapshots from diverse corners of the globe.', icon: faEarthEurope },
  ];

  return (
    <div className="container mb-5">
      <h1 className="text-center mb-4">Services</h1>
      <div className="row">
        {cardsData.map((card) => (
          <div key={card.id} className="col-md-3 mb-3">
            <div className="card border-black">
              <div className="card-body">
                <FontAwesomeIcon icon={card.icon} size="4x" className="mb-2"/>
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text ">{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
