import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
// import Aos from 'aos';
// import "aos/dist/aos.css"
// import { useEffect } from 'react';
function App() {
  // useEffect(()=>{
  //   Aos.init();
  // },[]);
  return (
    <>
      <Navbar/>
      <div className='container'>
      <Home/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Contact/>
      </div>
    </>
  );
}

export default App;
