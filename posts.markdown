---
layout: page
title: "Blog"
permalink: /posts/
description: "Read Lana Gasparyan's technical blog featuring insights on full-stack development, React, Spring Boot, AWS cloud infrastructure, and software engineering best practices."
---

<div class="page-container">
    <section class="blog-hero">
        <h1>Technical Blog</h1>
        <p class="subtitle">
            Sharing insights on full-stack development, cloud infrastructure, AI/ML, and software engineering best practices.
        </p>
    </section>

    <!-- Search Bar -->
    <section class="blog-search">
        <div class="search-container">
            <i class="fas fa-search search-icon"></i>
            <input type="text" id="blog-search" class="search-input" placeholder="Search posts by title, content, or tags...">
        </div>
        <div id="search-results" class="search-results-container"></div>
    </section>

    <section class="blog-posts">
        <div class="blog-grid">
            {% for post in site.posts %}
            <article class="blog-card">
                {% if post.image %}
                <div class="blog-card-image">
                    <img src="{{ post.image | relative_url }}" alt="{{ post.title }}">
                </div>
                {% else %}
                <div class="blog-card-icon">
                    <i class="fas fa-file-alt"></i>
                </div>
                {% endif %}

                <div class="blog-card-content">
                    <div class="blog-card-header">
                        <span class="post-date">
                            <i class="far fa-calendar"></i>
                            {{ post.date | date: "%b %-d, %Y" }}
                        </span>
                        {% if post.categories.size > 0 %}
                        <span class="post-category">{{ post.categories | first }}</span>
                        {% endif %}
                    </div>

                    <h2 class="blog-card-title">
                        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                    </h2>

                    {% if post.excerpt %}
                    <p class="blog-card-excerpt">{{ post.excerpt | strip_html | truncate: 150 }}</p>
                    {% endif %}

                    {% if post.tags.size > 0 %}
                    <div class="blog-card-tags">
                        {% for tag in post.tags limit:3 %}
                        <span class="tag-badge">{{ tag }}</span>
                        {% endfor %}
                        {% if post.tags.size > 3 %}
                        <span class="tag-badge">+{{ post.tags.size | minus: 3 }} more</span>
                        {% endif %}
                    </div>
                    {% endif %}

                    <a href="{{ post.url | relative_url }}" class="btn btn--primary btn--small">Read More →</a>
                </div>
            </article>
            {% endfor %}
        </div>

        {% if site.posts.size == 0 %}
        <div class="no-posts">
            <p>No posts yet. Check back soon!</p>
        </div>
        {% endif %}
    </section>

    <!-- Quick Links -->
    <section class="blog-quick-links">
        <div class="quick-links-grid">
            <a href="{{ '/categories/' | relative_url }}" class="quick-link-card">
                <i class="fas fa-folder"></i>
                <h3>Browse by Category</h3>
                <p>Explore posts organized by topic</p>
            </a>
            <a href="{{ '/tags/' | relative_url }}" class="quick-link-card">
                <i class="fas fa-tags"></i>
                <h3>Browse by Tag</h3>
                <p>Find posts by specific technology</p>
            </a>
        </div>
    </section>
</div>

<!-- Simple JavaScript for Search -->
<script>
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('blog-search');
    const blogCards = document.querySelectorAll('.blog-card');
    const searchResultsContainer = document.getElementById('search-results');

    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            let visibleCount = 0;

            blogCards.forEach(card => {
                const title = card.querySelector('.blog-card-title')?.textContent.toLowerCase() || '';
                const excerpt = card.querySelector('.blog-card-excerpt')?.textContent.toLowerCase() || '';
                const tags = Array.from(card.querySelectorAll('.tag-badge'))
                    .map(tag => tag.textContent.toLowerCase())
                    .join(' ');

                const matches = title.includes(searchTerm) ||
                               excerpt.includes(searchTerm) ||
                               tags.includes(searchTerm);

                if (matches || searchTerm === '') {
                    card.style.display = '';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            // Show search results message
            if (searchTerm !== '') {
                searchResultsContainer.textContent = `Found ${visibleCount} post${visibleCount !== 1 ? 's' : ''}`;
                searchResultsContainer.style.display = 'block';
            } else {
                searchResultsContainer.style.display = 'none';
            }
        });
    }
});
</script>
