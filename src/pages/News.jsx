import React, { useState } from 'react';
import './News.css';

const allNews = [
  { id: 1, category: 'NOTICE', title: 'Decide Entertainment Global Audition 2024', date: '2024.03.15' },
  { id: 2, category: 'PRESS', title: 'New Artist Debut Announcement', date: '2024.03.10' },
  { id: 3, category: 'NOTICE', title: 'Artist Fan Meeting Ticket Information', date: '2024.03.05' },
  { id: 4, category: 'EVENT', title: 'Pop-up Store Opening in Seoul', date: '2024.02.28' },
  { id: 5, category: 'PRESS', title: 'Quarterly Earnings Report', date: '2024.02.15' },
  { id: 6, category: 'NOTICE', title: 'Website Maintenance Notice', date: '2024.02.01' },
  { id: 7, category: 'EVENT', title: 'Online Concert Streaming Guide', date: '2024.01.20' },
  { id: 8, category: 'PRESS', title: 'Partnership Announcement with Global Label', date: '2024.01.10' },
];

const News = () => {
  const [category, setCategory] = useState('ALL');

  const filteredNews = category === 'ALL' 
    ? allNews 
    : allNews.filter(item => item.category === category);

  return (
    <div className="news-page">
      <div className="news-header">
        <h1>NEWS</h1>
        <div className="category-filters">
          {['ALL', 'NOTICE', 'PRESS', 'EVENT'].map((cat) => (
            <button 
              key={cat}
              className={category === cat ? 'active' : ''} 
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="news-container">
        <div className="news-table-header">
          <span className="col-category">CATEGORY</span>
          <span className="col-title">TITLE</span>
          <span className="col-date">DATE</span>
        </div>
        <div className="news-list-content">
          {filteredNews.map((item) => (
            <div key={item.id} className="news-list-item">
              <span className="col-category">{item.category}</span>
              <span className="col-title">{item.title}</span>
              <span className="col-date">{item.date}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pagination">
        <button disabled>&lt;</button>
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>&gt;</button>
      </div>
    </div>
  );
};

export default News;
