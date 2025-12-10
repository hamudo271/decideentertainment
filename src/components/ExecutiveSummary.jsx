import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import '../pages/Organization.css'; // Inheriting styles

const ExecutiveSummary = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="org-section executive-summary">
      <div className="content-wrapper">
        <div className="section-header-large center-align">
           <h2 className="title-huge text-gradient-gold">EXECUTIVE SUMMARY</h2>
           <p className="subtitle-large">투자 요약 및 예상 수익</p>
        </div>

        <div ref={ref} className={`investment-dashboard fade-up ${isVisible ? 'visible' : ''}`}>
          <div className="invest-main-figure">
            <span className="label">총 제작비 (Total Cost)</span>
            <span className="value huge-number">70억 원</span>
          </div>
          
          <div className="invest-metrics">
            <div className="metric-item">
              <span className="metric-label">기대 수익 (ROI)</span>
              <span className="metric-value highlight">1,004%</span>
              <span className="metric-sub">5년 누적 기준</span>
            </div>
            <div className="metric-item">
              <span className="metric-label">BEP 달성</span>
              <span className="metric-value">2.5년</span>
              <span className="metric-sub">내</span>
            </div>
            <div className="metric-item">
              <span className="metric-label">EXIT 목표</span>
              <span className="metric-value">3~5년</span>
              <span className="metric-sub">내</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSummary;
