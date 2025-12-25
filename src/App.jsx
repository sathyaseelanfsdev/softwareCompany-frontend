import {Routes,Route} from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="services" element={<Services/>}/>
      <Route path="projects" element={<Projects/>}/>
      <Route path="contact" element={<Contact/>}/>
    </Routes>
  )
}

export default App
