import React from 'react';
import './Artists.css';

const artists = [
  { id: 1, name: 'ARTIST ONE', image: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2070&auto=format&fit=crop' },
  { id: 2, name: 'ARTIST TWO', image: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop' },
  { id: 3, name: 'ARTIST THREE', image: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=1974&auto=format&fit=crop' },
  { id: 4, name: 'ARTIST FOUR', image: 'https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2070&auto=format&fit=crop' },
];

const Artists = () => {
  return (
    <section id="artists" className="artists-section">
      <div className="section-header">
        <h2>ARTISTS</h2>
        <a href="/artists" className="view-all">VIEW ALL</a>
      </div>
      
      <div className="artists-grid">
        {artists.map((artist) => (
          <div key={artist.id} className="artist-card">
            <div className="artist-image">
              <img src={artist.image} alt={artist.name} />
              <div className="overlay">
                <h3>{artist.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Artists;
