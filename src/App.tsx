import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './components/home/HomePage';
import { NotesPage } from './pages/NotesPage';
import { CoursesPage } from './pages/CoursesPage';
import { CalculatorPage } from './pages/CalculatorPage';
import { AboutPage } from './pages/AboutPage';
import { Contact } from './pages/Contact';
import { Terms } from './pages/Terms';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { InstallPWA } from './components/InstallPWA';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-900 text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/notes" element={<NotesPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
          <Footer />
          <InstallPWA />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;