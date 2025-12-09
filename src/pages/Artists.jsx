import React, { useState } from 'react';
import './Artists.css';

const allArtists = [
  { id: 1, name: 'ARTIST ONE', type: 'MUSICIAN', image: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2070&auto=format&fit=crop' },
  { id: 2, name: 'ARTIST TWO', type: 'ACTOR', image: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop' },
  { id: 3, name: 'ARTIST THREE', type: 'MUSICIAN', image: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=1974&auto=format&fit=crop' },
  { id: 4, name: 'ARTIST FOUR', type: 'ACTOR', image: 'https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2070&auto=format&fit=crop' },
  { id: 5, name: 'ARTIST FIVE', type: 'MUSICIAN', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop' },
  { id: 6, name: 'ARTIST SIX', type: 'ACTOR', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop' },
];

const Artists = () => {
  const [filter, setFilter] = useState('ALL');

  const filteredArtists = filter === 'ALL' 
    ? allArtists 
    : allArtists.filter(artist => artist.type === filter);

  return (
    <div className="artists-page">
      <div className="artists-header">
        <h1>ARTISTS</h1>
        <div className="filter-buttons">
          <button 
            className={filter === 'ALL' ? 'active' : ''} 
            onClick={() => setFilter('ALL')}
          >
            ALL
          </button>
          <button 
            className={filter === 'MUSICIAN' ? 'active' : ''} 
            onClick={() => setFilter('MUSICIAN')}
          >
            MUSICIAN
          </button>
          <button 
            className={filter === 'ACTOR' ? 'active' : ''} 
            onClick={() => setFilter('ACTOR')}
          >
            ACTOR
          </button>
        </div>
      </div>

      <div className="artists-grid-container">
        {filteredArtists.map((artist) => (
          <div key={artist.id} className="artist-grid-item">
            <div className="image-wrapper">
              <img src={artist.image} alt={artist.name} />
              <div className="item-overlay">
                <h3>{artist.name}</h3>
                <span>{artist.type}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artists;
