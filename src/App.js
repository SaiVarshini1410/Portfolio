import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AboutMeCard from './Components/AboutMeCard'
import WorkExpCard from './Components/WorkExpCard';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Loading from './Components/Loading';
import { useState, useEffect } from 'react';
import Recognition from './Components/Recognition';
import './Components/responsive-updates.css';
import Education from './Components/Education';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Header />
      <AboutMeCard />      
      <div className='section-wrkexp-cls'>
        <WorkExpCard />
      </div>
      
      <Skills />
      <Education />
      <Projects />
      <Recognition />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;