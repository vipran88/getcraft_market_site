import React, { useState } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-light-bg dark:bg-dark-bg border-b border-light-border dark:border-dark-border transition-colors">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <span className="text-xl font-semibold text-light-text-primary dark:text-dark-text-primary">
                GetCraft
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base text-light-text-secondary dark:text-dark-text-secondary hover:text-brand dark:hover:text-brand transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <FiSun className="w-5 h-5 text-dark-text-primary" />
              ) : (
                <FiMoon className="w-5 h-5 text-light-text-primary" />
              )}
            </button>

            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center space-x-3">
              <button className="px-5 py-2 text-base font-medium text-brand hover:text-brand-hover transition-colors">
                Login
              </button>
              <button className="px-5 py-2 text-base font-medium bg-brand hover:bg-brand-hover text-white rounded-lg transition-colors shadow-md">
                Register
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6 text-light-text-primary dark:text-dark-text-primary" />
              ) : (
                <FiMenu className="w-6 h-6 text-light-text-primary dark:text-dark-text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-light-border dark:border-dark-border">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base text-light-text-secondary dark:text-dark-text-secondary hover:text-brand dark:hover:text-brand transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-light-border dark:border-dark-border">
                <button className="px-5 py-2 text-base font-medium text-brand hover:text-brand-hover transition-colors text-left">
                  Login
                </button>
                <button className="px-5 py-2 text-base font-medium bg-brand hover:bg-brand-hover text-white rounded-lg transition-colors shadow-md">
                  Register
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

