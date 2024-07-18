// src/components/Carousel.tsx
import React from 'react';
import './Carousel.css';

const Carousel: React.FC = () => {
  return (
    <div className="carousel">
      <div className="carousel-track">
        <div className="carousel-slide"><img src="leaderboard\src\img\KishoreProfile.jpg" alt="Slide 1" /></div>
        <div className="carousel-slide"><img src="" alt="Slide 2" /></div>
        <div className="carousel-slide"><img src="" alt="Slide 3" /></div>
        <div className="carousel-slide"><img src="" alt="Slide 4" /></div>
      </div>
    </div>
  );
};

export default Carousel;
