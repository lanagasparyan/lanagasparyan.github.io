# Portfolio Redesign Planning Documents

**Project**: Lana Gasparyan Portfolio Website Redesign
**Status**: Planning Complete - Ready for Implementation
**Date**: October 24, 2025

---

## 📋 Document Overview

This directory contains all planning and design documents for the portfolio website redesign project.

### Documents in this Directory

1. **`PORTFOLIO_SPEC.md`** - Comprehensive specification document
   - Design research and 2025 trends
   - Technical architecture
   - Color palette and typography
   - Component specifications
   - Performance requirements
   - Accessibility guidelines
   - SEO strategy

2. **`IMPLEMENTATION_TODO.md`** - Detailed implementation checklist
   - 60 numbered tasks across 11 phases
   - Each task includes:
     - Description and commit message
     - Human/LLM/Mixed designation
     - Time estimates
     - Dependencies
     - Detailed steps
   - Total estimated time: 35-40 hours

3. **`mockup.html`** - Interactive visual mockup
   - Fully functional prototype
   - Working dark/light mode toggle
   - Responsive design
   - All major components demonstrated
   - Open in browser to preview design

4. **`resume.tex`** - Source resume in LaTeX
   - Single source of truth for content
   - All project information
   - Contact details
   - Skills and technologies

---

## 🚀 Quick Start Guide

### Step 1: Review the Spec
Open `PORTFOLIO_SPEC.md` and review:
- Design direction (Section 4)
- Color palette (Section 4.1)
- Component specifications (Section 4.4)
- Content strategy (Section 5)

### Step 2: Review the Mockup
1. Open `mockup.html` in your web browser
2. Click the theme toggle button (moon/sun icon) to test dark mode
3. Resize browser to see responsive behavior
4. Review all sections: Hero, Skills, Projects, CTA, Footer

### Step 3: Provide Feedback
Review and approve/request changes for:
- [ ] Overall design aesthetic
- [ ] Color scheme (light and dark modes)
- [ ] Typography and spacing
- [ ] Component layouts
- [ ] Content structure

### Step 4: Make Decisions on Human Tasks
Review `IMPLEMENTATION_TODO.md` for tasks marked 👤 **Human Task**:
- Task 7: Font choice (confirm Inter or choose alternative)
- Task 10: Provide professional headshot photo
- Task 15: Choose text logo or design monogram
- Task 28: Capture project screenshots
- Task 38: Review about page content
- Task 39: Generate final resume PDF
- Task 59: Perform cross-browser testing

### Step 5: Begin Implementation
Once approved, start with Phase 1 (Tasks 1-10):
```bash
# Ensure Jekyll is running locally
bundle exec jekyll serve

# Work through tasks in order
# Each task has clear steps and commit message
```

---

## 📊 Project Statistics

### By the Numbers
- **Total Tasks**: 60
- **LLM Tasks**: 45 (can be done by AI)
- **Human Tasks**: 8 (require human input)
- **Mixed Tasks**: 7 (collaboration needed)
- **Total Time**: 35-40 hours estimated
- **Implementation Phases**: 11 phases

### Phase Breakdown
1. **Foundation & Setup** (10 tasks) - ~4 hours
2. **Navigation & Header** (5 tasks) - ~3 hours
3. **Hero Section** (5 tasks) - ~3.5 hours
4. **Skills Section** (5 tasks) - ~2.5 hours
5. **Projects Section** (10 tasks) - ~7 hours
6. **Additional Sections** (5 tasks) - ~3 hours
7. **Polish & Animations** (5 tasks) - ~2.5 hours
8. **Optimization** (5 tasks) - ~3 hours
9. **Accessibility** (5 tasks) - ~2.5 hours
10. **SEO & Meta** (3 tasks) - ~1.5 hours
11. **Testing** (2 tasks) - ~1.5 hours

---

## 🎯 Key Features

### Design Features
✅ Modern 2025 design aesthetic
✅ Dark and light mode with smooth transitions
✅ Responsive mobile-first design
✅ Professional color palette
✅ Modern typography (Inter font)
✅ Micro-interactions and animations
✅ Gradient backgrounds
✅ Card-based layout system

### Technical Features
✅ CSS custom properties for theming
✅ localStorage theme persistence
✅ Minimal JavaScript (theme toggle + animations)
✅ Fast page loads (< 2s target)
✅ Lighthouse score 95+ target
✅ WCAG 2.1 AA accessibility compliance
✅ SEO optimized with structured data
✅ Social media meta tags (OG, Twitter)

### Content Features
✅ Hero section with professional photo
✅ 3 featured projects on home page
✅ 6+ projects on projects page
✅ Skills grid by category
✅ Professional about page
✅ Resume PDF viewer
✅ Social media links
✅ Contact information

---

## 🎨 Design System

### Color Palette

#### Light Mode
- Background Primary: `#ffffff`
- Background Secondary: `#f8f9fa`
- Text Primary: `#2c3e50`
- Text Secondary: `#7f8c8d`
- Accent: `#0abab5` (mint/teal)

#### Dark Mode
- Background Primary: `#1a1a1a`
- Background Secondary: `#2d2d2d`
- Text Primary: `#e4e4e7`
- Text Secondary: `#a1a1aa`
- Accent: `#22d3ee` (cyan)

### Typography
- **Font Family**: Inter (via Google Fonts)
- **H1**: 3.5rem (56px) - Hero
- **H2**: 2.5rem (40px) - Sections
- **H3**: 1.75rem (28px) - Cards
- **Body**: 1rem (16px)

### Spacing
Based on 8px unit:
- xs: 8px
- sm: 16px
- md: 24px
- lg: 32px
- xl: 48px
- 2xl: 64px
- 3xl: 96px

### Breakpoints
- Mobile: 0-640px
- Tablet: 641px-1024px
- Desktop: 1025px-1440px
- Wide: 1441px+

---

## 🔄 Workflow Recommendations

### Iterative Approach
1. Complete one phase at a time
2. Test after each phase
3. Get feedback before moving to next phase
4. Commit regularly with descriptive messages

### Testing Strategy
- **After Each Task**: Test locally
- **After Each Phase**: Full page review
- **Before Production**: Complete testing checklist

### Feedback Loop
1. Review mockup in browser
2. Request changes if needed
3. Update mockup.html
4. Re-review until approved
5. Proceed with implementation

---

## 📝 Content Source

All content comes from `resume.tex`:
- **Contact**: lana5545@gmail.com, +1-(917) 943-2490, New York, NY
- **Title**: Full-Stack Software Engineer
- **Experience**: 3+ years, 65K+ users
- **Skills**: React, Spring Boot, AWS, Python, TypeScript, etc.
- **Certifications**: AWS Cloud Practitioner, CompTIA Project+, ITIL, A+
- **Education**: BS Software Engineering, WGU (2025)
- **Projects**: 6 major projects with descriptions and tech stacks

---

## ⚠️ Important Notes

### Before Starting Implementation
1. ✅ Review and approve `PORTFOLIO_SPEC.md`
2. ✅ Review and approve `mockup.html` design
3. ⏳ Prepare professional headshot
4. ⏳ Capture project screenshots
5. ⏳ Generate final resume PDF
6. ⏳ Confirm design decisions (font, logo, etc.)

### During Implementation
- Follow task order in `IMPLEMENTATION_TODO.md`
- Use provided commit message formats
- Test thoroughly after each task
- Keep master branch stable (use feature branches if needed)
- Commit regularly with descriptive messages

### After Implementation
- Run complete testing checklist
- Perform Lighthouse audit
- Cross-browser testing
- Get final approval
- Deploy to production

---

## 🤝 Collaboration Notes

### Human Decisions Needed
1. **Design Approval**: Review mockup and approve overall design
2. **Font Choice**: Confirm Inter font or choose alternative
3. **Logo**: Text "LG" or custom designed logo?
4. **Content**: Review and approve about page content
5. **Photos**: Provide professional headshot and project screenshots
6. **Optional Features**: Decide on project filtering, critical CSS

### LLM Can Handle
- Writing all HTML/CSS/JavaScript code
- Creating layouts and components
- Implementing dark mode toggle
- Setting up Jekyll includes and layouts
- Writing structured data and meta tags
- Implementing animations and transitions
- Optimizing performance
- Most of the implementation work

---

## 📚 Additional Resources

### Referenced in Spec
- **Minimal Mistakes Theme**: https://mmistakes.github.io/minimal-mistakes/
- **WCAG Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/
- **Google Fonts (Inter)**: https://fonts.google.com/specimen/Inter
- **Font Awesome Icons**: https://fontawesome.com/icons

### Useful Tools
- **Lighthouse**: Built into Chrome DevTools
- **WebAIM Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **Google Rich Results Test**: https://search.google.com/test/rich-results
- **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator

---

## 🎉 Next Steps

1. **Review this README** - Understand the full scope
2. **Open mockup.html** - See the design in action
3. **Read PORTFOLIO_SPEC.md** - Understand the vision
4. **Review IMPLEMENTATION_TODO.md** - See the roadmap
5. **Provide feedback** - Approve or request changes
6. **Start Phase 1** - Begin implementation when ready

---

## 📞 Questions?

If you have questions about:
- **Design decisions** → Review mockup.html and PORTFOLIO_SPEC.md
- **Implementation approach** → Review IMPLEMENTATION_TODO.md
- **Technical details** → Check PORTFOLIO_SPEC.md Section 3 (Technical Architecture)
- **Timeline** → See task time estimates in IMPLEMENTATION_TODO.md
- **Content** → Refer to resume.tex

---

*Ready to build something awesome! 🚀*

*Last Updated: October 24, 2025*
*Created by: Claude Code (Sonnet 4.5)*
