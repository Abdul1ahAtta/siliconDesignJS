import React from 'react';
import quoteIcon from '../IMAGES/q2.svg';
import fannie from '../IMAGES/Fannie.svg';
import albert from '../IMAGES/Albert.svg';

const ClientFeedbackSection = () => (
  <section className="client-feedback-section">
    <div className="content-container">
      <h2>Clients are Loving Our App</h2>
      <div className="testimonials-container">
        <Testimonial
          rating={4}
          text="Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel."
          name="Fannie Summers"
          role="Designer"
          avatar={fannie}
        />
        <Testimonial
          rating={5}
          text="Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor."
          name="Albert Flores"
          role="Developer"
          avatar={albert}
        />
      </div>
    </div>
  </section>
);

const Testimonial = ({ rating, text, name, role, avatar }) => (
  <div className="testimonial-box">
    <div className="quote-icon-container">
      <img src={quoteIcon} alt="Quote Icon" className="quote-icon" />
    </div>
    <div className="rating-container">
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index}>{index < rating ? '★' : '☆'}</span>
      ))}
    </div>
    <p>{text}</p>
    <div className="testimonial-footer">
      <img src={avatar} alt={`${name}'s Avatar`} className="avatar-img" />
      <div className="client-details">
        <span className="client-name">{name}</span><br />
        <span className="client-role">{role}</span>
      </div>
    </div>
  </div>
);

export default ClientFeedbackSection;
