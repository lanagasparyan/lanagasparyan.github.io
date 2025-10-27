---
layout: page
title: "Tags"
permalink: /tags/
---

<div class="page-container">
    <section class="blog-hero">
        <h1>Browse by Tag</h1>
        <p class="subtitle">Find posts by specific technology or topic</p>
    </section>

    <section class="tags-cloud">
        {% assign tags = site.tags | sort %}
        <div class="tag-list">
            {% for tag in tags %}
            <a href="#{{ tag[0] | slugify }}" class="tag-link">
                <i class="fas fa-hashtag"></i>
                {{ tag[0] }} <span class="count">{{ tag[1].size }}</span>
            </a>
            {% endfor %}
        </div>

        {% if site.tags.size == 0 %}
        <div class="no-posts">
            <p>No tags yet. Check back soon!</p>
        </div>
        {% endif %}
    </section>

    <section class="tags-list">
        {% for tag in tags %}
        <div class="tag-section">
            <h2 class="tag-title" id="{{ tag[0] | slugify }}">
                <i class="fas fa-tag"></i>
                {{ tag[0] }}
                <span class="count">{{ tag[1].size }} post{% if tag[1].size != 1 %}s{% endif %}</span>
            </h2>

            <div class="blog-grid">
                {% for post in tag[1] %}
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

                        <h3 class="blog-card-title">
                            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                        </h3>

                        {% if post.excerpt %}
                        <p class="blog-card-excerpt">{{ post.excerpt | strip_html | truncate: 150 }}</p>
                        {% endif %}

                        <a href="{{ post.url | relative_url }}" class="btn btn--primary btn--small">Read More →</a>
                    </div>
                </article>
                {% endfor %}
            </div>
        </div>
        {% endfor %}
    </section>

    <div class="back-to-blog">
        <a href="{{ '/posts/' | relative_url }}" class="btn btn--outline">← Back to All Posts</a>
    </div>
</div>
