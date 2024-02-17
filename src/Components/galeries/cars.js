import React from 'react';

const Cars = () => {
  const images = [
    [1, 6, 11],
    [2, 7, 12],
    [3, 8, 13],
    [4, 9, 14],
  ];

  return (
    <div className="container-fluid">
      <div className="row"> 
            <div className="col-md-2">
               <img
                loading='lazy'
                role='presentation'
                src={process.env.PUBLIC_URL + `/assets/logo-black.png`}
                style={{ width: '100%' }}
                className="shadow-1-strong rounded"
                alt="Logo"
              /> 
            </div>

            <div className="col-md-10">
                <h1 className='pt-5'>Car Photography</h1>
            </div>
        </div>
    <div className="row g-2 p-4">
      {images.map((imageGroup, index) => (
        <div className="col-md-3 col-sm-4 col-12" key={index}>
          {imageGroup.map((imageNumber) => (
            <div key={imageNumber} className="mb-2">
              <img
                loading='lazy'
                role='presentation'
                src={process.env.PUBLIC_URL + `/assets/cars/${imageNumber}.jpeg`}
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

export default Cars;
