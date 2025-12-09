import React from 'react';
import './News.css';
import useScrollReveal from '../hooks/useScrollReveal';

const NewsItem = ({ date, category, title }) => {
  const { ref, isVisible } = useScrollReveal(0.1);
  
  return (
    <div ref={ref} className={`news-item fade-up ${isVisible ? 'visible' : ''}`}>
      <div className="news-date">{date}</div>
      <div className="news-content">
        <span className="news-category">{category}</span>
        <h3 className="news-title">{title}</h3>
      </div>
      <div className="news-arrow">→</div>
    </div>
  );
};

const News = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.1);

  // Dummy data as "superficial placeholder" per request
  const newsData = [
    { date: "2025.12.10", category: "PRESS", title: "DECIDE Entertainment Announces Global Strategic Partnership" },
    { date: "2025.12.05", category: "NOTICE", title: "2026 Global Audition Schedule Released" },
    { date: "2025.11.28", category: "ARTIST", title: "New Project 'Pre-School' Teaser Revealed" },
    { date: "2025.11.15", category: "BUSINESS", title: "Quarterly Report: Record-Breaking Growth in Q4" }
  ];

  return (
    <section className="news-section">
      <div className="news-container">
        <div ref={headerRef} className={`news-header fade-up ${headerVisible ? 'visible' : ''}`}>
          <h2>LATEST NEWS</h2>
          <button className="view-all-btn">VIEW ALL</button>
        </div>
        
        <div className="news-list">
          {newsData.map((item, idx) => (
            <NewsItem key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
