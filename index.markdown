---
layout: home
title: Home
permalink: /
---

<!-- HERO SECTION -->
<section class="hero" id="home">
    <div class="hero-container">
        <!-- Introduction with Image -->
        <div class="hero-intro">
            <div class="hero-content">
                <h1>Hey there! I'm <span class="highlight">Lana</span></h1>
                <p class="hero-tagline">
                    Full-Stack Software Engineer with <strong>3+ years</strong> building production applications
                    serving <strong>65K+ annual users</strong>. I specialize in React, Spring Boot, and AWS
                    with expertise in AI/LLM integration and modern DevOps practices.
                </p>
                <div class="hero-badges">
                    <div class="badge">
                        <i class="fas fa-map-marker-alt"></i>
                        New York, NY
                    </div>
                    <div class="badge">
                        <i class="fas fa-graduation-cap"></i>
                        BS Software Engineering
                    </div>
                    <div class="badge">
                        <i class="fas fa-award"></i>
                        AWS Certified
                    </div>
                </div>
                <div class="hero-buttons">
                    <a href="https://github.com/{{ site.social.github }}" class="btn btn-primary" target="_blank">
                        <i class="fab fa-github"></i>
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/{{ site.social.linkedin }}" class="btn btn-outline" target="_blank">
                        <i class="fab fa-linkedin"></i>
                        LinkedIn
                    </a>
                    <a href="mailto:{{ site.social.email }}" class="btn btn-outline">
                        <i class="fas fa-envelope"></i>
                        Email
                    </a>
                </div>
            </div>
            <div class="hero-image">
                <div class="profile-pic">
                    <img src="{{ '/assets/images/ProfilePic.png' | relative_url }}" alt="Lana Gasparyan">
                </div>
            </div>
        </div>

        <!-- Technical Expertise Section (within hero) -->
        <div class="hero-skills">
            <div class="section-header">
                <h2>Technical Expertise</h2>
                <p class="section-subtitle">Technologies I work with daily</p>
            </div>
            <div class="skills-grid">
                <div class="skill-card">
                    <div class="skill-icon">
                        <i class="fas fa-code"></i>
                    </div>
                    <h3>Languages</h3>
                    <div class="skill-badges">
                        <span class="skill-badge adept">Python</span>
                        <span class="skill-badge">Java</span>
                        <span class="skill-badge">TypeScript</span>
                        <span class="skill-badge">JavaScript</span>
                        <span class="skill-badge">SQL</span>
                        <span class="skill-badge">HTML/CSS</span>
                    </div>
                </div>
                <div class="skill-card">
                    <div class="skill-icon">
                        <i class="fas fa-laptop-code"></i>
                    </div>
                    <h3>Frontend & Backend</h3>
                    <div class="skill-badges">
                        <span class="skill-badge adept">React</span>
                        <span class="skill-badge">Vite</span>
                        <span class="skill-badge">Tailwind CSS</span>
                        <span class="skill-badge adept">Spring Boot</span>
                        <span class="skill-badge">Node.js</span>
                        <span class="skill-badge">Flask</span>
                    </div>
                </div>
                <div class="skill-card">
                    <div class="skill-icon">
                        <i class="fas fa-cloud"></i>
                    </div>
                    <h3>Cloud & DevOps</h3>
                    <div class="skill-badges">
                        <span class="skill-badge adept">AWS</span>
                        <span class="skill-badge">Docker</span>
                        <span class="skill-badge">GitHub Actions</span>
                        <span class="skill-badge">PostgreSQL</span>
                        <span class="skill-badge">CI/CD</span>
                        <span class="skill-badge">REST APIs</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- PROJECTS SECTION -->
<section class="section" id="projects">
    <div class="section-header">
        <h2>Featured Projects</h2>
        <p class="section-subtitle">Some of my recent work</p>
    </div>

    <div class="projects-grid">
        <!-- Project 1: BinaryDecimal.com -->
        <div class="project-card">
            <div class="project-image">
                <img src="{{ '/assets/images/BinaryDecimal.png' | relative_url }}" alt="BinaryDecimal.com">
            </div>
            <div class="project-content">
                <h3>BinaryDecimal.com</h3>
                <p class="project-tagline">40K+ Annual Users</p>
                <p class="project-description">
                    Comprehensive web toolkit with 17+ utilities including Markdown editor,
                    password generator, and Mermaid diagram viewer.
                </p>
                <div class="project-tags">
                    <span class="tech-tag">React</span>
                    <span class="tech-tag">TypeScript</span>
                    <span class="tech-tag">Tailwind CSS</span>
                    <span class="tech-tag">Vite</span>
                </div>
                <div class="project-footer">
                    <a href="https://binarydecimal.com" class="btn btn-primary btn-small" target="_blank">
                        <i class="fas fa-external-link-alt"></i>
                        Visit Site
                    </a>
                </div>
            </div>
        </div>

        <!-- Project 2: MemoDiction.com -->
        <div class="project-card">
            <div class="project-image">
                <img src="{{ '/assets/images/MemoDiction.png' | relative_url }}" alt="MemoDiction.com">
            </div>
            <div class="project-content">
                <h3>MemoDiction.com</h3>
                <p class="project-tagline">25K+ Annual Users</p>
                <p class="project-description">
                    AI-powered dictionary with automated content generation pipeline using
                    OpenAI API and advanced prompt engineering.
                </p>
                <div class="project-tags">
                    <span class="tech-tag">Python</span>
                    <span class="tech-tag">OpenAI API</span>
                    <span class="tech-tag">React</span>
                    <span class="tech-tag">GitHub Actions</span>
                </div>
                <div class="project-footer">
                    <a href="https://memodiction.com" class="btn btn-primary btn-small" target="_blank">
                        <i class="fas fa-external-link-alt"></i>
                        Visit Site
                    </a>
                </div>
            </div>
        </div>

        <!-- Project 3: Skill Quest -->
        <div class="project-card">
            <div class="project-image">
                <img src="{{ '/assets/images/SkillQuest.png' | relative_url }}" alt="Skill Quest">
            </div>
            <div class="project-content">
                <h3>Skill Quest</h3>
                <p class="project-tagline">Full-Stack Application</p>
                <p class="project-description">
                    AI Learning Planner with secure JWT authentication, PostgreSQL database,
                    and LLM integration, containerized with Docker.
                </p>
                <div class="project-tags">
                    <span class="tech-tag">Spring Boot</span>
                    <span class="tech-tag">React</span>
                    <span class="tech-tag">PostgreSQL</span>
                    <span class="tech-tag">Docker</span>
                </div>
                <div class="project-footer">
                    <a href="https://github.com/lanagasparyan/skillquest" class="btn btn-primary btn-small" target="_blank">
                        <i class="fab fa-github"></i>
                        View on GitHub
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- CTA SECTION -->
<section class="section">
    <div class="cta-section">
        <h2>Let's Work Together</h2>
        <p>
            Ready to collaborate on your next project? I bring a comprehensive skill set
            and a passion for building innovative solutions.
        </p>
        <div class="cta-buttons">
            <a href="{{ '/projects/' | relative_url }}" class="btn btn-primary">
                <i class="fas fa-briefcase"></i>
                View All Projects
            </a>
            <a href="{{ '/resume/' | relative_url }}" class="btn btn-outline">
                <i class="fas fa-file-pdf"></i>
                Download Resume
            </a>
            <a href="mailto:{{ site.social.email }}" class="btn btn-outline">
                <i class="fas fa-envelope"></i>
                Get in Touch
            </a>
        </div>
    </div>
</section>
