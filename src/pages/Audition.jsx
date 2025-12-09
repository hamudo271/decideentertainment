import React from 'react';
import './Audition.css';

const Audition = () => {
  return (
    <div className="audition-page">
      <section className="audition-hero">
        <div className="audition-hero-content">
          <h1>AUDITION</h1>
          <p>BE THE NEXT STAR</p>
        </div>
      </section>

      <section className="audition-info">
        <div className="info-container">
          <div className="info-block">
            <h2>QUALIFICATION</h2>
            <p>Anyone born between 2005 and 2014 regardless of gender or nationality.</p>
          </div>
          
          <div className="info-block">
            <h2>CATEGORY</h2>
            <ul className="category-list">
              <li>
                <h3>VOCAL / RAP</h3>
                <p>One verse of a song without accompaniment</p>
              </li>
              <li>
                <h3>DANCE</h3>
                <p>One verse of a song (bring your own music on phone)</p>
              </li>
              <li>
                <h3>ACTING</h3>
                <p>One minute of free acting</p>
              </li>
              <li>
                <h3>MODEL</h3>
                <p>Walking and 3 poses</p>
              </li>
            </ul>
          </div>

          <div className="apply-section">
            <button className="apply-btn">APPLY NOW</button>
            <p className="note">* Please make sure to read the FAQ before applying.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Audition;
