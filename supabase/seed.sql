-- Seed data matching lib/data/portfolio-data.ts
-- Run after schema.sql in the Supabase SQL Editor.

insert into profile (name, title, roles, summary, email, phone, location, availability, resume_url, social) values (
  'Md. Rabiul Islam Santo',
  'Java Full Stack Engineer',
  array['Java Full Stack Engineer', 'Spring Boot Specialist', 'Angular & TypeScript Developer', 'API & Performance Engineer'],
  'Java Full Stack Engineer with 2+ years of hands-on experience building secure, scalable enterprise applications — Java, Spring Boot, and PostgreSQL on the backend, Angular and TypeScript on the frontend. Focused on clean architecture, test-driven development, and high-availability systems.',
  'rabiul.personalinfo@gmail.com',
  '+880 1616-913975',
  'Dhaka, Bangladesh',
  'Available on 2 months notice',
  '/Resume-Md-Rabiul-Islam-Santo.pdf',
  '[
    {"label": "GitHub", "url": "https://github.com/Santosasantos"},
    {"label": "LinkedIn", "url": "https://www.linkedin.com/in/md-rabiul-islam-santo/"},
    {"label": "HackerRank", "url": "https://www.hackerrank.com/profile/rabiulislamsant1"}
  ]'::jsonb
);

insert into experiences (id, role, company, location, start_date, end_date, highlights, tech, sort_order) values
(
  'brac-it-engineer',
  'Software Engineer',
  'BRAC IT Services Ltd',
  'Dhaka, Bangladesh',
  '2024-04-01',
  null,
  array[
    'Engineered scalable backend services with Java, Spring Boot, Groovy, and Grails for enterprise applications serving 10K+ users',
    'Built full-stack features with Spring Boot, Angular, and Vaadin — including the 360-Degree Feedback module (EPMS), improving evaluation workflow speed by 40%',
    'Optimized RESTful APIs and database queries, reducing average response time by 30% across high-usage modules',
    'Designed interactive analytics dashboards with ApexCharts, increasing platform adoption by 52%',
    'Strengthened application security with authentication, authorization, and role-based access control for sensitive data workflows',
    'Applied clean architecture, SOLID principles, and TDD — achieving 95% automated test coverage',
    'Streamlined CI/CD workflows with Git, GitLab, Maven, and Jenkins, sustaining 99.8% platform uptime'
  ],
  array['Java', 'Spring Boot', 'Groovy', 'Grails', 'Angular', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'GitLab', 'Jenkins'],
  1
);

insert into projects (id, title, tagline, description, impact, tech, github_url, demo_url, sort_order) values
(
  'nexuspay',
  'NexusPay',
  'Fintech Payment Platform',
  'Full-stack fintech platform supporting digital wallets, concurrent peer-to-peer transactions, and a real-time analytics dashboard with ACID-compliant operations.',
  array[
    'Eliminated transfer deadlocks via database locking and API idempotency',
    'Event-driven architecture with Kafka decoupling notifications & analytics',
    'Fault tolerance with Resilience4j rate limiting',
    'React/Next.js analytics dashboard over a JWT-secured API'
  ],
  array['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Kafka', 'React', 'Next.js', 'Docker'],
  'https://github.com/Santosasantos/NexusPay',
  null,
  1
),
(
  '360-assessment',
  '360-Assessment',
  'Employee Performance System',
  'Enterprise EPMS module processing multi-source feedback for 500+ employees with real-time analytics and role-based access control.',
  array[
    '40% faster reporting through optimized data retrieval',
    'Secure analytics aggregation and reporting pipelines',
    'Interactive real-time dashboards',
    'Multi-dimensional rating workflows'
  ],
  array['Spring Boot', 'Angular', 'JHipster', 'PrimeNG', 'PostgreSQL'],
  'https://github.com/Santosasantos/epms',
  'http://epms-app-bd2024.azurewebsites.net/',
  2
),
(
  'endectic',
  'EnDecTic',
  'Secure P2P Encrypted Messaging',
  'Peer-to-peer communication platform with RSA 2048-bit encryption and a zero-knowledge architecture.',
  array[
    '2048-bit RSA end-to-end encryption',
    'Zero-knowledge message design',
    'Digital signature verification',
    '~50ms message latency'
  ],
  array['Java', 'Socket Programming', 'RSA Encryption', 'Swing'],
  'https://github.com/Santosasantos/EnDecTic',
  null,
  3
),
(
  'massier',
  'Massier',
  'Hostel Management System',
  'Web system automating hostel and mess operations for 200+ residents with real-time expense tracking and messaging.',
  array[
    '70% operational efficiency gain',
    'Real-time expense tracking',
    '85% reduction in communication overhead',
    'Automated meal and expense reporting'
  ],
  array['PHP', 'MySQL', 'JavaScript', 'AJAX', 'Bootstrap'],
  'https://github.com/Santosasantos/Massier',
  'https://massier.kesug.com/',
  4
);

insert into skill_categories (id, title, skills, sort_order) values
('backend', 'Backend Development', array['Java', 'Spring Boot', 'Groovy', 'Grails', 'REST APIs', 'Microservices'], 1),
('security', 'Security & Reliability', array['Secure Coding', 'JWT Authentication', 'Authorization', 'RBAC', 'Data Protection'], 2),
('data-messaging', 'Data & Messaging', array['PostgreSQL', 'MySQL', 'Redis', 'Kafka', 'RabbitMQ'], 3),
('testing', 'Quality & Methods', array['JUnit', 'Mockito', 'TDD', 'SonarQube', 'Agile/Scrum', 'Clean Architecture', 'SOLID Principles'], 4),
('devops', 'DevOps & Cloud', array['Git/GitLab', 'Maven', 'Gradle', 'Jenkins', 'Docker', 'Kubernetes', 'AWS'], 5),
('frontend', 'Frontend Development', array['Angular', 'TypeScript', 'React', 'Next.js', 'Vaadin', 'PrimeNG'], 6);

insert into education (degree, institution, location, period, gpa) values (
  'B.Sc. in Software Engineering',
  'Noakhali Science and Technology University',
  'Noakhali, Bangladesh',
  '2020 — 2025',
  'CGPA 3.45 / 4.00'
);

insert into achievements (id, title, issuer, date, sort_order) values
('buet-ctf', 'Champion — BUET CSE Fest CTF', 'BUET', 'Oct 2024', 1),
('ctfbd-maze', '9th Place — CTFBD Maze in Antarjal', 'ICT Division', 'Jun 2023', 2),
('campus-leader', 'Best Campus Leader — Banglalink AppLink', 'Banglalink', 'Nov 2022', 3);

insert into metrics (id, value, label, context, sort_order) values
('response', '30%', 'Faster API response', 'Query & caching optimization at BRAC IT', 1),
('coverage', '95%', 'Test coverage', 'TDD across enterprise modules', 2),
('uptime', '99.8%', 'Platform uptime', 'CI/CD on production systems', 3),
('users', '10K+', 'Users served', 'Enterprise-grade applications', 4);
