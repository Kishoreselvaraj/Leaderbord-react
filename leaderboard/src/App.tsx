// src/components/Leaderboard.tsx
import React, { useEffect, useState } from 'react';
import './Leaderbord.css';
import Carousel from './Carousel';

interface Player {
  name: string;
  prize: string;
  time: string;
}

const Leaderboard: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    // Fetch the data (here we use a static example)
    const fetchData = () => {
      const data: Player[] = [
        { name: 'Anjum', prize: '₹50000', time: '00:56:23' },
        { name: 'Pragati Azad', prize: '₹5000', time: '00:56:23' },
        { name: 'Pragati Azad', prize: '₹500', time: '00:56:23' },
        { name: 'Hannibal Hector', prize: '', time: '00:56:23' },
        { name: 'Razzi', prize: '', time: '00:56:23' },
        { name: 'McRamble', prize: '', time: '00:56:23' },
        { name: 'Razzi', prize: '', time: '00:56:23' },
        { name: 'McRamble', prize: '', time: '00:56:23' },
        { name: 'Muhammed Anjum Kunnummal', prize: '', time: '00:56:23' },
        { name: 'Muhammed Anjum Kunnummal', prize: '', time: '00:56:23' }
      ];
      setPlayers(data);
    };

    fetchData();
  }, []);

  return (
    
    <div className="leaderboard">
      <div className="nav">

      </div>
      <h1>Fastest of Today</h1>
      <div className="player-container">
        {players.map((player, index) => (
          <div className="player" key={index}>
            <span className="position">{index + 1}</span>
            <span className="name">{player.name}</span>
            <span className="prize">{player.prize}</span>
            <span className="time">{player.time}</span>
          </div>
        ))}
      </div>
      <div className="pop">
        <Carousel/>
      </div>
      <footer className="footer">
        Footer content goes here.
      </footer>
    </div>
  );
};

export default Leaderboard;
