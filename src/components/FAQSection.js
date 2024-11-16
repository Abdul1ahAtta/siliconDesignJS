import React, { useState, useEffect } from 'react';
import phoneIcon from '../IMAGES/Phone.svg';
import chatIcon from '../IMAGES/Chat.svg';

const FAQSection = ({ isAltBg }) => {
  const [faqs, setFaqs] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await fetch('https://win24-assignment.azurewebsites.net/api/faq');
        if (!response.ok) {
          throw new Error('Failed to fetch FAQs');
        }
        const data = await response.json();
        setFaqs(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  if (isLoading) {
    return <div>Loading FAQs...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className={isAltBg ? 'alt-bg-section' : 'default-bg-section'}>
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
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.id}
              question={faq.title}
              answer={faq.content}
              expanded={expandedIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactOption = ({ icon, text }) => (
  <div className="faq-contact-box">
    <img src={icon} alt="Contact Icon" />
    <p>{text}</p>
    <a href="#">Contact us <span>→</span></a>
  </div>
);

const FAQItem = ({ question, answer, expanded, onToggle }) => (
  <div className={`faq-item-box ${expanded ? 'expanded' : ''}`}>
    <h4 onClick={onToggle} className="faq-question">
      {question}
      <span className="faq-toggle-icon">{expanded ? '▲' : '▼'}</span>
    </h4>
    {expanded && <p className="faq-answer">{answer}</p>}
  </div>
);

export default FAQSection;
