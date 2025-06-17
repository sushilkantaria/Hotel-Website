import React from "react";
import "./hearts.css";

// Sample images (replace these paths with your actual images)
import img1 from "../assets/h1.jpg";
import img2 from "../assets/h2.jpg";
import img3 from "../assets/h3.jpg";
import img4 from "../assets/h4.jpg";
import img5 from "../assets/h5.jpg";
import img6 from "../assets/h6.jpg";
// import img7 from "../assets/h7.jpg";
import img8 from "../assets/h8.jpg";
import img9 from "../assets/h9.jpg";
import img10 from "../assets/h10.jpg";
import img11 from "../assets/h11.jpg";
import img12 from "../assets/h12.jpg";
import img13 from "../assets/h13.jpg";



function Hearts() {
  const images = [img1, img2, img3, img4, img5, img6, img8, img9, img9, img10, img11, img12, img13];

  return (
    <div className="hearts-page">
      <h1 className="hearts-heading">Hearts Collection</h1>
      <div className="hearts-gallery">
        {images.map((image, index) => (
          <div className="hearts-card" key={index}>
            <img src={image} alt={`Heart ${index + 1}`} className="hearts-img" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hearts;
