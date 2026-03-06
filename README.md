# Ahmed Ratib Alj - Portfolio

A modern, responsive portfolio website built with **Astro** and deployed on **Vercel** with integrated analytics.

🌐 **Live Site**: [https://portfolio-ahmed-ratib-alj.vercel.app](https://portfolio-ahmed-ratib-alj.vercel.app)

## Features

✨ **Dynamic Content Management** - All portfolio content is stored in a single TypeScript data file (`src/data/portfolio.ts`)
- Sections automatically hide if they don't contain data
- Navigation dynamically updates based on available sections

🎨 **Modern Design**
- Dark theme with glassmorphism effects
- Gradient animations and smooth transitions
- Fully responsive (mobile, tablet, desktop)
- Scroll-reveal animations

📱 **Responsive Layout**
- Mobile hamburger menu with drawer
- Optimized for all screen sizes
- Touch-friendly interface

📊 **Comprehensive Sections**
- Hero with animated gradient text and profile image
- About (numbered cards)
- Technical & Soft Skills
- Education Timeline
- Experience (if available)
- Projects Showcase
- Contact Form (via formsubmit.co)
- Social Links Integration

🔍 **Analytics**
- Vercel Analytics integrated
- Track visitor counts, page views, and referrers

## Project Structure

```
portfolio/
├── src/
│   ├── components/          # Reusable Astro components
│   │   ├── Header.astro      # Navigation with mobile menu
│   │   ├── Hero.astro        # Hero section
│   │   ├── About.astro       # About section
│   │   ├── Skills.astro      # Skills section
│   │   ├── Education.astro   # Education timeline
│   │   ├── Experience.astro  # Experience (optional)
│   │   ├── Projects.astro    # Projects grid
│   │   ├── Contact.astro     # Contact form
│   │   ├── Footer.astro      # Footer
│   │   └── BackToTop.astro   # Back to top button
│   ├── layouts/
│   │   └── BaseLayout.astro  # Main layout wrapper
│   ├── pages/
│   │   └── index.astro       # Home page (entry point)
│   ├── data/
│   │   └── portfolio.ts      # 📌 MAIN DATA FILE - Edit this to update content
│   └── styles/
│       └── global.css        # Global styles & theme
├── public/
│   └── ahmed.jpg            # Profile image
├── vercel.json              # Vercel deployment config
├── astro.config.mjs         # Astro configuration
├── tsconfig.json            # TypeScript config
└── package.json             # Dependencies & scripts
```

## How to Update Your Portfolio

**All content is managed in a single file**: `src/data/portfolio.ts`

### Steps to Update:

1. **Open** `src/data/portfolio.ts`
2. **Edit** the `portfolioData` object with your information:
   - Personal details (name, email, location, bio)
   - Statistics
   - Skills (technical & soft)
   - Education
   - Experience
   - Projects
   - Social links

3. **Save** the file
4. **Redeploy** by pushing to GitHub (automatic) or running:
   ```bash
   npm run deploy
   ```

### Example: Adding a New Project

```typescript
projects: [
  {
    title: "Patient Management System",
    description: "A full-stack web app for managing patient records...",
    technologies: ["HTML", "CSS", "JavaScript", "Authentication"],
    url: "https://github.com/...",
    github: "https://github.com/...",
    featured: true,
  },
  // Add more projects here
]
```

## Installation & Setup

### Prerequisites
- Node.js 18+ ([install](https://nodejs.org/))
- npm or yarn

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/aalj-png/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```
   - Open [http://localhost:3000](http://localhost:3000) in your browser

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

## Deployment

### Automatic Deployment (Recommended)

The portfolio is configured to auto-deploy when you push to GitHub:

1. **Make changes** locally
2. **Commit and push** to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```
3. **Vercel automatically builds and deploys** ✨

View deployment logs at: https://vercel.com/dashboard

### Manual Deployment

Deploy directly to Vercel via CLI:

```bash
npm run deploy
```

Or deploy a new version:
```bash
vercel --prod
```

## Configuration

### Custom Domain
The portfolio uses the alias `portfolio-ahmed-ratib-alj.vercel.app` (configured in `vercel.json`)

To change the domain:
1. Update `vercel.json`:
   ```json
   "alias": ["your-custom-domain.vercel.app"]
   ```
2. Redeploy and set the alias:
   ```bash
   vercel alias set portfolio-yourname.vercel.app
   ```

### Analytics
Vercel Analytics is automatically enabled. View metrics at:
https://vercel.com/dashboard → Select Project → Analytics

## Available Scripts

```bash
# Development server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to Vercel (production)
npm run deploy
```

## Technologies Used

- **Framework**: [Astro](https://astro.build/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Custom CSS with CSS Variables
- **Deployment**: [Vercel](https://vercel.com/)
- **Form**: [FormSubmit.co](https://formsubmit.co/)
- **Analytics**: Vercel Analytics

## Design System

### Colors
- Primary: `#00d4ff` (Cyan)
- Accent: `#ff006e` (Pink)
- Success: `#00d97e` (Green)
- Background Primary: `#0a0f1e` (Dark Blue)

### Fonts
- Sans: System font stack (Inter-like)
- Mono: JetBrains Mono

### Effects
- Glassmorphism (blur + transparency)
- Gradient animations
- Scroll reveal effects
- Staggered animations

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- ⚡ Static site generation (fast loading)
- 📦 Minimal JavaScript
- 🎯 Optimized images
- 🔒 Secure & SEO-friendly

## Troubleshooting

### Changes not showing after deployment
- Clear browser cache (Ctrl+Shift+Delete / Cmd+Shift+Delete)
- Check Vercel deployment logs

### Form not submitting
- Verify FormSubmit URL in `src/components/Contact.astro`
- Check spam folder for form notification

### Analytics not tracking
- Vercel Analytics requires no configuration
- View metrics in Vercel dashboard

## Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Blog section
- [ ] Testimonials
- [ ] Certificate gallery
- [ ] Case studies

## License

This portfolio template is free to use and customize.

## Support

For questions or issues:
- Check Astro docs: https://docs.astro.build
- Vercel support: https://vercel.com/support
- GitHub Issues: [Create an issue](https://github.com/aalj-png/portfolio/issues)

---

**Built with ❤️ using Astro | Deployed on Vercel | Updated: {new Date().toLocaleDateString()}**
