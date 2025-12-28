import { Navigation } from './Navigation';
import './Contact.css';
import HeroSection from './HeroSection';
import{useState} from 'react';

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
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess(true);
                setFormData({ name: '', email: '', message: '' });
                // Clear success message after 3 seconds
                setTimeout(() => setSuccess(false), 3000);
            } else {
                setError(data.error || 'Something went wrong');
            }
        } catch (err) {
            setError('Failed to connect to server. Please try again.');
            console.error('Error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        {success && <div className="success-message">Message sent successfully!</div>}
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              required 
              value={formData.name}
              onChange={handleChange}
          />
          <input 
              type="email" 
              name="email"
              placeholder="Your Email" 
              required 
              value={formData.email}
              onChange={handleChange}
          />
          <textarea 
              name="message"
              placeholder="Tell us about your project"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
          ></textarea>
          <button type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
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