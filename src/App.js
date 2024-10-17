import './App.css';
import NavBar from './components/Navbar.js';
import Home from './components/Home.js';
import Gallery from './components/Gallery.js';
import Resume from './components/Resume.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <main className='bg-dark'>
      <NavBar/>
      <Home id="home"/>
      <Gallery id="gallery"/>
      <Resume id="resume"/>
      <Contact id="contact"/>
    </main>
  );
}

export default App;
