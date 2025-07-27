import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProfileCard from './Components/ProfileCard';
import Card from './Components/AboutMeCard';
import WorkExpCard from './Components/WorkExpCard';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Loading from './Components/Loading';
import { useState,useEffect } from 'react';
import Recognition from './Components/Recognition';
import './Components/responsive-updates.css'

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
      <Header/>
      <div  className='section-mn-cls'>
        <ProfileCard/>
        <Card/>
      </div>
      <div className='section-wrkexp-cls'>
        <WorkExpCard/>
      </div>
      <Skills/>
      <Projects/>
      <Recognition/>
      <Footer/>
    </div>
  );
}

export default App;
