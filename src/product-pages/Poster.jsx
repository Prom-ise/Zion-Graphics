import React from 'react'
import stick4 from '../assets/poster/stick4.jpg'
import image2 from '../assets/poster/image2.jpg'
import image4 from '../assets/poster/image4.jpg'
import image5 from '../assets/poster/image5.jpg'
import image9 from '../assets/poster/image9.jpg'
import img10 from '../assets/poster/img10.jpg'
import zionBest from '../assets/poster/zionBest.jpeg'


const Poster = () => {
  return (
    <div className='productPage'>
      <div className='productTitle'>Posters</div>
        <div className="stickerText">Our poster designs: Bold, eye-catching, and guaranteed to turn heads. Stand out from the crowd – shop now! 🌟🎨</div>
        <div className='row'>
          {/* <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
          <a href="https://wa.me/c/2349032464294">
          <div className="cards">
            
            <img src={image2} className="image"/>
              <span className="title">Zion Graphics Limited</span>
              <span className="price">₦10000</span>
              
            </div>
            </a>
          </div> */}

          <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
          <a href="https://wa.me/c/2349032464294">
          <div className="cards">
            
            <img src={image9} className="image"/>
              <span className="title">Zion Graphics Limited</span>
              <span className="price">₦10000</span>
              
            </div>
            </a>
          </div>

          <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
          <a href="https://wa.me/c/2349032464294">
          <div className="cards">
            
            <img src={image5} className="image"/>
              <span className="title">Zion Graphics Limited</span>
              <span className="price">₦10000</span>
              
            </div>
            </a>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
          <a href="https://wa.me/c/2349032464294">
          <div className="cards">
            
            <img src={image4} className="image"/>
              <span className="title">Zion Graphics Limited</span>
              <span className="price">₦10000</span>
              
            </div>
            </a>
          </div>

          <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
          <a href="https://wa.me/c/2349032464294">
          <div className="cards">
            
            <img src={image2} className="image"/>
              <span className="title">Zion Graphics Limited</span>
              <span className="price">₦10000</span>
              
            </div>
            </a>
          </div>

          <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
          <a href="https://wa.me/c/2349032464294">
          <div className="cards">
            
            <img src={img10} className="image"/>
              <span className="title">Zion Graphics Limited</span>
              <span className="price">₦10000</span>
              
            </div>
            </a>
          </div>

          <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
          <a href="https://wa.me/c/2349032464294">
          <div className="cards">
            
            <img src={zionBest} className="image"/>
              <span className="title">Zion Graphics Limited</span>
              <span className="price">₦10000</span>
              
            </div>
            </a>
          </div>

          <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
          <a href="https://wa.me/c/2349032464294">
          <div className="cards">
            
            <img src={stick4} className="image"/>
              <span className="title">Zion Graphics Limited</span>
              <span className="price">₦10000</span>
              
            </div>
            </a>
          </div>
        </div>
      </div>
  )
}

export default Poster