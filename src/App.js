import './App.css';
import NavBar from './components/Navbar.js';
import Home from './components/Home.js';
import Gallery from './components/Gallery.js';
import Resume from './components/Resume.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <main>
      <NavBar />
      <Home />
      {/* <Gallery />
      <Resume />
      <Contact /> */}
    </main>
  );
}

export default App;
