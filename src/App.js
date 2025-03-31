import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProfileCard from './Components/ProfileCard';
import Card from './Components/AboutMeCard';
import WorkExpCard from './Components/WorkExpCard';
import Skills from './Components/Skills';

function App() {
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
      <Footer/>
    </div>
  );
}

export default App;
