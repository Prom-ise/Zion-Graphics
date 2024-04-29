import React from 'react'
import card1 from '../assets/cards/card1.jpeg'
import image1 from '../assets/cards/image1.jpg'
import img11 from '../assets/cards/img11.jpg'
import img12 from '../assets/cards/img12.jpg'
import img13 from '../assets/cards/img13.jpg'
import nine from '../assets/cards/nine.jpeg'

const Cards = () => {
  return (
    <div className='productPage'>
      <div className='productTitle'>Business Cards & ID Cards</div>
        <div className="stickerText">Our business card and ID card designs: Professional, sleek, and customized to leave a lasting impression. Elevate your brand – order yours today! 💼🔖
</div>
<div className='row'>
  <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
  <a href="https://wa.me/c/2349032464294">
  <div className="cards">
    
            <img src={card1} className="image"/>
              <span className="title">Zion Graphics Limited</span>
              <span className="price">₦15000</span>
              
            </div>
            </a>
  </div>

  <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
  <a href="https://wa.me/c/2349032464294">
  <div className="cards">
    
            <img src={image1} className="image"/>
              <span className="title">Zion Graphics Limited</span>
              <span className="price">₦15000
              </span>
            </div>
            </a>
  </div>

  <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
  <a href="https://wa.me/c/2349032464294">
  <div className="cards">
    
            <img src={img12} className="image"/>
              <span className="title">Zion Graphics Limited</span>
              <span className="price">₦15000
              </span>
            </div>
            </a>
  </div>
</div>

<div className='row'>
  <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
  <a href="https://wa.me/c/2349032464294">
  <div className="cards">
    
            <img src={img11} className="image"/>
              <span className="title">Zion Graphics Limited</span>
              <span className="price">₦15000
              </span>
            </div>
            </a>
  </div>

  <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
  <a href="https://wa.me/c/2349032464294">
  <div className="cards">
    
            <img src={img13} className="image"/>
              <span className="title">Zion Graphics Limited</span>
              <span className="price">₦15000
              </span>
            </div>
            </a>
  </div>

  <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
  <a href="https://wa.me/c/2349032464294">
  <div className="cards">
    
            <img src={nine} className="image"/>
              <span className="title">Zion Graphics Limited</span>
              <span className="price">₦15000
              </span>
            </div>
            </a>
  </div>
</div>
      </div>
  )
}

export default Cards