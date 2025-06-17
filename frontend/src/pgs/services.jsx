// import React from 'react';
// import './services.css';

// // imported assets
// import img1 from '../assets/deluxe_suite_1.jpg'
// import img2 from '../assets/deluxe_suite_3.jpg'
// import img3 from '../assets/deluxe_guest_room_3.jpg'
// import img4 from '../assets/deluxe_guest_room_1.avif'
// import img5 from '../assets/deluxe_guest_room_2.jpg'
// import img6 from '../assets/deluxe_suite_2.jpg'
// import img7 from '../assets/deluxe_suite_4.jpg'
// import img8 from '../assets/premium_room_1.jpg'
// // import img3 from '../assets/premium_room_2.jpg'

// // import img9 from '../assets/premium_room_2.jpg'

// function Services() {

//     const services = [
//         {
//             id: 1,
//             title: "Service 1",
//             imgSrc: img1,
//             description: "This is the detailed description of Service 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//           },
//           {
//             id: 2,
//             title: "Service 2",
//             imgSrc: img2,
//             description: "This is the detailed description of Service 2. Praesent eu justo nec ligula facilisis aliquet."
//           },
//           {
//             id: 3,
//             title: "Service 3",
//             imgSrc: img3,
//             description: "This is the detailed description of Service 3. Aenean non leo vitae purus sagittis tincidunt."
//           },
//           {
//             id: 4,
//             title: "Service 4",
//             imgSrc: img4,
//             description: "This is the detailed description of Service 4. Morbi in magna quis libero efficitur pellentesque."
//           },
//           {
//             id: 5,
//             title: "Service 5",
//             imgSrc: img5,
//             description: "This is the detailed description of Service 5. Fusce dapibus urna sit amet blandit lobortis."
//           },
//           {
//             id: 6,
//             title: "Service 6",
//             imgSrc: img8,
//             description: "This is the detailed description of Service 6. Etiam vehicula turpis sit amet magna porttitor."
//           },
//           {
//             id: 7,
//             title: "Service 7",
//             imgSrc: img6,
//             description: "This is the detailed description of Service 7. Nullam vestibulum arcu at sapien cursus vehicula."
//           },
//           {
//             id: 8,
//             title: "Service 8",
//             imgSrc: img7,
//             description: "This is the detailed description of Service 8. Quisque eget urna ac purus eleifend malesuada."
//           },
//       ];
    
      
//   return (
//     <div className="services-pg">
//       <hr className='services-hr-line' />   
      
//       {/* grey section */}
//       <section className="services-intro-section">
//       <h2>Section Heading</h2>
//       <p>
//         This is a paragraph within the grey section. Lorem ipsum dolor sit amet,
//         consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
//         dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation   
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quisquam consequatur tenetur aliquid, sapiente nostrum repudiandae cupiditate suscipit minus fugiat ipsa, officiis ipsam, dicta reiciendis sunt temporibus? Nam, deserunt doloribus.
//         ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, architecto debitis voluptatum doloremque aspernatur incidunt. Voluptas odit incidunt ullam odio ducimus alias consequatur aut tempora, quae libero dolorum! Optio, delectus? lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quo perferendis mollitia ullam odio, sequi distinctio blanditiis veritatis. Dolor consequuntur similique porro quae illo laudantium nulla dolores quidem in ab.
//       </p>
//     </section>

//     {/* services */}

//     <div className="services-page">
//       <h2 className="services-heading">Our Services</h2>
//       <div className="services-cards-section">
//         {services.map(service => (
//           <div className="services-card" key={service.id}>
//             <img src={service.imgSrc} alt={service.title} className="card-img" />
//             <div className="card-description">
//               <h3>{service.title}</h3>
//               <p>{service.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>

//   <hr className="home-hr-line-above-footer" />

//     </div>
//   );
// }

// export default Services;








import React from 'react';
import './services.css';

// imported assets
import img1 from '../assets/nroom.jpg';
import img2 from '../assets/nroom2.jpg';
import img3 from '../assets/room1.jpg';
import img4 from '../assets/ROOM11.jpg';
import img5 from '../assets/room2.jpg';
// import img6 from '../assets/deluxe_suite_2.jpg';
// import img7 from '../assets/deluxe_suite_4.jpg';
import img8 from '../assets/premium_room_1.jpg';

function Services() {
  const services = [
    {
      id: 1,
      title: "Memorable Dining Experiences",
      imgSrc: img1,
      description: "Celebrate love and family moments in our beautifully designed dining halls. Whether it’s an intimate dinner or a grand family celebration, we provide the perfect ambiance for unforgettable memories.",
    },
    {
      id: 2,
      title: "Grand Event Halls",
      imgSrc: img2,
      description: "Host impactful conferences, professional events, or charity shows in our spacious, fully equipped halls. Designed for elegance and functionality, these venues are ideal for making your event a success.",
    },
    {
      id: 3,
      title: "Private Pool Suites",
      imgSrc: img3,
      description: "Indulge in luxury with our private suites featuring large, secluded swimming pools. Relax, unwind, and make your stay truly extraordinary with an experience crafted just for you..",
    },
    {
      id: 4,
      title: "Sunset Serenity",
      imgSrc: img4,
      description: "Witness breathtaking sunsets from our exclusive rooftop lounges or waterfront decks. Perfectly curated for relaxation, these spaces let you embrace the beauty of nature in comfort.",
    },
    {
      id: 5,
      title: "Professional Dining Spaces",
      imgSrc: img5,
      description: "Impress your clients and colleagues with our sophisticated dining halls, ideal for professional gatherings. From business lunches to formal dinners, we cater to every need with precision and class.",
    },
    {
      id: 6,
      title: "Wildlife Sanctuary Walks",
      imgSrc: img8,
      description: "Explore the wonders of nature with our guided walks through lush wildlife sanctuaries. Encounter diverse flora and fauna while enjoying a serene and immersive natural experience.",
    },
    // {
    //   id: 7,
    //   title: "Service 7",
    //   imgSrc: img6,
    //   description: "This is the detailed description of Service 7. Nullam vestibulum arcu at sapien cursus vehicula.",
    // },
    // {
    //   id: 8,
    //   title: "Service 8",
    //   imgSrc: img7,
    //   description: "This is the detailed description of Service 8. Quisque eget urna ac purus eleifend malesuada.",
    // },
  ];

  return (
    <div className="services-pg">
      <hr className="services-hr-line" />

      {/* Grey section */}
      <section className="services-intro-section">
        <h2>Unparalleled Hospitality and Experiences</h2>
        <p>
        Welcome to a world where luxury meets thoughtful design, and every moment is crafted to perfection. Whether you’re planning a family celebration, a corporate event, or simply a retreat to unwind, our offerings are tailored to make your experience exceptional. From opulent accommodations to breathtaking natural settings, our commitment is to create lasting memories. Immerse yourself in comfort, enjoy personalized service, and let us take care of every detail to ensure your stay is nothing short of extraordinary.
        </p>
      </section>

      {/* Services */}
      <div className="services-page">
        <h2 className="services-heading">Our Services</h2>
        <div className="services-cards-section">
          {services.map((service) => (
            <div className="services-card" key={service.id}>
              <img src={service.imgSrc} alt={service.title} className="card-img" />
              <div className="card-description">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className="card-btn">Check Rates</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="home-hr-line-above-footer" />
    </div>
  );
}

export default Services;
