import { useState } from 'react';
import Header from './components/Header/Header';
import HeroBanner from './components/HeroBanner/HeroBanner';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import Features from './components/Features/Features';
import ModsSection from './components/ModsSection/ModsSection';
import './styles/variables.css';
import './styles/globals.css';

function App() {
  const [language, setLanguage] = useState<'ru' | 'en'>('ru');

  return (
    <div className="App">
      <Header language={language} onLanguageChange={setLanguage} />
      <HeroBanner language={language} />
      <WelcomeSection language={language} />
      <Features language={language} />
      <ModsSection language={language} />
      
      {/* Остальные блоки будут здесь */}
      <main style={{ minHeight: '100vh', background: 'var(--color-bg-dark)' }}>
        {/* Team, FAQ, FinalCTA и т.д. */}
      </main>
    </div>
  );
}

export default App;