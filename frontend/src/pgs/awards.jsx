import React, { useState } from "react";
import "./awards.css";

//imported assets
import ll1 from '..//assets/ll1.png'
import ll2 from '..//assets/ll2.png'
import ll3 from '..//assets/ll3.png'
import ll4 from '..//assets/ll4.png'
import ll5 from '..//assets/ll5.avif'
import ll6 from '..//assets/ll6.jpg'

import ls1 from '..//assets/ls1.png'
import ls2 from '..//assets/ls2.png'
import ls3 from '..//assets/ls3.png'
import ls4 from '..//assets/ls4.svg'

import pl1 from '..//assets/pl1.png'
import pl2 from '..//assets/pl2.jpg'
import pl3 from '..//assets/pl3.jpg'
import pl4 from '..//assets/pl4.png'
import pl5 from '..//assets/pl5.jpg'
import pl6 from '..//assets/pl6.png'

// import l7 from '..//assets/l7.png'
import c1 from '..//assets/c1.png'
import c2 from '..//assets/c2.avif'
import c3 from '..//assets/c3.png'

import sl1 from '..//assets/sl1.png'
import sl2 from '..//assets/sl2.png'
import sl3 from '..//assets/sl3.png'
import sl4 from '..//assets/sl4.svg'


// import sl1 from '..//assets/sl1.png'
// import sl2 from '..//assets/sl2.png'
// import sl3 from '..//assets/sl3.png'

// Sample images for each category (replace these with your actual images)
const categoriesData = {
  Luxury: [
    { id: 1, src: ll1, alt: "Luxury Award 1" },
    { id: 2, src: ll2, alt: "Luxury Award 2" },
    { id: 3, src: ll3, alt: "Luxury Award 3" },
    { id: 4, src: ll4 , alt: "Luxury Award 4" },
    { id: 5, src: ll5 ,  alt: "Luxury Award 5" },
    { id: 6, src: ll6 ,  alt: "Luxury Award 6" },
  ],
  Premium: [
    { id: 1, src: pl1 , alt: "Premium Award 1" },
    { id: 2, src: pl2 ,  alt: "Premium Award 2" },
    { id: 3, src: pl3 , alt: "Premium Award 3" },    
    { id: 4, src: pl4 , alt: "Premium Award 4" },
    { id: 5, src: pl5 ,  alt: "Premium Award 5" },
    { id: 6, src: pl6 , alt: "Premium Award 6" },
  ],
  Select: [
    { id: 1, src: sl1, alt: "Select Award 1" },
    { id: 2, src: sl2, alt: "Select Award 2" },
    { id: 3, src: sl3, alt: "Select Award 3" },
    { id: 4, src: sl4, alt: "Select Award 4" },

  ],
  "Longer Stays": [
    { id: 1, src: ls1, alt: "Longer Stay Award 1" },
    { id: 2, src: ls2, alt: "Longer Stay Award 2" },
    { id: 3, src: ls3, alt: "Longer Stay Award 3" },
    { id: 4, src: ls4, alt: "Longer Stay Award 4" },
  ],
  Collections: [
    { id: 1, src: c1, alt: "Collections Award 1" },
    { id: 2, src:c2, alt: "Collections Award 2" },
    { id: 3, src: c3, alt: "Collections Award 3" },
  ],
};

function Awards() {
  const [activeTab, setActiveTab] = useState("Luxury");

  return (
    <div className="awards-page">
      {/* Header Section */}
      <div className="awards-header">
        <h1>Awards & Recognitions</h1>
        <p>
          Our dedication to excellence has been recognized globally. Here are
          some of the awards and recognitions we've received.
        </p>
      </div>

      {/* Tabs Section */}
      <div className="awards-tabs">
        {Object.keys(categoriesData).map((category) => (
          <button
            key={category}
            className={`awards-tab ${activeTab === category ? "active-tab" : ""}`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Divider */}
      <div className="awards-divider"></div>  

      {/* Images Section */}
      <div className="awards-logos">
        {categoriesData[activeTab].map((award) => (
          <div className="logo-card" key={award.id}>
            <img src={award.src} alt={award.alt} className="award-logo" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Awards;
