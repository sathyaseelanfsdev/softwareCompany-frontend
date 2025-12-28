import HeroSection from './HeroSection';
import { Navigation } from './Navigation';
import './Projects.css';

function ProjectCard({h,p1,p2,tech,key}){
  return(
    <div key={key} className="project-card">
      <h3>{h}</h3>
      <p className="project-desc">{p1}</p>
      <p>{p2}</p>
      <p className="tech">
        <strong>Technologies:</strong> {tech}
      </p>
    </div>
  );
}

function ProjectMessage(){
  const array=[
    {
      id:crypto.randomUUID(),
      heading:"Enterprise Task Management Platform",
      paragraph1:"A full-stack task and workflow management system designed for teams to collaborate efficiently and manage projects at scale.",
      paragraph2:"The platform includes user authentication, role-based access control, real-time updates, and analytics dashboards.",
      technology:"React, Node.js, MongoDB, REST APIs"
    },
    {
      id:crypto.randomUUID(),
      heading:"Cloud-Based SaaS Application",
      paragraph1:"A scalable Software-as-a-Service platform built with cloud-native architecture to support high availability and performance.",
      paragraph2:"Implemented CI/CD pipelines, automated deployments, and monitoring to ensure reliability and fast release cycles.",
      technology:"AWS, Docker, Kubernetes, Node.js"
    },
    {
      id:crypto.randomUUID(),
      heading:"AI-Powered Data Analysis Tool",
      paragraph1:"An intelligent analytics tool that processes large datasets and provides actionable insights using machine learning models.",
      paragraph2:"The system integrates AI APIs and data pipelines to automate reporting and improve decision-making.",
      technology:"Technologies: Python, Machine Learning, Pandas, APIs"
    },
    {
      id:crypto.randomUUID(),
      heading:"Corporate Portfolio & CMS Platform",
      paragraph1:"A modern and responsive corporate website with a custom content management system for easy updates.",
      paragraph2:"Focused on clean UI, SEO optimization, and performance across devices.",
      technology:"React, CSS, REST APIs"
    },
    {
      id:crypto.randomUUID(),
      heading:"API Integration & Automation System",
      paragraph1:"A backend-focused system designed to integrate multiple third-party services and automate business workflows.",
      paragraph2:"Built with secure authentication, logging, and scalable API architecture.",
      technology:"Node.js, Express, REST APIs, Cloud Services"
    },
    {
      id:crypto.randomUUID(),
      heading:"Cross-Platform Internal Dashboard",
      paragraph1:"An internal dashboard application for monitoring system metrics and business performance in real time.",
      paragraph2:"Designed with modular components and optimized for speed and clarity.",
      technology:"Frontend Frameworks, Backend APIs, Cloud"
    },
    {
      id:crypto.randomUUID(),
      heading:"AI Customer Support Chatbot",
      paragraph1:"An intelligent chatbot system designed to handle customer queries, support tickets, and FAQs with high accuracy.",
      paragraph2:"Integrated natural language processing to understand user intent and provide context-aware responses across multiple platforms.",
      technology:"Python, AI APIs, NLP, Backend Services"
    },
    {
      id:crypto.randomUUID(),
      heading:"Cloud Infrastructure Optimization Platform",
      paragraph1:"A system built to monitor, analyze, and optimize cloud resource usage for cost efficiency and performance.",
      paragraph2:"Includes real-time monitoring, usage analytics, and automated scaling strategies for cloud environments.",
      technology:"AWS, Terraform, Docker, Cloud Monitoring"
    },
    {
      id:crypto.randomUUID(),
      heading:"E-Commerce Backend & Payment System",
      paragraph1:"A robust backend system powering an e-commerce platform with secure payment processing and order management.",
      paragraph2:"Focused on scalability, data integrity, and seamless integration with third-party payment gateways.",
      technology:"Node.js, Databases, Payment APIs"
    },
    {
      id:crypto.randomUUID(),
      heading:"Real-Time Analytics Dashboard",
      paragraph1:"A real-time dashboard that visualizes business and system metrics for faster decision-making.",
      paragraph2:"Designed with interactive charts and live data updates to ensure clarity and responsiveness.",
      technology:"Frontend Frameworks, APIs, Data Visualization"
    },
    {
      id:crypto.randomUUID(),
      heading:"AI-Based Recommendation Engine",
      paragraph1:"A recommendation system that analyzes user behavior to deliver personalized content and product suggestions.",
      paragraph2:"Utilizes machine learning models and data pipelines to continuously improve recommendation accuracy.",
      technology:"Machine Learning, Python, Data Processing"
    },
    {
      id:crypto.randomUUID(),
      heading:"Enterprise API Gateway & Security Layer",
      paragraph1:"A centralized API gateway solution designed to manage, secure, and monitor enterprise-level APIs.",
      paragraph2:"Includes authentication, rate limiting, logging, and performance optimization features.",
      technology:"Backend Frameworks, API Security, Cloud"
    },
  ];

  return(
    <>
      {
        array.map((value)=>{
          return(<ProjectCard h={value.heading} p1={value.paragraph1} p2={value.paragraph2} tech={value.technology} key={value.id}/>);
        })
      }
    </>
  );
}

export function Projects(){
  return(
   <>
      <title>Projects</title>
      <Navigation/>
      <HeroSection 
        h="Our Projects" 
        p="A selection of projects showcasing our expertise across frontend,
          backend, cloud infrastructure, and artificial intelligence." 
        name="projects-hero"
      />
      <section className="projects-section">
        <ProjectMessage/>
      </section>
  </>
  );
}