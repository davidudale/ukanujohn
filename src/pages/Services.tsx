import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { 
  Sun, Zap, Compass, Wrench, CheckCircle2, 
  ArrowRight, Check
} from 'lucide-react';
import { Button } from '../components/Button';
import { servicesData } from '../data/services';

interface OutletContextType {
  onOpenQuoteModal: (enquiryType?: string, subject?: string) => void;
}

export const Services: React.FC = () => {
  const { onOpenQuoteModal } = useOutletContext<OutletContextType>();

  const getIcon = (name: string) => {
    switch (name) {
      case 'Sun': return <Sun className="w-8 h-8 text-solar-500" />;
      case 'Zap': return <Zap className="w-8 h-8 text-solar-500" />;
      case 'Compass': return <Compass className="w-8 h-8 text-solar-500" />;
      case 'Wrench': return <Wrench className="w-8 h-8 text-solar-500" />;
      default: return <Sun className="w-8 h-8 text-solar-500" />;
    }
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      
      {/* Page Header Banner */}
      <section className="bg-forest-950 text-white py-16 sm:py-20 border-b border-forest-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900 border border-forest-800 text-solar-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Engineering Capabilities</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl leading-tight">
            Our Confirmed Solutions & Services
          </h1>
          <p className="mt-4 text-base sm:text-lg text-forest-100/90 max-w-2xl leading-relaxed">
            Detailed, standard-compliant renewable power engineering services designed to address specific power reliability and operational cost challenges.
          </p>
        </div>
      </section>

      {/* Main Services Breakdown */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {servicesData.map((service, index) => {
          const isEven = index % 2 === 1;

          return (
            <section
              key={service.id}
              id={service.id}
              className="scroll-mt-28 bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 lg:p-12 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Visual side */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-72 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4 bg-forest-950/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-forest-800 text-white text-xs font-semibold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-solar-400"></span>
                      <span>Verified Solution</span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs text-solar-300 font-semibold italic">
                        "{service.tagline}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Details side */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-1' : ''}`}>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-forest-50 border border-forest-200 flex items-center justify-center shrink-0 shadow-xs">
                      {getIcon(service.iconName)}
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-solar-600 block">
                        Service 0{index + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal-900 leading-tight">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Customer Problem Addressed */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
                    <span className="font-bold text-forest-900 block mb-1">Customer Problem Addressed:</span>
                    <span>{service.problemSolved}</span>
                  </div>

                  {/* Scope of Work */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold text-charcoal-900 uppercase tracking-wider">
                      Confirmed Scope of Work:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                      {service.scopeOfWork.map((scope, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-forest-700 shrink-0 mt-0.5" />
                          <span>{scope}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Confirmed Equipment */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold text-charcoal-900 uppercase tracking-wider">
                      Relevant Equipment & Technology:
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {service.equipment.map((eq, i) => (
                        <span
                          key={i}
                          className="bg-forest-50 text-forest-900 border border-forest-200/80 text-[11px] font-semibold px-2.5 py-1 rounded-md"
                        >
                          {eq}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Benefits & Limitations */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                    <div className="p-3 rounded-lg bg-emerald-50/60 border border-emerald-200/80 text-emerald-950">
                      <span className="font-bold block mb-1 text-emerald-900">Key Benefits:</span>
                      <ul className="space-y-1 text-[11px] text-emerald-900">
                        {service.benefits.slice(0, 2).map((b, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3 rounded-lg bg-amber-50/60 border border-amber-200/80 text-amber-950">
                      <span className="font-bold block mb-1 text-amber-900">Engineering Consideration:</span>
                      <p className="text-[11px] text-amber-900 leading-relaxed">
                        {service.limitations}
                      </p>
                    </div>
                  </div>

                  {/* Enquiry Action */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <Button
                      variant="primary"
                      size="md"
                      onClick={() => onOpenQuoteModal(service.title, `Scope & quotation inquiry for: ${service.title}`)}
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      Request Quotation for {service.title}
                    </Button>
                    <Link to="/contact">
                      <Button variant="ghost" size="md">
                        Discuss with Engineer
                      </Button>
                    </Link>
                  </div>

                </div>

              </div>
            </section>
          );
        })}
      </div>

    </div>
  );
};
