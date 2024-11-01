

// 'use client';
// import React, { useState } from 'react';
// import './OurClients.css';
// import Image from 'next/image';

// const clients = [
//   { id: 1, name: 'Client 1', logo: '/assets/client1.png' },
//   { id: 2, name: 'Client 2', logo: '/assets/client2.png' },
//   { id: 3, name: 'Client 3', logo: '/assets/client3.png' },
//   { id: 4, name: 'Client 4', logo: '/assets/client4.png' },
//   { id: 5, name: 'Client 5', logo: '/assets/client5.png' },
//   { id: 6, name: 'Client 6', logo: '/assets/client6.png' },
//   { id: 7, name: 'Client 7', logo: '/assets/client7.png' },
//   { id: 8, name: 'Client 8', logo: '/assets/client8.png' },
//   { id: 9, name: 'Client 9', logo: '/assets/client9.png' },
//   // { id: 10, name: 'Client 10', logo: '/assets/client10.png' },
//   { id: 11, name: 'Client 11', logo: '/assets/client11.png' },
//   { id: 12, name: 'Client 12', logo: '/assets/client12.png' },
//   { id: 13, name: 'Client 13', logo: '/assets/client13.png' },
//   { id: 14, name: 'Client 14', logo: '/assets/client14.png' },
// ];

// const OurClients: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const clientsPerPage = 5;
//   const totalPages = Math.ceil(clients.length / clientsPerPage);

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalPages - 1 : prevIndex - 1));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === totalPages - 1 ? 0 : prevIndex + 1));
//   };

//   const visibleClients = clients.slice(currentIndex * clientsPerPage, currentIndex * clientsPerPage + clientsPerPage);

//   return (
//     <section className="our-clients">
//       <div className="our-clients-heading">
//         <h2>Our Clients</h2>
//         <p>
//           We’ve been providing exceptional service to our clients since day one, and we’ll continue to do so in the future to forge a lasting relationship with them. Our services are intended to assist businesses in expanding their operations.
//         </p>
//       </div>
//       <div className="carousel-container">
//         <div className="carousel">
//           {visibleClients.map((client) => (
//             <div key={client.id} className="carousel-card">
//               <Image src={client.logo} width={120} height={60} alt={client.name} />
//             </div>
//           ))}
//         </div>
//         <div className="carousel-nav">
//           <button className="carousel-prev" onClick={prevSlide}>&lt;</button>
//           <div className="carousel-dots">
//             {Array.from({ length: totalPages }).map((_, index) => (
//               <span key={index} className={`dot ${index === currentIndex ? 'active' : ''}`}></span>
//             ))}
//           </div>
//           <button className="carousel-next" onClick={nextSlide}>&gt;</button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurClients;

'use client';
import React, { useState } from 'react';
import './OurClients.css';
import Image from 'next/image';

const clients = [
  { id: 1, name: 'Client 1', logo: '/assets/client1.png' },
  { id: 2, name: 'Client 2', logo: '/assets/client2.png' },
  { id: 3, name: 'Client 3', logo: '/assets/client3.png' },
  { id: 4, name: 'Client 4', logo: '/assets/client4.png' },
  { id: 5, name: 'Client 5', logo: '/assets/client5.png' },
  { id: 6, name: 'Client 6', logo: '/assets/client6.png' },
  { id: 7, name: 'Client 7', logo: '/assets/client7.png' },
  { id: 8, name: 'Client 8', logo: '/assets/client8.png' },
  { id: 9, name: 'Client 9', logo: '/assets/client9.png' },
  { id: 11, name: 'Client 11', logo: '/assets/client11.png' },
  { id: 12, name: 'Client 12', logo: '/assets/client12.png' },
  { id: 13, name: 'Client 13', logo: '/assets/client13.png' },
  { id: 14, name: 'Client 14', logo: '/assets/client14.png' },
];

const OurClients: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const clientsPerPage = 5;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? clients.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === clients.length - 1 ? 0 : prevIndex + 1));
  };

  const currentDotIndex = Math.floor(currentIndex / clientsPerPage);

  const visibleClients = clients.slice(currentIndex, currentIndex + clientsPerPage).concat(
    clients.slice(0, Math.max(0, (currentIndex + clientsPerPage) - clients.length))
  );

  return (
    <section className="our-clients">
      <div className="our-clients-heading">
        <h2>Our Clients</h2>
        <p>
          We’ve been providing exceptional service to our clients since day one, and we’ll continue to do so in the future to forge a lasting relationship with them. Our services are intended to assist businesses in expanding their operations.
        </p>
      </div>
      <div className="carousel-container">
        <div className="carousel">
          {visibleClients.map((client) => (
            <div key={client.id} className="carousel-card">
              <Image src={client.logo} width={120} height={60} alt={client.name} />
            </div>
          ))}
        </div>
        <div className="carousel-nav">
          <button className="carousel-prev" onClick={prevSlide}>&lt;</button>
          <div className="carousel-dots">
            {Array.from({ length: Math.ceil(clients.length / clientsPerPage) }).map((_, index) => (
              <span key={index} className={`dot ${index === currentDotIndex ? 'active' : ''}`}></span>
            ))}
          </div>
          <button className="carousel-next" onClick={nextSlide}>&gt;</button>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
