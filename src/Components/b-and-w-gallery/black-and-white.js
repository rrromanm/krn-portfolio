import React from 'react';

const BlackAndWhite = () => {
  const images = [
    [1, 6, 11],
    [2, 7, 12],
    [3, 8, 13],
    [4, 9, 14],
  ];

  return (
    <div className="container-fluid">
      <h1 className='pt-5'>Black and White Photography</h1>
    <div className="row g-2 p-4">
      {images.map((imageGroup, index) => (
        <div className="col-md-3 col-sm-4 col-12" key={index}>
          {imageGroup.map((imageNumber) => (
            <div key={imageNumber} className="mb-2">
              <img
                src={process.env.PUBLIC_URL + `/assets/BandW/${imageNumber}.jpeg`}
                className="w-100 shadow-1-strong rounded"
                alt={`${imageNumber}`}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
    </div>
    
  );
};

export default BlackAndWhite;
