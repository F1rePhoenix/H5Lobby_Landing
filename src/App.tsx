import { useState } from 'react';
import Header from './components/Header/Header';
import HeroBanner from './components/HeroBanner/HeroBanner';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import Features from './components/Features/Features';
import ModsSection from './components/ModsSection/ModsSection';
import './styles/variables.css';
import './styles/globals.css';
import TeamSection from './components/TeamSection/TeamSection';
import DownloadBanner from './components/DownloadBanner/DownloadBanner';
import FAQSection from './components/FAQSection/FAQSection';
import Footer from './components/Footer/Footer';

function App() {
  const [language, setLanguage] = useState<'ru' | 'en'>('ru');
  const dividerStyle = {
    width: '100%',
    height: '50px',
    backgroundColor: 'rgba(10, 10, 15, 1)'
  };
  return (
    <div className="App">
      <Header language={language} onLanguageChange={setLanguage} />
      <HeroBanner language={language} />
      <div style={dividerStyle}></div>
      <WelcomeSection language={language} />
      <Features language={language} />
      <ModsSection language={language} />
      <TeamSection language={language}/>
      <FAQSection language={language}/>
      <DownloadBanner language={language}/>
      <Footer language={language}/>
    </div>
  );
}

export default App;