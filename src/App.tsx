import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './components/home/HomePage';
import { NotesPage } from './pages/NotesPage';
import { NotePage } from './pages/NotePage';
import { CoursesPage } from './pages/CoursesPage';
import { CalculatorPage } from './pages/CalculatorPage';
import { AboutPage } from './pages/AboutPage';
import { SavedPage } from './pages/SavedPage';
import { Contact } from './pages/Contact';
import { Terms } from './pages/Terms';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { InstallPWA } from './components/InstallPWA';
import { AdUnit } from './components/AdUnit';
import InstallButton from './components/InstallButton';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-900 text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/notes" element={<NotesPage />} />
            <Route path="/notes/:id" element={<NotePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/saved" element={<SavedPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
          <Footer />
          <InstallPWA />
          <AdUnit slot="3229691810" /> {/* Example of non-AMP ad */}
          <InstallButton />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;