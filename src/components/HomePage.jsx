import { Navigation } from './Navigation';
import './HomePage.css';

function Hero(){
  return(
    <section className="hero">
      <h1>Building Modern Web Applications That Scale</h1>
      <p>
        We create fast, secure, and scalable AI-driven, full-stack solutions for startups and growing businesses 
        specializing in intelligent systems,cloud architecture, and cutting-edge development
      </p>
      <div className="hero-buttons">
        <a href="/services" className="btn primary">View Services</a>
        <a href="/projects" className="btn secondary">See Projects</a>
      </div>
    </section>
  );
}
function Services(){
  return(
    <section className="services">
      <h2>What We Do</h2>
      <div className="service-cards">

        <div className="card">
          <h3>Web Application Development</h3>
          <p>
            Custom, responsive, and performance-driven web applications built using
            modern technologies.
          </p>
        </div>

        <div className="card">
          <h3>Backend & API Development</h3>
          <p>
            Secure and scalable REST APIs using Node.js, Express, and MongoDB.
          </p>
        </div>

        <div className="card">
          <h3>UI/UX Implementation</h3>
          <p>
            Clean and intuitive user interfaces focused on usability and experience.
          </p>
        </div>

        <div className="card">
          <h3>Cloud & Deployment</h3>
          <p>
            Application deployment, optimization, and version control using modern tools.
          </p>
        </div>

      </div>

      <a href="/services" className="link">View all services →</a>
    </section>
  );
}
function WhyUs(){
  return(
    <section className="why-us">
      <h2>Why Codewave Technology</h2>
      <div className="reasons">

        <div className="reason">
          <h4>Scalable Architecture</h4>
          <p>Applications designed to grow with your business.</p>
        </div>

        <div className="reason">
          <h4>Clean & Maintainable Code</h4>
          <p>Readable, structured, and easy to extend.</p>
        </div>

        <div className="reason">
          <h4>Modern Tech Stack</h4>
          <p>React, Node.js, MongoDB, Express, and best practices.</p>
        </div>

      </div>
    </section>
  );
}
function Projects(){
  return(
    <section className="projects">
      <h2>Featured Projects</h2>
      <div className="project-cards">

        <div className="project">
          <h3>Task Manager Platform</h3>
          <p>
            A full-stack task management app with authentication and role-based access.
          </p>
          <span>React • Node • MongoDB</span>
        </div>

        <div className="project">
          <h3>Company Portfolio Website</h3>
          <p>
            A responsive business website with dynamic routing and clean UI.
          </p>
          <span>React • Router • CSS</span>
        </div>

      </div>

      <a href="/projects" className="link">View all projects →</a>
    </section>
  );
}
function Tech(){
  return(
    <section className="tech">
      <h2>Technolgies we use</h2>
      <div className="technology-grid">
        <div className="sub-technology-grid">
          <h3>Programming Languages</h3>
          <p>•JavaScript</p>
          <p>•TypeScript</p>
          <p>•Python</p>
          <p>•Java</p>
          <p>•C#</p>
          <p>•C++</p>
          <p>•Go</p>
          <p>•PHP</p>
          <p>•Swift</p>
          <p>•Kotlin</p>
          <p>•Rust</p>
          <p>•SQL</p>
          <p>•Dart</p>
          <p>•Ruby</p>
        </div>
        <div className="sub-technology-grid">
          <h3>Frontend Frameworks & Libraries</h3>
          <p>• React</p>
          <p>• Angular</p>
          <p>• Vue.js</p>
          <p>• Next.js</p>
          <p>• Nuxt.js</p>
          <p>• Solid.js</p>
          <p>• Qwik</p>
          <p>• Astro</p>
          <p>• Remix</p>
          <p>• jQuery</p>
          <p>• Ember.js</p>
          <p>• Backbone.js</p>
          <p>• Alpine.js</p>
          <p>• Preact</p>
        </div>
        <div className="sub-technology-grid">
          <h3>Backend frameworks</h3>
          <p>• Node.js</p>
          <p>• Express.js</p>
          <p>• Django</p>
          <p>• Spring Boot</p>
          <p>• Laravel</p>
          <p>• ASP.NET Core</p>
          <p>• FastAPI</p>
          <p>• Flask</p>
          <p>• Ruby on Rails</p>
          <p>• NestJS</p>
          <p>• Koa.js</p>
          <p>• Fiber</p>
          <p>• Phoenix</p>
          <p>• AdonisJS</p>
          <p>• Fastify</p>
        </div>
        <div className="sub-technology-grid">
          <h3>Artificial intelligence and Date science</h3>
          <p>• PyTorch</p>
          <p>• TensorFlow</p>
          <p>• Scikit-learn</p>
          <p>• Pandas</p>
          <p>• NumPy</p>
          <p>• OpenAI API</p>
          <p>• Hugging Face</p>
          <p>• Jupyter Notebooks</p>
          <p>• Claude API</p>
          <p>• GitHub Copilot</p>
        </div>
        <div className="sub-technology-grid">
          <h3>Infrastructure & Cloud</h3>
          <p>• Amazon Web Services (AWS)</p>
          <p>• Microsoft Azure</p>
          <p>• Google Cloud Platform (GCP)</p>
          <p>• Docker</p>
          <p>• Kubernetes</p>
          <p>• Terraform</p>
          <p>• Firebase</p>
          <p>• Cloudflare Workers</p>
          <p>• Vercel</p>
          <p>• Netlify</p>
        </div>
      </div>
    </section>
  );
}
function Cta(){
  return(
    <section className="cta">
      <h2>Have an idea or a project in mind?</h2>
      <p>Let’s build something great together.</p>
      <a href="/contact" className="btn primary">Contact Us</a>
    </section>
  );
}
export function HomePage(){
  return(
    <>
      <title>Home</title>
      <Navigation/>
      <Hero/>
      <Services/>
      <WhyUs/>
      <Projects/>
      <Tech/>
      <Cta/>     
  </>
  );
}