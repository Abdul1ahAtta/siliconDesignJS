import React, { useState, useEffect } from 'react';
import quoteIcon from '../IMAGES/q2.svg';

const ClientFeedbackSection = ({ isAltBg }) => {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials');
        if (!response.ok) {
          throw new Error('Failed to fetch testimonials');
        }
        const data = await response.json();
        setTestimonials(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (isLoading) {
    return <div>Loading testimonials...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className={isAltBg ? 'alt-bg-section' : 'default-bg-section'} client-feedback-section>
      <div className="content-container">
        <h2>Clients are Loving Our App</h2>
        <div className="testimonials-container">
          {testimonials.map((testimonial) => (
            <Testimonial
              key={testimonial.id}
              rating={testimonial.starRating}
              text={testimonial.comment}
              name={testimonial.author}
              role={testimonial.jobRole}
              avatar={testimonial.avatarUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

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
