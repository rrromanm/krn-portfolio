import React from 'react'

const Gallery = () => {
  return (
    <div className='mt-5 bg-secondary bg-gradient' id='gallery'>
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
                    <h1>Portrait</h1>
                </div>
                <div className='col-md-4'>
                    <img
                    src={process.env.PUBLIC_URL + '/assets/bg.jpg'}
                    alt='KRN'
                    className='img-fluid'
                    style={{ maxWidth: '50vh' }} // Adjust the max width as needed
                    > 
                    </img>
                    <h1>Family photo</h1>
                </div>
                <div className='col-md-4'>
                    <img
                    src={process.env.PUBLIC_URL + '/assets/bg.jpg'}
                    alt='KRN'
                    className='img-fluid'
                    style={{ maxWidth: '50vh' }} // Adjust the max width as needed
                    > 
                    </img>
                    <h1>Landscape and cityscape</h1>
                </div>
            </div>
            <div className='row ms-5 me-5 mt-5'>
                <div className='col-md-4'>
                    <img
                    src={process.env.PUBLIC_URL + '/assets/bg.jpg'}
                    alt='KRN'
                    className='img-fluid'
                    style={{ maxWidth: '50vh' }} // Adjust the max width as needed
                    > 
                    </img>
                    <h1>Street photography</h1>
                </div>
                <div className='col-md-4'>
                    <img
                    src={process.env.PUBLIC_URL + '/assets/bg.jpg'}
                    alt='KRN'
                    className='img-fluid'
                    style={{ maxWidth: '50vh' }} // Adjust the max width as needed
                    > 
                    </img>
                    <h1>Black and white photography</h1>
                </div>
                <div className='col-md-4'>
                    <img
                    src={process.env.PUBLIC_URL + '/assets/bg.jpg'}
                    alt='KRN'
                    className='img-fluid'
                    style={{ maxWidth: '50vh' }} // Adjust the max width as needed
                    > 
                    </img>
                    <h1>Product photography</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery