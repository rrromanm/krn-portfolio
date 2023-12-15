import React from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faMessage} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    
  return (
    <div className='contact vh-100'>
      <div className='container pt-5'>
        <h1 className='py-5 text-white'>Contact Me</h1>
        
        <form className='col-md-6 mx-auto '>
            <div className='mb-3'>
                <FontAwesomeIcon icon={faUser} className='icon text-white fa-lg d-flex'/>
                <input type='text' className='input-field form-control form-control-lg text-white' id='floatingName' placeholder='Name' required/>
            </div>
            
            <div className='mb-3'>
                <FontAwesomeIcon icon={faEnvelope} className='icon text-white fa-lg d-flex'/>
                <input type='email' className='input-field form-control form-control-lg text-white' id='floatingName' placeholder='Email' required/>
            </div>

            <div className='mb-3'>
                <FontAwesomeIcon icon={faPhone} className='icon text-white fa-lg d-flex'/>
                <input type='tel' className='input-field form-control form-control-lg text-white' id='floatingName' placeholder='Phone' required/>
            </div>

            <div className='mb-3'>
                <FontAwesomeIcon icon={faMessage} className='icon text-white fa-lg d-flex'/>
                <textarea className='input-field form-control form-control-lg text-white' id='textarea' rows={3} placeholder='Message'></textarea>
            </div>

            <button type='submit' className='btn btn-transparent border text-white d-flex'>
                SUBMIT
            </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
