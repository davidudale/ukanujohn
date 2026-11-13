import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle, ShieldCheck, Building2
} from 'lucide-react';
import { Button } from '../components/Button';
import { QuoteFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
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

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Valid Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format (e.g., name@domain.com).';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Telephone number is required.';
    } else if (formData.phone.trim().length < 7) {
      errs.phone = 'Please enter a valid telephone number.';
    }
    if (!formData.message.trim()) errs.message = 'Please provide details about your property or project requirements.';
    if (!formData.consent) errs.consent = 'Please confirm consent for us to contact you regarding this enquiry.';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      const generatedId = `UEM-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceId(generatedId);

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
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* Page Header Banner */}
      <section className="bg-forest-950 text-white py-16 sm:py-20 border-b border-forest-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900 border border-forest-800 text-solar-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect With Us</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl leading-tight">
            Contact Ukanu Energy Models
          </h1>
          <p className="mt-4 text-base sm:text-lg text-forest-100/90 max-w-2xl leading-relaxed">
            Reach our renewable energy engineering desk for project feasibility reviews, site audit scheduling, or equipment inquiries.
          </p>
        </div>
      </section>

      {/* Main Grid: Form (7 cols) + Contact Details & Map (5 cols) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10">
              
              <div className="border-b border-slate-100 pb-5 mb-6">
                <h2 className="text-2xl font-bold text-charcoal-900">
                  Submit an Engineering Enquiry or Quote Request
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Complete the form below. Our technical specialists review submissions and respond within 24 business hours.
                </p>
              </div>

              {isSuccess ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-charcoal-900">
                    Enquiry Successfully Dispatched!
                  </h3>
                  <p className="text-sm font-semibold text-forest-800 bg-forest-50 inline-block px-4 py-1.5 rounded-full border border-forest-200">
                    Official Reference Code: <span className="font-mono font-bold">{referenceId}</span>
                  </p>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-charcoal-900">{formData.fullName}</strong>. A copy of your submission has been forwarded to our technical team. We will contact you at <strong className="text-charcoal-900">{formData.email}</strong> or <strong className="text-charcoal-900">{formData.phone}</strong>.
                  </p>

                  <div className="pt-4 flex justify-center">
                    <Button variant="primary" size="md" onClick={handleReset}>
                      Submit Another Enquiry
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Engr. David O."
                        className={`w-full px-4 py-3 text-sm rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-forest-800 ${
                          errors.fullName ? 'border-rose-400 bg-rose-50/40' : 'border-slate-300 bg-white'
                        }`}
                      />
                      {errors.fullName && <p className="text-xs text-rose-500 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@domain.com"
                        className={`w-full px-4 py-3 text-sm rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-forest-800 ${
                          errors.email ? 'border-rose-400 bg-rose-50/40' : 'border-slate-300 bg-white'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1.5">
                        Telephone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+234 803 000 0000"
                        className={`w-full px-4 py-3 text-sm rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-forest-800 ${
                          errors.phone ? 'border-rose-400 bg-rose-50/40' : 'border-slate-300 bg-white'
                        }`}
                      />
                      {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1.5">
                        Organization / Company (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={e => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Zenith Diagnostics Ltd"
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-forest-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1.5">
                        Enquiry Type
                      </label>
                      <select
                        value={formData.enquiryType}
                        onChange={e => setFormData({ ...formData, enquiryType: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-forest-800"
                      >
                        <option value="Residential Solar Energy Solution">Residential Solar Solution</option>
                        <option value="Commercial & Industrial Solar PV">Commercial & Industrial Solar PV</option>
                        <option value="Institutional / Healthcare Power">Institutional / Healthcare Power</option>
                        <option value="Energy Consulting & Audit">Energy Consulting & Sizing Audit</option>
                        <option value="Installation & Maintenance Contract">Installation & Maintenance Contract</option>
                        <option value="Product & Equipment Supply">Product & Equipment Supply</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1.5">
                        Project Location / State
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={e => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Abuja (FCT), Lagos, Rivers"
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-forest-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1.5">
                      Detailed Project Requirements / Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please mention your key loads (e.g. ACs, pumps, cold room), current power disruptions, or specific deliverables."
                      className={`w-full px-4 py-3 text-sm rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-forest-800 ${
                        errors.message ? 'border-rose-400 bg-rose-50/40' : 'border-slate-300 bg-white'
                      }`}
                    />
                    {errors.message && <p className="text-xs text-rose-500 mt-1">{errors.message}</p>}
                  </div>

                  <div>
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={e => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-forest-900 focus:ring-forest-800"
                      />
                      <span className="text-xs text-slate-600 leading-normal">
                        I confirm that the submitted details are accurate and authorize Ukanu Energy Models to contact me regarding this quotation and engineering assessment.
                      </span>
                    </label>
                    {errors.consent && <p className="text-xs text-rose-500 mt-1">{errors.consent}</p>}
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <ShieldCheck className="w-4 h-4 text-forest-700" />
                      <span>Data Privacy Protected</span>
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      icon={<Send className="w-4 h-4" />}
                    >
                      {isSubmitting ? 'Validating & Sending...' : 'Submit Quotation Request'}
                    </Button>
                  </div>

                </form>
              )}

            </div>
          </div>

          {/* Right Column: Company Contact Details & Location Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="bg-forest-900 text-white rounded-3xl p-6 sm:p-8 border border-forest-800 shadow-xl space-y-6">
              <div>
                <span className="text-solar-400 font-bold text-xs uppercase tracking-wider">
                  Direct Inquiries
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Company Contact Channels
                </h3>
                <p className="text-xs text-forest-100/90 mt-1">
                  Connect directly with our engineering advisory and procurement officers.
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-forest-950/60 border border-forest-800">
                  <Phone className="w-5 h-5 text-solar-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-300 font-medium">Telephone Inquiries:</div>
                    <a href="tel:+2348030000000" className="text-white font-bold hover:text-solar-400 transition-colors">
                      +234 803 000 0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-forest-950/60 border border-forest-800">
                  <Mail className="w-5 h-5 text-solar-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-300 font-medium">Official Email Address:</div>
                    <a href="mailto:contact@ukanuenergymodels.com" className="text-white font-bold hover:text-solar-400 transition-colors">
                      contact@ukanuenergymodels.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-forest-950/60 border border-forest-800">
                  <MapPin className="w-5 h-5 text-solar-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-300 font-medium">Corporate Engineering Hub:</div>
                    <p className="text-white font-semibold leading-relaxed">
                      Commercial Engineering District, Central Business Zone, Abuja & Lagos, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-forest-950/60 border border-forest-800">
                  <Clock className="w-5 h-5 text-solar-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-300 font-medium">Business Operating Hours:</div>
                    <p className="text-white font-semibold">
                      Monday to Friday: 8:00 AM – 5:30 PM (WAT)
                    </p>
                    <p className="text-[11px] text-solar-300 mt-0.5">
                      Emergency breakdown assistance available for active maintenance clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Location Card */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-charcoal-900">
                <Building2 className="w-4 h-4 text-forest-800" />
                <span>Service Coverage & Regions</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Ukanu Energy Models deploys mobile engineering teams across key commercial zones, executing on-site audits, solar rooftop installations, and scheduled preventative maintenance.
              </p>
              
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-800">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  📍 Abuja & North-Central
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  📍 Lagos & South-West
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  📍 Port Harcourt & Niger Delta
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  📍 Regional Project Sites
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
