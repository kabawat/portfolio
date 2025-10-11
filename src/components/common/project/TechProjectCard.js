import React, { useEffect, useState } from 'react'

const TechProjectCard = ({
  title,
  description,
  bullets = [],
  tags = [],
}) => {

  return (
    <div className="tech-card" data-aos="fade-up" data-aos-delay="0">
      <div className="tech-card__header">
        <div className="dots"><span className="red" /><span className="yellow" /><span className="green" /></div>
        <div className="title">PROJECT_INFO.sh</div>
      </div>
      <div className="tech-card__body">
        <div className="copy">
          <div className="code-panel">
            <div className="code-line"><span className="prompt">$</span> project init --name &quot;{title}&quot;</div>
            <div className="code-line"><span className="prompt">$</span> echo &quot;{description}&quot;</div>
            {tags?.length > 0 ? (
              <div className="code-line tags">
                <span className="prompt">$</span> tags: {tags.map((t, i) => (
                  <span key={i} className="tag">{t}</span>
                ))}
              </div>
            ) : null}
            {bullets?.length > 0 ? (
              <div className="code-block">
                {bullets.map((item, i) => (
                  <div key={i} className="code-line">
                    <span className="prompt">#</span> {item}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <style jsx>{`
        .tech-card {
          position: relative;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
          border: 2px solid transparent;
          border-radius: 20px;
          padding: 0;
          overflow: hidden;
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.6),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        
        .tech-card:hover {
          transform: translateY(-5px);
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.7),
            0 0 30px rgba(0, 255, 255, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
        
        .tech-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, 
            rgba(0, 255, 255, 0.1) 0%, 
            transparent 25%, 
            transparent 75%, 
            rgba(255, 0, 255, 0.1) 100%);
          border-radius: 20px;
          padding: 2px;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: xor;
          pointer-events: none;
        }
        
        .tech-card__header {
          background: linear-gradient(90deg, 
            rgba(0, 255, 255, 0.1) 0%, 
            rgba(0, 100, 200, 0.2) 50%, 
            rgba(255, 0, 255, 0.1) 100%);
          padding: 15px 20px;
          border-bottom: 1px solid rgba(0, 255, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }
        
        .tech-card__header::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(0, 255, 255, 0.8) 50%, 
            transparent 100%);
        }
        
        .dots { 
          display: flex; 
          gap: 8px; 
        }
        
        .dots span { 
          width: 12px; 
          height: 12px; 
          border-radius: 50%; 
          display: inline-block;
          box-shadow: 0 0 10px currentColor;
        }
        
        .red { 
          background: #ff4757; 
          animation: pulse-red 2s ease-in-out infinite;
        }
        
        .yellow { 
          background: #ffa502; 
          animation: pulse-yellow 2s ease-in-out infinite 0.5s;
        }
        
        .green { 
          background: #2ed573; 
          animation: pulse-green 2s ease-in-out infinite 1s;
        }
        
        .title { 
          color: #00ffff; 
          font-size: 14px; 
          font-family: 'Courier New', monospace;
          font-weight: bold;
          text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
        }

        .tech-card__body { 
          padding: 25px; 
          background: linear-gradient(135deg, 
            rgba(0, 0, 0, 0.8) 0%, 
            rgba(20, 20, 40, 0.6) 100%);
        }
        
        .code-panel { 
          font-family: 'Courier New', monospace; 
          background: linear-gradient(135deg, 
            rgba(0, 0, 0, 0.9) 0%, 
            rgba(10, 10, 30, 0.8) 100%); 
          border: 1px solid rgba(0, 255, 255, 0.3); 
          border-radius: 15px; 
          padding: 20px; 
          position: relative; 
          overflow: hidden;
          box-shadow: 
            inset 0 0 20px rgba(0, 255, 255, 0.1),
            0 0 20px rgba(0, 0, 0, 0.5);
        }
        
        .code-panel::before { 
          content: ''; 
          position: absolute; 
          inset: 0; 
          background-image: 
            linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px); 
          background-size: 25px 25px; 
          pointer-events: none; 
        }
        
        .code-panel::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(0, 255, 255, 0.8) 50%, 
            transparent 100%);
          animation: scanline 3s linear infinite;
        }
        
        .code-line { 
          color: #e0e0e0; 
          font-size: 14px; 
          margin: 8px 0; 
          display: flex; 
          align-items: baseline; 
          gap: 10px;
          position: relative;
        }
        
        .prompt { 
          color: #00ff00; 
          font-weight: bold;
          text-shadow: 0 0 5px rgba(0, 255, 0, 0.5);
        }
        
        .tags { 
          display: flex; 
          flex-wrap: wrap; 
          gap: 10px; 
          align-items: center; 
        }
        
        .tag { 
          background: linear-gradient(135deg, 
            rgba(0, 255, 255, 0.1) 0%, 
            rgba(255, 0, 255, 0.1) 100%); 
          color: #00ffff; 
          border: 1px solid rgba(0, 255, 255, 0.4); 
          border-radius: 20px; 
          padding: 4px 12px; 
          font-size: 12px;
          font-weight: bold;
          text-shadow: 0 0 5px rgba(0, 255, 255, 0.3);
          transition: all 0.3s ease;
        }
        
        .tag:hover {
          background: linear-gradient(135deg, 
            rgba(0, 255, 255, 0.2) 0%, 
            rgba(255, 0, 255, 0.2) 100%);
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.4);
        }
        
        .code-block { 
          margin-top: 15px; 
          padding-left: 20px;
          border-left: 2px solid rgba(0, 255, 255, 0.3);
        }
        
        @keyframes pulse-red {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        
        @keyframes pulse-yellow {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        
        @keyframes pulse-green {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        
        @keyframes scanline {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  )
}

export default TechProjectCard


