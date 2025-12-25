# CannyMinds Technology Solutions - Landing Page

A stunning, modern landing page built with Next.js 15, TypeScript, Tailwind CSS, and advanced animations. Optimized for SEO following Google's E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) guidelines.

## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for smooth, professional animations
- **GSAP** for advanced scroll animations
- **Lenis** for buttery smooth scrolling
- **SEO Optimized** with proper meta tags and Schema.org structured data
- **E-E-A-T Compliant** following Google's quality guidelines
- **Fully Responsive** design for all devices
- **Performance Optimized** with lazy loading and Next.js optimizations
- **Accessible** with proper ARIA labels and keyboard navigation

## 📦 Installation

1. Navigate to the project directory:
```bash
cd cannyminds-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
cannyminds-landing/
├── app/
│   ├── layout.tsx         # Root layout with SEO configuration
│   ├── page.tsx           # Main landing page
│   └── globals.css        # Global styles
├── components/
│   ├── sections/
│   │   ├── Hero.tsx       # Hero section with animations
│   │   ├── Products.tsx   # Products showcase
│   │   ├── About.tsx      # About section with E-E-A-T
│   │   ├── GlobalOffices.tsx  # Office locations
│   │   └── Contact.tsx    # Contact form
│   └── ui/
│       ├── Navigation.tsx # Sticky navigation
│       ├── Footer.tsx     # Footer component
│       ├── SmoothScroll.tsx   # Smooth scroll wrapper
│       └── RevealOnScroll.tsx # Scroll reveal animation
├── hooks/
│   └── useSmoothScroll.tsx    # Lenis smooth scroll hook
├── lib/
│   └── seo.ts             # SEO configuration and Schema.org data
└── public/
    └── images/            # Image assets
```

## 🎨 Design Features

### Animations
- **Scroll-triggered animations** using Framer Motion and Intersection Observer
- **Parallax effects** on hero section
- **Smooth scrolling** with Lenis
- **Micro-interactions** on buttons and cards
- **Stagger animations** for list items

### Color Scheme
- Primary Blue: `#4154f1`
- Secondary Dark Blue: `#012970`
- Accent Green: `#25d366`

### Sections
1. **Hero** - Eye-catching intro with tagline and CTAs
2. **Products** - CannyDocs, CannyHR, CannyScan, CannyTrack
3. **Services** - Digital transformation, AI, development, marketing
4. **About** - E-E-A-T pillars and company values
5. **Global Offices** - Interactive office selector
6. **Contact** - Form with validation

## 🔍 SEO Features

### E-E-A-T Implementation
- **Experience**: 20+ years highlighted
- **Expertise**: Certified professionals, ISO certifications
- **Authoritativeness**: Industry recognition, Fortune 500 clients
- **Trustworthiness**: Security certifications, transparent practices

### Technical SEO
- Proper meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Twitter Card tags
- Schema.org structured data (Organization, ContactPoint, PostalAddress)
- Semantic HTML with proper heading hierarchy
- Mobile-friendly and responsive
- Fast loading with Next.js optimizations

## 🛠️ Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
Build the project and deploy the `.next` folder:
```bash
npm run build
```

## 📝 Customization

### Update Content
- Edit section components in `components/sections/`
- Update SEO data in `lib/seo.ts`
- Modify colors in `tailwind.config.ts`

### Add New Sections
1. Create component in `components/sections/`
2. Import and add to `app/page.tsx`
3. Add navigation link in `components/ui/Navigation.tsx`

## 🔧 Performance Optimization

- Images optimized with Next.js Image component
- Lazy loading for off-screen content
- Code splitting with Next.js dynamic imports
- Minimal external dependencies
- Optimized fonts with `display: swap`

## 📊 Best Practices Implemented

- ✅ TypeScript for type safety
- ✅ ESLint for code quality
- ✅ Semantic HTML
- ✅ ARIA labels for accessibility
- ✅ Keyboard navigation support
- ✅ Focus visible states
- ✅ Proper heading hierarchy
- ✅ Alt text for images
- ✅ Mobile-first responsive design
- ✅ Performance budgets

## 📄 License

© 2025 CannyMinds Technology Solutions. All rights reserved.

## 🤝 Support

For questions or support:
- Email: info@cannymindstech.com
- Phone (India): +91-9361801926
- Phone (USA): +1 (214) 727-0422

---

**Built with ❤️ using Next.js 15, TypeScript, and Tailwind CSS**
