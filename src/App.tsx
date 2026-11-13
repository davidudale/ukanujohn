import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Products } from './pages/Products';
import { Projects } from './pages/Projects';
import { Insights } from './pages/Insights';
import { FAQs } from './pages/FAQs';
import { Contact } from './pages/Contact';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="products" element={<Products />} />
          <Route path="projects" element={<Projects />} />
          <Route path="insights" element={<Insights />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="contact" element={<Contact />} />
          {/* Fallback redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

