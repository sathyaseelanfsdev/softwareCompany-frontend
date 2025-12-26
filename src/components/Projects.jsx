import { Navigation } from './Navigation';
import './Projects.css';

export function Projects(){
  return(
   <>
      <title>Projects</title>

      <Navigation/>

      <section className="projects-hero">
        <h1>Our Projects</h1>
        <p>
          A selection of projects showcasing our expertise across frontend,
          backend, cloud infrastructure, and artificial intelligence.
        </p>
      </section>

      <section className="projects-section">

        <div className="project-card">
          <h3>Enterprise Task Management Platform</h3>
          <p className="project-desc">
            A full-stack task and workflow management system designed for teams to
            collaborate efficiently and manage projects at scale.
          </p>
          <p>
            The platform includes user authentication, role-based access control,
            real-time updates, and analytics dashboards.
          </p>
          <p className="tech">
            <strong>Technologies:</strong> React, Node.js, MongoDB, REST APIs
          </p>
        </div>

        <div className="project-card">
          <h3>Cloud-Based SaaS Application</h3>
          <p className="project-desc">
            A scalable Software-as-a-Service platform built with cloud-native
            architecture to support high availability and performance.
          </p>
          <p>
            Implemented CI/CD pipelines, automated deployments, and monitoring to
            ensure reliability and fast release cycles.
          </p>
          <p className="tech">
            <strong>Technologies:</strong> AWS, Docker, Kubernetes, Node.js
          </p>
        </div>

        <div className="project-card">
          <h3>AI-Powered Data Analysis Tool</h3>
          <p className="project-desc">
            An intelligent analytics tool that processes large datasets and
            provides actionable insights using machine learning models.
          </p>
          <p>
            The system integrates AI APIs and data pipelines to automate reporting
            and improve decision-making.
          </p>
          <p className="tech">
            <strong>Technologies:</strong> Python, Machine Learning, Pandas, APIs
          </p>
        </div>

        <div className="project-card">
          <h3>Corporate Portfolio & CMS Platform</h3>
          <p className="project-desc">
            A modern and responsive corporate website with a custom content
            management system for easy updates.
          </p>
          <p>
            Focused on clean UI, SEO optimization, and performance across devices.
          </p>
          <p className="tech">
            <strong>Technologies:</strong> React, CSS, REST APIs
          </p>
        </div>

        <div className="project-card">
          <h3>API Integration & Automation System</h3>
          <p className="project-desc">
            A backend-focused system designed to integrate multiple third-party
            services and automate business workflows.
          </p>
          <p>
            Built with secure authentication, logging, and scalable API
            architecture.
          </p>
          <p className="tech">
            <strong>Technologies:</strong> Node.js, Express, REST APIs, Cloud Services
          </p>
        </div>

        <div className="project-card">
          <h3>Cross-Platform Internal Dashboard</h3>
          <p className="project-desc">
            An internal dashboard application for monitoring system metrics and
            business performance in real time.
          </p>
          <p>
            Designed with modular components and optimized for speed and clarity.
          </p>
          <p className="tech">
            <strong>Technologies:</strong> Frontend Frameworks, Backend APIs, Cloud
          </p>
        </div>

        <div className="project-card">
  <h3>AI Customer Support Chatbot</h3>
  <p className="project-desc">
    An intelligent chatbot system designed to handle customer queries,
    support tickets, and FAQs with high accuracy.
  </p>
  <p>
    Integrated natural language processing to understand user intent and
    provide context-aware responses across multiple platforms.
  </p>
  <p className="tech">
    <strong>Technologies:</strong> Python, AI APIs, NLP, Backend Services
  </p>
        </div>

        <div className="project-card">
          <h3>Cloud Infrastructure Optimization Platform</h3>
          <p className="project-desc">
            A system built to monitor, analyze, and optimize cloud resource usage
            for cost efficiency and performance.
          </p>
          <p>
            Includes real-time monitoring, usage analytics, and automated scaling
            strategies for cloud environments.
          </p>
          <p className="tech">
            <strong>Technologies:</strong> AWS, Terraform, Docker, Cloud Monitoring
          </p>
        </div>

        <div className="project-card">
          <h3>E-Commerce Backend & Payment System</h3>
          <p className="project-desc">
            A robust backend system powering an e-commerce platform with secure
            payment processing and order management.
          </p>
          <p>
            Focused on scalability, data integrity, and seamless integration with
            third-party payment gateways.
          </p>
          <p className="tech">
            <strong>Technologies:</strong> Node.js, Databases, Payment APIs
          </p>
        </div>

        <div className="project-card">
          <h3>Real-Time Analytics Dashboard</h3>
          <p className="project-desc">
            A real-time dashboard that visualizes business and system metrics for
            faster decision-making.
          </p>
          <p>
            Designed with interactive charts and live data updates to ensure clarity
            and responsiveness.
          </p>
          <p className="tech">
            <strong>Technologies:</strong> Frontend Frameworks, APIs, Data Visualization
          </p>
        </div>

        <div className="project-card">
          <h3>AI-Based Recommendation Engine</h3>
          <p className="project-desc">
            A recommendation system that analyzes user behavior to deliver
            personalized content and product suggestions.
          </p>
          <p>
            Utilizes machine learning models and data pipelines to continuously
            improve recommendation accuracy.
          </p>
          <p className="tech">
            <strong>Technologies:</strong> Machine Learning, Python, Data Processing
          </p>
        </div>

        <div className="project-card">
          <h3>Enterprise API Gateway & Security Layer</h3>
          <p className="project-desc">
            A centralized API gateway solution designed to manage, secure, and
            monitor enterprise-level APIs.
          </p>
          <p>
            Includes authentication, rate limiting, logging, and performance
            optimization features.
          </p>
          <p className="tech">
            <strong>Technologies:</strong> Backend Frameworks, API Security, Cloud
          </p>
        </div>

      </section>
  </>
  );
}