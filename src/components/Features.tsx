import React from 'react';
import { FiImage, FiDollarSign, FiTag, FiFileText, FiPackage, FiZap } from 'react-icons/fi';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <FiImage className="w-6 h-6" />,
      title: 'Bulk Photo Management',
      description: 'Add, replace, or remove photos across multiple listings with ease. Update your entire shop\'s imagery in minutes.',
    },
    {
      icon: <FiDollarSign className="w-6 h-6" />,
      title: 'Smart Pricing',
      description: 'Set fixed prices or adjust by percentage across all listings. Perfect for sales, promotions, and market adjustments.',
    },
    {
      icon: <FiTag className="w-6 h-6" />,
      title: 'Tag Management',
      description: 'Add, replace, or remove tags in bulk for better SEO optimization. Improve your search rankings effortlessly.',
    },
    {
      icon: <FiFileText className="w-6 h-6" />,
      title: 'Description Editor',
      description: 'Replace, prepend, or append text to descriptions across multiple listings. Maintain consistent messaging.',
    },
    {
      icon: <FiPackage className="w-6 h-6" />,
      title: 'Inventory Control',
      description: 'Set, increase, or decrease quantities across listings. Keep your inventory accurate without manual updates.',
    },
    {
      icon: <FiZap className="w-6 h-6" />,
      title: 'Lightning Fast',
      description: 'Process hundreds of listings in minutes with our optimized bulk editing engine. Save time and grow faster.',
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-light-bg dark:bg-dark-bg transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">
            Powerful Features for Etsy Sellers
          </h2>
          <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
            Everything you need to manage your Etsy shop efficiently and save hours every week
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl hover:shadow-lg transition-all duration-200 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center mb-4 text-brand group-hover:scale-110 transition-transform duration-200">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-light-text-primary dark:text-dark-text-primary mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-base text-light-text-secondary dark:text-dark-text-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

