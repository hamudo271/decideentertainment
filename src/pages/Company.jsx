import React from 'react';
import './Company.css';

import useScrollReveal from '../hooks/useScrollReveal';

const ProfileItem = ({ imageGradient, name, role, title, englishTitle, desc, details, isReverse }) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div ref={ref} className={`expert-profile ${isReverse ? 'reverse' : ''} fade-up ${isVisible ? 'visible' : ''}`}>
      <div className="profile-image">
        <div className="placeholder-img" style={{ backgroundImage: imageGradient }}></div>
      </div>
      <div className="profile-info">
        <div className="profile-header">
          <h3>{role}, {name} <span className="role-badge">{title}</span></h3>
          <h4>{englishTitle}</h4>
          <p className="profile-desc">{desc}</p>
        </div>
        <div className="profile-details">
          {details.map((detail, idx) => (
            <div key={idx} className="detail-block">
              <h5>{detail.title}</h5>
              <p>{detail.desc}</p>
              {detail.subtext && <p className="partners-text">{detail.subtext}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Company = () => {
    // ... (Hero and other sections omitted for brevity in thought, but I must preserve them in implementation)
    // Wait, replacing the whole file is risky if I don't see lines 1-max. 
    // I should only replace the Leadership section or the whole component if I have full context.
    // I will replace the component content.
  return (
    <div className="company-page">
      <section className="company-hero">
        <div className="company-hero-content">
          <h1>COMPANY</h1>
          <p>LEADER IN ENTERTAINMENT</p>
        </div>
      </section>

      <section className="company-section philosophy">
        <div className="content-wrapper">
          <h2>PHILOSOPHY</h2>
          <div className="philosophy-grid">
            <div className="philosophy-item">
              <h3>TRUTH</h3>
              <p>We value honesty and integrity above all else. We believe that true talent shines brightest when it is authentic.</p>
            </div>
            <div className="philosophy-item">
              <h3>SINCERITY</h3>
              <p>We approach everything with sincerity. Our passion for music and entertainment drives us to do our best every day.</p>
            </div>
            <div className="philosophy-item">
              <h3>HUMILITY</h3>
              <p>We remain humble and always strive to learn and grow. We respect our artists, fans, and partners.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="company-section history">
        <div className="content-wrapper">
          <h2>HISTORY</h2>
          <div className="history-timeline">
            <div className="history-item">
              <span className="year">2024</span>
              <div className="events">
                <p>Global Audition Tour</p>
                <p>New Artist Debut</p>
              </div>
            </div>
            <div className="history-item">
              <span className="year">2023</span>
              <div className="events">
                <p>Established Decide Entertainment</p>
                <p>Headquarters Relocation to Seoul</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="company-section business">
        <div className="content-wrapper">
          <h2>BUSINESS</h2>
          <div className="business-grid">
            <div className="business-card">
              <h3>Artist Management</h3>
              <p>Comprehensive management system for artist growth and success.</p>
            </div>
            <div className="business-card">
              <h3>Music Production</h3>
              <p>World-class production team creating global hits.</p>
            </div>
            <div className="business-card">
              <h3>New Media</h3>
              <p>Innovative content creation for the digital age.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="company-section leadership">
        <div className="content-wrapper">
          <h2>LEADERSHIP & EXPERTS</h2>
          
          <ProfileItem 
            imageGradient="linear-gradient(45deg, #111, #333)"
            name="전수정"
            role="Producer"
            title="스타 메이커"
            englishTitle="The Star Maker"
            desc="최신 K-POP 시장의 흥행 공식을 증명한, 검증된 스타 제조기입니다."
            details={[
              { title: "★ 최신 성공 사례", desc: "가장 성공적인 신인들의 기획 및 데뷔에 직접 기여", subtext: "TWS, STAYC, ZB1, Kep1er, MEOVV, fromis_9" },
              { title: "검증된 시스템", desc: "SONY MUSIC, CJ ENM('프로듀스' 시리즈 캐스팅) 등 메이저 시스템에서 검증된 매니지먼트 역량 보유." },
              { title: "차트 1위 프로듀싱", desc: "임재현 '조금 취했어' 연간 차트 1위 기록 / 프로젝트 디렉팅" }
            ]}
          />

          <ProfileItem 
            imageGradient="linear-gradient(45deg, #222, #444)"
            name="장한수"
            role="A&R, PRODUCTION"
            title="기술 명장"
            englishTitle="The Technical Master"
            desc="스튜디오 녹음부터 월드 투어까지, JYP가 인정한 최상위 K-POP 사운드를 책임지는 기술 명장입니다."
            isReverse
            details={[
               { title: "👑 핵심 역량", desc: "월드 투어 사운드 디렉팅 / 레코딩 엔지니어링 / 음악 프로듀싱 / 공연 프로덕션 / 아티스트 A&R" },
               { title: "글로벌 투어 전문가", desc: "Stray Kids의 7년간 월드 투어(5-STAR 돔 투어, 롤라팔루자 등)를 함께한 핵심 기술 인력" },
               { title: "JYP 인정 레코딩 전문가", desc: "JYP Ent. A&R 본부 레코딩 엔지니어 출신으로 최정상 아티스트의 음악 및 공연 프로덕션 담당" }
            ]}
          />

          <ProfileItem 
            imageGradient="linear-gradient(45deg, #333, #555)"
            name="이후영"
            role="VISUAL DIRECTOR"
            title="트렌드 세터"
            englishTitle="The Trend Setter"
            desc="시장을 선도하는 아이덴티티를 완성하는 감각적인 비주얼 디렉터입니다."
            details={[
               { title: "★ 성공한 신인 비주얼 완성", desc: "", subtext: "ILLIT, Izna, MEOVV - 신선한 스타일링과 독창적인 이미지로 인상적인 데뷔" },
               { title: "톱클래스 아티스트 담당", desc: "", subtext: "전소미, 고수, 전미도 - 대중을 사로잡는 트렌디한 스타일링과 세련된 이미지 구축" }
            ]}
          />

        </div>
      </section>
    </div>
  );
};

export default Company;
