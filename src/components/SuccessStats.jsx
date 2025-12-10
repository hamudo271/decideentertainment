import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import '../pages/Organization.css'; // Inheriting styles

const SuccessStats = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="org-section success-stats-section">
      <div className="content-wrapper">
        <div className="section-header-large center-align">
           <h2 className="title-huge">THE PROVEN FORMULA</h2>
           <p className="subtitle-large">성공 보증수표: CJ ENM의 승리 방정식</p>
        </div>

        <div ref={ref} className={`stats-grid fade-up ${isVisible ? 'visible' : ''}`}>
          <div className="stat-card">
            <div className="stat-header">
              <span className="stat-rank">01</span>
              <h4>Wanna One</h4>
            </div>
            <div className="stat-body">
              <div className="stat-row">
                <span className="label">매출</span>
                <span className="value">900억원</span>
              </div>
              <div className="stat-row">
                <span className="label">순이익</span>
                <span className="value">440억원</span>
              </div>
              <div className="stat-row">
                <span className="label">앨범 판매</span>
                <span className="value">70만장</span>
              </div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <span className="stat-rank">02</span>
              <h4>ENHYPEN</h4>
            </div>
            <div className="stat-body">
              <div className="stat-row">
                <span className="label">연매출</span>
                <span className="value">599억원</span>
              </div>
              <div className="stat-row">
                <span className="label">초동 판매</span>
                <span className="value">143만장</span>
              </div>
              <div className="stat-row">
                <span className="label">성장 속도</span>
                <span className="value">도쿄돔 입성</span>
              </div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <span className="stat-rank">03</span>
              <h4>ZB1</h4>
            </div>
            <div className="stat-body">
              <div className="stat-row">
                <span className="label">아티스트 가치</span>
                <span className="value">2,900억원</span>
              </div>
              <div className="stat-row">
                <span className="label">데뷔 선주문</span>
                <span className="value">78만장</span>
              </div>
              <div className="stat-row">
                <span className="label">판매 성과</span>
                <span className="value">124만장</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStats;
