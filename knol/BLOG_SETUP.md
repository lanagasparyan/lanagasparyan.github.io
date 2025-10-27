# Blog Setup Plan

**Status**: In Progress
**Created**: October 27, 2025
**Last Updated**: October 27, 2025

---

## Overview

This document outlines the comprehensive plan for setting up a fully-functional, professional blog for the Lana Gasparyan portfolio website. The blog will showcase technical expertise through tutorials, project retrospectives, and software engineering insights.

---

## Current Status

### What Exists
- ✅ `_posts/` directory with one sample Jekyll post
- ✅ Blog navigation link in header (points to `/posts/`)
- ✅ `jekyll-feed` plugin for RSS feeds
- ✅ Pagination configured in `_config.yml` (paginate: 5)
- ✅ Post layout available (from Minimal Mistakes theme)
- ✅ Minimal Mistakes theme with blog-aware features

### Critical Issues
- ❌ **BROKEN LINK**: Blog navigation points to `/posts/` but page doesn't exist
- ❌ No blog landing/archive page
- ❌ No categories or tags pages
- ❌ No author information configured
- ❌ No actual blog content (only default Jekyll sample post)

---

## Implementation Plan

### Phase 1: Core Blog Pages (CRITICAL - Fix Broken Link)

**Priority**: 🔴 HIGH - Navigation link is broken!

#### Task 1.1: Create Blog Landing Page
- **File**: `posts.markdown`
- **Purpose**: Main blog archive showing all posts with pagination
- **Layout**: Use Minimal Mistakes `home` or custom `archive` layout
- **Features**:
  - List all blog posts with excerpts
  - Pagination (5 posts per page)
  - Featured image thumbnails
  - Post metadata (date, reading time, categories)
  - Search bar (optional)

#### Task 1.2: Create Categories Page
- **File**: `categories.markdown`
- **Purpose**: Browse all posts organized by category
- **Layout**: Use Minimal Mistakes `categories` layout
- **Features**:
  - Group posts by category
  - Show post count per category
  - Clickable category headers

#### Task 1.3: Create Tags Page
- **File**: `tags.markdown`
- **Purpose**: Browse all posts by tag
- **Layout**: Use Minimal Mistakes `tags` layout
- **Features**:
  - Tag cloud or list view
  - Show post count per tag
  - Filter by tag

**Estimated Time**: 30-45 minutes

---

### Phase 2: Blog Configuration

**Priority**: 🟡 MEDIUM - Essential for full functionality

#### Task 2.1: Enhance `_config.yml`
Add blog-specific configuration:

```yaml
# Author Information
author:
  name: "Lana Gasparyan"
  avatar: "/assets/images/profile.png"
  bio: "Full-Stack Software Engineer specializing in React, Spring Boot, and AWS"
  location: "New York, NY"
  links:
    - label: "GitHub"
      icon: "fab fa-fw fa-github"
      url: "https://github.com/lanagasparyan"
    - label: "LinkedIn"
      icon: "fab fa-fw fa-linkedin"
      url: "https://linkedin.com/in/lanagasparyan"
    - label: "Email"
      icon: "fas fa-fw fa-envelope"
      url: "mailto:lana5545@gmail.com"

# Blog Post Defaults
defaults:
  - scope:
      path: "_posts"
      type: posts
    values:
      layout: single
      author_profile: true
      read_time: true
      comments: true
      share: true
      related: true
      show_date: true
      toc: true
      toc_sticky: true

# Category & Tag Archives
category_archive:
  type: liquid
  path: /categories/
tag_archive:
  type: liquid
  path: /tags/

# Social Sharing
twitter:
  username: # Add if you create Twitter account

# Comments (Choose one)
comments:
  provider: "utterances" # or "disqus", "giscus"
  utterances:
    theme: "github-light"
    issue_term: "pathname"
    repo: "lanagasparyan/lanagasparyan.github.io"
```

#### Task 2.2: Set Up Author Data
- **File**: `_data/authors.yml`
- **Purpose**: Centralized author information for multi-author support (future-proof)
- **Content**: Author bio, avatar, social links

**Estimated Time**: 20-30 minutes

---

### Phase 3: Content & Layouts

**Priority**: 🟡 MEDIUM - Makes blog professional

#### Task 3.1: Create Custom Post Layout (Optional)
- **File**: `_layouts/post.html`
- **Purpose**: Custom post layout with additional features
- **Features**:
  - Author bio sidebar
  - Related posts section
  - Previous/next post navigation
  - Estimated reading time
  - Social share buttons
  - Table of contents for long posts

#### Task 3.2: Create Sample Blog Posts
Create 2-3 high-quality blog posts showcasing technical expertise:

**Post Ideas**:
1. **"Building a RAG System with LangChain and OpenAI"**
   - Category: Tutorials, AI/ML
   - Tags: Python, LangChain, OpenAI, RAG, AI
   - Featured image: Architecture diagram
   - Content: Step-by-step guide based on your experience

2. **"Migrating a Monolith to Microservices: Lessons Learned"**
   - Category: Architecture, DevOps
   - Tags: Microservices, Docker, Kubernetes, Spring Boot
   - Featured image: Before/after architecture
   - Content: Real-world migration experience

3. **"Full-Stack Developer's Guide to AWS Deployment"**
   - Category: DevOps, Cloud
   - Tags: AWS, EC2, S3, CloudFront, CI/CD
   - Featured image: AWS services diagram
   - Content: Production deployment best practices

**Post Template Structure**:
```yaml
---
layout: single
title: "Post Title"
date: 2025-10-27
categories: [Category1, Category2]
tags: [tag1, tag2, tag3]
excerpt: "Compelling 1-2 sentence summary that appears in listings"
header:
  teaser: /assets/images/posts/post-name-teaser.jpg
  overlay_image: /assets/images/posts/post-name-hero.jpg
  overlay_filter: 0.5
toc: true
toc_label: "Contents"
toc_sticky: true
---

Introduction paragraph...

## Section 1
Content...

## Section 2
Content...

## Conclusion
Summary and key takeaways...
```

#### Task 3.3: Create/Optimize Featured Images
- Create hero images for each post (1200x630px for social sharing)
- Create teaser images for post listings (400x250px)
- Optimize images for web (compress, WebP format)
- Store in `/assets/images/posts/`

**Estimated Time**: 2-3 hours (content creation is time-intensive)

---

### Phase 4: Blog Features

**Priority**: 🟢 LOW-MEDIUM - Nice to have

#### Task 4.1: Enable Comments System

**Option 1: utterances (Recommended)**
- Uses GitHub Issues for comments
- No tracking, lightweight, open source
- Free forever
- Setup: Add utterances app to GitHub repo

**Option 2: giscus**
- Uses GitHub Discussions
- More features than utterances
- Free and open source

**Option 3: Disqus**
- Popular but includes ads on free tier
- Heavier, includes tracking

#### Task 4.2: Add Social Share Buttons
- Configure in `_config.yml` (Minimal Mistakes has built-in support)
- Enable Twitter, LinkedIn, Facebook, Reddit sharing
- Test sharing with proper Open Graph tags

#### Task 4.3: Enable Reading Time
- Already supported by Minimal Mistakes
- Enable in post defaults (`read_time: true`)

#### Task 4.4: Enable Related Posts
- Show 4 related posts at bottom of each post
- Based on categories and tags
- Enable in post defaults (`related: true`)

#### Task 4.5: Add Table of Contents
- Automatically generated from H2/H3 headings
- Sticky sidebar on desktop
- Enable in post defaults (`toc: true`, `toc_sticky: true`)

**Estimated Time**: 1-1.5 hours

---

### Phase 5: Blog Styling & UX

**Priority**: 🟢 LOW - Polish and refinement

#### Task 5.1: Customize Blog Archive Styling
- Match portfolio design aesthetic (mint theme, modern cards)
- Style post excerpts and metadata
- Add hover effects to post cards
- Ensure consistent typography

#### Task 5.2: Create Post Grid Layout
- 2-column grid on desktop
- 1-column on mobile
- Card-based design with shadows
- Featured image at top of each card

#### Task 5.3: Mobile Optimization
- Test all blog pages on mobile
- Ensure readability (font sizes, line heights)
- Check image responsiveness
- Test navigation and pagination

#### Task 5.4: Enable Search Functionality
- Minimal Mistakes supports Algolia, Lunr.js, or Google Custom Search
- Lunr.js recommended (free, client-side, no external dependencies)
- Add search bar to blog page header

**Estimated Time**: 1.5-2 hours

---

### Phase 6: Content Strategy & SEO

**Priority**: 🟢 LOW - Ongoing work

#### Task 6.1: Define Blog Categories
**Recommended Categories**:
- Tutorials (how-to guides, step-by-step)
- Projects (project retrospectives, case studies)
- Career (job search, interviews, professional development)
- DevOps (deployment, CI/CD, infrastructure)
- Frontend (React, JavaScript, UI/UX)
- Backend (Spring Boot, Java, APIs)
- Cloud (AWS, Azure, cloud architecture)
- AI/ML (LangChain, RAG, AI integration)

#### Task 6.2: Create Content Calendar
**Month 1-3**: Establish foundation
- 1-2 posts per month
- Focus on tutorials based on portfolio projects
- Share on LinkedIn and Twitter

**Month 4-6**: Build momentum
- 2 posts per month
- Mix of tutorials and career insights
- Guest post opportunities

**Long-term**: Consistent publishing
- Weekly or bi-weekly posts
- Respond to trending topics in tech
- Build email subscriber list

#### Task 6.3: SEO Optimization for Posts
- Unique meta descriptions for each post (150-160 chars)
- Keyword research for post topics
- Internal linking between related posts
- External links to authoritative sources
- Optimize images with alt text
- Submit blog posts to aggregators (DEV.to, Hashnode, Medium)

#### Task 6.4: Configure Syntax Highlighting
- Choose syntax highlighting theme (Rouge)
- Test with various languages (JavaScript, Python, Java, YAML, Bash)
- Ensure code blocks are readable and well-formatted
- Add copy-to-clipboard button (optional enhancement)

**Estimated Time**: Ongoing (2-4 hours for initial setup)

---

## Suggested Blog Topics (Based on Portfolio)

### From Your Projects:

1. **PlatePals Project**
   - "Building a Social Recipe App with React and Spring Boot"
   - "Implementing Real-Time Features in a Social Cooking App"
   - "Testing Strategies for Full-Stack Applications"

2. **Study Buddy AI**
   - "Creating an AI-Powered Study Assistant with RAG"
   - "Integrating OpenAI GPT-4 into a Full-Stack Application"
   - "Building Conversational AI with LangChain"

3. **Automated CI/CD Pipeline**
   - "Setting Up Jenkins CI/CD for Spring Boot and React"
   - "Docker Multi-Stage Builds for Full-Stack Apps"
   - "Automating Deployments with GitHub Actions"

4. **Employee Management System**
   - "RESTful API Design Best Practices"
   - "Spring Boot + React: A Full-Stack Developer's Guide"
   - "Database Design for CRUD Applications"

### Career & Professional Development:

5. "From Bootcamp to Production: My Software Engineering Journey"
6. "How I Built My Portfolio Website with Jekyll"
7. "Essential AWS Services Every Full-Stack Developer Should Know"
8. "Code Review Best Practices I Learned in 3 Years"

### Technical Deep Dives:

9. "Understanding React Hooks: A Practical Guide"
10. "Spring Boot Security: JWT Authentication Tutorial"
11. "Optimizing React Performance: Tips and Tricks"
12. "AWS Cost Optimization Strategies for Startups"

---

## Success Metrics

### Short-term (1-3 months)
- [ ] Blog is fully functional with no broken links
- [ ] 3-5 published posts with real content
- [ ] Comments system working
- [ ] Posts appear in Google search results
- [ ] Share functionality tested and working

### Medium-term (3-6 months)
- [ ] 10+ published posts
- [ ] 100+ monthly visitors from organic search
- [ ] Engagement on social media shares
- [ ] At least 5 comments from readers
- [ ] Posts ranking for target keywords

### Long-term (6-12 months)
- [ ] 20+ published posts
- [ ] 500+ monthly visitors
- [ ] Email subscriber list (if implemented)
- [ ] Guest posting opportunities
- [ ] Referenced/linked by other developers

---

## Technical Requirements

### Required Files
- `posts.markdown` - Blog landing page
- `categories.markdown` - Categories archive
- `tags.markdown` - Tags archive
- `_data/authors.yml` - Author information
- `_layouts/post.html` (optional) - Custom post layout

### Configuration Updates
- `_config.yml` - Blog settings, defaults, author info
- `_data/navigation.yml` - Already has blog link (just need to create page)

### Assets Needed
- Profile photo for author bio
- Featured images for blog posts
- Post teaser images for archive/listings

### Plugins (Already Installed)
- ✅ `jekyll-feed` - RSS feed
- ✅ `jekyll-sitemap` - Sitemap generation
- ✅ `jekyll-seo-tag` - SEO meta tags
- ⚠️ `jekyll-archives` - Category/tag pages (not available on GitHub Pages)

### GitHub Pages Limitations
- Cannot use `jekyll-archives` plugin (not whitelisted)
- Must use Liquid-based archives instead
- Pagination limited to single index file
- No custom plugins allowed

---

## Resources & References

### Documentation
- [Minimal Mistakes Documentation](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/)
- [Jekyll Posts Documentation](https://jekyllrb.com/docs/posts/)
- [Jekyll Front Matter](https://jekyllrb.com/docs/front-matter/)
- [Jekyll Liquid Syntax](https://shopify.github.io/liquid/)

### Inspiration
- [Made Mistakes Blog](https://mademistakes.com/articles/) - Creator of Minimal Mistakes
- [DEV.to](https://dev.to/) - Developer blogging platform
- [Netlify Blog](https://www.netlify.com/blog/) - Well-designed tech blog

### Tools
- [Unsplash](https://unsplash.com/) - Free high-quality images
- [TinyPNG](https://tinypng.com/) - Image compression
- [Hemingway Editor](https://hemingwayapp.com/) - Writing clarity
- [Grammarly](https://www.grammarly.com/) - Grammar checking

---

## Timeline

### Week 1: Foundation
- ✅ Create blog setup plan
- ⏳ Create core blog pages (posts, categories, tags)
- ⏳ Configure `_config.yml` with blog settings
- ⏳ Set up author data

### Week 2: Content
- Write first blog post
- Create featured images
- Test layouts and styling
- Mobile optimization

### Week 3: Features
- Enable comments
- Add share buttons
- Test all functionality
- SEO optimization

### Week 4: Launch
- Publish 2-3 initial posts
- Share on social media
- Submit to Google Search Console
- Monitor analytics

---

## Notes

- Keep post URLs SEO-friendly (lowercase, hyphens, descriptive)
- Use categories sparingly (3-5 max)
- Use tags more liberally for specific topics
- Always include a featured image for better social sharing
- Write for humans first, search engines second
- Aim for 1000-2000 words per post for better SEO
- Update old posts when information becomes outdated
- Cross-post to DEV.to and Medium for wider reach

---

## Checklist

### Phase 1: Core Pages ⏳
- [ ] Create `posts.markdown`
- [ ] Create `categories.markdown`
- [ ] Create `tags.markdown`
- [ ] Test navigation links

### Phase 2: Configuration ⏳
- [ ] Update `_config.yml` with author info
- [ ] Add post defaults to `_config.yml`
- [ ] Configure category/tag archives
- [ ] Create `_data/authors.yml`

### Phase 3: Content ⏳
- [ ] Create custom post layout (optional)
- [ ] Write first blog post
- [ ] Write second blog post
- [ ] Write third blog post
- [ ] Create featured images
- [ ] Optimize images

### Phase 4: Features ⏳
- [ ] Enable comments system
- [ ] Configure share buttons
- [ ] Enable reading time
- [ ] Enable related posts
- [ ] Add table of contents

### Phase 5: Styling ⏳
- [ ] Style blog archive page
- [ ] Create post card design
- [ ] Mobile optimization
- [ ] Add search (optional)

### Phase 6: Strategy ⏳
- [ ] Define categories
- [ ] Create content calendar
- [ ] SEO optimization
- [ ] Configure syntax highlighting

---

**Next Steps**: Begin Phase 1 - Create core blog pages to fix broken navigation link.
