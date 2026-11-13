import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  BookOpen, Clock, Calendar, CheckCircle2, X, ChevronRight
} from 'lucide-react';
import { Button } from '../components/Button';
import { InsightArticle } from '../types';
import { insightsData } from '../data/insights';

interface OutletContextType {
  onOpenQuoteModal: (enquiryType?: string, subject?: string) => void;
}

export const Insights: React.FC = () => {
  const { onOpenQuoteModal } = useOutletContext<OutletContextType>();
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* Page Header Banner */}
      <section className="bg-forest-950 text-white py-16 sm:py-20 border-b border-forest-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900 border border-forest-800 text-solar-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Technical Knowledge & Best Practices</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl leading-tight">
            Renewable Energy Insights & Resources
          </h1>
          <p className="mt-4 text-base sm:text-lg text-forest-100/90 max-w-2xl leading-relaxed">
            Educational engineering articles covering photovoltaic system design, battery storage chemistry, sizing principles, and preventive maintenance.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {insightsData.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="font-semibold text-forest-800 bg-forest-50 px-2.5 py-1 rounded-md border border-forest-100">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-solar-500" />
                      {article.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {article.date}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-charcoal-900 leading-snug mt-2 hover:text-forest-900 transition-colors cursor-pointer"
                  onClick={() => setActiveArticle(article)}
                >
                  {article.title}
                </h3>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {article.summary}
                </p>

                {/* Key Takeaways preview */}
                <div className="mt-5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs space-y-1.5">
                  <div className="font-bold text-charcoal-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-forest-700" />
                    <span>Key Takeaway:</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed font-medium">
                    {article.keyTakeaways[0]}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveArticle(article)}
                  className="text-sm font-bold text-forest-900 hover:text-forest-700 inline-flex items-center gap-1.5 cursor-pointer underline underline-offset-4"
                >
                  <span>Read Full Technical Guide</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onOpenQuoteModal('Consultation from Insights', `Inquiry regarding: ${article.title}`)}
                >
                  Consult On This
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Note */}
        <div className="mt-14 p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 max-w-3xl mx-auto text-center">
          <p className="font-bold">Engineering Advisory Note:</p>
          <p className="mt-1 leading-relaxed">
            The resources published above provide general educational guidance. Because actual energy yield is contingent upon unique roof orientation, geographic coordinates, and electrical load dynamics, these guides do not substitute for a personalized engineering site audit.
          </p>
        </div>

      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
            
            <div className="p-6 sm:p-8 border-b border-slate-100 flex items-start justify-between gap-4 sticky top-0 bg-white/95 backdrop-blur-xs z-10">
              <div>
                <span className="text-xs font-bold text-forest-800 uppercase tracking-wider bg-forest-50 px-2.5 py-1 rounded-md">
                  {activeArticle.category}
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-charcoal-900 mt-2 leading-tight">
                  {activeArticle.title}
                </h2>
                <div className="flex items-center gap-4 text-xs text-slate-500 mt-2">
                  <span>{activeArticle.date}</span>
                  <span>•</span>
                  <span>{activeArticle.readTime}</span>
                </div>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-5 text-sm sm:text-base text-slate-700 leading-relaxed">
              {activeArticle.content.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* Key takeaways box */}
              <div className="my-6 p-6 rounded-2xl bg-forest-50 border border-forest-200">
                <h4 className="text-sm font-bold text-forest-950 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-solar-600" />
                  <span>Key Engineering Takeaways</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-forest-900">
                  {activeArticle.keyTakeaways.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-forest-800 mt-2 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500">
                Have questions about applying this to your facility?
              </span>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" onClick={() => setActiveArticle(null)}>
                  Close Guide
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    const title = activeArticle.title;
                    setActiveArticle(null);
                    onOpenQuoteModal('Consultation from Insights', `Inquiry regarding: ${title}`);
                  }}
                >
                  Request Technical Consultation
                </Button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
