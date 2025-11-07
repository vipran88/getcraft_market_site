import React from 'react';

const Hero: React.FC = () => {
  const handleGetStarted = () => {
    // In a real app, this would navigate to the registration page
    console.log('Navigate to registration');
  };

  const handleLearnMore = () => {
    const element = document.querySelector('#features');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-light-bg dark:bg-dark-bg transition-colors">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-light-text-primary dark:text-dark-text-primary mb-6">
          Bulk Edit Your Etsy Listings{' '}
          <span className="text-brand">in Minutes, Not Hours</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto mb-10">
          Save hours every week with powerful bulk editing tools designed specifically for Etsy sellers. Update hundreds of listings with just a few clicks.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleGetStarted}
            className="px-8 py-4 text-lg font-semibold bg-brand hover:bg-brand-hover text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto"
          >
            Get Started Free
          </button>
          <button
            onClick={handleLearnMore}
            className="px-8 py-4 text-lg font-semibold border-2 border-brand text-brand hover:bg-brand hover:text-white rounded-lg transition-all duration-200 w-full sm:w-auto"
          >
            Learn More
          </button>
        </div>

        {/* Trust Badge */}
        <p className="mt-8 text-sm text-light-text-secondary dark:text-dark-text-secondary">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default Hero;

