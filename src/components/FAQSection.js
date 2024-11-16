import React from 'react';
import phoneIcon from '../IMAGES/Phone.svg';
import chatIcon from '../IMAGES/Chat.svg';

const FAQSection = () => (
  <section className="faq-section">
    <div className="content-container">
      <div className="faq-header-container">
        <h2>Any questions?<br />Check out the FAQs</h2>
        <p>Still have unanswered questions and need to get in touch?</p>
        <div className="faq-contact-options-container">
          <ContactOption icon={phoneIcon} text="Still have questions?" />
          <ContactOption icon={chatIcon} text="Don't like phone calls?" />
        </div>
      </div>
      <div className="faq-list-container">
        <FAQItem question="Is any of my personal information stored in the App?" />
        <FAQItem question="What formats can I download my transaction history in?" />
        <FAQItem
          question="Can I schedule future transfers?"
          answer="Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper."
          expanded
        />
        <FAQItem question="When can I use Banking App services?" />
        <FAQItem question="Can I create my own password that is easy for me to remember?" />
        <FAQItem question="What happens if I forget or lose my password?" />
      </div>
    </div>
  </section>
);

const ContactOption = ({ icon, text }) => (
  <div className="faq-contact-box">
    <img src={icon} alt="Contact Icon" />
    <p>{text}</p>
    <a href="#">Contact us <span>→</span></a>
  </div>
);

const FAQItem = ({ question, answer = '', expanded = false }) => (
  <div className={`faq-item-box ${expanded ? 'expanded' : ''}`}>
    <h4>{question}</h4>
    {expanded && <p>{answer}</p>}
    <span className="faq-toggle-icon">{expanded ? '▲' : '▼'}</span>
  </div>
);

export default FAQSection;
