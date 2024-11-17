import React from 'react';
import howItWorks from '../IMAGES/HowItWorks.svg';

const HowItWorksSection = ({ isAltBg }) => (
  <section className="{isAltBg ? 'alt-bg-section' : 'default-bg-section'} how-it-works-section">
    <h2>How Does It Work?</h2>
    <div className="how-it-works-container">
      <div className="how-it-works-img-container">
        <img className="how-it-works-img" src={howItWorks} alt="How It Works" />
      </div>
      <div className="how-it-works-text">
        <h3>Latest transaction history</h3>
        <h6>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum.</h6>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
