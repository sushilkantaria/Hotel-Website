import React from 'react';
import { Link } from "react-router-dom";
import './home.css';

// imported assets
import bgVid from '..//assets/211152.mov';
import { FaMapMarkerAlt, FaConciergeBell, FaImages, FaHeart, FaAward } from 'react-icons/fa';


function Home() { 

  // cards array
  const services = [
    {
      id: 1,
      title: "Memorable Dining Experiences",
      imgSrc:"https://t3.ftcdn.net/jpg/06/55/45/12/360_F_655451228_jAJGMKY329hxF3NRDfGaDUXV3eiMkZbD.jpg",
      info: "Celebrate love and family moments in our beautifully designed dining halls. Whether it’s an intimate dinner or a grand family celebration, we provide the perfect ambiance for unforgettable memories."
    },
    {
      id: 2,
      title: "Grand Event Halls",
      imgSrc: "https://thumb.ac-illust.com/84/84048536b40fcee5949708eea96a5461_t.jpeg",
      info: "Host impactful conferences, professional events, or charity shows in our spacious, fully equipped halls. Designed for elegance and functionality, these venues are ideal for making your event a success."
    },
    {
      id: 3,
      title: "Private Pool Suites",
      imgSrc: "https://media.cnn.com/api/v1/images/stellar/prod/160502155618-terranea-vista-pool.jpg?q=w_1600,h_900,x_0,y_0,c_fill",
      info: "Indulge in luxury with our private suites featuring large, secluded swimming pools. Relax, unwind, and make your stay truly extraordinary with an experience crafted just for you."
    },
    {
      id: 4,
      title: "Sunset Serenity",
      imgSrc: "https://img.freepik.com/free-photo/seoraksan-mountains-is-covered-by-morning-fog-sunrise-seoul-korea_335224-313.jpg",
      info: "Witness breathtaking sunsets from our exclusive rooftop lounges or waterfront decks. Perfectly curated for relaxation, these spaces let you embrace the beauty of nature in comfort."
    },
    {
      id: 5,
      title: "Professional Dining Spaces",
      imgSrc: "https://cache.marriott.com/content/dam/marriott-renditions/HKGXR/hkgxr-run-1823-hor-pano.jpg?downsize=*:666",
      info: "Impress your clients and colleagues with our sophisticated dining halls, ideal for professional gatherings. From business lunches to formal dinners, we cater to every need with precision and class."
    },
    {
      id: 6,
      title: "Wildlife Sanctuary Walks",
      imgSrc: "https://media.cntraveler.com/photos/548217fcb6e03e8c2d0ca02e/master/w_1920%2Cc_limit/Makanyane_Safari_Lodge_Elephant.jpg",
      info: "Explore the wonders of nature with our guided walks through lush wildlife sanctuaries. Encounter diverse flora and fauna while enjoying a serene and immersive natural experience."
    },
  ];

  return (
    <div className="home-pg">
      <div className="vid-entire-container">
        <section className="video-section">
          <video autoPlay muted loop>
            <source src={bgVid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-content">
            <h1>Never Ending Luxuries</h1>
            <p>Discover a world of possibilities .</p>
          </div>
        </section>
      </div>
      <hr className='home-hr-line' />

      {/* Cards Section */}
      <div className="cards-container">
      <Link to="/location" className="card">
        <FaMapMarkerAlt className="card-icon" />
        <p>Location</p>
      </Link>

      <Link to="/services" className="card">
        <FaConciergeBell className="card-icon" />
        <p>Services</p>
      </Link>
      
      <Link to="/hearts" className="card">
        <FaHeart className="card-icon" />
        <p>Hearts</p>
      </Link>
      <Link to="/Awards" className="card">
        <FaAward className="card-icon" />
        <p>Awards</p>
      </Link>

      <Link to="/Hearts" className="card">
        <FaImages className="card-icon" />
        <p>Photos</p>
      </Link>
    </div>
      
      {/* grey section */}
      <section className="grey-section">
      <h2>Contemporary Luxury in the City of Love</h2>
      <p>
      Our resort is crafted to elevate your experiences, from uncovering hidden gems to enjoying unparalleled services. Whether you’re seeking adventure, tranquility, or unforgettable moments, we are here to make it happen. Let us guide you to new horizons filled with joy and discovery.
      </p>
    </section>

    {/* services */}

    <div className="services-section">
  <h2>Our Services</h2>
  <div className="services-cards">
        {services.map(service => (
          <div className="service-card" key={service.id}>
            <div className="card-content">
              <h3>{service.title}</h3>
              <img
                src={service.imgSrc}
                alt={service.title}
                className="service-img"
              />
              <p className="service-info">{service.info}</p>
            </div>
          </div>
        ))}
      </div>
  </div>

  <hr className="home-hr-line-above-footer" />

    </div>
  );
}

export default Home;

