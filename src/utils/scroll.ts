/**
 * Scroll utilities for smooth navigation with accessibility support
 */

/**
 * Smoothly scrolls to a target element with optional header offset
 * Automatically respects user's reduced motion preferences
 * 
 * @param targetId - The ID of the element to scroll to (without the # prefix)
 * @param offset - Optional offset from the top (default: 80px for fixed header)
 * @returns boolean - Returns true if successful, false if element not found
 */
export const scrollToElement = (targetId: string, offset: number = 80): boolean => {
  const element = document.getElementById(targetId.replace('#', ''));
  
  if (!element) {
    console.warn(`[scrollToElement] Element with id "${targetId}" not found`);
    return false;
  }

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - offset;

  // Respect user's motion preferences for accessibility
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  window.scrollTo({
    top: offsetPosition,
    behavior: prefersReducedMotion ? 'auto' : 'smooth'
  });

  return true;
};

/**
 * Handles anchor link clicks with smooth scrolling
 * Prevents default behavior and closes mobile menu if callback provided
 * 
 * @param e - React MouseEvent
 * @param href - Target href (e.g., '#features')
 * @param onNavigate - Optional callback (e.g., to close mobile menu)
 * @param offset - Optional offset from the top (default: 80px)
 */
export const handleSmoothNavigation = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  onNavigate?: () => void,
  offset?: number
): void => {
  e.preventDefault();
  
  const success = scrollToElement(href, offset);
  
  if (success && onNavigate) {
    onNavigate();
  }
};

/**
 * Checks if the user has reduced motion preferences enabled
 * Useful for conditional animations
 */
export const prefersReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

