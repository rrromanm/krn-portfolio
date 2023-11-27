import React from 'react'

const About = () => {
  return (
    <div className='container mt-5'>
      <div className="row">
        <div className='col-md-6'>
        <img
            src={process.env.PUBLIC_URL + '/assets/karina.jpeg'}
            alt='KRN'
            className='img-fluid'
            style={{ maxWidth: '60vh' }} // Adjust the max width as needed
          />
        </div>
        <div className='col-md-6'>
          <h1>ABOUT ME</h1>
          <p>
          ¡Hola! I'm Karina, a passionate photographer with a deep love for the vibrant tapestry of life in Spain.
          Born and raised in this land of rich culture, historical treasures, and diverse landscapes, 
          I have dedicated my lens to encapsulating the essence of Spain in every frame.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About