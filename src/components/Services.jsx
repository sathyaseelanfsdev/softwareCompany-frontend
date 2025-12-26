import { Navigation } from './Navigation';
import './Services.css';

export function Services(){
  return(
    <>
      <title>services</title>

      <Navigation/>

      <section className="services-hero">
        <h1>Our Services</h1>
        <p>
          Codewave technologies provides comprehensive software development services covering
          frontend engineering, backend systems, cloud infrastructure, and artificial
          intelligence. We work with modern technologies to build scalable and
          future-ready solutions.
        </p>
      </section>

      <section className="services-section">

        <div className="service-card">
          <h3>Frontend Development</h3>
          <p>
            We design and develop modern, responsive, and high-performance user
            interfaces that deliver excellent user experiences across devices.
          </p>
          <p>
            Our frontend solutions focus on usability, accessibility, performance,
            and clean component-based architecture using modern frameworks and
            design principles.
          </p>
        </div>

        <div className="service-card">
          <h3>Backend Development</h3>
          <p>
            We build secure and scalable backend systems capable of handling complex
            business logic, large data volumes, and high user traffic.
          </p>
          <p>
            Our backend services include database design, authentication systems,
            authorization, API development, and performance optimization.
          </p>
        </div>

        <div className="service-card">
          <h3>Full-Stack Application Development</h3>
          <p>
            From concept to deployment, we deliver complete full-stack applications
            with seamless integration between frontend and backend systems.
          </p>
          <p>
            We ensure clean architecture, modular code structure, and maintainable
            systems that can evolve as business requirements grow.
          </p>
        </div>

        <div className="service-card">
          <h3>Cloud & DevOps Solutions</h3>
          <p>
            We help businesses deploy, scale, and manage applications using modern
            cloud platforms and DevOps practices.
          </p>
          <p>
            Our services include cloud setup, CI/CD pipelines, infrastructure
            automation, monitoring, and performance optimization.
          </p>
        </div>

        <div className="service-card">
          <h3>AI & Machine Learning Solutions</h3>
          <p>
            We develop intelligent systems powered by machine learning models,
            automation tools, and AI-driven APIs.
          </p>
          <p>
            Our AI solutions focus on data processing, prediction, automation, and
            integration of AI services into existing software platforms.
          </p>
        </div>

        <div className="service-card">
          <h3>API Development & System Integration</h3>
          <p>
            We design and implement secure, scalable APIs that connect applications,
            services, and third-party platforms.
          </p>
          <p>
            Our integration services ensure smooth data flow, reliable communication,
            and long-term maintainability across systems.
          </p>
        </div>

        <div className="service-card">
          <h3>Multi-Language Software Development</h3>
          <p>
            We work with a wide range of programming languages and frameworks to
            choose the right technology for each problem.
          </p>
          <p>
            This flexibility allows us to build efficient solutions across different
            platforms, industries, and technical requirements.
          </p>
        </div>

        <div className="service-card">
          <h3>Software Consulting & Architecture</h3>
          <p>
            We provide technical consulting to help teams make informed decisions
            about system architecture, scalability, and technology selection.
          </p>
          <p>
            Our consulting services help reduce technical debt and align software
            systems with long-term business goals.
          </p>
        </div>

        <div className="service-card">
          <h3>Maintenance, Optimization & Support</h3>
          <p>
            We offer ongoing maintenance and support to keep applications secure,
            fast, and reliable.
          </p>
          <p>
            Our services include bug fixes, performance tuning, upgrades, and
            continuous improvements to ensure long-term stability.
          </p>
        </div>

      </section>

    </>
  );
}