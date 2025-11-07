import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'How does the 14-day free trial work?',
      answer: 'Simply sign up with your email and start using GetCraft immediately. No credit card required during the trial period. You\'ll have full access to all features of your chosen plan. If you decide to continue after 14 days, you can add your payment information then.',
    },
    {
      question: 'Is my Etsy shop data secure?',
      answer: 'Absolutely! We use bank-level encryption (256-bit SSL) to protect your data. We only request the necessary permissions from Etsy\'s API to perform bulk edits. We never store your Etsy login credentials, and you can revoke access at any time from your Etsy account settings.',
    },
    {
      question: 'Can I change plans later?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. If you upgrade, you\'ll be charged the prorated difference immediately. If you downgrade, the change will take effect at the start of your next billing cycle, and you\'ll continue to have access to your current plan until then.',
    },
    {
      question: 'What happens if I exceed my listing limit?',
      answer: 'If you exceed your plan\'s listing limit, we\'ll notify you and give you the option to upgrade to the next tier. Your listings won\'t be affected, but you won\'t be able to manage listings beyond your plan\'s limit until you upgrade.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied with GetCraft for any reason within the first 30 days of your paid subscription, contact our support team for a full refund. No questions asked.',
    },
    {
      question: 'Can I manage multiple Etsy shops?',
      answer: 'Yes! Our Enterprise plan includes multi-shop management, allowing you to manage multiple Etsy shops from a single GetCraft account. You can easily switch between shops and apply bulk edits to any or all of them.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-light-bg dark:bg-dark-bg transition-colors">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary">
            Have questions? We've got answers.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-light-border dark:border-dark-border rounded-xl overflow-hidden bg-light-card dark:bg-dark-card"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <span className="font-semibold text-lg text-light-text-primary dark:text-dark-text-primary pr-4">
                  {faq.question}
                </span>
                <FiChevronDown
                  className={`w-5 h-5 text-brand flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-base text-light-text-secondary dark:text-dark-text-secondary">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="p-8 bg-brand-light dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl text-center">
          <h3 className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-3">
            Still have questions?
          </h3>
          <p className="text-base text-light-text-secondary dark:text-dark-text-secondary mb-6">
            Our support team is here to help you get the most out of GetCraft.
          </p>
          <button className="px-8 py-3 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-colors shadow-md">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

