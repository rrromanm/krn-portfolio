import React from 'react'
import './services.css'

const Services = () => {
  return (
    <div className='services'>
        <div className='container py-5'>
            {/* Information boxes */}
            <div className='row'>
                <div className='col-md-6'> 
                    <h1 className='text-start'>Services</h1>
                    <div className='row'>
                        <div className='col-md-6 info-box border border-secondary p-3' style={{ width: '35vh', height: '35vh' }}>
                            <p>Some info.</p>
                        </div>
                        <div className='col-md-6 info-box border border-secondary p-3' style={{ width: '35vh', height: '35vh' }}>
                            <p>Some info.</p>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-6 info-box border border-secondary p-3' style={{ width: '35vh', height: '35vh' }}>
                            <p>Some info.</p>
                        </div>
                        <div className='col-md-6 info-box border border-secondary p-3' style={{ width: '35vh', height: '35vh' }}>
                            <p>Some info.</p>
                        </div>
                    </div>
                </div>

            <div className='col-md-6'>
                <img
                    src={process.env.PUBLIC_URL + '/assets/paris.jpg'}
                    alt='PARIS'
                    className='img-fluid shadow-lg'
                    style={{ maxWidth: '60vh' }}
                />
            </div>  
            </div>
            
        </div>  
    </div>
    
  )
}

export default Services