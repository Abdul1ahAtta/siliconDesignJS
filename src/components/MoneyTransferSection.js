import React from 'react';
import rightSectionMoney from '../IMAGES/rightsectionMoney.svg';
import leftReceivePayment from '../IMAGES/LeftRecievePayment.svg';
import left1 from '../IMAGES/Left1.svg';
import left2 from '../IMAGES/Left 2.svg';

const MoneyTransferSection = ({ isAltBg }) => (
  <section className="{isAltBg ? 'alt-bg-section' : 'default-bg-section'} money-transfer-section">
    <div className="content-container">
      <div className="transfer-info-section">
        <h2>Make your money transfer simple and clear</h2>
        <ul>
          <li>Banking transactions are free for you</li>
          <li>No monthly cash commission</li>
          <li>Manage payments and transactions online</li>
        </ul>
        <a href="#" className="learn-more-btn">Learn more</a>
      </div>
      <div className="transfer-stats-img">
        <img src={rightSectionMoney} alt="Savings Statistics" />
      </div>
    </div>

    <div className="content-container second-row">
      <div className="visa-card-img">
        <img src={leftReceivePayment} alt="Visa Card and Contacts" />
      </div>
      <div className="receive-payment-info">
        <h2>Receive payment from international bank details</h2>
        <div className="payment-features-container">
          <div className="single-payment-feature">
            <img src={left1} alt="Payment Icon" />
            <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
          </div>
          <div className="single-payment-feature">
            <img src={left2} alt="Support Icon" />
            <p>A elementum ad imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
          </div>
        </div>
        <a href="#" className="learn-more-btn">Learn more</a>
      </div>
    </div>
  </section>
);

export default MoneyTransferSection;
