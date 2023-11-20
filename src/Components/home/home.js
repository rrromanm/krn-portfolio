import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6" id="text">
          <h3 className="mont-light" id="hi">Hi,</h3>
          <h1 className="mont-medium" id="heading">I'm Karina Mihalonoka</h1>
          <h5 className="mont-light" id="description">
            I am a professional photographer based in Benidorm, <br />
            creating dreamscapes with black, white, and shades in between.
          </h5>
          
          <div>
            <button type="button" className='btn border-dark me-2'>
              <a href="#gallery" className='mont-thin text-decoration-none text-dark'>Gallery</a>
            </button>
            <button type="button" className='btn border-dark'>
              <a href="#contact" className='mont-thin text-decoration-none text-dark'>Contact me</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
