import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors">
        <Header />
        <main>
          <Hero />
          <Features />
          <Testimonials />
          <Pricing />
          <FAQ />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;

