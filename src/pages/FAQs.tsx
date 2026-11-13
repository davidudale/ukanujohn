import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  HelpCircle, ChevronDown, ChevronUp, Search, ArrowRight
} from 'lucide-react';
import { Button } from '../components/Button';
import { faqsData } from '../data/faqs';

interface OutletContextType {
  onOpenQuoteModal: (enquiryType?: string, subject?: string) => void;
}

export const FAQs: React.FC = () => {
  const { onOpenQuoteModal } = useOutletContext<OutletContextType>();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIds, setOpenIds] = useState<string[]>([faqsData[0].id]);

  const categories = ['All', 'General', 'Quotations', 'Technical', 'Maintenance'];

  const toggleAccordion = (id: string) => {
    setOpenIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = faqsData.filter(faq => {
    const matchesCat = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* Page Header Banner */}
      <section className="bg-forest-950 text-white py-16 sm:py-20 border-b border-forest-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900 border border-forest-800 text-solar-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Customer Knowledge Base</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-forest-100/90 max-w-2xl leading-relaxed">
            Clear, authoritative answers to common inquiries regarding solar PV systems, battery longevity, sizing requirements, and quotation requests.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Search bar & Category filters */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by keyword (e.g., 'quotation', 'battery', 'generator', 'warranty')..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-forest-800 shadow-xs"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">Category:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-forest-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-3 pt-2">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
              <p className="text-sm text-slate-600 font-medium">No questions matched your search criteria.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="mt-3 text-xs font-semibold text-forest-900 underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);

              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs transition-shadow hover:shadow-sm"
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-2 py-0.5 rounded border border-forest-100 shrink-0">
                        {faq.category}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-charcoal-900">
                        {faq.question}
                      </span>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-forest-800 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Help Desk Card */}
        <div className="bg-forest-50 border border-forest-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 mt-12">
          <div>
            <h3 className="text-lg font-bold text-forest-950">Have a question not listed here?</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Our engineering support team is happy to review your specific electrical requirements.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Button
              variant="primary"
              size="sm"
              onClick={() => onOpenQuoteModal('General Inquiry')}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Ask Our Engineers
            </Button>
          </div>
        </div>

      </div>

    </div>
  );
};
