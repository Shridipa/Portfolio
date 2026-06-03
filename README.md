# Shridipa Dhar - AI & ML Portfolio Website

A world-class, research-focused portfolio website showcasing AI/ML expertise, projects, and research experience. Built for Google Student Researcher applications and AI/ML internship opportunities.

## 🎯 Portfolio Objectives

This portfolio demonstrates:
- **Research Ability**: Rigorous experimentation, benchmarking, and neural network research
- **Engineering Ability**: Production-grade ML systems with FastAPI, React, and scalable infrastructure
- **Leadership**: Mentoring, community building, and driving ML initiatives
- **Competitive Excellence**: Top 800 RL Hackathon, Google Solution Challenge
- **Technical Depth**: RAG systems, knowledge tracing, recommendation systems, LLMs

## 🚀 Features

### Pages
- **Home**: Hero section with statistics, featured projects, and quick overview
- **About**: Detailed background, research interests, achievements, and career goals
- **Projects**: 3 research-grade projects with architecture, methodology, and results
- **Research**: Timeline of research experience at ISI and leadership roles
- **Experience**: Detailed experience, responsibilities, and skills developed
- **Blog**: Placeholders for technical articles (coming soon)
- **Contact**: Contact form, social links, and collaboration opportunities

### Design Elements
- **Dark Mode First**: Modern, premium dark theme (#0B0F19 background)
- **Glassmorphism**: Frosted glass effects with backdrop blur
- **Animations**: Smooth Framer Motion transitions and interactive elements
- **Responsive**: Fully responsive design for mobile, tablet, and desktop
- **Premium**: Inspired by Linear, Vercel, Anthropic, OpenAI, Stripe, DeepMind

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom configurations
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Custom built with Glass morphism effects

## 📋 Personal Information

- **Name**: Shridipa Dhar
- **Degree**: B.Tech Computer Science Engineering (AI & ML)
- **University**: KIIT University
- **CGPA**: 8.63
- **Location**: India
- **Current Role**: Machine Learning Lead at KIIT Nexus Society
- **Research**: Research Intern at Indian Statistical Institute (ISI)

## 🎓 Key Achievements

- ✅ Top 800 in Scalar Reinforcement Learning Hackathon
- ✅ Top 15,000 in Google Coding Competition
- ✅ Google Solution Challenge Participant
- ✅ Black Belt in Karate
- ✅ ML Lead at KIIT Nexus Society
- ✅ Research Intern at Indian Statistical Institute

## 📚 Featured Projects

### 1. Research Mind
AI-powered Research Assistant using RAG for multi-paper comparison and evidence-grounded answers.
- **Tech**: RAG, LLMs, FastAPI, React, FAISS, BM25
- **Highlights**: Hybrid search, citation support, semantic analysis

### 2. Medic AI
Explainable AI-powered Medical Intelligence Assistant for medical report analysis and disease prediction.
- **Tech**: PyTorch, LLMs, FastAPI, NLP
- **Highlights**: Explainable outputs, real-time inference, clinical grade

### 3. Elo Learn
Research-grade Adaptive Learning Platform with Knowledge Tracing and personalized recommendations.
- **Tech**: FastAPI, Streamlit, Knowledge Graphs, ML
- **Highlights**: Personalized paths, student performance prediction, adaptive difficulty

## 🛠️ Tech Stack Details

### Frontend
- React 18.3.0
- Next.js 15.4.0
- TypeScript 5.5.4
- Tailwind CSS 3.4.5
- Framer Motion 11.0.0
- Lucide React 0.474.0

### Styling
- Custom Tailwind configuration with dark theme
- Glassmorphism effects
- Gradient text and backgrounds
- Custom animations and transitions

### Development
- Node.js & npm
- ESNext modules
- CSS-in-JS with Tailwind

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`

## 🏗️ Project Structure

```
Portfolio/
├── app/
│   ├── layout.tsx              # Root layout with navigation
│   ├── globals.css             # Global styles and animations
│   ├── page.tsx                # Root page (redirects to /home)
│   ├── home/
│   │   └── page.tsx            # Landing page with hero & stats
│   ├── about/
│   │   └── page.tsx            # About me, skills, achievements
│   ├── projects/
│   │   └── page.tsx            # Projects showcase
│   ├── research/
│   │   └── page.tsx            # Research experience timeline
│   ├── experience/
│   │   └── page.tsx            # Work experience
│   ├── blog/
│   │   └── page.tsx            # Blog posts (coming soon)
│   └── contact/
│       └── page.tsx            # Contact form & info
├── components/
│   ├── navbar.tsx              # Navigation component
│   ├── hero.tsx                # Hero section with animations
│   ├── stats.tsx               # Statistics cards
│   ├── skills.tsx              # Skills grid
│   ├── project-card.tsx        # Project card component
│   ├── timeline.tsx            # Timeline component
│   ├── contact-form.tsx        # Contact form
│   └── common.tsx              # Shared components
├── lib/                         # Utility functions
├── public/                      # Static assets
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.mjs             # Next.js configuration
└── package.json                # Dependencies and scripts
```

## 🎨 Color Scheme

```
Background:     #0B0F19
Primary:        #6366F1 (Indigo)
Accent:         #8B5CF6 (Purple)
Success:        #22C55E (Green)
Text Primary:   #F8FAFC (Slate)
Text Secondary: #94A3B8 (Gray)
Border:         #1E293B (Slate)
```

## 📱 Responsive Design

- **Mobile**: Full responsive with mobile navigation menu
- **Tablet**: Optimized layout with adjusted spacing
- **Desktop**: Full-width experience with enhanced visuals

## ✨ Key Features

### Animations
- Fade-in animations on scroll
- Smooth transitions between pages
- Interactive hover effects
- Loading states for forms

### SEO
- Meta tags for social sharing
- Open Graph configuration
- Semantic HTML structure
- Lighthouse optimized

### Accessibility
- ARIA labels for interactive elements
- Semantic navigation
- Keyboard navigation support
- High contrast colors

### Performance
- Static optimization with Next.js
- Image optimization
- CSS minification
- Code splitting

## 🚢 Deployment

### Deploy to Vercel (Recommended)

Vercel is the optimal platform for Next.js applications and offers seamless deployment.

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production
vercel --prod
```

**Vercel Dashboard**: https://vercel.com

### Environment Setup

No environment variables required for this portfolio. All configuration is in code.

### Custom Domain

1. Go to Vercel project settings
2. Add your custom domain
3. Update DNS records as instructed
4. Suggested domain: `shridipad.com` or `shridipa-portfolio.com`

### Build for Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

## 📈 SEO Optimization

The portfolio is optimized for search engines with:
- Title: "Shridipa Dhar — AI & ML Portfolio"
- Meta description for social sharing
- Keywords: AI Engineer, ML Engineer, Google Student Researcher, Research Intern, AI Portfolio
- Open Graph tags for social platforms

## 🔄 Updating Content

### Adding a New Project

1. Open `app/projects/page.tsx`
2. Add project to `projectsData` array
3. Update project card with details
4. Add detailed description below

### Updating About Section

Edit `app/about/page.tsx` to add:
- New achievements
- Research interests
- Skills

### Publishing Blog Posts

1. Create new file in `app/blog/posts/`
2. Update blog list in `app/blog/page.tsx`
3. Add post metadata

## 🤝 Contributing

This is a personal portfolio, but feedback and suggestions are welcome!

## 📞 Contact & Links

- **GitHub**: https://github.com/Shridipa
- **LinkedIn**: linkedin.com/in/shridipa
- **Email**: shridipa@example.com
- **Website**: https://shridipad.com

## 📄 License

This portfolio website is personal and for demonstration purposes.

## 🙏 Acknowledgments

- Design inspiration from Linear, Vercel, Anthropic, OpenAI, Stripe, DeepMind
- Built with Next.js 15, Tailwind CSS, and Framer Motion
- Hosted on Vercel

---

**Last Updated**: May 2026

**Status**: ✅ Production Ready

Made with ❤️ for showcasing AI/ML research and engineering excellence.
