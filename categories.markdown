---
layout: page
title: "Categories"
permalink: /categories/
---

<div class="page-container">
    <section class="blog-hero">
        <h1>Browse by Category</h1>
        <p class="subtitle">Explore posts organized by topic</p>
    </section>

    <section class="categories-list">
        {% assign categories = site.categories | sort %}
        {% for category in categories %}
        <div class="category-section">
            <h2 class="category-title" id="{{ category[0] | slugify }}">
                <i class="fas fa-folder"></i>
                {{ category[0] }}
                <span class="count">{{ category[1].size }} post{% if category[1].size != 1 %}s{% endif %}</span>
            </h2>

            <div class="blog-grid">
                {% for post in category[1] %}
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
                        </div>

                        <h3 class="blog-card-title">
                            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                        </h3>

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
        </div>
        {% endfor %}

        {% if site.categories.size == 0 %}
        <div class="no-posts">
            <p>No categories yet. Check back soon!</p>
        </div>
        {% endif %}
    </section>

    <div class="back-to-blog">
        <a href="{{ '/posts/' | relative_url }}" class="btn btn--outline">← Back to All Posts</a>
    </div>
</div>
