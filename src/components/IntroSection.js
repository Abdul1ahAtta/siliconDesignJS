import React from 'react';
import appstore from '../IMAGES/appstore.svg';
import googleplay from '../IMAGES/googleplay.svg';
import nextBtn from '../IMAGES/next-btn.svg';
import appScreenshot from '../IMAGES/app.svg';

const IntroSection = ({ isAltBg }) => (
  <div className="{isAltBg ? 'alt-bg-section' : 'default-bg-section'} intro-section">
    <div className="intro-text-container">
      <h1>Manage All Your Money in One App</h1>
      <p>
        We offer you a new generation of mobile banking.<br />Save, spend & manage money in your pocket.
      </p>
      <div className="store-links-container">
        <div className="app-store-link">
          <img src={appstore} alt="App Store" />
        </div>
        <div className="google-play-link">
          <img src={googleplay} alt="Google Play" />
        </div>
      </div>
      <div className="more-info-button">
        <img src={nextBtn} alt="Next Button" />
        <span className="discover-more-text">Discover More</span>
      </div>
    </div>
    <div className="app-image-container">
      <img src={appScreenshot} alt="App Screenshot" />
    </div>
  </div>
);

export default IntroSection;
