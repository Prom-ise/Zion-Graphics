import React from 'react'

const Contact = () => {
  return (
    <div className='contactPage'>
      <p className="contactUs">Contact Us</p>
      <p className='contactTouch'>Let us Get in Touch!</p>
      <div className='contactInfo'>
        <div>
        <h3 className='busHours'>
          Business Hours
        </h3>
        <p className='timing'>Mondays - Fridays: 9.00am - 6.00pm</p>
        <p className='timing'>Saturdays: 10.00am - 3.30pm</p>
        </div>
        <div>
        <h3 className='busHours'>
          Phone Number
        </h3>
        <p className='timing'>call: +2349032464294</p>
        <p className='timing'>Whatsapp: +2349032464294</p>
        </div>
        <div className='line'>
          <h3 className='busHours'>Email</h3>
          <p className='timing'>ziongraphicslimited@gmail.com</p>
        </div>
      </div>
      
      <div className='formCenter'>
      <form className='contactCommune shadow-sm container-fluid '>
        <div>
          <div className='filling'>Fill out the form below and we will be in touch within 24hrs.</div>
        <div className='my-4'>
        <label>Subject:</label>
        <input type='text' className='form-control shadow-none w-100'/>
        </div>
        <div>
        <label>FirstName:</label>
        <input type='text' className='form-control shadow-none w-100 outline-none' placeholder='Please input your name'/>
        </div>
        <div className='my-4'>
        <label>LastName:</label>
        <input type='text' className='form-control shadow-none outline-none' placeholder='Please input your surname'/>
        </div>
        <div>
        <label>Email:</label>
        <input type='email' className='form-control shadow-none outline-none' placeholder='Input your email address'/>
        </div>
        <div className='my-4'>
          <label>Message:</label>
          <textarea className='form-control shadow-none outline-none' row='15' col='50'></textarea> 
        </div>
        <button type='submit' className='mt-2 mb-4 mx-auto btn btn-outline-primary'>Send Message</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Contact