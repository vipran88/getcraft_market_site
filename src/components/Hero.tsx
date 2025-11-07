import React from 'react';

const Hero: React.FC = () => {
  const handleGetStarted = () => {
    const element = document.querySelector('#waitlist');
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
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-light-text-primary dark:text-dark-text-primary mb-6">
              Bulk Edit Your Etsy Listings{' '}
              <span className="text-brand">in Minutes, Not Hours</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-light-text-secondary dark:text-dark-text-secondary mb-10">
              Save hours every week with powerful bulk editing tools designed specifically for Etsy sellers. Update hundreds of listings with just a few clicks.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <button
                onClick={handleGetStarted}
                className="px-6 py-3 text-base font-semibold bg-brand hover:bg-brand-hover text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto"
              >
                Join the Waitlist
              </button>
              <button
                onClick={handleLearnMore}
                className="px-6 py-3 text-base font-semibold border-2 border-brand text-brand hover:bg-brand hover:text-white rounded-lg transition-all duration-200 w-full sm:w-auto"
              >
                Learn More
              </button>
            </div>

            {/* Trust Badge */}
            <p className="mt-8 text-xs sm:text-sm text-light-text-secondary dark:text-dark-text-secondary">
              14-day free trial • No credit card required • Cancel anytime
            </p>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-light-border dark:border-dark-border">
              <img
                src="/hero.png"
                alt="GetCraft Dashboard - Manage your Etsy listings efficiently"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

