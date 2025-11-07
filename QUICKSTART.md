# Quick Start Guide - GetCraft Marketing Website

## 🚀 Running the Website

### Development Mode

The development server is already running! Open your browser to:

**http://localhost:5173**

You should see the GetCraft marketing website with:
- ✅ Responsive header with dark mode toggle
- ✅ Hero section with CTAs
- ✅ 6 feature cards
- ✅ Customer testimonials
- ✅ Pricing tiers
- ✅ FAQ accordion
- ✅ Footer with links

### Testing Dark Mode

Click the sun/moon icon in the header to toggle between light and dark themes. Your preference will be saved automatically.

### Testing Navigation

Click any menu item in the header to smoothly scroll to that section:
- Features → Features section
- Reviews → Testimonials section  
- Pricing → Pricing section
- FAQ → FAQ section
- Contact → Footer/Contact section

## 📱 Testing Responsive Design

Resize your browser window or use Chrome DevTools to test:
- **Mobile**: < 768px - Hamburger menu appears
- **Tablet**: 768px - 1024px - 2 column layouts
- **Desktop**: > 1024px - Full 3 column layouts

## 🎨 Customization Guide

### Change Brand Colors

Edit `tailwind.config.js`:

\`\`\`javascript
colors: {
  brand: {
    DEFAULT: '#F16521', // Change this to your color
    hover: '#E35D1E',   // Darker version for hover
  }
}
\`\`\`

### Update Content

**Features**: Edit `src/components/Features.tsx` - Update the `features` array

**Testimonials**: Edit `src/components/Testimonials.tsx` - Update the `testimonials` array

**Pricing**: Edit `src/components/Pricing.tsx` - Update the `pricingTiers` array

**FAQ**: Edit `src/components/FAQ.tsx` - Update the `faqs` array

### Add Your Logo

1. Replace the `G` text in `src/components/Header.tsx` with an image:

\`\`\`tsx
<img src="/logo.png" alt="GetCraft" className="w-8 h-8" />
\`\`\`

2. Place your logo file in the `public/` folder

## 🔧 Common Commands

\`\`\`bash
npm run dev      # Start development server (already running!)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Check for code issues
\`\`\`

## 📦 Production Deployment

### Build the website:

\`\`\`bash
npm run build
\`\`\`

This creates an optimized `dist/` folder ready for deployment.

### Deploy to hosting platforms:

**Vercel**:
\`\`\`bash
npm install -g vercel
vercel
\`\`\`

**Netlify**:
\`\`\`bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
\`\`\`

**GitHub Pages**, **AWS S3**, **Azure Static Web Apps** - Upload the `dist/` folder

## ✨ Key Features Implemented

### 🌓 Dark Mode
- Toggle with sun/moon icon
- Persists in localStorage
- Smooth transitions

### 📱 Fully Responsive
- Mobile-first design
- Hamburger menu on mobile
- Adaptive layouts

### ⚡ Performance
- Built with Vite for fast builds
- Optimized bundle size
- Lazy loading ready

### ♿ Accessible
- Keyboard navigation
- ARIA labels
- Semantic HTML

### 🎯 SEO Ready
- Meta tags included
- Proper heading hierarchy
- Clean URL structure

## 🎨 Design System

### Colors
- Brand Orange: `#F16521`
- Light background: `#FDFDFC`
- Dark background: `#0a0a0a`

### Typography
- Font: Instrument Sans (Google Fonts)
- Sizes: Base 16px, scale from 14px to 72px

### Spacing
- Consistent padding and margins
- Grid gaps: 32px (8 in Tailwind)
- Section padding: 80px vertical

## 🔍 What's Next?

1. **Add Real Images**: Replace placeholder icons with actual product images
2. **Connect Authentication**: Hook up Login/Register buttons to your auth system
3. **Add Analytics**: Integrate Google Analytics or similar
4. **Add Forms**: Create contact and signup forms
5. **Add Blog**: Create a blog section for content marketing
6. **Optimize Images**: Add WebP images for better performance
7. **Add Animations**: Consider adding scroll animations (e.g., AOS library)
8. **Add Videos**: Include product demo videos

## 🐛 Troubleshooting

**Dev server won't start?**
- Check if port 5173 is already in use
- Try `npm run dev -- --port 3000` to use a different port

**Styles not applying?**
- Clear browser cache
- Check if Tailwind is processing correctly
- Look for console errors

**Dark mode not persisting?**
- Check browser localStorage permissions
- Open DevTools → Application → Local Storage

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [TailwindCSS Documentation](https://tailwindcss.com)
- [React Icons](https://react-icons.github.io/react-icons/)

---

Enjoy building with GetCraft! 🎉

