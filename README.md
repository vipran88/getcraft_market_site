# GetCraft - Etsy Marketing Website

A modern, responsive static marketing website built with React, TypeScript, and TailwindCSS for GetCraft, an Etsy bulk editing tool.

## Features

✨ **Modern Design**
- Beautiful, responsive UI that works on all devices
- Dark mode support with persistent theme preference
- Smooth animations and transitions

🎨 **Complete Sections**
- Hero section with compelling CTAs
- Features showcase (6 key features)
- Customer testimonials and reviews
- Transparent pricing (3 tiers)
- FAQ with accordion functionality
- Comprehensive footer with links

🚀 **Performance Optimized**
- Built with Vite for lightning-fast development
- Optimized for production builds
- SEO-friendly with proper meta tags

♿ **Accessible**
- Keyboard navigation support
- ARIA labels for screen readers
- Proper semantic HTML structure

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **React Icons** - Beautiful icon library (Feather Icons)

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn/pnpm installed

### Installation

1. Install dependencies:

\`\`\`bash
npm install
\`\`\`

2. Start the development server:

\`\`\`bash
npm run dev
\`\`\`

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

\`\`\`bash
npm run build
\`\`\`

The production-ready files will be in the `dist` folder.

### Preview Production Build

\`\`\`bash
npm run preview
\`\`\`

## Project Structure

\`\`\`
src/
├── components/         # React components
│   ├── Header.tsx     # Navigation header with dark mode
│   ├── Hero.tsx       # Hero section
│   ├── Features.tsx   # Features grid
│   ├── Testimonials.tsx # Customer reviews
│   ├── Pricing.tsx    # Pricing tiers
│   ├── FAQ.tsx        # FAQ accordion
│   └── Footer.tsx     # Footer with links
├── contexts/          # React contexts
│   └── ThemeContext.tsx # Dark mode theme provider
├── App.tsx            # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles with Tailwind
\`\`\`

## Color Scheme

### Brand Colors
- Primary: `#F16521` (Orange)
- Primary Hover: `#E35D1E`

### Light Mode
- Background: `#FDFDFC`
- Text Primary: `#1b1b18`
- Text Secondary: `#706f6c`

### Dark Mode
- Background: `#0a0a0a`
- Text Primary: `#EDEDEC`
- Text Secondary: `#A1A09A`

## Features Overview

### Dark Mode
- Toggle between light and dark themes
- Preference saved to localStorage
- Smooth color transitions

### Smooth Scrolling
- All navigation links scroll smoothly to sections
- Accounts for fixed header offset

### Responsive Design
- Mobile-first approach
- Breakpoints: Mobile (<768px), Tablet (768-1024px), Desktop (>1024px)
- Hamburger menu on mobile

### Interactive Elements
- Hover effects on cards and buttons
- FAQ accordion with smooth animations
- Testimonial cards with star ratings

## Customization

### Updating Colors
Edit `tailwind.config.js` to customize the color palette:

\`\`\`javascript
colors: {
  brand: {
    DEFAULT: '#F16521',
    hover: '#E35D1E',
    // ... more colors
  }
}
\`\`\`

### Modifying Content
Each component is self-contained with its content. Edit the respective component files in `src/components/` to update:
- Features list
- Testimonials
- Pricing tiers
- FAQ items
- Footer links

## Performance Tips

1. **Image Optimization**: Add optimized images and use WebP format
2. **Lazy Loading**: Consider lazy loading below-the-fold content
3. **Analytics**: Add Google Analytics or similar tracking
4. **SEO**: Update meta tags in `index.html` for your domain

## Deployment

### Deploy to Coolify (Recommended for VPS)

This project is ready for deployment with Coolify on any VPS:

**Quick Start:**
1. See `COOLIFY_QUICKSTART.md` for a fast-track guide
2. See `DEPLOYMENT_GUIDE.md` for comprehensive step-by-step instructions

**What's Included:**
- ✅ Dockerfile (multi-stage build)
- ✅ Nginx configuration (optimized for production)
- ✅ Docker Compose for local testing
- ✅ Complete deployment guides

**Test Locally with Docker:**
```bash
docker-compose up
# Visit http://localhost:3000
```

### Other Deployment Options

- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod`
- **GitHub Pages**: Build and deploy `dist` folder
- **AWS S3 + CloudFront**: Upload `dist` folder to S3 bucket

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

This project is built based on the GetCraft PRD specifications.

## Contributing

Feel free to submit issues and enhancement requests!

---

Built with ❤️ using React + Vite + TailwindCSS

