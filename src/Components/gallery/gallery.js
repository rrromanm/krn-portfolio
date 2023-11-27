import React from 'react'

const Gallery = () => {
  return (
    <div className='mt-5 bg-secondary bg-gradient'>
        <div className='container-fluid'>
            <h1>GALLERY</h1>
            <div className='row ms-5 me-5'>
                <div className='col-md-4'>
                    <img
                    src={process.env.PUBLIC_URL + '/assets/bg.jpg'}
                    alt='KRN'
                    className='img-fluid'
                    style={{ maxWidth: '50vh' }} // Adjust the max width as needed
                    > 
                    </img>
                    <h1>CARS</h1>
                </div>
                <div className='col-md-4'>
                    <img
                    src={process.env.PUBLIC_URL + '/assets/bg.jpg'}
                    alt='KRN'
                    className='img-fluid'
                    style={{ maxWidth: '50vh' }} // Adjust the max width as needed
                    > 
                    </img>
                    <h1>ME</h1>
                </div>
                <div className='col-md-4'>
                    <img
                    src={process.env.PUBLIC_URL + '/assets/bg.jpg'}
                    alt='KRN'
                    className='img-fluid'
                    style={{ maxWidth: '50vh' }} // Adjust the max width as needed
                    > 
                    </img>
                    <h1>PORTRAITS</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery