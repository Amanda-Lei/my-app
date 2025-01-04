import './App.css';
import NavBar from './components/Navbar.js';
import Home from './components/Home.js';
import Experience from './components/Experience.js';
import Resume from './components/Resume.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <main className='bg-dark'>
      <NavBar/>
      <Home id="home"/>
      <Experience id="experience"/>
      <Resume id="resume"/>
      <Contact id="contact"/>
    </main>
  );
}

export default App;
