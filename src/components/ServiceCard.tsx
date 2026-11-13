import React from 'react';
import { Sun, Zap, Compass, Wrench, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Service } from '../types';
import { Button } from './Button';

interface ServiceCardProps {
  service: Service;
  onEnquire: (serviceTitle: string) => void;
  detailed?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onEnquire, detailed = false }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sun': return <Sun className="w-6 h-6 text-solar-500" />;
      case 'Zap': return <Zap className="w-6 h-6 text-solar-500" />;
      case 'Compass': return <Compass className="w-6 h-6 text-solar-500" />;
      case 'Wrench': return <Wrench className="w-6 h-6 text-solar-500" />;
      default: return <Sun className="w-6 h-6 text-solar-500" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      <div>
        {/* Card Header & Image */}
        <div className="relative h-48 w-full overflow-hidden bg-forest-950">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
            <span className="text-xs font-semibold uppercase tracking-wider text-solar-300 bg-forest-950/70 backdrop-blur-xs px-2.5 py-1 rounded-md border border-forest-800">
              Verified Solution
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-forest-50 border border-forest-200/80 flex items-center justify-center shrink-0">
              {getIcon(service.iconName)}
            </div>
            <h3 className="text-xl font-bold text-charcoal-900 leading-snug group-hover:text-forest-900 transition-colors">
              {service.title}
            </h3>
          </div>

          <p className="text-sm font-medium text-solar-700 italic mb-3">
            "{service.tagline}"
          </p>

          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            {service.shortDescription}
          </p>

          {/* Problem Solved Badge */}
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 mb-4 text-xs text-slate-700">
            <span className="font-bold text-forest-900 block mb-1">Target Challenge Addressed:</span>
            <span>{service.problemSolved}</span>
          </div>

          {/* Scope highlights */}
          <div className="space-y-2 mb-4">
            <div className="text-xs font-bold text-charcoal-900 uppercase tracking-wider">
              Confirmed Scope:
            </div>
            {service.scopeOfWork.slice(0, detailed ? 5 : 3).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-forest-700 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {detailed && (
            <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 mb-2">
              <span className="font-semibold text-slate-700">Engineering Consideration:</span> {service.limitations}
            </div>
          )}
        </div>
      </div>

      {/* Card Action */}
      <div className="p-6 pt-0 border-t border-slate-100/80 bg-slate-50/50 mt-auto flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          fullWidth
          onClick={() => onEnquire(service.title)}
          icon={<ArrowRight className="w-3.5 h-3.5" />}
        >
          Request Scope & Quote
        </Button>
      </div>
    </div>
  );
};

