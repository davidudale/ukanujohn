import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { QuoteModal } from '../components/QuoteModal';

export const MainLayout: React.FC = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [modalEnquiryType, setModalEnquiryType] = useState('Residential Solar Energy Solution');
  const [modalSubject, setModalSubject] = useState('');

  const handleOpenQuoteModal = (enquiryType?: string, subject?: string) => {
    if (enquiryType) setModalEnquiryType(enquiryType);
    if (subject) setModalSubject(subject);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Header onOpenQuoteModal={handleOpenQuoteModal} />
      
      <main className="flex-grow">
        {/* Pass down modal opener via Outlet context or events */}
        <Outlet context={{ onOpenQuoteModal: handleOpenQuoteModal }} />
      </main>

      <Footer />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => {
          setQuoteModalOpen(false);
          setModalSubject('');
        }}
        defaultEnquiryType={modalEnquiryType}
        defaultSubject={modalSubject}
      />
    </div>
  );
};

