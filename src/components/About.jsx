import { Navigation } from './Navigation';
import './About.css';
import HeroSection from './HeroSection';

function Section2(){
  return(
    <section className="about-section">
      <h2>Who We Are</h2>
      <p>
        We are a technology-focused software company working across frontend,
        backend, cloud infrastructure, and artificial intelligence. Our goal is to
        help businesses transform ideas into production-ready software systems.
      </p>
      <p>
        From modern user interfaces to robust backend architectures and intelligent
        AI-powered solutions, we design and build software that is secure,
        maintainable, and scalable.
      </p>
    </section>
  );
}
function Section3(){
  return(
    <section className="about-section dark">
      <h2>What We Do</h2>
      <p>
        We provide end-to-end software development services, including frontend
        engineering, backend systems, cloud deployment, and AI-driven solutions.
        Our work spans multiple programming languages, frameworks, and platforms.
      </p>
    </section>
  );
}
function Section4(){
  return(
    <section className="about-section">
      <h2>How We Work</h2>

      <div className="work-points">
        <div className="point">
          <h4>Requirement-Driven Development</h4>
          <p>
            We begin every project by understanding business goals and technical
            requirements in depth.
          </p>
        </div>

        <div className="point">
          <h4>Scalable System Design</h4>
          <p>
            Our systems are designed to handle growth, performance, and future
            expansion.
          </p>
        </div>

        <div className="point">
          <h4>Quality & Best Practices</h4>
          <p>
            We follow clean coding standards, version control, testing, and
            industry best practices.
          </p>
        </div>
      </div>
    </section>
  );
}
function Section5(){
  return(
    <section className="about-section dark">
      <h2>Our Expertise</h2>
      <p>
        Our expertise spans frontend frameworks, backend architectures, cloud
        platforms, AI and machine learning tools, and multiple programming
        languages. We choose the right technology based on the problem — not the
        trend.
      </p>
      <p>
        This flexible and technology-agnostic approach allows us to build solutions
        that are efficient, future-proof, and aligned with business needs.
      </p>
    </section>
  );
}
function Section6(){
  return(
    <section className="about-section">
      <h2>Our Vision</h2>
      <p>
        Our vision is to build software that not only functions well but also
        delivers long-term value. We aim to create systems that are reliable,
        adaptable, and ready for the evolving digital landscape.
      </p>
    </section>
  );
}
export function About(){
  return(
   <>
      <title>About</title>
      <Navigation/>
      <HeroSection 
      h="About Codewave Technology" 
      p="Codewave Technology is a software
        development company delivering intelligent,
        scalable, and reliable digital solutions across web, cloud, and AI
        technologies." 
      name="about-hero"
      />
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>   
  </>
  );
}