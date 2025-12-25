import { Navigation } from './Navigation';
import './Contact.css';

export function Contact(){
  return(
    <>
      <title>contact</title>
      <Navigation/>
      <section class="contact-hero">
        <h1>Get in Touch</h1>
        <p>
          Have a project in mind or need a technology partner?
          Reach out to us and let’s build something impactful together.
        </p>
      </section>

      <section class="contact-section">

        <div class="contact-info">
          <h2>Contact Information</h2>
          <p>
            We work with startups, enterprises, and individuals to deliver
            scalable and innovative software solutions.
          </p>

          <p><strong>Email:</strong> contact@codewavetechnologies.tech</p>
          <p><strong>Phone:</strong> +91 12345 67890</p>
          <p><strong>Location:</strong> Remote • Global</p>

          <p class="note">
            Our team typically responds within 24 hours on business days.
          </p>
        </div>

        <div class="contact-form">
          <h2>Send Us a Message</h2>

          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Tell us about your project" rows="5"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

      </section>
  </>
  );
}