import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { 
  Sun, ShieldCheck, Target, Eye, HeartHandshake, CheckCircle2, 
  ArrowRight, Award, Compass, Building
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';

interface OutletContextType {
  onOpenQuoteModal: (enquiryType?: string, subject?: string) => void;
}

export const About: React.FC = () => {
  const { onOpenQuoteModal } = useOutletContext<OutletContextType>();

  const values = [
    {
      icon: <Compass className="w-6 h-6 text-solar-500" />,
      title: 'Technical Integrity & Precision',
      desc: 'We size and engineer systems based on mathematical load calculations and genuine field metrics, never exaggerated sales claims.'
    },
    {
      icon: <Award className="w-6 h-6 text-solar-500" />,
      title: 'Tier-1 Component Quality',
      desc: 'We exclusively deploy certified solar modules, pure sine wave inverters, and Grade-A LiFePO4 cells from audited manufacturers.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-solar-500" />,
      title: 'Safety & Regulatory Compliance',
      desc: 'Every installation is fully isolated and protected with Class-1 DC switchgear, SPD lightning protection, and certified copper earthing.'
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-solar-500" />,
      title: 'Accountable Partnership',
      desc: 'Our relationship begins, not ends, at commissioning. We provide transparent warranty backing, scheduled servicing, and prompt technical support.'
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      
      {/* Page Header Banner */}
      <section className="bg-forest-950 text-white py-16 sm:py-20 border-b border-forest-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900 border border-forest-800 text-solar-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sun className="w-3.5 h-3.5" />
            <span>About Ukanu Energy Models</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl leading-tight">
            Engineering Sustainable, High-Yield Energy Infrastructure
          </h1>
          <p className="mt-4 text-base sm:text-lg text-forest-100/90 max-w-2xl leading-relaxed">
            Delivering technically sound, reliable solar and renewable power architectures designed to meet the rigorous demands of residential, commercial, and institutional clients.
          </p>
        </div>
      </section>

      {/* Company Background & Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest-800">
              <Building className="w-4 h-4 text-solar-600" />
              <span>Our Background & Origins</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal-900 leading-tight">
              Solving Energy Insecurity Through Engineering Discipline
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Ukanu Energy Models was established in response to a persistent operational challenge faced across emerging markets: chronic electrical grid instability compounded by the crippling financial and environmental burden of fossil fuel generators.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Too often, prospective solar adopters have been burned by undersized systems, substandard lead-acid battery packs, and dangerous electrical installations executed by unqualified vendors. Ukanu Energy Models was founded on the fundamental principle that renewable energy must be engineered with the same rigor, safety standards, and performance metrics as high-grade industrial infrastructure.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Today, we serve residential estates, corporate office complexes, hospitals, and agricultural hubs, translating complex photovoltaic and energy-storage technology into dependable, turn-key power solutions.
            </p>

            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                onClick={() => onOpenQuoteModal('Consultation with Engineering Team')}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Schedule an Engineering Consultation
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1000&q=80"
                alt="Renewable energy facility engineered by Ukanu Energy Models"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold text-solar-400 uppercase tracking-wider block">
                  Strict Technical Standards
                </span>
                <p className="text-sm text-slate-200 font-medium mt-1">
                  Engineered for real-world resilience, high thermal tolerance, and long-term capital preservation.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-50 py-16 sm:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/90 shadow-sm relative space-y-4">
              <div className="w-12 h-12 rounded-xl bg-forest-900 text-solar-400 flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-charcoal-900">Our Mission</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                To accelerate the widespread adoption of clean, sustainable energy by delivering technically rigorous, reliable, and cost-effective renewable power systems that eliminate productivity losses and foster environmental stewardship.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-forest-800">
                <CheckCircle2 className="w-4 h-4 text-forest-700" />
                <span>Zero guesswork in system design and sizing</span>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/90 shadow-sm relative space-y-4">
              <div className="w-12 h-12 rounded-xl bg-forest-900 text-solar-400 flex items-center justify-center font-bold">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-charcoal-900">Our Vision</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                To be the most respected and dependable provider of custom renewable energy models in the region, recognized for engineering excellence, customer partnership, and unwavering system uptime.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-forest-800">
                <CheckCircle2 className="w-4 h-4 text-forest-700" />
                <span>Dependable clean power for every commercial and domestic need</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Guiding Principles"
          title="Our Core Engineering Values"
          subtitle="Our decisions, component selections, and client relationships are governed by four non-negotiable principles."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-3 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-forest-50 border border-forest-100 flex items-center justify-center">
                {v.icon}
              </div>
              <h3 className="text-base font-bold text-charcoal-900">{v.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Multidisciplinary Team & Competence Statement */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-forest-900 text-white rounded-3xl p-8 sm:p-12 border border-forest-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-solar-400 font-bold text-xs uppercase tracking-wider">
                Engineering Team & Credentials
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Multidisciplinary Technical Expertise
              </h2>
              <p className="text-sm sm:text-base text-forest-100/90 leading-relaxed">
                Our operations are led by certified electrical, power systems, and structural engineers with comprehensive field experience across high-voltage AC/DC distribution, photovoltaic modeling, and lithium battery storage chemistry. We adhere strictly to national electrical codes, IEEE standards, and international occupational safety protocols.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-forest-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-solar-400" />
                  <span>Licensed Electrical Engineering Oversight</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-solar-400" />
                  <span>Certified High-Voltage DC Safety Procedures</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-solar-400" />
                  <span>Infrared Thermographic Diagnostic Competence</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-solar-400" />
                  <span>Manufacturer-Certified Inverter & BMS Calibration</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 text-center lg:text-right">
              <Link to="/contact">
                <Button variant="secondary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                  Connect With Our Engineers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
