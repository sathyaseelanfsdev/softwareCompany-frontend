import { Navigation } from './Navigation';
import './Contact.css';
import HeroSection from './HeroSection';

function ContactInfo(){
  return(
    <div className="contact-info">
      <h2>Contact Information</h2>
      <p>
        We work with startups, enterprises, and individuals to deliver
        scalable and innovative software solutions.
      </p>

      <p><strong>Email:</strong> contact@codewavetechnologies.tech</p>
      <p><strong>Phone:</strong> +91 12345 67890</p>
      <p><strong>Location:</strong> Remote • Global</p>

      <p className="note">
        Our team typically responds within 24 hours on business days.
      </p>
    </div>
  );
}
function ContactForm(){
  return(
    <div className="contact-form">
      <h2>Send Us a Message</h2>

      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Tell us about your project" rows="5"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
export function Contact(){
  return(
    <>
      <title>contact</title>
      <Navigation/>
      <HeroSection 
        h="Get in Touch" 
        p="Have a project in mind or need a technology partner?
          Reach out to us and let’s build something impactful together." 
        name="contact-hero"
      />
      <section className="contact-section">
        <ContactInfo/>
        <ContactForm/>  
      </section>
  </>
  );
}