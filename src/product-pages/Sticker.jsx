import React from "react";
import image3 from '../assets/image3.jpg'
import stick1 from '../assets/stickers/stick1.jpg'
import stick2 from '../assets/stickers/stick2.jpg'
import stick5 from '../assets/stickers/stick5.jpg'
import stick6 from '../assets/stickers/stick6.jpg'
import stick8 from '../assets/stickers/stick8.jpg'
import stick9 from '../assets/stickers/stick9.jpg'
import stick11 from '../assets/stickers/stick11.jpg'


const Sticker = () => {
  return (
    <div className='productPage'>
        <div className='productTitle'>Stickers</div>
        <div className="stickerText">Our stickers: Bursting with personality, perfect for laptops, phones, and more. Add flair to your life – shop now!</div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <a href="https://wa.me/c/2349032464294">
            <div className="cards">
            
              <img src={image3} className="image"/>
              <span className="title">Zion Graphics Limited</span>
              <span className="price">₦5000</span>
              
            </div>
            </a>
          </div>


          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <a href="https://wa.me/c/2349032464294">
            <div className="cards">
              
            <img src={stick1} className="image"/>
              <span className="title">Zion Graphics Limited</span>
              <span className="price">₦5000</span>
              
            </div>
            </a>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <a href="https://wa.me/c/2349032464294">
            <div className="cards">
              
            <img src={stick2} className="image"/>
              <span className="title">Zion Graphics Limited</span>
              <span className="price">₦5000</span>
              
            </div>
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <a href="https://wa.me/c/2349032464294">
            <div className="cards">
              
            <img src={stick5} className="image"/>
              <span className="title">Zion Graphics Limited</span>
              <span className="price">₦5000</span>
              
            </div>
            </a>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <a href="https://wa.me/c/2349032464294">
            <div className="cards">
              
            <img src={stick6} className="image"/>
              <span className="title">Zion Graphics Limited</span>
              <span className="price">₦5000</span>
              
            </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <a href="https://wa.me/c/2349032464294">
            <div className="cards">
              
            <img src={stick8} className="image"/>
              <span className="title">Zion Graphics Limited</span>
              <span className="price">₦5000</span>
              
            </div>
            </a>
          </div>
        </div>


        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <a href="https://wa.me/c/2349032464294">
            <div className="cards">
            <img src={stick9} className="image"/>
              <span className="title">Zion Graphics Limited</span>
              <span className="price">₦5000</span>
            </div>
            </a>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <a href="https://wa.me/c/2349032464294">
            <div className="cards">
              
            <img src={stick11} className="image"/>
              <span className="title">Zion Graphics Limited</span>
              <span className="price">₦5000</span>
              
            </div>
            </a>
          </div>
        </div>
      </div>
  )
}

export default Sticker