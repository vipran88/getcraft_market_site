import React from 'react';
import { FiCheck } from 'react-icons/fi';

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured?: boolean;
  badge?: string;
}

const Pricing: React.FC = () => {
  const pricingTiers: PricingTier[] = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      description: 'Perfect for small shops',
      features: [
        'Up to 10 listings',
        'Bulk edit titles',
        'Buik edit descriptions',
        'Email support',
      ],
    },
    {
      name: 'Starter',
      price: '$7',
      period: '/month',
      description: 'Best for growing businesses',
      features: [
        'Up to 500 listings',
        'All Starter features',
        'Description bulk editing',
        'Edit Categories',
        'Edit Descriptions',
        'Priority support',
      ],
      featured: true,
      badge: 'Most Popular',
    },
    {
      name: 'Professional',
      price: '$15',
      period: '/month',
      description: 'For large operations',
      features: [
        'Unlimited listings',
        'All Professional features',
        'Multi-shop management',
        'Auto Backing Up',
        'Bulk edit Videos',
        'Advanced analytics'
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-light-bg dark:bg-dark-bg transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
            Choose the plan that fits your business. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative p-8 bg-light-card dark:bg-dark-card rounded-xl hover:shadow-xl transition-all duration-200 ${
                tier.featured
                  ? 'border-2 border-brand shadow-lg transform md:scale-105'
                  : 'border border-light-border dark:border-dark-border'
              }`}
            >
              {/* Badge */}
              {tier.badge && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="px-4 py-1 bg-brand text-white text-sm font-semibold rounded-full">
                    {tier.badge}
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-2">
                {tier.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-6">
                {tier.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-5xl font-bold text-light-text-primary dark:text-dark-text-primary">
                  {tier.price}
                </span>
                <span className="text-xl text-light-text-secondary dark:text-dark-text-secondary">
                  {tier.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <FiCheck className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-base text-light-text-secondary dark:text-dark-text-secondary">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                  tier.featured
                    ? 'bg-brand hover:bg-brand-hover text-white shadow-md'
                    : 'border-2 border-brand text-brand hover:bg-brand hover:text-white'
                }`}
              >
                Start Free Trial
              </button>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-light-text-secondary dark:text-dark-text-secondary">
          All plans include a 14-day free trial. No credit card required. Cancel anytime.
        </p>
      </div>
    </section>
  );
};

export default Pricing;

