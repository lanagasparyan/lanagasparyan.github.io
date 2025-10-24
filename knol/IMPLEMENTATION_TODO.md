# Portfolio Redesign - Implementation Checklist

**Project**: Lana Gasparyan Portfolio Redesign
**Status**: Planning Phase
**Last Updated**: October 24, 2025

---

## Task Legend
- 🤖 **LLM Task**: Can be completed by AI assistant
- 👤 **Human Task**: Requires human decision/input
- ⚙️ **Mixed Task**: Requires both LLM and human collaboration

---

## Phase 1: Foundation & Setup (Tasks 1-10)

### Task 1: Create Custom Includes Directory 🤖
**Description**: Set up Jekyll includes directory structure for custom components
**Files**: `_includes/head/custom.html`, `_includes/footer/custom.html`
**Commit**: `feat: create custom includes directory structure`
**Dependencies**: None
**Estimated Time**: 10 minutes

**Steps**:
1. Create `_includes/head/` directory
2. Create `_includes/head/custom.html` file
3. Create `_includes/footer/` directory
4. Create `_includes/footer/custom.html` file

---

### Task 2: Add Theme Toggle Include 🤖
**Description**: Create reusable theme toggle button component
**Files**: `_includes/theme-toggle.html`
**Commit**: `feat: add theme toggle button component`
**Dependencies**: Task 1
**Estimated Time**: 15 minutes

**Steps**:
1. Create `_includes/theme-toggle.html`
2. Add HTML structure for toggle button
3. Add Font Awesome moon/sun icons
4. Add accessibility attributes (aria-label, role)

---

### Task 3: Create Theme Toggle JavaScript 🤖
**Description**: Implement dark/light mode switcher with localStorage
**Files**: `assets/js/theme-toggle.js`
**Commit**: `feat: implement dark mode toggle with localStorage persistence`
**Dependencies**: Task 2
**Estimated Time**: 30 minutes

**Steps**:
1. Create `assets/js/` directory
2. Create `theme-toggle.js` file
3. Implement theme detection (localStorage → system preference → default light)
4. Add toggle event listener
5. Update icon based on current theme
6. Save preference to localStorage
7. Test in multiple browsers

---

### Task 4: Update _config.yml with Modern Settings 🤖
**Description**: Update Jekyll configuration with correct personal info and modern settings
**Files**: `_config.yml`
**Commit**: `config: update site configuration with correct contact info`
**Dependencies**: None
**Estimated Time**: 15 minutes

**Steps**:
1. Update email from placeholder to `lana5545@gmail.com`
2. Update phone number to `+1-(917) 943-2490`
3. Add LinkedIn username: `lanagasparyan`
4. Verify GitHub username: `lanagasparyan`
5. Update description to match resume
6. Add author metadata
7. Verify timezone is correct

---

### Task 5: Create CSS Variables Architecture 🤖
**Description**: Set up CSS custom properties for theming
**Files**: `assets/css/_variables.scss`
**Commit**: `style: create CSS variables architecture for theming`
**Dependencies**: None
**Estimated Time**: 30 minutes

**Steps**:
1. Create `_variables.scss` in `assets/css/`
2. Define `:root` light mode variables
3. Define `[data-theme="dark"]` dark mode variables
4. Include color palette (bg, text, accent, card, shadow)
5. Add transition properties for smooth theme switching
6. Document each variable with comments

---

### Task 6: Update main.scss to Import Variables 🤖
**Description**: Restructure main stylesheet to use new variables
**Files**: `assets/css/main.scss`
**Commit**: `style: restructure main stylesheet with variables import`
**Dependencies**: Task 5
**Estimated Time**: 15 minutes

**Steps**:
1. Open `assets/css/main.scss`
2. Add `@import "variables";` after theme imports
3. Update existing styles to use CSS variables
4. Remove hardcoded colors
5. Test compilation with `bundle exec jekyll build`

---

### Task 7: Add Google Fonts (Inter) 👤
**Description**: Import modern font family for better typography
**Files**: `_includes/head/custom.html`
**Commit**: `style: add Inter font family from Google Fonts`
**Dependencies**: Task 1
**Estimated Time**: 10 minutes

**Steps**:
1. Open `_includes/head/custom.html`
2. Add Google Fonts link for Inter (weights: 400, 500, 600, 700)
3. Consider font-display: swap for performance
4. Test font loading

**Human Decision**: Confirm Inter font choice or select alternative

---

### Task 8: Create Custom Home Layout 🤖
**Description**: Create custom Jekyll layout for home page
**Files**: `_layouts/custom-home.html`
**Commit**: `feat: create custom home layout with modern structure`
**Dependencies**: Tasks 2, 3
**Estimated Time**: 45 minutes

**Steps**:
1. Create `_layouts/` directory if not exists
2. Create `custom-home.html`
3. Extend default layout
4. Include theme toggle in header
5. Include theme-toggle.js script
6. Add custom classes for hero section
7. Test layout renders correctly

---

### Task 9: Create Custom Single Page Layout 🤖
**Description**: Create custom Jekyll layout for content pages
**Files**: `_layouts/custom-single.html`
**Commit**: `feat: create custom single page layout`
**Dependencies**: Tasks 2, 3
**Estimated Time**: 30 minutes

**Steps**:
1. Create `custom-single.html` in `_layouts/`
2. Extend default single layout
3. Include theme toggle
4. Add consistent header/footer
5. Test with existing pages

---

### Task 10: Add Profile Image 👤
**Description**: Add professional headshot to assets
**Files**: `assets/images/profile.jpg`
**Commit**: `assets: add professional profile photo`
**Dependencies**: None
**Estimated Time**: 15 minutes

**Steps**:
1. Select professional headshot
2. Optimize image (target: <200KB)
3. Resize to 800x800px (will display at 400x400)
4. Save as `profile.jpg` in `assets/images/`
5. Create WebP version for modern browsers

**Human Task**: Provide professional photo

---

## Phase 2: Navigation & Header (Tasks 11-15)

### Task 11: Create Modern Navigation Component 🤖
**Description**: Build fixed header with blur backdrop
**Files**: `_includes/navigation.html`, `assets/css/_navigation.scss`
**Commit**: `feat: create modern fixed navigation with blur backdrop`
**Dependencies**: Task 5
**Estimated Time**: 1 hour

**Steps**:
1. Create `_navigation.scss`
2. Implement fixed header positioning
3. Add backdrop-filter blur effect
4. Create responsive navigation menu
5. Add smooth scroll behavior
6. Implement hide-on-scroll-down behavior
7. Test across browsers

---

### Task 12: Add Hamburger Menu for Mobile 🤖
**Description**: Implement responsive mobile navigation
**Files**: `assets/js/navigation.js`, `assets/css/_navigation.scss`
**Commit**: `feat: add responsive hamburger menu for mobile`
**Dependencies**: Task 11
**Estimated Time**: 45 minutes

**Steps**:
1. Create hamburger icon in CSS
2. Add mobile menu styles
3. Implement toggle JavaScript
4. Add smooth transitions
5. Test on various screen sizes
6. Ensure accessibility (keyboard navigation)

---

### Task 13: Style Navigation Links 🤖
**Description**: Add hover effects and active states to nav links
**Files**: `assets/css/_navigation.scss`
**Commit**: `style: enhance navigation link states and transitions`
**Dependencies**: Task 11
**Estimated Time**: 30 minutes

**Steps**:
1. Define link hover states
2. Add active page indicator
3. Implement smooth color transitions
4. Add underline animation on hover
5. Ensure sufficient contrast in both themes

---

### Task 14: Integrate Theme Toggle in Navigation 🤖
**Description**: Position theme toggle button in header
**Files**: `_includes/navigation.html`
**Commit**: `feat: integrate theme toggle into navigation header`
**Dependencies**: Tasks 2, 11
**Estimated Time**: 20 minutes

**Steps**:
1. Add theme toggle to nav HTML
2. Position in header (right side)
3. Ensure visible on mobile
4. Test toggle functionality
5. Verify accessibility

---

### Task 15: Add Logo/Monogram 👤
**Description**: Create personal logo or monogram for navigation
**Files**: `assets/images/logo.svg` or use text
**Commit**: `assets: add personal logo to navigation`
**Dependencies**: Task 11
**Estimated Time**: 30 minutes

**Steps**:
1. Design simple monogram (LG) OR use text
2. Create SVG if using graphic
3. Add to navigation
4. Ensure scales properly
5. Link to home page

**Human Decision**: Choose between text monogram or custom logo

---

## Phase 3: Hero Section (Tasks 16-20)

### Task 16: Create Hero Section Component 🤖
**Description**: Build full-height hero landing section
**Files**: `_includes/hero.html`, `assets/css/_hero.scss`
**Commit**: `feat: create hero section with profile and CTA`
**Dependencies**: Task 10
**Estimated Time**: 1.5 hours

**Steps**:
1. Create `_hero.scss` stylesheet
2. Create `_includes/hero.html`
3. Implement two-column grid (text + image)
4. Add profile image with circular mask
5. Style heading with accent color
6. Add tagline with proper typography
7. Make responsive (stack on mobile)
8. Test across breakpoints

---

### Task 17: Add Hero Badges 🤖
**Description**: Create location, education, certification badges
**Files**: `assets/css/_hero.scss`, `_includes/hero.html`
**Commit**: `feat: add credential badges to hero section`
**Dependencies**: Task 16
**Estimated Time**: 30 minutes

**Steps**:
1. Create badge HTML structure
2. Add Font Awesome icons
3. Style with pill shape and theme colors
4. Make responsive (wrap on mobile)
5. Add subtle animation on page load

---

### Task 18: Create CTA Button Component 🤖
**Description**: Build reusable button styles (primary, outline, sizes)
**Files**: `assets/css/_buttons.scss`
**Commit**: `style: create button component system`
**Dependencies**: Task 5
**Estimated Time**: 45 minutes

**Steps**:
1. Create `_buttons.scss`
2. Define `.btn` base class
3. Create `.btn-primary` variant
4. Create `.btn-outline` variant
5. Create size variants (small, large)
6. Add hover effects (lift + shadow)
7. Add icon spacing
8. Test in both themes

---

### Task 19: Add Hero CTA Buttons 🤖
**Description**: Add GitHub, LinkedIn, Email buttons to hero
**Files**: `_includes/hero.html`
**Commit**: `feat: add social CTA buttons to hero section`
**Dependencies**: Tasks 16, 18
**Estimated Time**: 20 minutes

**Steps**:
1. Add button group container
2. Add GitHub button (primary)
3. Add LinkedIn button (outline)
4. Add Email button (outline)
5. Ensure proper spacing
6. Test link functionality

---

### Task 20: Add Hero Background Gradient 🤖
**Description**: Add subtle gradient background to hero
**Files**: `assets/css/_hero.scss`
**Commit**: `style: add gradient background to hero section`
**Dependencies**: Task 16
**Estimated Time**: 15 minutes

**Steps**:
1. Add linear gradient background
2. Use theme-appropriate colors
3. Ensure text contrast is sufficient
4. Test in both light and dark modes

---

## Phase 4: Skills Section (Tasks 21-25)

### Task 21: Create Skills Grid Component 🤖
**Description**: Build responsive skills grid layout
**Files**: `_includes/skills.html`, `assets/css/_skills.scss`
**Commit**: `feat: create skills grid with card components`
**Dependencies**: Task 5
**Estimated Time**: 1 hour

**Steps**:
1. Create `_skills.scss`
2. Create `_includes/skills.html`
3. Implement CSS Grid (3 columns desktop, 1 mobile)
4. Create card component styling
5. Add hover effects
6. Test responsiveness

---

### Task 22: Add Skill Card Icons 🤖
**Description**: Add Font Awesome icons for each skill category
**Files**: `_includes/skills.html`
**Commit**: `feat: add category icons to skill cards`
**Dependencies**: Task 21
**Estimated Time**: 20 minutes

**Steps**:
1. Add `fa-code` icon for Languages
2. Add `fa-laptop-code` for Frontend/Backend
3. Add `fa-cloud` for Cloud/DevOps
4. Size and color icons with accent
5. Test visibility in both themes

---

### Task 23: Create Skill Badges 🤖
**Description**: Style individual technology badges
**Files**: `assets/css/_skills.scss`
**Commit**: `style: create skill badge component`
**Dependencies**: Task 21
**Estimated Time**: 30 minutes

**Steps**:
1. Define `.skill-badge` class
2. Add pill-shaped styling
3. Use secondary background
4. Add proper spacing in flex container
5. Test wrapping behavior

---

### Task 24: Populate Skills from Resume 🤖
**Description**: Add all technologies from resume.tex to skills section
**Files**: `_includes/skills.html`
**Commit**: `content: populate skills section with technologies`
**Dependencies**: Task 21
**Estimated Time**: 30 minutes

**Technologies to Include**:
- **Languages**: Python, Java, TypeScript, JavaScript, SQL, HTML/CSS, C++, Bash
- **Frontend**: React, Vite, Tailwind CSS, Jekyll, Responsive Design
- **Backend**: Spring Boot, Node.js, Flask, Django, RESTful APIs, Microservices, JWT
- **Cloud & DevOps**: AWS (EC2, S3, Lambda, CloudFront, Route 53, RDS), Docker, GitHub Actions, CI/CD
- **Data & AI**: PostgreSQL, OpenAI API, LLM Integration, Prompt Engineering, NLP

---

### Task 25: Add Section Headers Component 🤖
**Description**: Create reusable section header styling
**Files**: `assets/css/_sections.scss`
**Commit**: `style: create section header component`
**Dependencies**: Task 5
**Estimated Time**: 20 minutes

**Steps**:
1. Create `_sections.scss`
2. Define `.section` container class
3. Define `.section-header` styling
4. Add `.section-subtitle` for descriptions
5. Center align text
6. Add proper spacing

---

## Phase 5: Projects Section (Tasks 26-35)

### Task 26: Create Projects Grid Component 🤖
**Description**: Build responsive projects grid layout
**Files**: `_includes/projects.html`, `assets/css/_projects.scss`
**Commit**: `feat: create projects grid with card layout`
**Dependencies**: Task 5
**Estimated Time**: 1.5 hours

**Steps**:
1. Create `_projects.scss`
2. Create `_includes/projects.html`
3. Implement CSS Grid (3 columns → 1 mobile)
4. Create project card structure
5. Add image placeholder area
6. Add hover lift effect
7. Test responsiveness

---

### Task 27: Style Project Cards 🤖
**Description**: Add card styling with borders, shadows, and spacing
**Files**: `assets/css/_projects.scss`
**Commit**: `style: enhance project card appearance`
**Dependencies**: Task 26
**Estimated Time**: 45 minutes

**Steps**:
1. Add card background and borders
2. Add shadow (subtle default, enhanced on hover)
3. Add border-radius for rounded corners
4. Set up flex layout for content
5. Add padding and spacing
6. Test in both themes

---

### Task 28: Add Project Screenshots 👤
**Description**: Capture and optimize screenshots for each project
**Files**: `assets/images/projects/`
**Commit**: `assets: add project screenshots`
**Dependencies**: None
**Estimated Time**: 1 hour

**Projects Needing Screenshots**:
1. BinaryDecimal.com
2. MemoDiction.com
3. Skill Quest (if deployed, else mockup)
4. Enterprise Inventory Management
5. AI Code Quality Analyzer
6. Scientific Data Processing

**Steps for Each**:
1. Capture screenshot (1200x675px - 16:9 ratio)
2. Optimize for web (<150KB)
3. Create WebP version
4. Name consistently: `binarydecimal.jpg`, `memodiction.jpg`, etc.

**Human Task**: Capture and provide screenshots

---

### Task 29: Create Technology Tags Component 🤖
**Description**: Build pill-style technology tags for projects
**Files**: `assets/css/_projects.scss`
**Commit**: `style: create technology tag component`
**Dependencies**: Task 26
**Estimated Time**: 30 minutes

**Steps**:
1. Define `.tech-tag` class
2. Style as small pills
3. Use secondary background color
4. Add flex wrap container
5. Ensure proper spacing
6. Test with many tags

---

### Task 30: Add Project Metrics Display 🤖
**Description**: Style user metrics and impact indicators
**Files**: `assets/css/_projects.scss`, `_includes/projects.html`
**Commit**: `feat: add project metrics display`
**Dependencies**: Task 26
**Estimated Time**: 20 minutes

**Steps**:
1. Create `.project-metrics` class
2. Style with accent color
3. Make bold and prominent
4. Position above description
5. Test visibility

---

### Task 31: Populate Featured Projects (Home) 🤖
**Description**: Add 3 featured projects to home page
**Files**: `index.markdown`
**Commit**: `content: add featured projects to home page`
**Dependencies**: Tasks 26, 28
**Estimated Time**: 30 minutes

**Featured Projects**:
1. **BinaryDecimal.com** - 40K+ users, React/TS/Tailwind
2. **MemoDiction.com** - 25K+ users, Python/OpenAI/React
3. **Skill Quest** - Full-stack AI, Spring Boot/React/PostgreSQL

---

### Task 32: Populate All Projects (Projects Page) 🤖
**Description**: Add all 6 projects to projects page
**Files**: `projects.markdown`
**Commit**: `content: populate projects page with all projects`
**Dependencies**: Tasks 26, 28
**Estimated Time**: 45 minutes

**All Projects**:
1. BinaryDecimal.com
2. MemoDiction.com
3. Skill Quest
4. Enterprise Inventory Management
5. AI Code Quality Analyzer
6. Scientific Data Processing

---

### Task 33: Add Project Filtering (Optional) ⚙️
**Description**: Add technology filter buttons for projects
**Files**: `assets/js/project-filter.js`, `projects.markdown`
**Commit**: `feat: add project filtering by technology`
**Dependencies**: Task 32
**Estimated Time**: 1.5 hours

**Steps**:
1. Create filter button group
2. Extract unique technologies
3. Implement filter JavaScript
4. Add "All" button
5. Animate filtering
6. Test with all technologies

**Human Decision**: Confirm if filtering is desired for MVP

---

### Task 34: Add Project Card Footer 🤖
**Description**: Add links and actions to project cards
**Files**: `assets/css/_projects.scss`
**Commit**: `style: add project card footer with actions`
**Dependencies**: Task 26
**Estimated Time**: 30 minutes

**Steps**:
1. Create footer section in card
2. Add top border separator
3. Add button group
4. Style "View Site" and "GitHub" buttons
5. Ensure proper spacing
6. Test link functionality

---

### Task 35: Add Hover Image Effect (Optional) 🤖
**Description**: Add zoom or tilt effect on project image hover
**Files**: `assets/css/_projects.scss`
**Commit**: `style: add hover animation to project images`
**Dependencies**: Task 26
**Estimated Time**: 20 minutes

**Steps**:
1. Add transform scale on hover
2. Add smooth transition
3. Ensure doesn't break layout
4. Test performance
5. Reduce motion for accessibility

---

## Phase 6: Additional Sections (Tasks 36-40)

### Task 36: Create CTA Section Component 🤖
**Description**: Build call-to-action section with buttons
**Files**: `_includes/cta.html`, `assets/css/_cta.scss`
**Commit**: `feat: create call-to-action section component`
**Dependencies**: Task 18
**Estimated Time**: 45 minutes

**Steps**:
1. Create `_cta.scss`
2. Create `_includes/cta.html`
3. Add background with border-radius
4. Center align content
5. Add button group
6. Test in both themes

---

### Task 37: Update Footer Component 🤖
**Description**: Modernize footer with social links
**Files**: `_includes/footer/custom.html`, `assets/css/_footer.scss`
**Commit**: `style: redesign footer with modern layout`
**Dependencies**: Task 5
**Estimated Time**: 45 minutes

**Steps**:
1. Create `_footer.scss`
2. Add two-column layout (copyright | social links)
3. Style social icon buttons
4. Add hover effects
5. Ensure theme compatibility
6. Test responsiveness

---

### Task 38: Update About Page Content ⚙️
**Description**: Rewrite about page with professional background
**Files**: `about.markdown`
**Commit**: `content: update about page with professional background`
**Dependencies**: None
**Estimated Time**: 30 minutes

**Content to Include**:
- Professional journey
- Education (BS Software Engineering, WGU 2025)
- Certifications (AWS, CompTIA Project+, ITIL, A+)
- Personal interests
- Why software engineering

**Human Input**: Review and approve content

---

### Task 39: Update Resume Page ⚙️
**Description**: Add PDF viewer and download button
**Files**: `resume.markdown`, `assets/files/Lana_Gasparyan_Resume.pdf`
**Commit**: `feat: add resume PDF viewer and download`
**Dependencies**: None
**Estimated Time**: 30 minutes

**Steps**:
1. Generate PDF from resume.tex
2. Upload to `assets/files/`
3. Add embed/iframe viewer
4. Add prominent download button
5. Add fallback link
6. Test PDF display

**Human Task**: Generate and provide final PDF

---

### Task 40: Update Skills Page Layout 🤖
**Description**: Enhance skills page with detailed breakdown
**Files**: `skills.markdown`, `assets/css/_skills.scss`
**Commit**: `style: enhance skills page layout and organization`
**Dependencies**: Task 21
**Estimated Time**: 45 minutes

**Steps**:
1. Organize by category
2. Add proficiency indicators (optional)
3. Add certification badges
4. Ensure consistent styling
5. Test readability

---

## Phase 7: Polish & Animations (Tasks 41-45)

### Task 41: Add Scroll Animations 🤖
**Description**: Implement fade-in animations on scroll
**Files**: `assets/js/scroll-animations.js`, `assets/css/_animations.scss`
**Commit**: `feat: add scroll-triggered fade-in animations`
**Dependencies**: None
**Estimated Time**: 1 hour

**Steps**:
1. Create `scroll-animations.js`
2. Use Intersection Observer API
3. Add fade-in CSS classes
4. Apply to sections and cards
5. Respect prefers-reduced-motion
6. Test performance

---

### Task 42: Add Smooth Scroll Behavior 🤖
**Description**: Implement smooth scrolling for anchor links
**Files**: `assets/css/main.scss` or `assets/js/navigation.js`
**Commit**: `feat: add smooth scroll behavior for navigation`
**Dependencies**: Task 11
**Estimated Time**: 15 minutes

**Steps**:
1. Add `scroll-behavior: smooth` to html
2. OR implement JavaScript smooth scroll
3. Test anchor link scrolling
4. Respect prefers-reduced-motion

---

### Task 43: Add Loading Transitions 🤖
**Description**: Add subtle transitions for page load
**Files**: `assets/css/_animations.scss`
**Commit**: `style: add page load transitions`
**Dependencies**: None
**Estimated Time**: 30 minutes

**Steps**:
1. Create fade-in animation
2. Apply to hero section
3. Stagger subsequent sections
4. Keep subtle and fast
5. Test perceived performance

---

### Task 44: Optimize Transition Performance 🤖
**Description**: Ensure animations use GPU acceleration
**Files**: `assets/css/_animations.scss`
**Commit**: `perf: optimize animations for GPU acceleration`
**Dependencies**: Task 41
**Estimated Time**: 20 minutes

**Steps**:
1. Use transform instead of position
2. Use opacity instead of visibility where possible
3. Add `will-change` sparingly
4. Test with Chrome DevTools Performance
5. Ensure 60fps animations

---

### Task 45: Add Hover Micro-interactions 🤖
**Description**: Add subtle hover effects to interactive elements
**Files**: `assets/css/_animations.scss`
**Commit**: `style: add hover micro-interactions to interactive elements`
**Dependencies**: None
**Estimated Time**: 30 minutes

**Steps**:
1. Add scale effect to buttons
2. Add color transitions to links
3. Add shadow lift to cards
4. Keep transitions fast (0.3s)
5. Test across components

---

## Phase 8: Optimization (Tasks 46-50)

### Task 46: Optimize Images 🤖
**Description**: Compress and convert images to WebP
**Files**: `assets/images/**`
**Commit**: `perf: optimize images and add WebP versions`
**Dependencies**: Tasks 10, 28
**Estimated Time**: 45 minutes

**Steps**:
1. Install image optimization tools
2. Create WebP versions of all images
3. Compress JPEGs (target: <150KB)
4. Add `<picture>` elements with fallbacks
5. Test image loading
6. Verify quality

---

### Task 47: Add Lazy Loading 🤖
**Description**: Implement lazy loading for images
**Files**: HTML files with images
**Commit**: `perf: add lazy loading for images`
**Dependencies**: Task 46
**Estimated Time**: 20 minutes

**Steps**:
1. Add `loading="lazy"` to img tags
2. Add `decoding="async"`
3. Test below-fold images
4. Verify Lighthouse improvement

---

### Task 48: Minify CSS and JS 🤖
**Description**: Set up minification for production
**Files**: `_config.yml`, build process
**Commit**: `perf: enable CSS and JS minification`
**Dependencies**: None
**Estimated Time**: 30 minutes

**Steps**:
1. Verify Jekyll minification is enabled
2. Test build output
3. Check file sizes
4. Verify functionality after minification

---

### Task 49: Add Critical CSS (Optional) ⚙️
**Description**: Inline critical CSS for faster First Contentful Paint
**Files**: `_includes/head/custom.html`
**Commit**: `perf: add critical CSS inlining`
**Dependencies**: None
**Estimated Time**: 1 hour

**Steps**:
1. Extract critical CSS for above-fold content
2. Inline in `<head>`
3. Defer non-critical CSS
4. Test FCP improvement
5. Verify no visual regressions

**Human Decision**: Confirm if needed for MVP (may be overkill)

---

### Task 50: Run Lighthouse Audit 🤖
**Description**: Perform Lighthouse audit and fix issues
**Files**: Various
**Commit**: `perf: address Lighthouse audit recommendations`
**Dependencies**: All previous tasks
**Estimated Time**: 1 hour

**Steps**:
1. Run Lighthouse in Chrome DevTools
2. Review Performance, Accessibility, Best Practices, SEO scores
3. Address any issues below 90
4. Document final scores
5. Take screenshots for documentation

**Target Scores**:
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

---

## Phase 9: Accessibility (Tasks 51-55)

### Task 51: Add ARIA Labels 🤖
**Description**: Add ARIA labels for screen reader accessibility
**Files**: All HTML/Markdown files
**Commit**: `a11y: add ARIA labels for screen readers`
**Dependencies**: None
**Estimated Time**: 45 minutes

**Steps**:
1. Add `aria-label` to icon-only buttons
2. Add `role` attributes where needed
3. Add `aria-current` for active nav items
4. Test with screen reader
5. Validate with axe DevTools

---

### Task 52: Verify Keyboard Navigation 🤖
**Description**: Ensure all interactive elements are keyboard accessible
**Files**: Various
**Commit**: `a11y: ensure keyboard navigation for all interactive elements`
**Dependencies**: None
**Estimated Time**: 30 minutes

**Steps**:
1. Test tab order through entire page
2. Ensure focus indicators are visible
3. Test Enter/Space activation
4. Test Escape key for modals/menus
5. Document keyboard shortcuts

---

### Task 53: Check Color Contrast 🤖
**Description**: Verify WCAG AA contrast ratios (4.5:1)
**Files**: `assets/css/_variables.scss`
**Commit**: `a11y: ensure WCAG AA color contrast compliance`
**Dependencies**: Task 5
**Estimated Time**: 30 minutes

**Steps**:
1. Use WebAIM Contrast Checker
2. Test all text/background combinations
3. Adjust colors if needed
4. Test in both light and dark modes
5. Document passing ratios

---

### Task 54: Add Reduced Motion Support 🤖
**Description**: Respect prefers-reduced-motion media query
**Files**: `assets/css/_animations.scss`
**Commit**: `a11y: add support for reduced motion preference`
**Dependencies**: Task 41
**Estimated Time**: 20 minutes

**Steps**:
1. Add `@media (prefers-reduced-motion: reduce)` query
2. Disable or reduce animations
3. Keep instant transitions
4. Test with OS setting enabled
5. Ensure functionality isn't broken

---

### Task 55: Add Skip to Content Link 🤖
**Description**: Add skip link for keyboard users
**Files**: `_layouts/custom-home.html`, `_layouts/custom-single.html`
**Commit**: `a11y: add skip to main content link`
**Dependencies**: Tasks 8, 9
**Estimated Time**: 20 minutes

**Steps**:
1. Add skip link as first element in body
2. Make visually hidden by default
3. Show on focus
4. Link to main content ID
5. Test keyboard navigation

---

## Phase 10: SEO & Meta (Tasks 56-58)

### Task 56: Add Open Graph Meta Tags 🤖
**Description**: Add OG tags for social media sharing
**Files**: `_includes/head/custom.html`
**Commit**: `seo: add Open Graph meta tags`
**Dependencies**: Task 1
**Estimated Time**: 30 minutes

**Steps**:
1. Add og:title
2. Add og:description
3. Add og:image (create social preview image)
4. Add og:url
5. Add og:type
6. Test with Facebook Sharing Debugger

---

### Task 57: Add Twitter Card Meta Tags 🤖
**Description**: Add Twitter Card tags for better previews
**Files**: `_includes/head/custom.html`
**Commit**: `seo: add Twitter Card meta tags`
**Dependencies**: Task 56
**Estimated Time**: 15 minutes

**Steps**:
1. Add twitter:card (summary_large_image)
2. Add twitter:title
3. Add twitter:description
4. Add twitter:image
5. Test with Twitter Card Validator

---

### Task 58: Add Structured Data (JSON-LD) 🤖
**Description**: Add Schema.org structured data for Person
**Files**: `_includes/head/custom.html`
**Commit**: `seo: add structured data for Person schema`
**Dependencies**: Task 1
**Estimated Time**: 30 minutes

**Steps**:
1. Create JSON-LD script
2. Add Person schema
3. Include name, jobTitle, url, sameAs (social profiles)
4. Add to head
5. Validate with Google Rich Results Test

---

## Phase 11: Testing (Tasks 59-60)

### Task 59: Cross-Browser Testing ⚙️
**Description**: Test website in all major browsers
**Files**: None (testing only)
**Commit**: N/A (document findings)
**Dependencies**: All previous tasks
**Estimated Time**: 1 hour

**Browsers to Test**:
- Chrome (latest)
- Firefox (latest)
- Safari (latest - macOS & iOS)
- Edge (latest)

**Test Checklist**:
- [ ] Theme toggle works
- [ ] Navigation is functional
- [ ] All links work
- [ ] Images load correctly
- [ ] Animations are smooth
- [ ] Forms work (if any)
- [ ] Responsive layouts work
- [ ] No console errors

**Human Task**: Perform manual testing

---

### Task 60: Deploy to Production 🤖
**Description**: Push to master and verify GitHub Pages deployment
**Files**: All
**Commit**: `chore: deploy redesigned portfolio to production`
**Dependencies**: All previous tasks
**Estimated Time**: 30 minutes

**Steps**:
1. Create comprehensive final commit
2. Push to master branch
3. Verify GitHub Actions build
4. Check live site (lanagasparyan.github.io)
5. Test all functionality on live site
6. Monitor for errors
7. Celebrate! 🎉

---

## Summary Statistics

**Total Tasks**: 60
**LLM Tasks**: 45
**Human Tasks**: 8
**Mixed Tasks**: 7

**Estimated Total Time**: 35-40 hours
- LLM Work: ~28 hours
- Human Work: ~7-12 hours (depends on content decisions)

**Phases**:
1. Foundation & Setup: ~4 hours
2. Navigation & Header: ~3 hours
3. Hero Section: ~3.5 hours
4. Skills Section: ~2.5 hours
5. Projects Section: ~7 hours
6. Additional Sections: ~3 hours
7. Polish & Animations: ~2.5 hours
8. Optimization: ~3 hours
9. Accessibility: ~2.5 hours
10. SEO & Meta: ~1.5 hours
11. Testing: ~1.5 hours

---

## Commit Message Conventions

Follow conventional commits format:

- `feat:` New feature
- `fix:` Bug fix
- `style:` Styling changes (CSS)
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `test:` Adding or updating tests
- `docs:` Documentation changes
- `chore:` Maintenance tasks
- `config:` Configuration changes
- `a11y:` Accessibility improvements
- `seo:` SEO improvements
- `content:` Content updates
- `assets:` Asset additions/updates

---

## Testing Checklist

Before marking implementation complete, verify:

### Functionality
- [ ] All navigation links work
- [ ] Theme toggle persists preference
- [ ] All project links are correct
- [ ] Contact links work (email, GitHub, LinkedIn)
- [ ] Mobile menu functions properly
- [ ] All images load

### Design
- [ ] Consistent spacing across pages
- [ ] Typography hierarchy is clear
- [ ] Colors work in both themes
- [ ] Hover states are visible
- [ ] Responsive on all breakpoints

### Performance
- [ ] Lighthouse Performance > 95
- [ ] Page loads in < 2 seconds
- [ ] Images are optimized
- [ ] No layout shift (CLS < 0.1)

### Accessibility
- [ ] Lighthouse Accessibility = 100
- [ ] Keyboard navigation works
- [ ] Color contrast passes WCAG AA
- [ ] Screen reader tested
- [ ] Reduced motion respected

### SEO
- [ ] Lighthouse SEO = 100
- [ ] Meta descriptions present
- [ ] OG tags validated
- [ ] Structured data validated
- [ ] Sitemap generated

### Browser Compatibility
- [ ] Chrome works
- [ ] Firefox works
- [ ] Safari works
- [ ] Edge works
- [ ] Mobile Safari works
- [ ] Mobile Chrome works

---

*Document Version: 1.0*
*Last Updated: October 24, 2025*
*Created by: Claude Code (Sonnet 4.5)*
