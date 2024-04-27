import { React, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
// import zionGif from '../assets/zion-graphics.gif'
import zionBest from "../assets/zionBest.jpeg";
import one from "../assets/one.jpeg";
import two from "../assets/two.jpeg";
import three from "../assets/three.jpeg";
import four from "../assets/four.jpeg";
import five from "../assets/five.jpeg";
import six from "../assets/six.jpeg";
import seven from "../assets/seven.jpeg";
import eight from "../assets/eight.jpeg";
import nine from "../assets/nine.jpeg";
import ten from "../assets/ten.jpeg";
import eleven from "../assets/eleven.jpeg";
import twelve from "../assets/twelve.jpeg";
import { FaArrowRight, FaArrowLeft, FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";

const Homepage = () => {
  const handleNextClick = () => {
    const items = document.querySelectorAll(".item");
    document.querySelector(".slide").appendChild(items[0]);
  };
  // Ref to hold the interval ID
  const intervalRef = useRef(null);

  // Start automatic sliding when the component mounts
  useEffect(() => {
    // Function to slide automatically
    const autoSlide = () => {
      handleNextClick();
    };

    // Set interval to call autoSlide every 6 seconds
    intervalRef.current = setInterval(autoSlide, 6000);

    // Clear interval when the component unmounts to prevent memory leaks
    return () => clearInterval(intervalRef.current);
  }, []);
  const handlePrevClick = () => {
    const items = document.querySelectorAll(".item");
    document.querySelector(".slide").prepend(items[items.length - 1]);
  };

  return (
    <>
      <div className="mx-5 introGrp">
        <div className="col-lg-7 col-md-6 col-sm-12 col-12">
          <div className="introText">
            Welcome to <span>Zion Graphics</span> Limited,
          </div>
          <br />
          <div className="prem ">
            your premier destination for exceptional design solutions tailored
            to elevate your brand identity...
          </div>
          <div>
            <NavLink to='/zion-graphics/about-us'>
            <button role="button" className="button-name">

              See More
            </button>
            </NavLink>
          </div>
        </div>

        <img
          className="zionBestImg ms-3 col-lg-5 col-md-6 col-sm-12 col-12"
          src={zionBest}
          alt="picture"
        />
      </div>
      <div className="sliding">Product Designs</div>
      <div className="containe mb-5">
        <div className="slide">
          <div className="item" style={{ backgroundImage: `url(${one})` }}>
            <div className="content">
              <div className="name">Zion Graphics</div>
              <div className="des">Best graphic designer</div>
              {/* <button>See more</button> */}
            </div>
          </div>
          <div className="item" style={{ backgroundImage: `url(${two})` }}>
            <div className="content">
              <div className="name">Zion Graphics</div>
              <div className="des">Poster Designs</div>
              <NavLink to='/zion-graphics/products/posters'>
              <button>See more</button>
              </NavLink>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: `url(${three})` }}>
            <div className="content">
              <div className="name">Zion Graphics</div>
              <div className="des">Banner Designs</div>
              <NavLink to='/zion-graphics/products/banners'>
              <button>See more</button>
              </NavLink>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: `url(${four})` }}>
            <div className="content">
              <div className="name">Zion Graphics</div>
              <div className="des">Sticker Designs</div>
              <NavLink to='/zion-graphics/products/stickers'>
              <button>See more</button>
              </NavLink>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: `url(${five})` }}>
            <div className="content">
              <div className="name">Zion Graphics</div>
              <div className="des">ID Cards Design</div>
              <NavLink to='/zion-graphics/products/id-cards'>
              <button>See more</button>
              </NavLink>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: `url(${six})` }}>
            <div className="content">
              <div className="name">Zion Graphics</div>
              <div className="des">Business Logos</div>
              <NavLink to='/zion-graphics/products/business-logos'>
              <button>See more</button>
              </NavLink>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: `url(${seven})` }}>
            <div className="content">
              <div className="name">Zion Graphics</div>
              <div className="des">Poster Designs</div>
              <NavLink to='/zion-graphics/products/posters'>
              <button>See more</button>
              </NavLink>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: `url(${eight})` }}>
            <div className="content">
              <div className="name">Zion Graphics</div>
              <div className="des">Business Cards</div>
              <NavLink to='/zion-graphics/products/business-cards'>
              <button>See more</button>
              </NavLink>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: `url(${nine})` }}>
            <div className="content">
              <div className="name">Zion Graphics</div>
              <div className="des">Business Cards</div>
              <NavLink to='/zion-graphics/products/business-cards'>
              <button>See more</button>
              </NavLink>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: `url(${ten})` }}>
            <div className="content">
              <div className="name">Zion Graphics</div>
              <div className="des">Banner Design</div>
              <NavLink to='/zion-graphics/products/banners'>
              <button>See more</button>
              </NavLink>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: `url(${eleven})` }}>
            <div className="content">
              <div className="name">Zion Graphics</div>
              <div className="des">Business Logos</div>
              <NavLink to='/zion-graphics/products/business-logos'>
              <button>See more</button>
              </NavLink>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: `url(${twelve})` }}>
            <div className="content">
              <div className="name">Zion Graphics</div>
              <div className="des">Stickers</div>
              <NavLink to='/zion-graphics/products/stickers'>
              <button>See more</button>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="button">
          <button className="prev" onClick={handlePrevClick}>
            <FaArrowLeft />
          </button>
          <button className="next" onClick={handleNextClick}>
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="lorem">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quisquam
        quia exercitationem accusantium libero veritatis laudantium, nobis
        totam? Vel cumque at atque explicabo illo unde nulla repellat quibusdam,
        sapiente quasi!
      </div>
      <div className="choose mx-3">
        <h2 className="why">why choose us?</h2>
        <p className="reason">
          From captivating logos to striking graphics, we specialize in crafting
          bespoke designs that perfectly capture your brand's essence. Explore
          our services and let us elevate your brand identity to new heights.
        </p>
      </div>

      <div className="react-icons mb-5">
        <div>
          <a href="">
            <FaFacebookSquare className="facebook-icon" />
          </a>
        </div>
        <div>
          <a href="https://wa.me/c/2349032464294">
            <IoLogoWhatsapp className="whatsapp-icon" />
          </a>
        </div>
        <div>
          <a href="https://mail.google.com/mail/u/0/#inbox">
            <SiGmail className="gmail-icon" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Homepage;
