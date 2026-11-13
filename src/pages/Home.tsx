import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { 
  Sun, ShieldCheck, Award, ArrowRight, 
  ChevronDown, ChevronUp, Compass, Wrench, Building2, Home as HomeIcon
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { ServiceCard } from '../components/ServiceCard';
import { ProjectCard } from '../components/ProjectCard';
import { EnergyEstimator } from '../components/EnergyEstimator';
import { servicesData } from '../data/services';
import { projectsData } from '../data/projects';
import { faqsData } from '../data/faqs';

interface OutletContextType {
  onOpenQuoteModal: (enquiryType?: string, subject?: string) => void;
}

export const Home: React.FC = () => {
  const { onOpenQuoteModal } = useOutletContext<OutletContextType>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-forest-950 via-forest-900 to-forest-950 text-white overflow-hidden py-16 sm:py-24 lg:py-28">
        {/* Subtle grid background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:24px_24px]" />
        
        {/* Decorative ambient glow */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-solar-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Copy (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-800/90 border border-forest-700 text-solar-300 text-xs font-semibold tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-solar-400 animate-pulse"></span>
                <span>Dependable Renewable Energy Engineering</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Smarter Energy. <br className="hidden sm:inline" />
                <span className="text-solar-400">Sustainable</span> Possibilities.
              </h1>

              <p className="text-base sm:text-lg text-forest-100/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Ukanu Energy Models designs and installs engineered solar systems built for real-world resilience. We help homes, businesses, and institutions eliminate power outages, slash diesel expenditures, and achieve dependable energy independence.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => onOpenQuoteModal('Residential Solar Energy Solution')}
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Request a Technical Consultation
                </Button>
                
                <Link to="/services">
                  <Button
                    variant="white"
                    size="lg"
                  >
                    Explore Solutions
                  </Button>
                </Link>
              </div>

              {/* Key trust badges */}
              <div className="pt-6 border-t border-forest-800/80 grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">99.8%</div>
                  <div className="text-xs text-forest-200 mt-0.5">Power Reliability Yield</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-solar-400">25-Yr</div>
                  <div className="text-xs text-forest-200 mt-0.5">Tier-1 Module Warranty</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">6,000+</div>
                  <div className="text-xs text-forest-200 mt-0.5">LiFePO4 Battery Cycles</div>
                </div>
              </div>

            </div>

            {/* Right Visual / Hero Card (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden shadow-2xl border border-forest-700/60 bg-forest-900 group">
                <img
                  src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80"
                  alt="High quality solar installation by Ukanu Energy Models"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />
                
                {/* Floating overlay badge */}
                <div className="absolute top-4 left-4 bg-forest-950/80 backdrop-blur-md border border-forest-700/80 p-3 rounded-xl text-white flex items-center gap-3 shadow-lg">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold">Standard Compliant</div>
                    <div className="text-[10px] text-slate-300">Certified Wiring & Surge Safety</div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl text-charcoal-900 shadow-xl border border-slate-200">
                  <div className="flex items-center justify-between text-xs font-bold text-forest-900 mb-1">
                    <span>Clean Hybrid Architecture</span>
                    <span className="text-solar-600 font-mono">Zero Millisecond Transfer</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Automated solar PV generation, lithium storage buffering, and generator autostart coordination.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. COMPANY INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-50 border border-forest-200 text-forest-900 text-xs font-bold uppercase tracking-wider">
                <Sun className="w-3.5 h-3.5 text-solar-500" />
                <span>About Ukanu Energy Models</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal-900 leading-tight">
                Engineering Practical, Sustainable Energy for Everyday Life
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Ukanu Energy Models was established to bridge the gap between volatile electrical infrastructure and dependable power access. We do not deal in generic guesswork or unverified specifications. Every solar power system we engineer is backed by rigorous electrical load profiling, high-efficiency equipment, and precision installation standards.
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-forest-900 font-bold text-sm hover:text-solar-600 transition-colors underline underline-offset-4"
                >
                  <span>Learn more about our mission and engineering values</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="w-10 h-10 rounded-lg bg-forest-900 text-solar-400 flex items-center justify-center font-bold">
                  <HomeIcon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-charcoal-900">Residential Solutions</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tailored rooftop solar and silent lithium battery systems designed to power air conditioning, pumps, and household appliances day and night.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="w-10 h-10 rounded-lg bg-forest-900 text-solar-400 flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-charcoal-900">Commercial & Industrial</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Heavy-duty three-phase solar PV systems that dramatically reduce monthly generator fuel budgets for factories, logistics centers, and offices.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="w-10 h-10 rounded-lg bg-forest-900 text-solar-400 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-charcoal-900">Institutional Power</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Uninterruptible clean power systems for clinics, maternity theaters, diagnostic centers, and schools requiring zero millisecond downtime.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="w-10 h-10 rounded-lg bg-forest-900 text-solar-400 flex items-center justify-center font-bold">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-charcoal-900">Consulting & Audits</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Independent power quality audits, peak surge logging, and technical schematics to ensure you invest in the exact capacity you need.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SOLUTIONS OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Core Capabilities"
          title="Confirmed Renewable Energy Solutions"
          subtitle="Explore our verified suite of renewable energy engineering services, tailored to solve specific operational challenges for properties across the region."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onEnquire={(title) => onOpenQuoteModal(service.title, `Inquiry regarding: ${title}`)}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/services">
            <Button variant="outline" size="md" icon={<ArrowRight className="w-4 h-4" />}>
              View Comprehensive Scope & Service Details
            </Button>
          </Link>
        </div>
      </section>

      {/* 4. INTERACTIVE ENERGY ESTIMATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Interactive Guidance"
          title="Estimate Your Sizing & Fuel Savings"
          subtitle="Use our educational sizing calculator to explore how solar capacity, battery storage, and fuel savings align with your daily operational load."
        />

        <div className="mt-10">
          <EnergyEstimator
            onSelectEstimate={(summary) => onOpenQuoteModal('Custom System Sizing Estimate', summary)}
          />
        </div>
      </section>

      {/* 5. WHY CHOOSE UKANU ENERGY MODELS */}
      <section className="bg-forest-900 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            light
            badge="Engineering Excellence"
            title="Why Choose Ukanu Energy Models?"
            subtitle="We distinguish ourselves through technical discipline, genuine component sourcing, and transparent engineering processes."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-forest-950/70 border border-forest-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-forest-800 flex items-center justify-center text-solar-400">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Precision Sizing</h3>
              <p className="text-xs sm:text-sm text-forest-200/90 leading-relaxed">
                No guesswork. We evaluate your actual load curves, peak inrush currents, and seasonal irradiance to deliver mathematically optimized systems.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-forest-950/70 border border-forest-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-forest-800 flex items-center justify-center text-solar-400">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Tier-1 Components Only</h3>
              <p className="text-xs sm:text-sm text-forest-200/90 leading-relaxed">
                We deploy strictly verified Tier-1 monocrystalline panels, Grade-A LiFePO4 cells, and certified pure sine wave inverters with authentic OEM warranties.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-forest-950/70 border border-forest-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-forest-800 flex items-center justify-center text-solar-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Standard-Compliant Safety</h3>
              <p className="text-xs sm:text-sm text-forest-200/90 leading-relaxed">
                Full electrical protection included: Class-1 DC isolators, Type-II surge arresters, copper grounding pits, and fire-retardant conduit routing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-forest-950/70 border border-forest-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-forest-800 flex items-center justify-center text-solar-400">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Proactive Aftercare</h3>
              <p className="text-xs sm:text-sm text-forest-200/90 leading-relaxed">
                We stand behind our installations with scheduled thermography scans, module cleaning guidelines, battery state-of-health audits, and rapid support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FEATURED PROJECTS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-50 border border-forest-200 text-forest-900 text-xs font-bold uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5 text-solar-500" />
              <span>Proven Field Deployments</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal-900">
              Featured Project Installations
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Real installations delivering verifiable fuel reductions and uninterrupted power across sectors.
            </p>
          </div>
          <Link to="/projects">
            <Button variant="outline" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
              View All Projects
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.slice(0, 3).map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onEnquireSimilar={(subject) => onOpenQuoteModal('Custom Project Consultation', subject)}
            />
          ))}
        </div>
      </section>

      {/* 7. HOW ENGAGEMENT WORKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Structured Process"
          title="How Our Engineering Engagement Works"
          subtitle="From initial enquiry to post-installation maintenance, our four-step delivery process ensures complete transparency, accuracy, and lasting peace of mind."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* Step 1 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative space-y-3">
            <div className="w-10 h-10 rounded-full bg-forest-900 text-solar-400 font-extrabold text-sm flex items-center justify-center">
              01
            </div>
            <h3 className="text-base font-bold text-charcoal-900">Consultation & Load Audit</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We review your appliances, electricity expenditure, and roof orientation. For complex facilities, we log actual electrical demand curves.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative space-y-3">
            <div className="w-10 h-10 rounded-full bg-forest-900 text-solar-400 font-extrabold text-sm flex items-center justify-center">
              02
            </div>
            <h3 className="text-base font-bold text-charcoal-900">Design & Proposal</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our engineers model expected solar yield, select compatible inverter/battery specifications, and submit a transparent Bill of Quantities.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative space-y-3">
            <div className="w-10 h-10 rounded-full bg-forest-900 text-solar-400 font-extrabold text-sm flex items-center justify-center">
              03
            </div>
            <h3 className="text-base font-bold text-charcoal-900">Certified Installation</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Certified technicians execute structural mounting, DC/AC wiring, and earthing. We conduct full commissioning tests before handover.
            </p>
          </div>

          {/* Step 4 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative space-y-3">
            <div className="w-10 h-10 rounded-full bg-forest-900 text-solar-400 font-extrabold text-sm flex items-center justify-center">
              04
            </div>
            <h3 className="text-base font-bold text-charcoal-900">Maintenance & Support</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We provide user operational guidelines, warranty documentation, and scheduled preventative maintenance visits to guarantee generation output.
            </p>
          </div>

        </div>
      </section>

      {/* 8. FAQS PREVIEW */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Answers & Guidance"
          title="Frequently Asked Questions"
          subtitle="Answers to common technical, financial, and installation questions regarding solar energy systems."
        />

        <div className="mt-10 space-y-3">
          {faqsData.slice(0, 4).map((faq, idx) => (
            <div
              key={faq.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
              >
                <span className="text-sm sm:text-base font-bold text-charcoal-900">
                  {faq.question}
                </span>
                {openFaqIndex === idx ? (
                  <ChevronUp className="w-5 h-5 text-forest-800 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>
              {openFaqIndex === idx && (
                <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/faqs">
            <Button variant="ghost" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
              Read All Questions & Answers
            </Button>
          </Link>
        </div>
      </section>

      {/* 9. CLOSING CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-forest-950 via-forest-900 to-forest-950 text-white p-8 sm:p-14 border border-forest-800 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="text-solar-400 font-bold text-xs uppercase tracking-wider">
              Empower Your Property Today
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 leading-tight">
              Ready to Discuss Your Renewable Energy Requirements?
            </h2>
            <p className="text-sm sm:text-base text-forest-100 mt-3 leading-relaxed">
              Whether you need to power a single residential household or an industrial cold-storage facility, our engineers are ready to evaluate your load and propose a verified, cost-effective solution.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => onOpenQuoteModal('General Technical Inquiry')}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Request a Proposal Now
              </Button>
              <Link to="/contact">
                <Button variant="white" size="lg">
                  Speak with an Engineer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
