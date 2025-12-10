import React from 'react';
import './History.css';
import SubMenu from '../components/SubMenu';
import useScrollReveal from '../hooks/useScrollReveal';

const HistoryItem = ({ year, title, desc }) => {
  const { ref, isVisible } = useScrollReveal(0.1);
  return (
     <div ref={ref} className={`history-row fade-up ${isVisible ? 'visible' : ''}`}>
       <div className="year-col">{year}</div>
       <div className="content-col">
         <h3>{title}</h3>
         <p>{desc}</p>
       </div>
     </div>
  );
};

const History = () => {
  return (
    <div className="history-page">
      <SubMenu />
      {/* Spacer removed for full background coverage */}
      <section className="hist-hero">
         <div className="hist-hero-content">
           <h1>HISTORY</h1>
           <p>OUR JOURNEY</p>
         </div>
      </section>

      <section className="hist-section philosophy">
        <div className="content-wrapper">
          <div className="philosophy-intro">
            <h2>PHILOSOPHY</h2>
            <p className="phil-main-text">
              We believe in the power of<br />
              <span className="text-white">Authenticity</span> and <span className="text-white">Passion</span>.
            </p>
          </div>
          
          <div className="philosophy-list">
             <div className="phil-card">
               <h3>01 TRUTH</h3>
               <p>We value honesty and integrity above all else. True talent shines brightest when it is authentic.</p>
             </div>
             <div className="phil-card">
               <h3>02 SINCERITY</h3>
               <p>We approach everything with sincerity. Our passion for music drives us to do our best every day.</p>
             </div>
             <div className="phil-card">
               <h3>03 HUMILITY</h3>
               <p>We remain humble and always strive to learn and grow, respecting our artists and fans.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Global Network Section - Moved from Organization & Redesigned */}
      <section className="hist-section network-section">
        <div className="content-wrapper">
           <h2>GLOBAL INFRASTRUCTURE</h2>
           
           <div className="network-block fade-up">
             <div className="network-image" style={{ backgroundImage: 'linear-gradient(45deg, #111, #333)' }}>
               {/* Clean image area without text overlay */}
             </div>
             <div className="network-info">
               <h3>일본 <span className="highlight-blue">MOREDAY</span></h3>
               <p className="net-main-desc">7년간의 신뢰로 구축된 강력한 현지 파트너십</p>
               <div className="net-details">
                 <p>오리콘 차트 4위 & Zepp 투어 성공 경험을 보유한 현지 프로모터와 협력하여, 안정적인 매출 구조(월 5억원+)를 창출합니다.</p>
               </div>
             </div>
           </div>

           <div className="network-block reverse fade-up">
             <div className="network-image" style={{ backgroundImage: 'linear-gradient(45deg, #222, #444)' }}>
               {/* Clean image area without text overlay */}
             </div>
             <div className="network-info">
               <h3>중화권 <span className="highlight-blue">Giant Networks</span></h3>
               <p className="net-main-desc">리스크를 제거한 현지화 진출 전략</p>
               <div className="net-details">
                 <p>대형 기획사 콘서트 전문가 그룹과의 네트워크를 통해, 주요 아티스트들의 중화권 진출을 성공적으로 수행합니다.</p>
               </div>
             </div>
           </div>

           <div className="network-block fade-up">
             <div className="network-image" style={{ backgroundImage: 'linear-gradient(45deg, #333, #555)' }}>
                {/* Clean image area without text overlay */}
             </div>
             <div className="network-info">
               <h3>베트남 <span className="highlight-blue">K-POP Academy</span></h3>
               <p className="net-main-desc">동남아 시장 진출의 교두보</p>
               <div className="net-details">
                 <p>현지 트레이닝 인프라 확보 및 로컬 파트너십을 통해, 차세대 K-POP 소비 시장인 동남아에서의 영향력을 확대합니다.</p>
               </div>
             </div>
           </div>
        </div>
      </section>

      <section className="hist-section timeline-section">
        <div className="content-wrapper">
           <h2>TIMELINE</h2>
           <div className="timeline-container">
             <HistoryItem 
               year="2024"
               title="Global Expansion"
               desc="Launched Global Audition Tour across 5 countries and debuted new chart-topping artists."
             />
             <HistoryItem 
               year="2023"
               title="Foundation"
               desc="Established Decide Entertainment and relocated headquarters to the heart of Seoul."
             />
             {/* Added some dummy history for visual fullness */}
             <HistoryItem 
               year="2022"
               title="The Beginning"
               desc="Formed core leadership team with visionaries from top entertainment agencies."
             />
           </div>
        </div>
      </section>

      {/* Future Roadmap Section */}
      <section className="hist-section future-roadmap">
        <div className="content-wrapper">
          <div className="section-header-large">
             <h2 className="title-huge">FUTURE ROADMAP</h2>
             <p className="subtitle-large">2025 - 2027 PLANS</p>
          </div>

          <div className="timeline-container future">
            <div className="timeline-item fade-up">
              <span className="year future-accent">2025.12</span>
              <div className="event-content">
                <h4>리얼리티 프로그램 제작 시작</h4>
                <p>본격적인 데뷔 프로젝트 가동</p>
              </div>
            </div>
            
            <div className="timeline-item fade-up">
              <span className="year future-accent">2026.03</span>
              <div className="event-content">
                <h4>프리스쿨 첫 방송</h4>
                <p>CJ ENM 공동 제작 / Mnet 방영</p>
              </div>
            </div>

            <div className="timeline-item fade-up">
              <span className="year future-accent">2026.04</span>
              <div className="event-content">
                <h4>최종 8인 데뷔 및 앨범 발매</h4>
                <p>Phase 1: 입학 (새로운 시작과 설렘)</p>
              </div>
            </div>

            <div className="timeline-item fade-up">
              <span className="year future-accent">2026.09</span>
              <div className="event-content">
                <h4>두 번째 앨범 발매 및 컴백 쇼</h4>
                <p>Phase 2: 방학 (자유와 도전)</p>
              </div>
            </div>
            
            <div className="timeline-item fade-up">
              <span className="year future-accent">2026.11</span>
              <div className="event-content">
                <h4>아시아 쇼케이스 투어</h4>
                <p>글로벌 팬덤 확장의 시작</p>
              </div>
            </div>

            <div className="timeline-item fade-up">
              <span className="year future-accent">2027.02</span>
              <div className="event-content">
                <h4>세 번째 앨범 발매 및 컴백 쇼</h4>
                <p>Phase 3: 졸업 (성장의 완성)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;
