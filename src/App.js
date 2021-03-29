import { useEffect } from 'react';
// import './App.css';
import './styles/styles.scss';
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
    <>
      <Navbar dark={!isVisible}/>

      <div className="main">
        <HeadSection reference={containerRef}/>
        <Projects/>
        <section className="education_experience">
          <ExperienceSection/>
          <EducationSection/>
        </section>
      </div>
      
      <Footer/>
    </>
  );
}

export default App;
