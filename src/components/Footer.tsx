import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck, Sun, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  return (
    <footer className="bg-charcoal-950 text-slate-300 border-t border-charcoal-800">
      {/* Pre-footer Call to Action Band */}
      <div className="bg-forest-900 border-b border-forest-800 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-solar-400 font-semibold text-xs tracking-wider uppercase">
              Start Your Clean Energy Transition
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Ready to eliminate blackout disruptions & fuel overhead?
            </h3>
            <p className="text-forest-100 text-sm mt-1 max-w-xl">
              Schedule an on-site load audit or discuss your commercial/residential renewable energy specifications with our engineers.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-solar-500 text-charcoal-950 font-bold hover:bg-solar-400 transition-colors shadow-md text-sm"
            >
              <span>Contact Engineering Desk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+2348030000000"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-forest-800/80 hover:bg-forest-800 text-white font-medium border border-forest-700 transition-colors text-sm"
            >
              <Phone className="w-4 h-4 text-solar-400" />
              <span>+234 803 000 0000</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Company Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-forest-900 flex items-center justify-center text-solar-400 border border-forest-700">
                <Sun className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white">
                  UKANU <span className="text-solar-400">ENERGY</span>
                </span>
                <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                  Models & Engineering
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Ukanu Energy Models is a specialized renewable energy solutions company dedicated to designing, engineering, and delivering reliable solar and energy storage systems for residential, commercial, and institutional clients.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-charcoal-900 border border-charcoal-800 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Strict Technical Quality & Safety Standards</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-solar-500 pl-2">
              Company & Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/" className="hover:text-solar-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-solar-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-solar-400 transition-colors">Solutions & Services</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-solar-400 transition-colors">Equipment & Products</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-solar-400 transition-colors">Project Portfolio</Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-solar-400 transition-colors">Technical Insights</Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-solar-400 transition-colors">Frequently Asked Questions</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-solar-400 transition-colors">Contact Engineering</Link>
              </li>
            </ul>
          </div>

          {/* Solutions Offered */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-solar-500 pl-2">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/services#solar-energy-solutions" className="hover:text-solar-400 transition-colors">
                  Solar Energy Solutions
                </Link>
              </li>
              <li>
                <Link to="/services#renewable-energy-systems" className="hover:text-solar-400 transition-colors">
                  Renewable Energy Systems
                </Link>
              </li>
              <li>
                <Link to="/services#energy-consulting-design" className="hover:text-solar-400 transition-colors">
                  Energy Consulting & Design
                </Link>
              </li>
              <li>
                <Link to="/services#installation-and-maintenance" className="hover:text-solar-400 transition-colors">
                  Installation & Maintenance
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-solar-400 transition-colors">
                  High-Capacity LiFePO4 Storage
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-solar-400 transition-colors">
                  Solar Water Pumping (VFD)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-solar-500 pl-2">
              Contact & Location
            </h4>
            <div className="space-y-3.5 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-solar-400 shrink-0 mt-1" />
                <span>Ukanu Energy Models Engineering Hub, Commercial District, Abuja & Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-solar-400 shrink-0" />
                <a href="tel:+2348030000000" className="hover:text-white transition-colors">
                  +234 803 000 0000
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-solar-400 shrink-0" />
                <a href="mailto:contact@ukanuenergymodels.com" className="hover:text-white transition-colors">
                  contact@ukanuenergymodels.com
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-solar-400 shrink-0 mt-0.5" />
                <span>Monday – Friday: 8:00 AM – 5:30 PM (WAT)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="mt-14 pt-8 border-t border-charcoal-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Ukanu Energy Models. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setPrivacyModalOpen(true)}
              className="hover:text-slate-300 transition-colors underline-offset-4 hover:underline"
            >
              Privacy Notice & Data Processing
            </button>
            <Link to="/faqs" className="hover:text-slate-300 transition-colors">
              Terms of Engagement
            </Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">
              Sitemap & Inquiries
            </Link>
          </div>
        </div>
      </div>

      {/* Privacy Notice Modal */}
      {privacyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/80 backdrop-blur-sm">
          <div className="bg-white text-charcoal-900 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between border-b pb-3 mb-4">
              <h3 className="text-lg font-bold text-forest-900">Privacy Notice & Enquiry Handling</h3>
              <button
                onClick={() => setPrivacyModalOpen(false)}
                className="p-1 rounded-md text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-sm text-slate-600 space-y-3 max-h-[60vh] overflow-y-auto pr-2">
              <p>
                <strong>1. Data Collection:</strong> Ukanu Energy Models collects personal and commercial information (such as name, email address, phone number, and location) strictly to respond to quotation requests, evaluate energy load profiles, and conduct technical feasibility consultations.
              </p>
              <p>
                <strong>2. Use of Information:</strong> Submitted details are reviewed solely by authorized engineering and customer advisory personnel. We never sell, rent, or distribute client contact details to third-party marketing organizations.
              </p>
              <p>
                <strong>3. Scope Transparency:</strong> This corporate website does not run unauthorized background tracking, invasive third-party telemetry, or unnecessary data profiling. Submissions are delivered securely to our verified company intake channels.
              </p>
              <p>
                <strong>4. Right to Rectification:</strong> You may request the modification or removal of your enquiry records at any time by contacting us directly at <span className="font-mono text-xs">privacy@ukanuenergymodels.com</span>.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t flex justify-end">
              <button
                onClick={() => setPrivacyModalOpen(false)}
                className="px-4 py-2 bg-forest-900 text-white rounded-lg text-sm font-medium hover:bg-forest-800"
              >
                Understood & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
