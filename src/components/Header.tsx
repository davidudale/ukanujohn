import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Clock, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from './Button';

interface HeaderProps {
  onOpenQuoteModal: (enquiryType?: string, subject?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Solutions', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Projects', path: '/projects' },
    { name: 'Insights', path: '/insights' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="w-full z-40 sticky top-0 bg-white">
      {/* Top Notification / Contact Bar */}
      <div className="bg-forest-950 text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-forest-900 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <a
              href="tel:+2348030000000"
              className="inline-flex items-center gap-1.5 hover:text-solar-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-solar-400" />
              <span>+234 803 000 0000</span>
            </a>
            <a
              href="mailto:contact@ukanuenergymodels.com"
              className="inline-flex items-center gap-1.5 hover:text-solar-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-solar-400" />
              <span>contact@ukanuenergymodels.com</span>
            </a>
            <span className="inline-flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-solar-400" />
              <span>Mon - Fri: 8:00 AM - 5:30 PM WAT</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Standard-Compliant Engineering</span>
            </span>
            <Link
              to="/contact"
              className="text-solar-400 hover:text-solar-300 font-semibold inline-flex items-center gap-1 text-xs"
            >
              <span>Site Survey Scheduling</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-300 border-b ${
          isScrolled
            ? 'py-3 shadow-md bg-white/95 backdrop-blur-md border-slate-200'
            : 'py-4 bg-white border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-forest-900 flex items-center justify-center text-solar-400 shadow-sm border border-forest-800 group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-forest-900 group-hover:text-forest-800 transition-colors leading-tight">
                UKANU <span className="text-solar-600">ENERGY</span>
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-slate-500 uppercase">
                Models & Engineering
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    active
                      ? 'text-forest-900 bg-forest-50 font-semibold border-b-2 border-forest-900'
                      : 'text-slate-600 hover:text-forest-900 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button & Mobile Toggle */}
          <div className="flex items-center space-x-3">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => onOpenQuoteModal()}
              className="hidden sm:inline-flex shadow-sm"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Request a Quote
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-forest-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fade-in">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  active
                    ? 'bg-forest-900 text-white font-semibold'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-forest-900'
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="pt-4 border-t border-slate-100 space-y-3">
            <Button
              variant="secondary"
              fullWidth
              size="md"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Request a Technical Quote
            </Button>

            <div className="text-xs text-slate-500 space-y-2 pt-2 px-1">
              <a href="tel:+2348030000000" className="flex items-center gap-2 text-slate-600">
                <Phone className="w-3.5 h-3.5 text-forest-800" />
                <span>+234 803 000 0000</span>
              </a>
              <a href="mailto:contact@ukanuenergymodels.com" className="flex items-center gap-2 text-slate-600">
                <Mail className="w-3.5 h-3.5 text-forest-800" />
                <span>contact@ukanuenergymodels.com</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

