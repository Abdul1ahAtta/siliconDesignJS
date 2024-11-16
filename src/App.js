import React from 'react';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import MoneyTransferSection from './components/MoneyTransferSection';
import ClientFeedbackSection from './components/ClientFeedbackSection';
import FAQSection from './components/FAQSection';
import NewsletterSection from './components/NewsletterSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <IntroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <MoneyTransferSection />
      <ClientFeedbackSection />
      <FAQSection />
      <NewsletterSection />
    </div>
  );
}

export default App;
