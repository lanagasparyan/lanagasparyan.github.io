---
layout: home
title: "Resume"
permalink: /resume/
---

<!-- RESUME HERO -->
<section class="resume-hero">
    <h1>Resume</h1>
    <p class="subtitle">
        Full-Stack Software Engineer with 3+ years building production applications
        serving 65K+ annual users
    </p>
    <div class="resume-actions">
        <a href="/assets/documents/Lana_Gasparyan_Resume.pdf" class="btn btn-primary" download>
            <i class="fas fa-download"></i>
            Download PDF
        </a>
        <a href="mailto:{{ site.social.email }}" class="btn btn-outline">
            <i class="fas fa-envelope"></i>
            Email Resume
        </a>
    </div>
</section>

<!-- RESUME PAGE CONTENT -->
<div class="resume-page-content">
    <!-- PDF Viewer Section -->
    <section class="pdf-viewer-section">
        <h2>Resume Preview</h2>
        <div class="pdf-container">
            <iframe src="/assets/documents/Lana_Gasparyan_Resume.pdf" type="application/pdf" title="Lana Gasparyan Resume PDF">
                <div class="pdf-fallback">
                    <i class="fas fa-file-pdf"></i>
                    <h3>PDF Viewer Not Supported</h3>
                    <p>Your browser doesn't support inline PDF viewing. Please download the PDF to view it.</p>
                    <a href="/assets/documents/Lana_Gasparyan_Resume.pdf" class="btn btn-primary" download>
                        <i class="fas fa-download"></i>
                        Download PDF Resume
                    </a>
                </div>
            </iframe>
        </div>
    </section>

    <!-- Text Version for SEO -->
    <div class="resume-text-version">
        <h2>Text Version</h2>

        <!-- Header -->
        <div class="resume-header-section">
            <h3>Lana Gasparyan</h3>
            <p class="resume-title">Full-Stack Software Engineer</p>
            <div class="resume-contact">
                <span><i class="fas fa-envelope"></i> lana5545@gmail.com</span>
                <span class="contact-divider">|</span>
                <span><i class="fas fa-map-marker-alt"></i> New York, NY</span>
                <span class="contact-divider">|</span>
                <span><i class="fas fa-phone"></i> +1-(917) 943-2490</span>
                <span class="contact-divider">|</span>
                <span><i class="fab fa-github"></i> <a href="https://github.com/lanagasparyan" target="_blank">github.com/lanagasparyan</a></span>
                <span class="contact-divider">|</span>
                <span><i class="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/lanagasparyan" target="_blank">linkedin.com/in/lanagasparyan</a></span>
            </div>
        </div>

        <!-- Professional Summary -->
        <div class="resume-section">
            <h3>Professional Summary</h3>
            <p>
                Full-Stack Software Engineer/Developer with <strong>3+ years</strong> building production applications
                serving <strong>65K+ annual users</strong>. Expertise in <strong>React, Spring Boot, and AWS</strong>
                with proven ability to architect and deploy scalable web applications. Strong foundation in AI/LLM integration,
                microservices, RESTful API design, and modern DevOps practices. <strong>AWS Certified Cloud Practitioner</strong>.
            </p>
        </div>

        <!-- Professional Experience -->
        <div class="resume-section">
            <h3>Professional Experience</h3>

            <div class="resume-experience-item">
                <h4>Independent Software Engineer</h4>
                <p class="experience-meta">2022 -- Present</p>
                <ul>
                    <li>Built and deployed <strong>BinaryDecimal.com</strong> to Netlify/Vercel, comprehensive web toolkit with <strong>17+ utilities</strong> serving <strong>40K+ users annually</strong>, including full-featured Markdown editor, password generator, and Mermaid diagram editor/viewer</li>
                    <li>Created <strong>MemoDiction.com</strong>, AI-powered dictionary serving <strong>25K+ users annually</strong>, architecting automated content generation pipeline with OpenAI API and prompt engineering deployed via GitHub Actions CI/CD</li>
                    <li>Designed and built <strong>Skill Quest</strong>, full-stack AI Learning Planner from concept to production with secure JWT authentication, PostgreSQL database, and LLM integration, containerized with Docker and deployed to Railway</li>
                    <li>Developed custom Python solutions for <strong>NetCDF scientific data</strong> merging and analysis, processing multi-dimensional climate datasets for international research clients</li>
                    <li>Created automated Markdown to ENEX converter from scratch with complex formatting and metadata preservation for enterprise knowledge management</li>
                </ul>
            </div>
        </div>

        <!-- Technical Skills -->
        <div class="resume-section">
            <h3>Technical Skills</h3>

            <div class="resume-skills-grid">
                <div class="skill-group">
                    <h4>Programming Languages</h4>
                    <p>Python (Adept), Java, TypeScript, JavaScript, SQL, HTML/CSS, C++, Bash</p>
                </div>

                <div class="skill-group">
                    <h4>Frontend Technologies</h4>
                    <p>React, Vite, Tailwind CSS, Jekyll, Responsive Design</p>
                </div>

                <div class="skill-group">
                    <h4>Backend Technologies</h4>
                    <p>Spring Boot, Node.js, Flask, Django, RESTful APIs, Microservices, JWT Authentication</p>
                </div>

                <div class="skill-group">
                    <h4>Cloud & DevOps</h4>
                    <p>AWS (EC2, S3, Lambda, CloudFront, Route 53, RDS), Docker, GitHub Actions, CI/CD, Serverless</p>
                </div>

                <div class="skill-group">
                    <h4>Data & AI</h4>
                    <p>PostgreSQL, OpenAI API, LLM Integration, Prompt Engineering, NLP</p>
                </div>

                <div class="skill-group">
                    <h4>Development Practices</h4>
                    <p>Agile/Scrum, Test-Driven Development, Git Version Control</p>
                </div>
            </div>
        </div>

        <!-- Technical Projects -->
        <div class="resume-section">
            <h3>Technical Projects</h3>

            <div class="resume-experience-item">
                <h4>Enterprise Inventory Management Platform</h4>
                <p class="experience-meta">Java, SQL, JavaFX, MVC Architecture</p>
                <ul>
                    <li>Designed and developed production-ready inventory platform from requirements through deployment with Java, SQL database, JavaFX GUI, and MVC architecture</li>
                    <li>Implemented complete CRUD operations, real-time data synchronization, automated reporting dashboard, error handling, and unit testing</li>
                </ul>
            </div>

            <div class="resume-experience-item">
                <h4>AI-Powered Code Quality Analyzer</h4>
                <p class="experience-meta">Python, NLP, React, REST API</p>
                <ul>
                    <li>Built end-to-end full-stack application with Python Flask backend, React frontend, and RESTful API for automated code quality analysis and best practice recommendations</li>
                    <li>Implemented static code analysis, complexity detection, style guide enforcement, and AI-powered improvement suggestions with user authentication and CI/CD pipeline</li>
                </ul>
            </div>
        </div>

        <!-- Education -->
        <div class="resume-section">
            <h3>Education</h3>

            <div class="resume-education-item">
                <h4>Bachelor of Science in Software Engineering</h4>
                <p class="edu-meta">Western Governors University | Expected 2025</p>
            </div>

            <div class="resume-education-item">
                <h4>Front End Web Developer NanoDegree</h4>
                <p class="edu-meta">Udacity | 2020</p>
            </div>
        </div>

        <!-- Certifications -->
        <div class="resume-section">
            <h3>Certifications</h3>

            <div class="resume-cert-item">
                <h4>AWS Certified Cloud Practitioner</h4>
                <p class="edu-meta">Amazon Web Services | 2023</p>
            </div>

            <div class="resume-cert-item">
                <h4>CompTIA Project+ Certification</h4>
                <p class="edu-meta">CompTIA | 2025</p>
            </div>

            <div class="resume-cert-item">
                <h4>Additional Certifications</h4>
                <p class="edu-meta">ITIL Foundation, CompTIA A+, Google IT Support Professional</p>
            </div>
        </div>

        <!-- Key Achievements -->
        <div class="resume-section resume-achievements">
            <h3>Key Achievements</h3>
            <ul>
                <li><strong>65K+ Annual Users:</strong> Built applications serving thousands of users across multiple platforms</li>
                <li><strong>Production Applications:</strong> Successfully deployed and maintained multiple production systems</li>
                <li><strong>AI Integration:</strong> Pioneered AI/LLM integration in web applications</li>
                <li><strong>Cloud Expertise:</strong> AWS Certified with hands-on experience in multiple services</li>
                <li><strong>Full-Stack Development:</strong> End-to-end application development from concept to deployment</li>
            </ul>
        </div>

        <!-- Footer Note -->
        <div class="resume-footer-note">
            <p>Authorized to work in the United States as a Permanent Resident</p>
            <p>References available upon request</p>
        </div>
    </div>

    <!-- CTA Section -->
    <div class="cta-section" style="margin-top: 4rem;">
        <h2>Let's Connect</h2>
        <p>
            Interested in working together? I'd love to hear about your project and
            discuss how I can contribute to your team's success.
        </p>
        <div class="cta-buttons">
            <a href="mailto:{{ site.social.email }}" class="btn btn-primary">
                <i class="fas fa-envelope"></i>
                Email Me
            </a>
            <a href="{{ '/projects/' | relative_url }}" class="btn btn-outline">
                <i class="fas fa-briefcase"></i>
                View My Projects
            </a>
            <a href="https://www.linkedin.com/in/{{ site.social.linkedin }}" class="btn btn-outline" target="_blank">
                <i class="fab fa-linkedin"></i>
                Connect on LinkedIn
            </a>
        </div>
    </div>
</div>
