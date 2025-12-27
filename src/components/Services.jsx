import HeroSection from './HeroSection';
import { Navigation } from './Navigation';
import './Services.css';

function ServiceCard({h,p1,p2,key}){
  return(
    <div key={key}className="service-card">
      <h3>{h}</h3>
      <p>{p1}</p>
      <p>{p2}</p>
    </div>
  );
}
function ServiceMessages(){
  const servicesArray=[
      {
      heading:"Frontend Development",
      paragraph1:"We design and develop modern, responsive, and high-performance user interfaces that deliver excellent user experiences across devices.",
      paragraph2:"Our frontend solutions focus on usability, accessibility, performance, and clean component-based architecture using modern frameworks and design principles.",
      id:crypto.randomUUID()
    },{
      heading:"Backend Development",
      paragraph1:"We build secure and scalable backend systems capable of handling complex business logic, large data volumes, and high user traffic.",
      paragraph2:"Our backend services include database design, authentication systems, authorization, API development, and performance optimization.",
      id:crypto.randomUUID()
    },{
      heading:"Full-Stack Application Development",
      paragraph1:"From concept to deployment, we deliver complete full-stack applications with seamless integration between frontend and backend systems.",
      paragraph2:"We ensure clean architecture, modular code structure, and maintainable systems that can evolve as business requirements grow.",
      id:crypto.randomUUID()
    },{
      heading:"Cloud & DevOps Solutions",
      paragraph1:"We help businesses deploy, scale, and manage applications using modern cloud platforms and DevOps practices.",
      paragraph2:"Our services include cloud setup, CI/CD pipelines, infrastructure automation, monitoring, and performance optimization.",
      id:crypto.randomUUID()
    },{
      heading:"AI & Machine Learning Solutions",
      paragraph1:"We develop intelligent systems powered by machine learning models, automation tools, and AI-driven APIs.",
      paragraph2:"Our AI solutions focus on data processing, prediction, automation, and integration of AI services into existing software platforms.",
      id:crypto.randomUUID()
    },{
      heading:"API Development & System Integration",
      paragraph1:"We design and implement secure, scalable APIs that connect applications, services, and third-party platforms.",
      paragraph2:"Our integration services ensure smooth data flow, reliable communication, and long-term maintainability across systems.",
      id:crypto.randomUUID()
    },{
      heading:"Multi-Language Software Development",
      paragraph1:"We work with a wide range of programming languages and frameworks to choose the right technology for each problem.",
      paragraph2:"This flexibility allows us to build efficient solutions across different platforms, industries, and technical requirements.",
      id:crypto.randomUUID()
    },{
      heading:"Software Consulting & Architecture",
      paragraph1:"We provide technical consulting to help teams make informed decisions about system architecture, scalability, and technology selection.",
      paragraph2:"Our consulting services help reduce technical debt and align software systems with long-term business goals.",
      id:crypto.randomUUID()
    },{
      heading:"Maintenance, Optimization & Support",
      paragraph1:"We offer ongoing maintenance and support to keep applications secure, fast, and reliable.",
      paragraph2:"Our services include bug fixes, performance tuning, upgrades, and continuous improvements to ensure long-term stability.",
      id:crypto.randomUUID()
    }
  ];
  return(
    <>
      {
        servicesArray.map((value)=>{
          return(
            <ServiceCard h={value.heading} p1={value.paragraph1} p2={value.paragraph2} key={value.id}/>
          );
        })
      }
    </>
  );
}
export function Services(){  
  return(
    <>
      <title>services</title>
      <Navigation/>
      <HeroSection 
        h="Our Services" 
        p="Codewave technologies provides comprehensive software development services covering
          frontend engineering, backend systems, cloud infrastructure, and artificial
          intelligence. We work with modern technologies to build scalable and
          future-ready solutions." 
        name="services-hero"
      />
      <section className="services-section">
        <ServiceMessages/>
      </section>
    </>
  );
}