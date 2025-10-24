# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Lana Gasparyan built with Jekyll and hosted on GitHub Pages. The site uses the Minimal Mistakes theme with extensive custom SCSS styling to create a modern, professional portfolio showcasing software engineering projects and experience.

## Technology Stack

- **Static Site Generator**: Jekyll (via github-pages gem)
- **Theme**: Minimal Mistakes (remote theme version 4.27.3)
- **Styling**: SCSS with custom overrides in `assets/css/main.scss`
- **Deployment**: GitHub Pages (automatic deployment on push to master)
- **Ruby Version Management**: Bundler for gem dependencies

## Development Workflow

### Local Development

```bash
# Install dependencies (first time setup)
bundle install

# Run local development server
bundle exec jekyll serve

# The site will be available at http://localhost:4000
# Changes to most files will auto-reload, but _config.yml requires server restart
```

### Building the Site

```bash
# Build the site (output to _site directory)
bundle exec jekyll build

# Build with specific environment
JEKYLL_ENV=production bundle exec jekyll build
```

### Important Notes

- **Configuration Changes**: Changes to `_config.yml` require restarting the Jekyll server
- **Git Branch**: The main branch is `master` (not main)
- **Deployment**: Pushing to master automatically triggers GitHub Pages deployment
- **Generated Files**: The `_site` directory is auto-generated and should not be edited directly

## Architecture & Structure

### Content Organization

- **`index.markdown`**: Home page with hero section, technical expertise cards, featured projects, and CTA
- **`about.markdown`**: Professional bio and background information
- **`projects.markdown`**: Detailed project showcase with descriptions and technologies
- **`skills.markdown`**: Technical skills and competencies breakdown
- **`resume.markdown`**: Professional resume and work experience
- **`_posts/`**: Blog posts (using Jekyll's blog functionality)
- **`_data/navigation.yml`**: Site navigation structure for header and footer

### Styling Architecture

The site uses a layered styling approach:

1. **Base Theme**: Minimal Mistakes theme with "mint" skin (`@import "minimal-mistakes/skins/mint"`)
2. **Theme Overrides**: Main theme partials imported second (`@import "minimal-mistakes"`)
3. **Custom Styles**: Extensive custom SCSS in `assets/css/main.scss` using `!important` to override theme defaults

**Key Custom Components**:
- `.hero-card`, `.hero-content`, `.hero-text`, `.hero-image`: Main landing section with profile and intro
- `.profile-picture`, `.profile-img`, `.profile-fallback`: Profile image with fallback icon
- `.hero-badges`: Badge container for location, education, etc.
- `.hero-links`, `.social-btn`: Social media link buttons
- `.expertise-section`, `.skills-grid`, `.skill-card`: Technical skills grid (3-column on desktop)
- `.skill-icon`, `.skill-badges`, `.skill-badge`: Skill display components
- `.featured-projects`, `.projects-grid`: Project showcase cards container
- `.project-card`: Individual project card with hover effects
- `.project-image`: Project screenshot image (150px height, covers card top)
- `.project-icon`: Emoji icon for projects without images
- `.project-tech`: Technology stack display in project cards
- `.tools`, `.tool-tag`: Technology tags with gray background
- `.card-footer`, `.language`, `.github-link`: Project card footer elements
- `.cta-section`, `.cta-buttons`: Call-to-action section with buttons
- `.btn`, `.btn--primary`, `.btn--outline`, `.btn--large`, `.btn--small`: Button styles
- `.page-container`: Main page wrapper
- **Responsive Design**: Mobile breakpoints at 768px and 480px

### Configuration Pattern

Site-wide settings in `_config.yml` are accessed via Liquid templating:
- `{{ site.title }}` - Site title
- `{{ site.author }}` - Author name
- `{{ site.social.github }}` - Social media links
- `{{ site.description }}` - Site description for SEO

## Customization Guidelines

### Adding New Pages

1. Create a new `.markdown` file in the root directory
2. Add YAML front matter with `layout`, `title`, and `permalink`
3. Use `layout: single` for standard pages
4. Add navigation entry in `_data/navigation.yml` if needed in the menu

### Styling Modifications

- All custom styles are in `assets/css/main.scss`
- The file uses `!important` extensively to override theme defaults
- Theme uses a mint color scheme with primary color `#0abab5`
- Follow the existing pattern: component sections separated by comments
- Test responsive behavior at mobile breakpoints (768px, 480px)

### Working with the Minimal Mistakes Theme

- Theme documentation: https://mmistakes.github.io/minimal-mistakes/
- Uses remote_theme to pull from GitHub, no local theme files
- Custom layouts should extend existing theme layouts
- The `jekyll-include-cache` plugin is required for theme performance

### HTML in Markdown Files

The site extensively uses HTML directly within `.markdown` files for complex layouts:
- Wrap content in `<div class="page-container">` for consistent spacing
- Use semantic section divs (`.hero-card`, `.expertise-section`, `.featured-projects`, `.cta-section`)
- Grid layouts are created with `.projects-grid` or `.skills-grid` containing multiple card components
- Jekyll/Liquid templating can be mixed with HTML (e.g., `{{ site.title }}`)
- This approach allows for pixel-perfect design control while maintaining markdown simplicity for text content

## Common Patterns

### Front Matter Structure
```yaml
---
layout: single
title: "Page Title"
permalink: /page-url/
classes: wide  # Optional: for full-width layouts
---
```

### Color Palette
- Primary: `#0abab5` (mint/teal)
- Text: `#2c3e50` (dark blue-gray)
- Secondary Text: `#5a6c7d`, `#7f8c8d`
- Background: `#f8f9fa` (light gray)
- Accent: `#e0f7f6` (light mint)

### Grid Layouts
- Desktop: 3-column grid for skills and projects
- Tablet (≤768px): 1-column stack
- Mobile (≤480px): Optimized spacing and sizing

## Key Dependencies

From `Gemfile`:
- `github-pages`: Meta-gem that includes Jekyll and GitHub Pages compatible plugins
- `jekyll-include-cache`: Required for Minimal Mistakes theme performance
- Platform-specific gems for Windows/JRuby compatibility

## Assets Management

- **Images**: Store in `assets/images/` directory
- **CSS**: Main stylesheet at `assets/css/main.scss`
- **Profile Image**: Currently at `/assets/images/Screenshot at Oct 22 11-38-53.png`
- Image paths in markdown use absolute paths from site root (e.g., `/assets/images/filename.png`)

## SEO & Metadata

The site uses these Jekyll plugins for SEO:
- `jekyll-seo-tag`: Automatic meta tags and structured data
- `jekyll-sitemap`: Auto-generated sitemap.xml
- `jekyll-feed`: RSS feed generation

## Portfolio Content Pattern

### Project Card Structure (on home page)
```html
<div class="project-card">
  <div class="project-icon">🌐</div>
  <h3>Project Name</h3>
  <p>Description with <strong>user metrics</strong></p>
  <div class="project-tech">React • TypeScript • Tailwind CSS</div>
  <a href="https://example.com" target="_blank" class="btn btn--primary btn--small">Visit Site</a>
</div>
```

### Detailed Project Card Structure (on projects page)
```html
<div class="project-card">
  <img src="/assets/images/project.png" alt="Project" class="project-image">
  <h3>Project Name</h3>
  <p>Detailed description of the project</p>
  <div class="tools">
    <span class="tool-tag">React</span>
    <span class="tool-tag">TypeScript</span>
  </div>
  <div class="card-footer">
    <span class="language">JavaScript</span>
    <a href="https://github.com" target="_blank" class="github-link">View on GitHub</a>
  </div>
</div>
```

### Hero Section Pattern
The home page uses HTML within markdown for rich layouts:
- Hero section with side-by-side text and profile image
- Badge components for credentials (location, education, etc.)
- Social buttons linking to GitHub, LinkedIn, email
- Font Awesome icons via CDN (classes like `fas fa-*`, `fab fa-*`)

## Git Workflow

- **Default branch**: `master` (not `main`)
- **Deployment**: Automatic via GitHub Pages on push to master
- Commit messages should be descriptive and follow existing patterns
