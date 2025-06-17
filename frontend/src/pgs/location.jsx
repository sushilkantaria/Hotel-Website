import React from 'react';

function Location() {
  return (
    <div className="location-container">
      <h2>Our Location</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d119051.08470866899!2d72.65289863889556!3d21.178394038859672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3be04d1700000001%3A0xdd9dfd09acdca158!2searthspace%2C%20Hazira%20Rd%2C%20Bhatpore%2C%20Surat%2C%20Gujarat%20394510!3m2!1d21.178414!2d72.73530029999999!5e0!3m2!1sen!2sin!4v1732008333768!5m2!1sen!2sin"
        width="1500"
        height="600"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer" 
        className='iframe-width'
      ></iframe>

      <p>
        Visit us at our convenient location. We're easy to find and have ample
        parking available.
      </p>
    </div>
  );
}

export default Location;