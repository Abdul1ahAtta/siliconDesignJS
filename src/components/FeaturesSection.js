import React from 'react';
import multiLogo from '../IMAGES/MultiLogo.svg';
import appFeatureLeft from '../IMAGES/AppFeatureLeft.svg';
import easyPayment from '../IMAGES/easyPayment.svg';
import dataSecurity from '../IMAGES/DataSecurity.svg';
import cost from '../IMAGES/Cost.svg';
import support24 from '../IMAGES/Support24.svg';
import cashback from '../IMAGES/Cashback.svg';
import topStandards from '../IMAGES/TopStandards.svg';

const FeaturesSection = () => (
  <section className="features-section">
    <div className="logo-container">
      <img src={multiLogo} alt="Multiple Logo" />
    </div>
    <div>
      <img className="app-features-image" src={appFeatureLeft} alt="App Features" />
    </div>
    <div className="features-title-section">
      <h2>App Features</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    </div>
    <div className="features-items-container">
      <FeatureItem icon={easyPayment} title="Easy Payments" description="Id mollis consectetur congue..." />
      <FeatureItem icon={dataSecurity} title="Data Security" description="Augue pulvinar justo, fermentum..." />
      <FeatureItem icon={cost} title="Cost Statistics" description="Mattis urna ultricies non amet..." />
      <FeatureItem icon={support24} title="Support 24/7" description="A elementum, imperdiet enim..." />
      <FeatureItem icon={cashback} title="Regular Cashback" description="Sit facilisis dolor arcu..." />
      <FeatureItem icon={topStandards} title="Top Standards" description="Faucibus cursus maecenas lorem..." />
    </div>
  </section>
);

const FeatureItem = ({ icon, title, description }) => (
  <div className="single-feature-item">
    <img className="feature-icon" src={icon} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default FeaturesSection;
