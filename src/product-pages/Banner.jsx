import React from 'react'
import ban2 from '../assets/banners/ban2.jpg'
import ban3 from '../assets/banners/ban3.jpg'
import ban5 from '../assets/banners/ban5.jpg'
import ban6 from '../assets/banners/ban6.jpeg'
import ban7 from '../assets/banners/ban7.jpeg'


const Banner = () => {
  return (
    <div className='productPage'>
      <div className='productTitle'>Banners</div>
        <div className="stickerText">Our banner designs: Captivating, versatile, and ready to make a statement. Elevate your space – shop now! 🚀🎨</div>
        <div className="row">

          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <a href="https://wa.me/c/2349032464294">
            <div className="cards">
              
              <img src={ban2} className="image"/>
              <span className="title">Zion Graphics Limited</span>
              <span className="price">₦10000</span>
              
            </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <a href="https://wa.me/c/2349032464294">
            <div className="cards">
              
              <img src={ban3} className="image"/>
              <span className="title">Zion Graphics Limited</span>
              <span className="price">₦10000</span>
              
            </div>
            </a>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <a href="https://wa.me/c/2349032464294">
            <div className="cards">
              
              <img src={ban5} className="image"/>
              <span className="title">Zion Graphics Limited</span>
              <span className="price">₦10000</span>
              
            </div>
            </a>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <a href="https://wa.me/c/2349032464294">
            <div className="cards">
              
              <img src={ban6} className="image"/>
              <span className="title">Zion Graphics Limited</span>
              <span className="price">₦10000</span>
              
            </div>
            </a>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <a href="https://wa.me/c/2349032464294">
            <div className="cards">
              
              <img src={ban7} className="image"/>
              <span className="title">Zion Graphics Limited</span>
              <span className="price">₦10000</span>
              
            </div>
            </a>
          </div>
        </div>
      </div>
  )
}

export default Banner