# SEO Implementation Guide

## Overview
Comprehensive SEO optimization has been implemented for the portfolio website to improve Google search visibility and ranking.

## Implemented Features

### 1. Jekyll SEO Plugin (jekyll-seo-tag)
**Location**: `_config.yml`

The `jekyll-seo-tag` plugin automatically generates:
- Meta description tags
- Open Graph (Facebook) tags
- Twitter Card tags
- Canonical URLs
- JSON-LD structured data

**Configuration in _config.yml**:
```yaml
plugins:
  - jekyll-seo-tag
  - jekyll-sitemap
  - jekyll-feed
```

### 2. Enhanced Meta Tags
**Location**: `_includes/head/custom.html`

Added comprehensive meta tags:
- Author metadata
- Robot directives (index, follow)
- Googlebot and Bingbot specific instructions
- Open Graph metadata for social sharing
- Article metadata for blog posts

### 3. Structured Data (Schema.org JSON-LD)

#### Homepage Person Schema
**Location**: `_includes/head/custom.html`

Implements Person schema with:
- Name, URL, image
- Social media profiles (GitHub, LinkedIn)
- Job title and description
- Location information

#### Blog Post Schema
**Location**: `_layouts/post.html`

Each blog post includes:
- **BlogPosting** schema with headline, author, dates, publisher
- **BreadcrumbList** schema for navigation hierarchy
- Article metadata (wordCount, keywords, section)
- Microdata attributes (itemprop) for rich snippets

### 4. Sitemap.xml
**Plugin**: `jekyll-sitemap`
**Auto-generated at**: `/sitemap.xml`

The sitemap is automatically generated and includes:
- All pages and blog posts
- Last modification dates
- Change frequency hints
- Priority levels

**Access**: https://lanagasparyan.github.io/sitemap.xml

### 5. Robots.txt
**Location**: `/robots.txt`

Instructs search engine crawlers:
```
User-agent: *
Allow: /
Sitemap: https://lanagasparyan.github.io/sitemap.xml
```

### 6. RSS Feed
**Plugin**: `jekyll-feed`
**Auto-generated at**: `/feed.xml`

Provides RSS feed for blog subscribers.

### 7. SEO-Friendly URLs
All pages use clean, descriptive URLs:
- `/about/` - About page
- `/projects/` - Projects page
- `/posts/` - Blog listing
- `/posts/2025/10/27/post-title/` - Individual posts
- `/categories/` - Category archive
- `/tags/` - Tag archive

## Content Optimization

### Page-Level SEO
Each page should include in front matter:
```yaml
---
title: "Your Page Title"
description: "Brief description for SEO (150-160 characters)"
keywords: [keyword1, keyword2, keyword3]
---
```

### Blog Post SEO
Each blog post should include:
```yaml
---
layout: post
title: "Your Post Title"
date: 2025-10-27 10:00:00 -0400
categories: [Category]
tags: [tag1, tag2, tag3]
excerpt: "Brief description (150-160 characters)"
image: /assets/images/post-image.jpg  # Optional, for social sharing
author: Lana Gasparyan  # Optional, defaults to site.author
---
```

## Google Search Console Setup

### 1. Verify Ownership
Add your site to Google Search Console:
1. Go to https://search.google.com/search-console
2. Add property: `https://lanagasparyan.github.io`
3. Verify using one of these methods:
   - HTML file upload
   - HTML tag in `<head>` (add to `_includes/head/custom.html`)
   - Google Analytics
   - Domain name provider

### 2. Submit Sitemap
After verification:
1. Go to Sitemaps section
2. Submit: `https://lanagasparyan.github.io/sitemap.xml`
3. Google will start crawling your site

### 3. Request Indexing
For immediate indexing of important pages:
1. Use the URL Inspection tool
2. Enter the page URL
3. Click "Request Indexing"

## Social Media Preview Images

### Required Image
Create a social preview image:
- **Dimensions**: 1200x630px (recommended)
- **Format**: PNG or JPG
- **Location**: `/assets/images/social-preview.png`
- **Content**: Site name, tagline, and branding

This image will be used when sharing your site on:
- Facebook
- LinkedIn
- Twitter
- Slack
- Discord

## Performance Best Practices

### 1. Image Optimization
- Use compressed images (< 200KB for blog post images)
- Use WebP format when possible
- Include alt text for all images

### 2. Page Speed
Current optimizations:
- Minified CSS (via Jekyll)
- Font preconnect for Google Fonts
- Minimal JavaScript

### 3. Mobile Optimization
- Responsive design implemented
- Viewport meta tag configured
- Touch-friendly navigation

## Monitoring & Analytics

### Google Analytics (Optional)
Add to `_includes/head/custom.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Key Metrics to Monitor
- Organic search traffic
- Click-through rate (CTR)
- Average position in search results
- Core Web Vitals
- Indexed pages count

## SEO Checklist

### Initial Setup ✓
- [x] Install jekyll-seo-tag plugin
- [x] Install jekyll-sitemap plugin
- [x] Configure _config.yml with SEO settings
- [x] Add robots.txt
- [x] Add structured data (JSON-LD)
- [x] Implement Open Graph tags
- [x] Add canonical URLs

### Content Guidelines
- [ ] Write unique, descriptive page titles (50-60 characters)
- [ ] Write compelling meta descriptions (150-160 characters)
- [ ] Use heading hierarchy (H1, H2, H3) properly
- [ ] Include relevant keywords naturally in content
- [ ] Write at least 300 words per blog post
- [ ] Use descriptive alt text for images
- [ ] Internal linking between related pages

### Technical SEO
- [x] Mobile-friendly responsive design
- [x] Fast page load times
- [x] HTTPS enabled (GitHub Pages default)
- [x] Clean, descriptive URLs
- [x] Proper HTML semantic structure
- [ ] Add social preview images

### Post-Deployment
- [ ] Verify site in Google Search Console
- [ ] Submit sitemap to Google
- [ ] Create and submit Bing Webmaster Tools
- [ ] Add Google Analytics (optional)
- [ ] Request indexing for key pages
- [ ] Monitor search performance

## Expected Results

### Timeline
- **Week 1**: Google discovers and crawls sitemap
- **Weeks 2-4**: Pages start appearing in search results
- **Months 2-3**: Rankings improve as content is indexed
- **Months 3-6**: Organic traffic begins to grow

### Success Metrics
- All pages indexed by Google
- Appearing in search results for target keywords
- Rich snippets displayed for blog posts
- Increasing organic traffic over time

## Troubleshooting

### Pages Not Indexed
1. Check robots.txt allows indexing
2. Verify sitemap is submitted to Google Search Console
3. Check for crawl errors in Search Console
4. Ensure pages have unique, quality content

### Rich Snippets Not Showing
1. Test with [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Verify JSON-LD syntax is valid
3. Wait 2-4 weeks for Google to re-crawl
4. Check Search Console for structured data errors

### Low Rankings
1. Ensure unique, high-quality content
2. Build internal links between pages
3. Get backlinks from reputable sites
4. Improve page speed and Core Web Vitals
5. Create more comprehensive content

## Resources

- [Google Search Console](https://search.google.com/search-console)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Documentation](https://schema.org/)
- [Jekyll SEO Tag Plugin](https://github.com/jekyll/jekyll-seo-tag)
- [Open Graph Protocol](https://ogp.me/)

## Maintenance

### Regular Tasks
- **Weekly**: Monitor Search Console for errors
- **Monthly**: Review organic search performance
- **Quarterly**: Update content and check for broken links
- **As Needed**: Request indexing for new important pages
