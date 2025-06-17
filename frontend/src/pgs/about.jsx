import React from 'react';
import './about.css';

// Imported assets
import aboutImg from '../assets/about.jpg';
import portraitImg from '../assets/about_internal.jpg';

function About() {
  return (
    <div className="about-page">
      <hr className="about-hr-line" />

      {/* About Us Heading */}
      <h2 className="about-heading">About Us</h2>

      {/* Image Section */}
      <div className="about-img-section">
        <img src={aboutImg} alt="About Us" className="about-main-img" />
      </div>

      {/* Paragraphs Section */}
      <div className="about-text-section">
      <p> When you think of Cove, we want more than just luxury to come to mind. For us, true luxury is about crafting experiences that resonate with the heart and soul. It’s the little things—the thoughtful details, the warm gestures, and the unique touch that makes every moment with us special. At Cove, we are not just about providing services; we are about creating a space where you feel valued and inspired. </p>
        
      <p> Our philosophy revolves around meaningful connections and a sense of belonging. Every element of your journey with us is designed to make you feel at home, whether you're here for business, relaxation, or celebration. With genuine care at the heart of all we do, we ensure your experience is not only memorable but deeply personal.  </p> 
        <p>
        At Cove, our passionate team brings this vision to life. We are committed to going above and beyond, welcoming you into a world of comfort, elegance, and warmth. Whether it’s through our luxurious accommodations, scenic venues, or immersive experiences, we focus on making you the center of everything we do. With Cove, it’s more than just a stay—it’s a journey filled with humanity, generosity, and unparalleled care.
        </p>
      </div>

      {/* Beliefs Section */}
      <div className="about-beliefs-section">
        <div className="beliefs-img">
          <img src={portraitImg} alt="Our Beliefs" className="portrait-img" />
        </div>
        <div className="beliefs-text">
          <p>
            <em>
              <strong>
                "Our core belief is that every individual has the power to make a difference. With passion, integrity,
                and dedication, we aim to create a positive impact on the lives we touch and the communities we serve."
              </strong>
            </em>
          </p>
        </div>
      </div>

      <hr className="about-hr-line" />
    </div>
  );
}

export default About;
