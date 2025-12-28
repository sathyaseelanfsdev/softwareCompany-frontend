import './Navigation.css';
import { useNavigate,Link } from 'react-router-dom';

export function Navigation(){
  let navigate = useNavigate();
  return(
    <>
      <nav className="navbar">
        <div className="logo">Codewave Technologies</div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        
        <button className="nav-btn" onClick={() => navigate("/contact")}>
          Get Started
        </button>
      </nav>
    </>
  );
}