import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, ShieldCheck, Phone, Mail } from 'lucide-react';
import { Button } from './Button';
import { QuoteFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultEnquiryType?: string;
  defaultSubject?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultEnquiryType = 'Residential Solar Energy Solution',
  defaultSubject = ''
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    enquiryType: defaultEnquiryType,
    location: '',
    estimatedBudget: '',
    message: defaultSubject ? `Inquiry regarding: ${defaultSubject}` : '',
    consent: true
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  useEffect(() => {
    if (defaultEnquiryType) {
      setFormData(prev => ({
        ...prev,
        enquiryType: defaultEnquiryType,
        message: defaultSubject ? `Inquiry regarding: ${defaultSubject}` : prev.message
      }));
    }
  }, [defaultEnquiryType, defaultSubject]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide a valid email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format (e.g., name@company.com).';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a phone number for direct engineering consultation.';
    } else if (formData.phone.trim().length < 7) {
      newErrors.phone = 'Please enter a valid phone number.';
    }
    if (!formData.message.trim()) newErrors.message = 'Please provide details about your energy requirements or appliances.';
    if (!formData.consent) newErrors.consent = 'Please confirm consent to be contacted regarding this quotation.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable secure dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      const generatedId = `UEM-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceId(generatedId);
      
      // Save locally to persist submission for demo and verification
      try {
        const existing = JSON.parse(localStorage.getItem('ukanu_enquiries') || '[]');
        existing.push({
          id: generatedId,
          ...formData,
          submittedAt: new Date().toISOString()
        });
        localStorage.setItem('ukanu_enquiries', JSON.stringify(existing));
      } catch {
        // silent fallback
      }
    }, 800);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      organization: '',
      enquiryType: 'Residential Solar Energy Solution',
      location: '',
      estimatedBudget: '',
      message: '',
      consent: true
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-charcoal-950/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-forest-900 text-white px-6 py-5 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-solar-400"></span>
              <span className="text-xs font-semibold text-solar-300 uppercase tracking-wider">Engineering Inquiry</span>
            </div>
            <h3 className="text-xl font-bold text-white mt-1">Request a Technical Quotation</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-lg text-forest-200 hover:text-white hover:bg-forest-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-charcoal-900">Quotation Request Received!</h4>
              <p className="text-sm font-medium text-forest-800 bg-forest-50 inline-block px-4 py-1.5 rounded-full mt-2 border border-forest-200">
                Reference ID: <span className="font-mono font-bold">{referenceId}</span>
              </p>

              <div className="mt-5 text-left bg-slate-50 border border-slate-200 rounded-xl p-5 text-sm text-slate-700 space-y-2">
                <p><span className="font-semibold text-charcoal-900">Name:</span> {formData.fullName}</p>
                <p><span className="font-semibold text-charcoal-900">Enquiry Service:</span> {formData.enquiryType}</p>
                <p><span className="font-semibold text-charcoal-900">Target Location:</span> {formData.location || 'Not specified'}</p>
                <p><span className="font-semibold text-charcoal-900">Confirmation Sent To:</span> {formData.email}</p>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-solar-50 border border-solar-200 text-sm text-amber-900 text-left">
                <p className="font-semibold">What happens next?</p>
                <p className="mt-1 text-xs text-amber-800 leading-relaxed">
                  Our renewable energy engineering team will review your power requirements, prepare preliminary sizing recommendations, and reach out via phone/email within <strong>24 business hours</strong>.
                </p>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="primary" onClick={handleReset}>
                  Close Window
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <p className="text-sm text-slate-600 mb-2">
                Provide your power and property details below. Our technical specialists will calculate your load requirements and prepare a verified proposal.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider mb-1">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Engr. / Mr. / Dr. Full Name"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-forest-600 ${
                      errors.fullName ? 'border-rose-400 bg-rose-50/50' : 'border-slate-300 bg-white'
                    }`}
                  />
                  {errors.fullName && <p className="text-xs text-rose-500 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider mb-1">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-forest-600 ${
                      errors.email ? 'border-rose-400 bg-rose-50/50' : 'border-slate-300 bg-white'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider mb-1">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+234 803 000 0000"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-forest-600 ${
                      errors.phone ? 'border-rose-400 bg-rose-50/50' : 'border-slate-300 bg-white'
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider mb-1">
                    Organization / Company (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={e => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Acme Clinics / Logistics Ltd"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-forest-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider mb-1">
                    Enquiry Type
                  </label>
                  <select
                    value={formData.enquiryType}
                    onChange={e => setFormData({ ...formData, enquiryType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-forest-600"
                  >
                    <option value="Residential Solar Energy Solution">Residential Solar Solution</option>
                    <option value="Commercial & Industrial Solar PV">Commercial & Industrial Solar PV</option>
                    <option value="Institutional / Healthcare Power">Institutional / Healthcare Power</option>
                    <option value="Renewable Energy System Architecture">Renewable Energy System Architecture</option>
                    <option value="Energy Consulting & Audit">Energy Consulting & System Design Audit</option>
                    <option value="Installation & Maintenance Contract">Installation & Maintenance Contract</option>
                    <option value="Product & Equipment Supply">Product & Equipment Supply Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider mb-1">
                    Project Location / State
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={e => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Lagos, Abuja, Port Harcourt"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-forest-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider mb-1">
                  System Requirements / Description <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detail your appliances (e.g. number of ACs, water pumps, refrigerators), current generator fuel costs, or specific project requirements."
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-forest-600 ${
                    errors.message ? 'border-rose-400 bg-rose-50/50' : 'border-slate-300 bg-white'
                  }`}
                />
                {errors.message && <p className="text-xs text-rose-500 mt-1">{errors.message}</p>}
              </div>

              <div>
                <label className="flex items-start gap-2.5 cursor-pointer mt-1">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={e => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-forest-800 focus:ring-forest-700"
                  />
                  <span className="text-xs text-slate-600 leading-normal">
                    I acknowledge that Ukanu Energy Models will process my contact details solely to evaluate this technical enquiry and prepare a verified proposal. No spam or third-party sharing.
                  </span>
                </label>
                {errors.consent && <p className="text-xs text-rose-500 mt-1">{errors.consent}</p>}
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-slate-200 mt-4">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-forest-700" />
                  <span>Confidential Engineering Review</span>
                </div>
                <div className="flex gap-2">
                  <Button type="button" variant="ghost" size="sm" onClick={onClose}>
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={isSubmitting}
                    icon={<Send className="w-4 h-4" />}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  </Button>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Footer info */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-3 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-2">
          <span>Need direct assistance?</span>
          <div className="flex items-center gap-4">
            <a href="tel:+2348030000000" className="hover:text-forest-900 inline-flex items-center gap-1 font-medium">
              <Phone className="w-3.5 h-3.5 text-forest-700" /> +234 803 000 0000
            </a>
            <a href="mailto:contact@ukanuenergymodels.com" className="hover:text-forest-900 inline-flex items-center gap-1 font-medium">
              <Mail className="w-3.5 h-3.5 text-forest-700" /> contact@ukanuenergymodels.com
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

