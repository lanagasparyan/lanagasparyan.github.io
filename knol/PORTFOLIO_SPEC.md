# Modern Portfolio Website Specification
**Project**: Lana Gasparyan Portfolio Redesign
**Date**: October 2025
**Version**: 1.0

---

## 1. Executive Summary

Transform the current Jekyll-based portfolio website into a modern, professional showcase with light/dark theme support, optimized for 2025 design standards. The redesign will maintain Jekyll as the static site generator while implementing contemporary UI/UX patterns, improved performance, and enhanced visual appeal.

### Current State Issues
- ❌ **Dated Design**: Using basic Minimal Mistakes theme with limited customization
- ❌ **No Theme Toggle**: Missing modern dark/light mode switcher
- ❌ **Limited Visual Appeal**: Lacks modern animations, micro-interactions, and visual hierarchy
- ❌ **Inconsistent Layout**: Index page uses different layout (home) than other pages (single)
- ❌ **Minimal Custom Styling**: Only 7 lines in main.scss, heavily relies on theme defaults
- ❌ **No Hero Section**: Missing impactful landing area with visual presence
- ❌ **Basic Project Cards**: Simple text-based project listings without imagery or visual interest

### Goals
- ✅ **Modern 2025 Design**: Implement contemporary portfolio design patterns
- ✅ **Dark/Light Mode**: Smooth theme switching with user preference persistence
- ✅ **Visual Polish**: Add animations, micro-interactions, and modern typography
- ✅ **Performance**: Maintain fast load times (< 2s) and excellent Lighthouse scores
- ✅ **Mobile-First**: Responsive design with optimized mobile experience
- ✅ **Accessibility**: WCAG 2.1 AA compliance with proper contrast and keyboard navigation

---

## 2. Design Research Insights

### 2025 Portfolio Trends
Based on industry research, modern portfolios feature:

1. **Bold Typography & Hierarchy**
   - Large, experimental fonts for headers
   - Clear visual hierarchy with size and weight variations
   - Custom font pairings (heading + body)

2. **Dark Mode as Standard**
   - 70%+ of developers prefer dark mode
   - Reduces eye strain, modern aesthetic
   - Toggle should be prominent and accessible

3. **Micro-Interactions**
   - Hover effects on cards and links
   - Smooth transitions and animations
   - Loading states and scroll-triggered animations

4. **Full-Width Hero Sections**
   - Large, impactful landing area
   - Professional photo or illustration
   - Clear call-to-action buttons

5. **Project Showcases with Imagery**
   - Screenshots or mockups of projects
   - Hover effects revealing more information
   - Technology tags/badges

6. **Minimalist Layout**
   - Clean, uncluttered design
   - Strategic use of whitespace
   - Focus on content over decoration

### Competitive Analysis
Reviewed top developer portfolios:
- **Brittany Chiang**: Clean design, smooth scrolling, dark theme
- **Tamal Sen**: IDE-inspired dark theme with terminal aesthetics
- **Jesse Zhou**: 3D elements with Three.js (too complex for this project)

---

## 3. Technical Architecture

### 3.1 Technology Stack
- **Static Site Generator**: Jekyll 4.x (via github-pages gem)
- **Theme Base**: Minimal Mistakes 4.27.3 (as foundation)
- **Styling**: Custom SCSS with CSS variables for theming
- **Dark Mode**: CSS custom properties + JavaScript toggle
- **Icons**: Font Awesome 6 (already in use)
- **Animations**: CSS transitions + minimal JavaScript
- **Hosting**: GitHub Pages (existing)

### 3.2 File Structure
```
lanagasparyan.github.io/
├── _includes/
│   ├── head/
│   │   └── custom.html          # Theme toggle script
│   ├── footer/
│   │   └── custom.html          # Custom footer content
│   └── theme-toggle.html        # Dark/light mode toggle button
├── _layouts/
│   ├── custom-home.html         # New custom home layout
│   └── custom-single.html       # New custom single page layout
├── assets/
│   ├── css/
│   │   ├── main.scss           # Main stylesheet (expanded)
│   │   └── _custom.scss        # Custom component styles
│   ├── js/
│   │   └── theme-toggle.js     # Theme switcher logic
│   └── images/
│       ├── profile.jpg         # Professional headshot
│       ├── projects/           # Project screenshots
│       └── og-image.jpg        # Social media preview
├── knol/
│   ├── PORTFOLIO_SPEC.md       # This document
│   ├── IMPLEMENTATION_TODO.md  # Detailed implementation checklist
│   └── mockup.html             # Visual mockup for iteration
├── index.markdown
├── about.markdown
├── projects.markdown
├── skills.markdown
├── resume.markdown
└── _config.yml
```

### 3.3 Dark Mode Implementation Strategy

**Approach**: CSS Custom Properties + localStorage

```css
:root {
  /* Light mode (default) */
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --text-primary: #2c3e50;
  --text-secondary: #7f8c8d;
  --accent: #0abab5;
  --card-bg: #ffffff;
  --card-border: #e8e8e8;
}

[data-theme="dark"] {
  /* Dark mode */
  --bg-primary: #1a1a1a;
  --bg-secondary: #2d2d2d;
  --text-primary: #e4e4e7;
  --text-secondary: #a1a1aa;
  --accent: #22d3ee;
  --card-bg: #27272a;
  --card-border: #3f3f46;
}
```

**Toggle Logic**:
1. Check localStorage for saved preference
2. Fall back to system preference (prefers-color-scheme)
3. Toggle button switches theme and saves to localStorage
4. Smooth transition between themes (0.3s)

---

## 4. Design Specification

### 4.1 Color Palette

#### Light Mode
- **Background Primary**: `#ffffff` (pure white)
- **Background Secondary**: `#f8f9fa` (light gray)
- **Text Primary**: `#2c3e50` (dark blue-gray)
- **Text Secondary**: `#7f8c8d` (medium gray)
- **Accent Primary**: `#0abab5` (mint/teal)
- **Accent Secondary**: `#22c55e` (success green)
- **Card Background**: `#ffffff`
- **Card Border**: `#e8e8e8`
- **Shadow**: `rgba(0, 0, 0, 0.08)`

#### Dark Mode
- **Background Primary**: `#1a1a1a` (near black)
- **Background Secondary**: `#2d2d2d` (dark gray)
- **Text Primary**: `#e4e4e7` (light gray)
- **Text Secondary**: `#a1a1aa` (medium gray)
- **Accent Primary**: `#22d3ee` (bright cyan)
- **Accent Secondary**: `#34d399` (bright green)
- **Card Background**: `#27272a` (dark card)
- **Card Border**: `#3f3f46` (subtle border)
- **Shadow**: `rgba(0, 0, 0, 0.4)`

### 4.2 Typography

**Font Stack**:
- **Headings**: 'Inter', 'Helvetica Neue', sans-serif (700 weight)
- **Body**: 'Inter', 'Helvetica Neue', sans-serif (400 weight)
- **Code**: 'Fira Code', 'Monaco', monospace

**Scale**:
- **H1**: 3.5rem (56px) - Hero title
- **H2**: 2.5rem (40px) - Section headers
- **H3**: 1.75rem (28px) - Card titles
- **H4**: 1.25rem (20px) - Subsections
- **Body**: 1rem (16px) - Base text
- **Small**: 0.875rem (14px) - Captions

**Line Height**:
- Headings: 1.2
- Body: 1.6

### 4.3 Spacing System
Using 8px base unit:
- **xs**: 0.5rem (8px)
- **sm**: 1rem (16px)
- **md**: 1.5rem (24px)
- **lg**: 2rem (32px)
- **xl**: 3rem (48px)
- **2xl**: 4rem (64px)
- **3xl**: 6rem (96px)

### 4.4 Component Specifications

#### Hero Section (Landing)
- **Layout**: Full-width, centered content
- **Height**: 100vh on desktop, auto on mobile
- **Background**: Subtle gradient overlay
- **Content**:
  - Large name/title (H1)
  - Professional headshot (400x400px, rounded)
  - Tagline (2-3 sentences)
  - 3-4 CTA buttons (GitHub, LinkedIn, Resume, Contact)
  - Badges (Location, Education, Open Source)
- **Animation**: Fade-in on load (0.8s)

#### Project Cards
- **Layout**: CSS Grid, 3 columns (desktop), 1 column (mobile)
- **Dimensions**: Auto height, min 350px
- **Structure**:
  - Project screenshot (16:9 aspect ratio, 100% width)
  - Title (H3)
  - Description (2-3 lines, truncated)
  - Technology tags (pills/badges)
  - Metrics (users, stars, etc.)
  - CTA button (View Project / GitHub)
- **Hover Effect**:
  - Lift up 4px
  - Shadow increase
  - Transition: 0.3s ease

#### Skills Section
- **Layout**: Grid with icon + text
- **Categories**: Languages, Frontend, Backend, Cloud, Tools
- **Display**: Icons with labels, grouped by category
- **Style**: Clean, scannable, badge format

#### Navigation
- **Style**: Fixed header with blur backdrop
- **Items**: Home, About, Projects, Skills, Resume, Blog
- **Right Side**: Theme toggle button
- **Mobile**: Hamburger menu
- **Scroll Behavior**: Hide on scroll down, show on scroll up

#### Footer
- **Content**: Copyright, social links, quick navigation
- **Style**: Subtle, not prominent
- **Background**: Slightly different from body

### 4.5 Responsive Breakpoints
- **Mobile**: 0-640px
- **Tablet**: 641px-1024px
- **Desktop**: 1025px-1440px
- **Wide**: 1441px+

---

## 5. Content Strategy

### 5.1 Pages & Structure

#### Home Page (/)
1. **Hero Section**
   - Name + Title
   - Professional photo
   - Elevator pitch (3 lines)
   - CTA buttons

2. **Featured Projects** (3 projects)
   - BinaryDecimal.com (40K+ users)
   - MemoDiction.com (25K+ users)
   - Skill Quest (Full-stack AI)

3. **Technical Expertise** (3-column grid)
   - Languages
   - Frontend & Backend
   - Cloud & DevOps

4. **Recent Blog Posts** (if blog exists)

5. **Call to Action**
   - "Let's Work Together" section
   - Contact button

#### About Page (/about/)
- Professional background
- Education timeline
- Certifications
- Personal interests
- Photo gallery (optional)

#### Projects Page (/projects/)
- All projects (6+ projects)
- Filterable by technology
- Each with:
  - Screenshot
  - Description
  - Tech stack
  - Live link / GitHub
  - Impact metrics

#### Skills Page (/skills/)
- Categorized skills
- Proficiency indicators
- Tools & technologies
- Certifications

#### Resume Page (/resume/)
- Embedded PDF viewer
- Download button
- Text version for SEO

### 5.2 Content from resume.tex

**Key Information to Highlight**:
- **Title**: Full-Stack Software Engineer/Developer
- **Experience**: 3+ years, 65K+ users
- **Top Skills**: React, Spring Boot, AWS, Python, TypeScript
- **Certifications**:
  - AWS Certified Cloud Practitioner (2023)
  - CompTIA Project+ (2025)
  - ITIL Foundation, CompTIA A+, Google IT Support
- **Education**: BS Software Engineering, WGU (2025)
- **Contact**: lana5545@gmail.com, +1-(917) 943-2490, New York, NY

**Projects to Feature**:
1. **BinaryDecimal.com** - 17+ utilities, 40K+ users, React/TS/Tailwind
2. **MemoDiction.com** - AI dictionary, 25K+ users, Python/OpenAI/React
3. **Skill Quest** - Full-stack AI planner, Spring Boot/React/PostgreSQL
4. **Enterprise Inventory Management** - Java/SQL/JavaFX/MVC
5. **AI Code Quality Analyzer** - Python/Flask/React/NLP
6. **Scientific Data Processing** - Python/NetCDF/Climate Data

---

## 6. Performance Requirements

### 6.1 Load Time Targets
- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.5s
- **Cumulative Layout Shift (CLS)**: < 0.1

### 6.2 Optimization Strategies
1. **Images**:
   - WebP format with JPEG fallback
   - Lazy loading for below-fold content
   - Responsive images with srcset
   - Max 150KB per image

2. **CSS**:
   - Critical CSS inline
   - Defer non-critical styles
   - Minification in production

3. **JavaScript**:
   - Minimal JS (theme toggle only)
   - Defer non-critical scripts
   - No heavy frameworks

4. **Fonts**:
   - System fonts as fallback
   - Font-display: swap
   - Subset fonts if using web fonts

### 6.3 Lighthouse Score Goals
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

---

## 7. Accessibility Requirements

### 7.1 WCAG 2.1 AA Compliance
- ✅ **Color Contrast**: 4.5:1 for normal text, 3:1 for large text
- ✅ **Keyboard Navigation**: All interactive elements accessible via keyboard
- ✅ **Focus Indicators**: Visible focus states for all interactive elements
- ✅ **Alt Text**: Descriptive alt text for all images
- ✅ **Semantic HTML**: Proper heading hierarchy, landmarks
- ✅ **ARIA Labels**: Where necessary for screen readers

### 7.2 Theme Toggle Accessibility
- Keyboard accessible (Enter/Space to toggle)
- ARIA labels for screen readers
- High contrast in both modes
- Visual indicator of current theme

---

## 8. Browser Support

### 8.1 Target Browsers
- **Chrome**: Latest 2 versions
- **Firefox**: Latest 2 versions
- **Safari**: Latest 2 versions (iOS + macOS)
- **Edge**: Latest 2 versions

### 8.2 Progressive Enhancement
- Basic content accessible without JavaScript
- CSS fallbacks for older browsers
- Graceful degradation of animations

---

## 9. SEO & Social Media

### 9.1 Meta Tags
```html
<meta name="description" content="Full-Stack Software Engineer with 3+ years building production applications serving 65K+ users. Expertise in React, Spring Boot, and AWS.">
<meta property="og:title" content="Lana Gasparyan - Software Engineer">
<meta property="og:description" content="Full-Stack Software Engineer specializing in React, Spring Boot, and AWS">
<meta property="og:image" content="/assets/images/og-image.jpg">
<meta property="og:url" content="https://lanagasparyan.github.io">
<meta name="twitter:card" content="summary_large_image">
```

### 9.2 Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Lana Gasparyan",
  "jobTitle": "Full-Stack Software Engineer",
  "url": "https://lanagasparyan.github.io",
  "sameAs": [
    "https://github.com/lanagasparyan",
    "https://www.linkedin.com/in/lanagasparyan"
  ]
}
```

---

## 10. Implementation Phases

### Phase 1: Foundation (Tasks 1-10)
- Setup custom layouts and includes
- Implement dark mode toggle
- Create base CSS architecture with variables
- Update _config.yml

### Phase 2: Hero & Navigation (Tasks 11-20)
- Build hero section
- Create modern navigation
- Add theme toggle button
- Implement responsive menu

### Phase 3: Components (Tasks 21-35)
- Project cards with images
- Skills grid
- Footer redesign
- Button components

### Phase 4: Content Pages (Tasks 36-45)
- Home page redesign
- About page enhancement
- Projects gallery
- Skills showcase

### Phase 5: Polish & Optimization (Tasks 46-55)
- Animations and transitions
- Image optimization
- Performance tuning
- Accessibility audit

### Phase 6: Testing & Launch (Tasks 56-60)
- Cross-browser testing
- Mobile testing
- Lighthouse audit
- Deploy to production

---

## 11. Success Metrics

### 11.1 Quantitative
- Lighthouse Performance score: 95+
- Page load time: < 2 seconds
- Bounce rate: < 40%
- Average session duration: > 2 minutes

### 11.2 Qualitative
- Modern, professional appearance
- Smooth dark/light mode transitions
- Responsive on all devices
- Easy to navigate and find information

---

## 12. Future Enhancements (Post-Launch)

### 12.1 Phase 2 Features
- Blog section with syntax highlighting
- Project filtering by technology
- Contact form with email integration
- Animated background (particles.js or similar)

### 12.2 Advanced Features
- Search functionality
- Reading time estimates for blog posts
- Table of contents for long articles
- RSS feed for blog

### 12.3 Analytics
- Google Analytics 4 integration
- Heat mapping (Hotjar)
- A/B testing for CTA buttons

---

## 13. Maintenance Plan

### 13.1 Regular Updates
- **Monthly**: Review and update project metrics
- **Quarterly**: Add new projects, update resume
- **Annually**: Design refresh, dependency updates

### 13.2 Content Updates
- Blog posts: Aim for 1-2 per month
- Project updates: As completed
- Skills: Update as learned

---

## 14. Risk Assessment

### 14.1 Technical Risks
| Risk | Impact | Mitigation |
|------|--------|------------|
| Jekyll build errors | High | Test locally before pushing |
| Theme conflicts | Medium | Override with !important carefully |
| Performance degradation | Medium | Regular Lighthouse audits |
| Browser compatibility | Low | Use modern CSS with fallbacks |

### 14.2 Timeline Risks
| Risk | Impact | Mitigation |
|------|--------|------------|
| Scope creep | Medium | Stick to Phase 1 requirements |
| Design indecision | Medium | Use mockup for approval first |
| Content gaps | Low | Use resume.tex as source of truth |

---

## 15. Approval & Sign-off

This specification document should be reviewed and approved before implementation begins.

**Review Checklist**:
- [ ] Design direction approved
- [ ] Color palette confirmed
- [ ] Component mockup reviewed
- [ ] Content strategy agreed upon
- [ ] Technical approach validated
- [ ] Timeline realistic

**Next Steps**:
1. Review and approve this spec
2. Review HTML mockup (knol/mockup.html)
3. Approve implementation todo (knol/IMPLEMENTATION_TODO.md)
4. Begin Phase 1 implementation

---

*Document Version: 1.0*
*Last Updated: October 24, 2025*
*Author: Claude Code (Sonnet 4.5)*
