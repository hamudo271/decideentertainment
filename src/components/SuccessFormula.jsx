import React from 'react';
import './SuccessFormula.css';
import useScrollReveal from '../hooks/useScrollReveal';

const FormulaItem = ({ number, icon, title, description, details, delay }) => {
  const { ref, isVisible } = useScrollReveal(0.2);
  
  return (
    <div ref={ref} className={`formula-item fade-up ${isVisible ? 'visible' : ''} ${delay}`}>
      <div className="item-header">
        <span className="item-number">{number}</span>
        <div className="header-content">
          <h4>{title}</h4>
          <p className="sub-text">{description}</p>
        </div>
      </div>
      
      <div className="item-details">
        <h5>{details.title}</h5>
        <ul>
          {details.items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const SuccessFormula = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.1);

  return (
    <section className="success-section">
      <div ref={headerRef} className={`section-header fade-up ${headerVisible ? 'visible' : ''}`}>
        <h2 className="section-title">
          <span className="subtitle">INVESTMENT HIGHLIGHTS</span>
        </h2>
        
        <div className="main-statement">
          <h3>
            The DECIDE Success Formula
          </h3>
          <p className="description">
            We eliminate 'uncertainty' risks with 3 core engines combining data and proven experience.
          </p>
        </div>
      </div>

      <div className="formula-list">
        <FormulaItem 
          number="01"
          title="Dream Team"
          description="A group of top experts with proven success in every field."
          details={{
            title: "Success Factors",
            items: ["Top K-POP Hitmakers", "Proven Revenue Performance", "Synergistic Leadership"]
          }}
          delay=""
        />

        <div className="separator"></div>

        <FormulaItem 
          number="02"
          title="De-risked Project"
          description="A structure securing fandom and revenue before debut."
          details={{
            title: "Strategic Model",
            items: ["Pre-debut Monetization", "Fandom-First Strategy", "Systematic IP Management"]
          }}
          delay="delay-100"
        />

        <div className="separator"></div>

        <FormulaItem 
          number="03"
          title="Exclusive Network"
          description="High-speed growth utilizing proven partner infrastructure."
          details={{
            title: "Global Reach",
            items: ["Exclusive Asian Networks", "Strong Media Partnerships", "7 Years of Mutual Trust"]
          }}
          delay="delay-200"
        />
      </div>
    </section>
  );
};

export default SuccessFormula;
