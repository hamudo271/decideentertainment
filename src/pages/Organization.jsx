import React from 'react';
import './Organization.css';
import useScrollReveal from '../hooks/useScrollReveal';
import SubMenu from '../components/SubMenu';


// Reusable Profile Item Component (Internal for now)
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

const Organization = () => {
  const { ref: ceoRef, isVisible: ceoVisible } = useScrollReveal(0.1);
  const { ref: strat1Ref, isVisible: strat1Visible } = useScrollReveal(0.1);
  const { ref: strat2Ref, isVisible: strat2Visible } = useScrollReveal(0.1);
  const { ref: ipRef, isVisible: ipVisible } = useScrollReveal(0.1);
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal(0.1);
  const { ref: execRef, isVisible: execVisible } = useScrollReveal(0.1);

  return (
    <div className="organization-page">
      <SubMenu />
      <SubMenu />
      {/* Spacer removed for full background coverage */}
      
      <section className="org-hero">
        <div className="org-hero-content">
          <h1>ORGANIZATION</h1>
          <p>SYSTEM & LEADERSHIP</p>
        </div>
      </section>

      {/* CEO Message Section - Refactored to match Leadership Style */}
      <section className="org-section ceo-section">
        <div className="content-wrapper">
          <ProfileItem 
            imageGradient="linear-gradient(45deg, #000, #222)" /* Darker, sleek standout */
            name="한재운"
            role="CEO"
            title="성공의 설계자"
            englishTitle="The Architect of Success"
            desc="아이돌 경험, 자산운용 전문성, 그리고 독점적 글로벌 네트워크를 연결하는 성공의 설계자입니다."
            details={[
              { 
                title: "검증된 사업 성공 경험", 
                desc: "아르곤 활동 & 일본 진출 성공 사례",
                subtext: "자체 투자 앨범 제작으로 효율적 프로덕션 관리 / 일본 파트너사 MOREDAY와 협력하여 월 매출 5억원+ 달성 및 안정적 구조 구축"
              },
              { 
                title: "비전: 리스크 없는 엔터테인먼트", 
                desc: "감과 운에 의존하는 기존 방식을 탈피하고, 데이터와 시스템으로 예측 가능한 성공을 만듭니다."
              }
            ]}
          />
        </div>
      </section>

      {/* Business Section (Migrated) */}
      <section className="org-section business">
        <div className="content-wrapper">
          <h2>BUSINESS STRUCTURE</h2>
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

      {/* Leadership Section - Migrated & Updated */}
      <section className="org-section leadership">
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

          <ProfileItem 
            imageGradient="linear-gradient(45deg, #111, #444)"
            name="전영기"
            role="GLOBAL BUSINESS"
            title="글로벌 네비게이터"
            englishTitle="The Global Navigator"
            desc="6개 국어 구사 능력과 글로벌 무대 경험(보이즈플래닛, KCON MC)을 바탕으로 아티스트의 글로벌 진출을 이끄는 크리에이터입니다."
            isReverse
            details={[
               { title: "글로벌 소통 전문가", desc: "와세다대 출신, 6개 국어 구사 능력으로 언어 장벽 없이 현지 비즈니스 및 팬 소통 가능" },
               { title: "핵심 역량", desc: "언어 장벽 없는 글로벌 팬 소통 능력과 직접적인 무대 경험을 바탕으로, 아티스트의 글로벌 진출 전략 수립부터 현지화된 콘텐츠 제작까지 원스톱 지원" },
               { title: "Quote", desc: "\"팬의 시선으로 바라보고, 아티스트의 마음으로 소통합니다.\"" }
            ]}
          />

        </div>
      </section>

      {/* Strategic Partnerships (The Unfair Advantage) */}
      <section className="org-section strategy-section">
        <div className="content-wrapper">
          <div className="section-header-large">
             <h2 className="title-huge">THE UNFAIR ADVANTAGE</h2>
             <p className="subtitle-large">독점적 성공 인프라</p>
          </div>

          <div ref={strat1Ref} className={`strategy-block fade-up ${strat1Visible ? 'visible' : ''}`}>
            <div className="strategy-content">
               <h3 className="strategy-title text-blue">The Unprecedented Choice</h3>
               <h4 className="strategy-sub">CJ ENM은 왜 '신생 기획사' DECIDE를 선택했는가?</h4>
               <p className="strategy-desc">
                 통상적으로 대형 기획사와 협력해 온 CJ ENM이, 창사 이래 <span className="text-blue">최초</span>로 신생 기획사인 '디사이드'와 단독 데뷔 프로그램을 공동 제작하는 전례 없는 결정을 내렸습니다. 
                 이는 우리의 '성공 방정식'이 업계 최고의 전문가들에게도 인정받았다는 가장 확실한 증거입니다.
               </p>
               <div className="strategy-points">
                 <div className="point-item">
                   <h5>리스크 최소화 (Risk Minimized)</h5>
                   <p>업계 1위 파트너가 우리의 성공 가능성을 1차적으로 검증했습니다.</p>
                 </div>
                 <div className="point-item">
                   <h5>독점적 인프라 확보 (Exclusive Infra)</h5>
                   <p>KCON, MAMA 등 CJ ENM의 강력한 글로벌 인프라를 신생 기획사가 독점적으로 활용할 수 있는 권리를 확보했습니다.</p>
                 </div>
               </div>
            </div>
          </div>

          <div ref={strat2Ref} className={`strategy-block fade-up ${strat2Visible ? 'visible' : ''}`}>
            <div className="strategy-content">
               <h3 className="strategy-title text-red">The Hit-Maker's Choice</h3>
               <h4 className="strategy-sub">왜 '제우스웍스'는 DECIDE와 함께하는가?</h4>
               <p className="strategy-desc">
                 '보이즈플래닛', 'I-LAND' 등 대한민국 서바이벌의 역사를 만든 '미다스의 손' 제우스웍스는, 통상적인 관례를 깨고 신생 기획사 '디사이드'를 제작 파트너로 선택했습니다.
               </p>
               <div className="strategy-points">
                 <div className="point-item">
                   <h5>제작 리스크 제로 (Zero Production Risk)</h5>
                   <p>투자자는 대한민국에서 가장 성공 확률이 높은 제작팀에 투자하는 것과 같습니다.</p>
                 </div>
                 <div className="point-item">
                   <h5>성공에 대한 시장의 강력한 시그널</h5>
                   <p>업계 최고 제작사의 '전례 없는 선택'은, 이 프로젝트가 K-POP 시장의 판도를 바꿀 것이라는 강력한 신호입니다.</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key IP: Pre-School */}
      <section className="org-section ip-section">
        <div className="content-wrapper">
          <div className="section-header-large">
             <h2 className="title-huge">THE HIT-MAKING PROJECT</h2>
             <p className="subtitle-large">프로젝트 '프리스쿨': 지속 가능한 IP의 탄생</p>
          </div>
          
          <div ref={ipRef} className={`ip-content fade-up ${ipVisible ? 'visible' : ''}`}>
            <h3 className="ip-slogan">단순한 서바이벌을 넘어, 데뷔 전 팬덤과 수익을 확보하는 치밀한 설계</h3>
            
            <div className="ip-features">
               <div className="ip-feature-block">
                 <h4>IP Lock-in: 3부작 성장 스토리</h4>
                 <ul>
                   <li><strong>Phase 1: 입학</strong> - 리얼리티 6부작 + 데뷔쇼 (팬덤 구축)</li>
                   <li><strong>Phase 2: 방학</strong> - 리얼리티 2부작 + 컴백쇼 (팬덤 확장)</li>
                   <li><strong>Phase 3: 졸업</strong> - 리얼리티 2부작 + 컴백쇼 (세계관 완성)</li>
                 </ul>
               </div>

               <div className="ip-feature-block">
                 <h4>Why Different? "데뷔 = 입학"</h4>
                 <p>"나는 왜 아이돌이 되어야 하는가?"라는 질문에 답을 찾아가는 진정성 있는 서사.</p>
                 <ul className="simple-list">
                   <li>1. 레벨 테스트 (인간적 매력)</li>
                   <li>2. 팀워크 테스트 (갈등과 극복)</li>
                   <li>3. 신곡/컨셉 테스트 (잠재력 증명)</li>
                   <li>4. 최종 데뷔 테스트 (완성도 검증)</li>
                 </ul>
               </div>
            </div>

            <div className="ip-feature-row">
              <h4>IP 확장을 통한 지속 가능한 수익 창출</h4>
              <div className="model-badges-expanded">
                <div className="badge-item">
                   <span className="badge-title">WEB3 & NFT</span>
                   <span className="badge-desc">팬 소유 경험과 디지털 자산 활용</span>
                </div>
                <div className="badge-item">
                   <span className="badge-title">웹툰 & 웹소설</span>
                   <span className="badge-desc">3부작 스토리의 세계관 확장</span>
                </div>
                <div className="badge-item">
                   <span className="badge-title">게임 & 인터랙티브</span>
                   <span className="badge-desc">팬 참여형 몰입 경험 제공</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Formula (Proven Stats) - Re-added due to missing */}
      <section className="org-section success-stats-section">
        <div className="content-wrapper">
          <div className="section-header-large">
             <h2 className="title-huge">THE PROVEN FORMULA</h2>
             <p className="subtitle-large">성공 보증수표: CJ ENM의 승리 방정식</p>
          </div>

          <div ref={statsRef} className={`stats-grid fade-up ${statsVisible ? 'visible' : ''}`}>
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

      {/* Executive Summary (Investment) - Re-added due to missing */}
      <section className="org-section executive-summary">
        <div className="content-wrapper">
          <div className="section-header-large center-align">
             <h2 className="title-huge text-gradient-gold">EXECUTIVE SUMMARY</h2>
             <p className="subtitle-large">투자 요약 및 예상 수익</p>
          </div>

          <div ref={execRef} className={`investment-dashboard fade-up ${execVisible ? 'visible' : ''}`}>
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
    </div>
  );
};

export default Organization;
