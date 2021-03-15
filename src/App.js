import './App.css';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import HeadSection from './components/HeadSection';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="main">
      <Navbar/>
      <HeadSection/>
      <Projects/>
      <section className="education_experience">
        <ExperienceSection/>
        <EducationSection/>
      </section>
    </div>
  );
}

export default App;
