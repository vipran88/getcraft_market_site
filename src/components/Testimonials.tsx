import React from 'react';
import { FiStar } from 'react-icons/fi';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  initials: string;
}

interface Stat {
  value: string;
  label: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      role: 'Jewelry Shop Owner',
      quote: 'GetCraft has been a game-changer for my shop! I used to spend 3-4 hours updating prices on my 200+ listings. Now it takes just 5 minutes. Absolutely worth every penny.',
      initials: 'SJ',
    },
    {
      name: 'Michael Chen',
      role: 'Home Decor Seller',
      quote: 'The bulk photo management feature is incredible. I updated all my product photos in one afternoon, and my sales increased by 30% in the following month. Highly recommend!',
      initials: 'MC',
    },
    {
      name: 'Emily Parker',
      role: 'Vintage Clothing Store',
      quote: 'Managing 500+ listings was a nightmare before GetCraft. The tag management and description editing tools have improved my SEO and saved me countless hours. Great customer support too!',
      initials: 'EP',
    },
  ];

  const stats: Stat[] = [
    { value: '10K+', label: 'Active Users' },
    { value: '2M+', label: 'Listings Managed' },
    { value: '50K+', label: 'Hours Saved' },
    { value: '4.9/5', label: 'Customer Rating' },
  ];

  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-light dark:bg-dark-card transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">
            Loved by Etsy Sellers Worldwide
          </h2>
          <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
            Join thousands of sellers who are saving time and growing their businesses with GetCraft
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 bg-light-card dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-xl hover:shadow-lg transition-all duration-200"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="w-5 h-5 fill-brand text-brand" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-base text-light-text-secondary dark:text-dark-text-secondary mb-6">
                "{testimonial.quote}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">{testimonial.initials}</span>
                </div>
                <div>
                  <div className="font-semibold text-light-text-primary dark:text-dark-text-primary">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="border-t border-light-border dark:border-dark-border pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-brand mb-2">{stat.value}</div>
                <div className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

