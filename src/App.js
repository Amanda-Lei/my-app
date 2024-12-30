import './App.css';
import NavBar from './components/Navbar.js';
import Home from './components/Home.js';
import Experience from './components/Experience.js';
// import Gallery from './components/Gallery.js';
import Resume from './components/Resume.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <main className='bg-dark'>
      <NavBar/>
      <Home id="home"/>
      <Experience id="experience"/>
      {/* <Gallery id="gallery"/> */}
      <Resume id="resume"/>
      <Contact id="contact"/>
    </main>
  );
}

export default App;
