# Ahmed Ratib Alj - Portfolio Website

Welcome to my professional portfolio! This is a modern, responsive portfolio website built with **Astro** and deployed on **Vercel**.

🌐 **Live Site**: [portfolio-ahmed-alj.vercel.app](https://portfolio-ahmed-alj.vercel.app)

## 🚀 About This Project

This portfolio website showcases:
- **Professional Design**: Modern dark theme with glassmorphism effects
- **Responsive Layout**: Fully optimized for mobile, tablet, and desktop
- **Interactive Elements**: Smooth animations, scroll reveals, and hover effects
- **Dynamic Content**: All content managed from a single TypeScript data file
- **Analytics Ready**: Vercel Analytics integrated for tracking

## 📋 Sections

- **Hero**: Eye-catching introduction with profile info
- **About**: Personal story and background
- **Skills**: Technical and soft skills showcase
- **Education**: Academic timeline  
- **Projects**: Featured project portfolio
- **Contact**: Email form and social links
- **Navigation**: Smart navigation that adapts to available content

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) - Static site generation
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Deployment**: [Vercel](https://vercel.com)
- **Analytics**: Vercel Analytics

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/        # Reusable components
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Skills.astro
│   │   ├── Education.astro
│   │   ├── Projects.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   └── BackToTop.astro
│   ├── layouts/          # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/            # Page routes
│   │   └── index.astro
│   ├── data/             # Single source of truth
│   │   └── portfolio.ts
│   └── styles/           # Global styles
├── public/               # Static assets
├── astro.config.mjs     # Astro configuration
├── tsconfig.json        # TypeScript configuration  
├── vercel.json          # Vercel deployment config
└── package.json         # Dependencies
```

## 🎨 Styling Approach

- **Global Styles**: Defined in `BaseLayout.astro` with CSS custom properties
- **Glassmorphism**: Backdrop blur effects throughout
- **Animations**: Smooth scroll reveals and interactive effects
- **Dark Theme**: Professional dark blue/gray background with cyan/blue accents
- **Responsive**: Mobile-first design with tailored layouts

## 📝 **Single Source of Truth: `src/data/portfolio.ts`**

All portfolio content is managed in **ONE file**. To update your portfolio:

### Edit Profile Information
```typescript
personal: {
  firstName: 'Ahmed',
  lastName: 'Ratib Alj',
  title: 'Computer Science Student',
  subtitle: 'Building useful software and friendly web experiences',
  description: '...your bio...',
  email: 'a.alj@esisa.ac.ma',
  location: 'Fes, Morocco',
  avatar: '/ahmed-2.jpg',
  availabilityStatus: 'Available for internships and collaborations',
}
```

### Update Statistics
```typescript
stats: [
  { label: 'Projects', value: 2 },
  { label: 'Technologies', value: 5 },
  // ...
]
```

### Add Skills
```typescript
technicalSkills: [
  {
    category: 'Frontend',
    icon: 'Code',
    skills: [
      { name: 'HTML5', level: 4 },
      { name: 'CSS3', level: 4 },
      // ...
    ]
  }
]
```

### Add Projects
```typescript
projects: [
  {
    title: 'Patient Management Web App',
    description: '...',
    tags: ['HTML', 'CSS', 'JavaScript', 'Backend'],
    url: '...',
    featured: true,
  }
]
```

### Add Education
```typescript
education: [
  {
    institution: 'ESISA Fes',
    degree: 'Bachelor',
    field: 'Computer Science',
    startYear: 2024,
    current: true,
    description: '...',
    url: 'https://esisa.ac.ma',
  }
]
```

**📌 Sections with no data are automatically hidden** - no need to delete them, just leave the array empty!

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- Git installed

### Installation

```bash
# Clone the repository
git clone https://github.com/aalj-png/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`

## 📦 Build & Deployment

### Local Build
```bash
npm run build
npm run preview
```

### Deploy to Vercel
```bash
# First time setup
vercel login
vercel --yes --prod

# After pushing to GitHub
vercel --yes --prod
```

## 🔧 Configuration

### Update Personal Display Name (Vercel URL)
Edit `vercel.json`:
```json
{
  "alias": "portfolio-firstname-lastname.vercel.app"
}
```

### Environment Variables
None required for basic functionality. Analytics work out of the box!

## ✨ Features

✅ **Responsive Design** - Works on all devices  
✅ **Dark Theme** - Modern professional look  
✅ **Smooth Animations** - Scroll reveals and hover effects  
✅ **Mobile Menu** - Hamburger menu with backdrop  
✅ **Contact Form** - Email form via formsubmit.co  
✅ **Social Links** - GitHub, LinkedIn, Email  
✅ **Analytics** - Vercel Analytics integration  
✅ **Performance** - Static site generation with Astro  
✅ **SEO Ready** - Meta tags and proper HTML structure  
✅ **Accessibility** - Semantic HTML and ARIA labels  

## 📊 Analytics

Vercel Analytics is pre-configured. Track:
- Page views
- Visitor counts
- Referrers
- Web vitals

View analytics in your Vercel dashboard at: [vercel.com/dashboard](https://vercel.com/dashboard)

## 🐛 Troubleshooting

### Port already in use
```bash
npm run dev -- --port 3001
```

### Build errors
```bash
rm -rf node_modules dist
npm install
npm run build
```

### Git authentication issues
```bash
gh auth login
gh auth setup-git
```

## 📄 License

This portfolio template is open source and available under the MIT License.

## 🤝 Support

For questions or issues:
- 📧 Email: a.alj@esisa.ac.ma
- 🐙 GitHub: [github.com/aalj-png](https://github.com/aalj-png)
- 💼 LinkedIn: [ahmed-ratib-alj](https://ma.linkedin.com/in/ahmed-ratib-alj-b39549391)

---

**Built with ❤️ using Astro & Vercel**  
Current Date: March 5, 2026
