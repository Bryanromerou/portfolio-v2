import { useEffect } from 'react';
import './App.css';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';
import HeadSection from './components/HeadSection';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import useElementOnScreen from './hooks/useElementOnScreen';

function App() {
  const [ containerRef, isVisible ] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: .2
  })
  useEffect(()=>{console.log(isVisible)})
  return (
    <div className="main">
      <Navbar dark={!isVisible}/>
      <HeadSection reference={containerRef}/>
      <Projects/>
      <section className="education_experience">
        <ExperienceSection/>
        <EducationSection/>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
