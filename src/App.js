import React from 'react';
import logo from './IMAGES/Silogo.svg';
import appstore from './IMAGES/appstore.svg';
import googleplay from './IMAGES/googleplay.svg';
import nextBtn from './IMAGES/next-btn.svg';
import appScreenshot from './IMAGES/app.svg';
import multiLogo from './IMAGES/MultiLogo.svg';
import appFeatureLeft from './IMAGES/AppFeatureLeft.svg';
import easyPayment from './IMAGES/easyPayment.svg';
import dataSecurity from './IMAGES/DataSecurity.svg';
import cost from './IMAGES/Cost.svg';
import support24 from './IMAGES/Support24.svg';
import cashback from './IMAGES/Cashback.svg';
import topStandards from './IMAGES/TopStandards.svg';
import howItWorks from './IMAGES/HowItWorks.svg';
import rightSectionMoney from './IMAGES/rightsectionMoney.svg';
import leftReceivePayment from './IMAGES/LeftRecievePayment.svg';
import left1 from './IMAGES/Left1.svg';
import left2 from './IMAGES/Left 2.svg';
import quoteIcon from './IMAGES/q2.svg';
import fannie from './IMAGES/Fannie.svg';
import albert from './IMAGES/Albert.svg';
import phoneIcon from './IMAGES/Phone.svg';
import chatIcon from './IMAGES/Chat.svg';
import notificationIcon from './IMAGES/Noti.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <body>
      <header className="App-header">
        <nav className="header-nav">
          <div className="brand-logo-container">
            <img src={logo} alt="Silicon Logo" className="brand-logo" />
            <span className="company-title">Silicon</span>
          </div>
          <ul className="nav-menu-list">
            <li><a className="nav-link-item" href="#">Features</a></li>
          </ul>
          <div className="nav-right-section">
            <div className="theme-toggle-container">
              <label className="theme-switch">
                <input type="checkbox" id="darkModeToggle" />
                <span className="switch-slider"></span>
              </label>
              <span className="dark-mode-text">Dark Mode</span>
            </div>
            <button className="auth-button">Sign in / up</button>
          </div>
        </nav>

        <div className="intro-section">
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
      </header>

      <section className="features-section">
        <div className="logo-container">
          <img src={multiLogo} alt="Multiple Logo" />
        </div>
        <div>
          <img className="app-features-image" src={appFeatureLeft} alt="App Features" />
        </div>
        <div className="features-title-section">
          <h2>App Features</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
        </div>
        <div className="features-items-container">
          <div className="single-feature-item">
            <img className="feature-icon" src={easyPayment} alt="Feature Icon" />
            <h3>Easy Payments</h3>
            <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
          </div>
          <div className="single-feature-item">
            <img className="feature-icon" src={dataSecurity} alt="Feature Icon" />
            <h3>Data Security</h3>
            <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
          </div>
          <div className="single-feature-item">
            <img className="feature-icon" src={cost} alt="Feature Icon" />
            <h3>Cost Statistics</h3>
            <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
          </div>
          <div className="single-feature-item">
            <img className="feature-icon" src={support24} alt="Feature Icon" />
            <h3>Support 24/7</h3>
            <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
          </div>
          <div className="single-feature-item">
            <img className="feature-icon" src={cashback} alt="Feature Icon" />
            <h3>Regular Cashback</h3>
            <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
          </div>
          <div className="single-feature-item">
            <img className="feature-icon" src={topStandards} alt="Feature Icon" />
            <h3>Top Standards</h3>
            <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
          </div>
        </div>
      </section>

      <section className="how-it-works-section">
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

      <section className="money-transfer-section">
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

      <section className="client-feedback-section">
        <div className="content-container">
          <h2>Clients are Loving Our App</h2>
          <div className="testimonials-container">
            <div className="testimonial-box">
              <div className="quote-icon-container">
                <img src={quoteIcon} alt="Quote Icon" className="quote-icon" />
              </div>
              <div className="rating-container">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>
              </div>
              <p>Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel.</p>
              <div className="testimonial-footer">
                <img src={fannie} alt="Fannie Summers" className="avatar-img" />
                <div className="client-details">
                  <span className="client-name">Fannie Summers</span><br />
                  <span className="client-role">Designer</span>
                </div>
              </div>
            </div>

            <div className="testimonial-box">
              <div className="quote-icon-container">
                <img src={quoteIcon} alt="Quote Icon" className="quote-icon" />
              </div>
              <div className="rating-container">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p>Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor.</p>
              <div className="testimonial-footer">
                <img src={albert} alt="Albert Flores" className="avatar-img" />
                <div className="client-details">
                  <span className="client-name">Albert Flores</span><br />
                  <span className="client-role">Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="content-container">
          <div className="faq-header-container">
            <h2>Any questions?<br />Check out the FAQs</h2>
            <p>Still have unanswered questions and need to get in touch?</p>
            <div className="faq-contact-options-container">
              <div className="faq-contact-box">
                <img src={phoneIcon} alt="Phone Icon" />
                <p>Still have questions?</p>
                <a href="#">Contact us <span>→</span></a>
              </div>
              <div className="faq-contact-box">
                <img src={chatIcon} alt="Chat Icon" />
                <p>Don't like phone calls?</p>
                <a href="#">Contact us <span>→</span></a>
              </div>
            </div>
          </div>
          <div className="faq-list-container">
            <div className="faq-item-box">
              <h4>Is any of my personal information stored in the App?</h4>
              <span className="faq-toggle-icon">▼</span>
            </div>
            <div className="faq-item-box">
              <h4>What formats can I download my transaction history in?</h4>
              <span className="faq-toggle-icon">▼</span>
            </div>
            <div className="faq-item-box expanded">
              <h4>Can I schedule future transfers?</h4>
              <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.</p>
              <span className="faq-toggle-icon">▲</span>
            </div>
            <div className="faq-item-box">
              <h4>When can I use Banking App services?</h4>
              <span className="faq-toggle-icon">▼</span>
            </div>
            <div className="faq-item-box">
              <h4>Can I create my own password that is easy for me to remember?</h4>
              <span className="faq-toggle-icon">▼</span>
            </div>
            <div className="faq-item-box">
              <h4>What happens if I forget or lose my password?</h4>
              <span className="faq-toggle-icon">▼</span>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter-section">
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
    </body>
    </div>

  );
}

export default App;
