import React from 'react'
import logo1 from '../assets/logo/logo1.jpeg'
import logo2 from '../assets/logo/logo2.jpg'
import logo3 from '../assets/logo/logo3.jpg'
import logo4 from '../assets/logo/logo4.jpeg'

const BusinessLogo = () => {
  return (
    <div className='productPage'>
      <div className='productTitle'>Logos</div>
        <div className="stickerText">Our logo designs: Distinctive, memorable, and tailored to your brand. Make your mark – order now! 💼🎨</div>
        <div className='row'>
        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <a href="https://wa.me/c/2349032464294">
            <div className="cards">
              
            <img src={logo3} className="image"/>
              <span className="title">Zion Graphics Limited</span>
              <span className="price">₦15000</span>
              
            </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <a href="https://wa.me/c/2349032464294">
            <div className="cards">
              
            <img src={logo1} className="image"/>
              <span className="title">Zion Graphics Limited</span>
              <span className="price">₦15000</span>
              
            </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <a href="https://wa.me/c/2349032464294">
            <div className="cards">
              
            <img src={logo2} className="image"/>
              <span className="title">Zion Graphics Limited</span>
              <span className="price">₦15000</span>
              
            </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <a href="https://wa.me/c/2349032464294">
            <div className="cards">
              
            <img src={logo4} className="image"/>
              <span className="title">Zion Graphics Limited</span>
              <span className="price">₦15000</span>
              
            </div>
            </a>
          </div>
        </div>
      </div>
  )
}

export default BusinessLogo