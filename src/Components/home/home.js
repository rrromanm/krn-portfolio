import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

function Home() {
  const [isTablet, setIsTablet] = useState(window.innerWidth < 780);
  const [isMobileL, setIsMobileL] = useState(window.innerWidth < 426);

  useEffect(() => {
    const handleResize = () => {
      const width = document.documentElement.clientWidth;
      console.log('Window width:', width);

      // Set isTablet and isMobileL based on the window width
      const tablet = width < 780 && width > 426;
      const mobileL = width < 426;

      console.log('isTablet:', tablet);
      console.log('isMobileL:', mobileL);

      setIsTablet(tablet);
      setIsMobileL(mobileL);
    };

    // Initial call to set the initial values
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const descriptionText = (
    <>
      I am a professional photographer {isMobileL && <br />} based in
      {isTablet && <br />} Benidorm, creating {isMobileL && <br />} dreamscapes with black,
      {isTablet && <br />} white, {isMobileL && <br />} and shades in between.
    </>
  );

  return (
    <div className='bg-image'>
      <div className="row ps-5 ms-5">
        <div className="col-md-6" id="text">
          <h3 className="mont-light fs-1 fs-md-5" id="hi">
            Hi,
          </h3>
          <h1
            className={`mont-medium ${
              isTablet ? 'tablet' : ''
            } ${isMobileL ? 'mobileL' : ''} `}
            id="heading"
          >
            I'm Karina Mihalonoka
          </h1>

          <h5
            className={`mont-light ${
              isTablet ? 'tablet' : ''
            } ${isMobileL ? 'mobileL' : ''}`}
            id="description"
          >
            {descriptionText}
          </h5>


          <div>
            <button type="button" className="btn border-dark me-2">
              <a
                href="#gallery"
                className="mont-thin text-decoration-none text-dark"
              >
                Gallery
              </a>
            </button>
            <button type="button" className="btn border-dark">
              <a
                href="#contact"
                className="mont-thin text-decoration-none text-dark"
              >
                Contact me
              </a>
            </button>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Home;
