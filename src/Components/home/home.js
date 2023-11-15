import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'

function home() {
  return (
      <div className="col-md-6" id="text">
        <h3 className="mont-light" id="hi">Hi,</h3>
        <h1 className="mont-medium" id="heading">I'm Karina Mihalonoka</h1>
        <h5 className="mont-light" id="description">
          I am professional photographer based on Benidorm, <br></br>
          creating dreamscapes with black, white and shades inbetween.
        </h5>

        <div className='container'>
          <div className='row'>
            <div className='col'>
              <button type="button" className='btn btn-light align-self-end'><a href="#gallery">Gallery</a></button>
            </div>
            <div className='col'>
              <button type="button" className='btn btn-light'><a href="#contact">Contact me</a></button>
            </div>

          </div>
        </div>

      </div>
  );
}

export default home;