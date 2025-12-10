import { HashRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
  import Header from './components/Header';
  import Footer from './components/Footer';
  import Home from './pages/Home';
  import Organization from './pages/Organization';
  import History from './pages/History';
  import Artists from './pages/Artists';
  import News from './pages/News';
  import Audition from './pages/Audition';
  import './App.css';
  import ScrollToTop from './components/ScrollToTop';

  const MainContent = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
      <div className={`app ${isHome ? 'home-page' : ''}`}>
        <Header />
        <main>
          <div key={location.pathname} className="fade-enter-active">
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/company" element={<Navigate to="/company/organization" replace />} />
              <Route path="/company/organization" element={<Organization />} />
              <Route path="/company/history" element={<History />} />
              <Route path="/artists" element={<Artists />} />
              <Route path="/news" element={<News />} />
              <Route path="/audition" element={<Audition />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    );
  };

  import { LanguageProvider } from './context/LanguageContext';

  function App() {
    return (
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <MainContent />
        </Router>
      </LanguageProvider>
    );
  }

export default App;
