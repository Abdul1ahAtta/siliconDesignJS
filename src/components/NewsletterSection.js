import React from 'react';
import notificationIcon from '../IMAGES/Noti.svg';

const NewsletterSection = ({ isAltBg }) => (
  <section className="{isAltBg ? 'alt-bg-section' : 'default-bg-section'} newsletter-section">
    <div className="content-container">
      <div className="newsletter-content-container">
        <img src={notificationIcon} alt="Bell Icon" />
        <p>Subscribe to our newsletter to stay informed about latest updates</p>
        <form>
          <input type="email" placeholder="Your Email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  </section>
);

export default NewsletterSection;
