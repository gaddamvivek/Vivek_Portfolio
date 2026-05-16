import React from 'react';
import Skills from './Skills';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'VisionCaption — Deep Learning Image Captioning System',
      technologies: ['Python', 'TensorFlow', 'Keras', 'ResNet50', 'LSTM', 'Attention', 'Flask', 'Docker'],
      highlights: [
        'Built CNN-LSTM encoder-decoder with TensorFlow/Keras: ResNet50 backbone (frozen ImageNet weights) for visual feature extraction, LSTM decoder with Bahdanau-style attention for token-by-token caption generation',
        'Custom tokenizer and vocabulary encoding over Flickr8K/30K; trained with teacher forcing and cross-entropy loss; evaluated with BLEU metrics',
        'Deployed as a Dockerized Flask inference API with image preprocessing pipeline (resize, normalize, batch) for low-latency single-image requests',
        'Stack: end-to-end deep learning pipeline from data preprocessing → training loop → inference → REST serving',
      ],
      link: 'https://github.com/gaddamvivek/Image-Captioning',
    },
    {
      title: 'Multi-Sentence Image Description — Hierarchical RNNs',
      technologies: ['Python', 'TensorFlow', 'Hierarchical RNN', 'Attention', 'COCO', 'Flask', 'Docker'],
      highlights: [
        'Designed two-level hierarchical RNN with visual attention: sentence-level RNN for paragraph coherence + word-level RNN for token generation',
        'Trained on 50K+ COCO images, achieving 85% BLEU-4 on multi-sentence description benchmark',
        'Deployed as a Dockerized Flask REST API on Linux with sub-500ms inference latency',
        'Targeted accessibility use cases — image-to-paragraph descriptions for visually impaired users',
      ],
    },
    {
      title: 'Enterprise Identity & Access Management at Scale',
      technologies: ['Java', 'Spring Boot', 'OAuth 2.0', 'OIDC', 'SAML', 'LDAP', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS'],
      highlights: [
        'Architected IAM platform for NY.GOV ID serving 20M+ users with 99.9% uptime SLA',
        'Reduced authentication latency by 40% through Redis caching layer',
        'Implemented OAuth 2.0 / OIDC flows with MFA for 50+ agency applications',
        'Built automated CI/CD pipelines cutting deployment time from days to hours',
        'Led migration of 15M+ user records with zero-downtime cutover',
      ],
      link: 'https://my.ny.gov',
    },
    {
      title: 'PrepSmart — AI-Powered Technical Interview Platform',
      technologies: ['React.js', 'Node.js', 'TypeScript', 'OpenAI API', 'MongoDB', 'WebSocket', 'AWS', 'Docker'],
      highlights: [
        'AI-driven interview assessment with OpenAI API integration for structured prompts (question generation, response evaluation, feedback synthesis)',
        'TypeScript/React frontend with Node.js backend deployed on AWS, containerized with Docker, maintaining 99.5% uptime',
        'WebSocket streaming for real-time token-level feedback delivery; REST/JSON APIs over HTTPS',
        'Architecture: Node.js microservices, MongoDB for user analytics, OpenAI for inference, WebSocket for streaming',
      ],
      link: 'https://smart-prep-vivek.vercel.app/',
    },
    {
      title: 'PlanVoyage — AI Recommendation Web App',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'OpenAI API', 'TF-IDF', 'JWT', 'TailwindCSS'],
      highlights: [
        'AI-powered travel recommendation app: Next.js + MongoDB with JWT-based RBAC',
        'OpenAI API filtering for personalized itineraries based on user preferences, budget, and constraints, with prompt-engineered ranking',
        'Content-based filtering using TF-IDF and cosine similarity as fallback for offline recommendation',
        '+45% engagement vs. rule-based baseline; REST endpoints over HTTPS with indexed query optimization (40% faster response times)',
      ],
      link: 'https://plan-voyage-vivek.vercel.app/',
    },
    {
      title: 'AI-Driven Precision Agriculture Platform',
      technologies: ['Python', 'TensorFlow', 'Random Forest', 'XGBoost', 'IoT', 'FastAPI', 'React', 'Docker', 'Android'],
      highlights: [
        'Developed ML-powered crop yield prediction achieving 90% accuracy using ensemble methods (Random Forest + XGBoost)',
        'Built real-time IoT data pipeline processing 10K+ sensor readings/hour for soil analysis and irrigation optimization',
        'Deployed TensorFlow models on Android via Docker for edge computing, reducing cloud costs by 60%',
        'Implemented data analytics dashboard with Python/FastAPI backend and React frontend',
        'Impact: 25% resource optimization | Published: 3 patents + Scopus-indexed research papers',
      ],
      link: 'https://gadamvivek01-precisionfarming.hf.space/',
    },
    {
      title: 'Enterprise E-Commerce Platform with Microservices',
      technologies: ['React.js', 'Express.js', 'MongoDB', 'Docker', 'Caddy', 'AWS', 'JWT', 'Stripe'],
      highlights: [
        'Designed scalable e-commerce system handling 10K+ concurrent users with JWT-based authentication',
        'Implemented Docker containerization with 99.9% uptime using health checks and auto-recovery',
        'Built real-time inventory management with MongoDB change streams and WebSocket notifications',
        'Integrated Stripe payment processing with webhook validation and transaction logging',
      ],
      link: 'https://solecraft-e-commerce-platform.onrender.com/',
    },
    {
      title: 'Algorithm Visualizer',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      highlights: [
        'Built an interactive web app for visualizing sorting algorithms in real time',
        'Supports customizable speed, array size, and multiple algorithm comparisons',
      ],
      link: 'https://gaddamvivek.github.io/Sorting-Visualiser.io/',
    },
  ];

  const publications = [
    {
      title: 'Sparse Channel Estimation Using OMP Algorithm for Next-Gen Wireless',
      journal: 'IEEE Conference on Communication and Computing 4.0',
      date: 'Mar 14, 2023',
      link: 'https://ieeexplore.ieee.org/document/10051352',
    },
    {
      title: 'ML for Urbanization Prediction using Automatic Weather Station',
      journal: 'Mathematical Statistician and Engineering Applications',
      date: 'Dec 21, 2022',
      link: 'https://philstat.org/index.php/MSEA/article/view/1451',
    },
    {
      title: 'Smart Precision Agriculture using IoT Data Analytics',
      journal: 'Mathematical Statistician and Engineering Applications',
      date: 'Dec 21, 2022',
      link: 'https://philstat.org/index.php/MSEA/article/view/1450',
    },
    {
      title: 'Smart Precision Interface for Agricultural Methods',
      journal: 'CVR Journal of Science and Technology',
      date: 'Dec 3, 2022',
      link: 'https://www.cvr.ac.in/ojs/index.php/cvracin/article/view/812',
    },
  ];

  const patents = [
    {
      title: 'Data Analytics Powered Smart Precision Farming to Increase Crop Yield',
      applicationNumber: '202341008759',
      publicationNumber: '12/2023',
      filingDate: 'February 10, 2023',
      publicationDate: 'March 24, 2023',
      authority: 'Intellectual Property India (Indian Patent Office)',
      link: 'https://drive.google.com/file/d/1c5y4b7HRFim99SiTbXrfZK0Bvg9esqp9/view?usp=sharing',
    },
    {
      title: 'Machine Learning Powered IoT Weather Station to Predict the Rate of Urbanization',
      applicationNumber: '202341008760',
      publicationNumber: '12/2023',
      filingDate: 'February 10, 2023',
      publicationDate: 'March 24, 2023',
      authority: 'Intellectual Property India (Indian Patent Office)',
      link: 'https://drive.google.com/file/d/1ZH_0eoZF3Gv_LubXzz-20yFsrVMEPprH/view?usp=sharing',
    },
    {
      title: 'Data Analytics Powered IoT Weather Station to Determine the AQI Index in a Micro Climatic Zone',
      applicationNumber: '202341027954',
      publicationNumber: '18/2023',
      filingDate: 'April 17, 2023',
      publicationDate: 'May 05, 2023',
      authority: 'Intellectual Property India (Indian Patent Office)',
      link: 'https://drive.google.com/file/d/1aKVw36Uiu4djiPfx5tYnUDpEpKaHz4Da/view?usp=sharing',
    },
  ];

  // ---------- AI Engineering Profile (new) ----------
  const aiCapabilities = [
    'Vertex AI', 'Gemini 2.5', 'Spring AI', 'OpenAI API', 'LangChain',
    'Multimodal LLMs', 'RAG', 'Prompt Engineering', 'Streaming Inference',
    'TensorFlow', 'PyTorch', 'CNN-LSTM', 'Hierarchical RNNs', 'Attention', 'Transfer Learning',
  ];

  return (
    <>
      {/* ============ AI ENGINEERING PROFILE ============ */}
      <section className="featured-project section-dark" id="ai-profile">
        <h2 className="section-title">AI Engineering Profile</h2>
        <div className="featured-card">
          <span className="featured-badge">AI / ML Engineer</span>
          <h3>Building Production Generative AI Applications</h3>
          <p className="featured-subtitle">
            From classical deep learning to LLM-powered systems in production
          </p>
          <div className="featured-content">
            <div className="featured-challenge">
              <h4>Focus</h4>
              <p>
                Production-experienced AI engineer building Generative AI applications with
                Google Vertex AI and Gemini through Spring AI - delivering conversational
                interfaces, multimodal document and image analysis, persistent chat memory, and
                task automation for NY State agencies. Comfortable across the full Gen AI delivery
                surface: prompt design, retrieval-augmented analysis of uploaded PDFs and images,
                streaming model responses to React clients, secure OIDC authentication, and LLM
                telemetry through Cloud Operations Suite and Prometheus.
              </p>
            </div>
            <div className="featured-achievements">
              <h4>Foundations</h4>
              <ul>
                <li>Classical deep learning via TensorFlow and PyTorch (CNN-LSTM with attention, hierarchical RNNs, ResNet50 transfer learning)</li>
                <li>3 patents and 4 peer-reviewed publications in applied ML and IoT analytics</li>
                <li>Personal AI products using OpenAI API and LangChain</li>
                <li>Actively expanding into model selection &amp; evaluation, fine-tuning, vector stores / embeddings, and agent design</li>
                <li>Targeting dedicated AI/ML Engineer and Generative AI Engineer roles</li>
              </ul>
            </div>
          </div>
          <div className="featured-tech">
            {aiCapabilities.map((tech, i) => (
              <span key={i} className="featured-tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED AI PROJECT ============ */}
      <section className="featured-project section-alt" id="featured">
        <h2 className="section-title">Featured Project</h2>
        <div className="featured-card">
          <span className="featured-badge">Featured &middot; Generative AI</span>
          <h3>AI Sparkle Pro - Generative AI Assistant for NY State Agencies</h3>
          <p className="featured-subtitle">
            Production LLM platform on Google Cloud &middot; Vertex AI &middot; Gemini &middot; Spring AI &middot; Cloud Run
          </p>
          <div className="featured-content">
            <div className="featured-challenge">
              <h4>Challenge</h4>
              <p>
                Deliver a secure, multi-tenant Generative AI assistant for NY State agencies
                covering natural language understanding, multimodal document and image analysis,
                persistent chat memory, and task automation - while meeting strict identity,
                compliance, and network-isolation requirements of a regulated government environment.
              </p>
            </div>
            <div className="featured-achievements">
              <h4>Key Contributions</h4>
              <ul>
                <li>Java 21 / Spring Boot 3.5 backend with Spring AI integrating Vertex AI and Gemini 2.5 Flash Lite for chat, document Q&amp;A, coding support, and mathematical reasoning</li>
                <li>React / TypeScript front-end with multimodal file upload (PDF, JPEG), streaming LLM responses, and persistent chat history</li>
                <li>Two-service Cloud Run architecture (Web + API) on private VPC behind Global Cloud Load Balancer with Cloud Armor and Google-managed TLS</li>
                <li>Multimodal AI workflows: PDFs and images routed through Cloud Storage and Vertex AI multimodal prompts for insights, summaries, and key-data extraction</li>
                <li>Persistent conversation memory with Firestore; usage analytics with BigQuery via Firebase extension (Pub/Sub, Event Arc, Cloud Functions)</li>
                <li>F5 / ADFS SSO with JWT-keys validation and Spring Security 6.5; Cloud IAM; Cloud NAT for egress; Private Google Access to managed services</li>
                <li>GitLab CI/CD with Kaniko, Skopeo, OpenTofu (IaC); LLM observability via Cloud Operations Suite, Trace Logging, and Prometheus</li>
              </ul>
            </div>
          </div>
          <div className="featured-tech">
            {['Vertex AI', 'Gemini 2.5', 'Spring AI', 'Java 21', 'Spring Boot 3.5', 'React', 'TypeScript', 'Cloud Run', 'Firestore', 'BigQuery', 'Cloud Armor', 'OpenTofu', 'ADFS / OIDC', 'GCP'].map((tech, i) => (
              <span key={i} className="featured-tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROJECTS ============ */}
      <section className="projects section-dark" id="projects">
        <h2 className="section-title">Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-card-header">
                <h3>{project.title}</h3>
                {project.link && (
                  <a
                    href={project.link}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                )}
              </div>
              <div className="project-tech-tags">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="project-tech-tag">{tech}</span>
                ))}
              </div>
              <ul className="project-highlights">
                {project.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Skills />

      <section className="projects section-alt" id="publications">
        <h2 className="section-title">Publications</h2>
        <div className="projects-grid">
          {publications.map((pub, index) => (
            <div key={index} className="project-card">
              <h3>{pub.title}</h3>
              <p><strong>{pub.journal}</strong></p>
              <p>{pub.date}</p>
              <a href={pub.link} className="btn" target="_blank" rel="noopener noreferrer">
                View Publication
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="projects section-dark" id="patents">
        <h2 className="section-title">Patents</h2>
        <div className="projects-grid">
          {patents.map((patent, index) => (
            <div key={index} className="project-card">
              <h3>{patent.title}</h3>
              <p><strong>{patent.authority}</strong></p>
              <div className="patent-details">
                <p><strong>Application Number:</strong> {patent.applicationNumber}</p>
                {patent.publicationNumber && (
                  <p><strong>Publication Number:</strong> {patent.publicationNumber}</p>
                )}
                {patent.filingDate && (
                  <p><strong>Filing Date:</strong> {patent.filingDate}</p>
                )}
                {patent.publicationDate && (
                  <p><strong>Publication Date:</strong> {patent.publicationDate}</p>
                )}
              </div>
              {patent.link && (
                <a href={patent.link} className="btn" target="_blank" rel="noopener noreferrer">
                  View Patent
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;