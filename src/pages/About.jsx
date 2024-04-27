import React from 'react'
import brand from "../assets/brand.jpeg"

const About = () => {
  return (
    <>
    <div className='aboutPage'>
      <div className='row'>
        <div className='col-lg-7 col-md-6 col-sm-12 col-12"'>
          <div className='aboutText'>About Us</div>
          <div className='aboutNote'>
            At Zion Graphics Limited, we specialize in creating exceptional graphic designs and bespoke logos that perfectly capture the essence of your brand. With a dedicated team of experieneced graphic designers, we go above and beyond to deliver stunning visual solutions tailored to your unique requirements, <b className='aboutBold'>your premier destination for exceptional design solutions tailored to elevate your brand identity...</b> Whether you're looking to establish your brand identity from scratch or seeking a fresh perspective for a rebranding effort, we're here to bring your vision to life. Our comprehensive services encompas a wide range of graphic design solution, including <b className='aboutBold'>logo creation, flyer designs, poster designs, business cards, banners, stickers, ID cards, and more..</b>.
          </div>
          </div>
        <img src={brand} alt='picture' className="zionBrand col-lg-5 col-md-6 col-sm-12 col-12"/>
      </div>
      <div className='aboutNote' style={{color: "black"}}>
        At Zion Graphics Limited, we pride ourselves on our creativity, attention to detail, and commitment to customer satisfaction. With our passion for design and dedication to excellence, we strive to exceed your expectations and deliver results that resonate with your audience. At Zion Graphics Limited, we are dedicated to unleashing the full potential of your brand through innovative design solutions. With a relentless pursuit of excellence, our team combines creativity, technical prowess, and a deep understanding of your brand's essence to craft compelling visual experiences that resonate with your audience. From captivating logos to comprehensive branding strategies and beyond, we are committed to exceeding your expectations at every turn. Our passion for design fuels our quest for perfection, and we take pride in delivering results that not only meet but surpass your vision. Partner with us, and let's embark on a journey to elevate your brand to new heights of success. we stand at the forefront of design innovation, driven by an unwavering commitment to excellence and an insatiable thirst for creativity. With a laser focus on your unique needs and objectives, we craft bespoke solutions that captivate audiences, ignite imaginations, and leave a lasting impression. <br/>
        
      </div>
      </div>
      <div className='secAboutPage'>
        <div className='row'>
        <img src={brand} alt='picture' className="zionBrand col-lg-5 col-md-6 col-sm-12 col-12"/>
        <div className='col-lg-7 col-md-6 col-sm-12 col-12"'>
          <div className='aboutGraphic'>Why Graphic designs?</div>
          <div className='aboutNote'>
          Graphic design is the secret sauce that transforms ordinary brands into extraordinary experiences. In today's visually-driven world, stunning design isn't just a luxury—it's a necessity. Whether you're launching a new product, building a brand, or crafting a marketing campaign, great design is your most powerful ally. It's what sets you apart from the competition, grabs attention in a crowded marketplace, and drives engagement with your audience. At <span style={{color: "#4d8fc1"}}>Zion Graphics Limited</span>, we understand the transformative power of graphic design, and we're here to help you harness it for your business. Let us be your creative partner in success, and together, we'll make magic happen.
          </div>
          </div>
        
      </div>
      </div>
    </>
  )
}

export default About