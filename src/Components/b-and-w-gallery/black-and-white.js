import React from 'react';

const BlackAndWhite = () => {
  const images = [
    [1, 6, 11],
    [2, 7, 12],
    [3, 8, 13],
    [4, 9, 14],
    [5, 10],
  ];

  return (
    <div className="row g-2 p-4">
      {images.map((imageGroup, index) => (
        <div className="col mb-4" key={index}>
          {imageGroup.map((imageNumber) => (
            <img
              key={imageNumber}
              src={process.env.PUBLIC_URL + `/assets/BandW/${imageNumber}.jpeg`}
              className="w-100 shadow-1-strong rounded mb-2"
              alt={`Image ${imageNumber}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default BlackAndWhite;
