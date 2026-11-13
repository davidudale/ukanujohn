import React, { useState } from 'react';
import { MapPin, Calendar, CheckCircle2, ChevronRight, X, Zap, Award } from 'lucide-react';
import { Project } from '../types';
import { Button } from './Button';

interface ProjectCardProps {
  project: Project;
  onEnquireSimilar?: (projectTitle: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onEnquireSimilar }) => {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
        <div>
          {/* Project Photo */}
          <div className="relative h-56 w-full overflow-hidden bg-forest-950">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/20 to-transparent" />
            
            <div className="absolute top-3 left-3 bg-forest-900/90 backdrop-blur-xs text-white text-xs font-semibold px-2.5 py-1 rounded-md border border-forest-700">
              {project.category}
            </div>

            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
              <span className="text-xs font-bold text-solar-400 bg-charcoal-950/80 px-2.5 py-1 rounded-md border border-charcoal-700">
                {project.capacity}
              </span>
              <span className="text-xs text-slate-300 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {project.completionYear}
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="p-6">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
              <MapPin className="w-3.5 h-3.5 text-forest-700 shrink-0" />
              <span>{project.location}</span>
            </div>

            <h3 className="text-lg font-bold text-charcoal-900 group-hover:text-forest-900 transition-colors leading-snug">
              {project.title}
            </h3>

            <p className="mt-2.5 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
              {project.overview}
            </p>

            {/* Documented Outcome Highlight */}
            <div className="mt-4 p-3 rounded-xl bg-forest-50/70 border border-forest-200/80 text-xs text-forest-900 space-y-1">
              <div className="font-bold flex items-center gap-1.5 text-forest-950">
                <Award className="w-3.5 h-3.5 text-solar-600" />
                <span>Documented Impact:</span>
              </div>
              <p className="text-forest-800 leading-relaxed font-medium">
                {project.outcomes[0]}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 pt-0 bg-white flex items-center justify-between gap-3 border-t border-slate-100 mt-2">
          <button
            type="button"
            onClick={() => setDetailsOpen(true)}
            className="text-xs font-semibold text-forest-900 hover:text-forest-700 inline-flex items-center gap-1 underline underline-offset-4"
          >
            <span>View Full Case Study</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          {onEnquireSimilar && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => onEnquireSimilar(`Inquiry for system similar to: ${project.title}`)}
            >
              Request Similar
            </Button>
          )}
        </div>
      </div>

      {/* Case Study Details Modal */}
      {detailsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
            
            {/* Header */}
            <div className="relative h-48 sm:h-56 w-full bg-forest-950">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent" />
              <button
                onClick={() => setDetailsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-charcoal-900/80 text-white hover:bg-charcoal-900 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs font-bold text-solar-400 uppercase tracking-wider">
                  {project.category} Project • {project.completionYear}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold leading-tight mt-1">
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Meta stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
                <div>
                  <span className="text-slate-500 font-medium block">Location:</span>
                  <span className="font-bold text-charcoal-900 mt-0.5 block">{project.location}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-medium block">Installed Capacity:</span>
                  <span className="font-bold text-forest-900 mt-0.5 block">{project.capacity}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-medium block">Verification:</span>
                  <span className="font-bold text-emerald-700 mt-0.5 block">Commissioned & Tested</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-charcoal-900 uppercase tracking-wider mb-2">
                  Project Background & Operational Context
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {/* Scope of Work */}
              <div>
                <h4 className="text-sm font-bold text-charcoal-900 uppercase tracking-wider mb-2">
                  Confirmed Scope of Work
                </h4>
                <div className="space-y-1.5">
                  {project.scopeOfWork.map((scope, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-forest-700 shrink-0 mt-0.5" />
                      <span>{scope}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Equipment Deployed */}
              <div>
                <h4 className="text-sm font-bold text-charcoal-900 uppercase tracking-wider mb-2">
                  Installed Equipment Specifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.equipmentInstalled.map((eq, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-solar-500 shrink-0" />
                      <span>{eq}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documented Outcomes */}
              <div className="bg-forest-50 p-5 rounded-xl border border-forest-200">
                <h4 className="text-sm font-bold text-forest-950 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-solar-600" />
                  <span>Documented Operational Outcomes</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-forest-900">
                  {project.outcomes.map((out, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-forest-700 mt-2 shrink-0"></span>
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-3 justify-end">
                <Button variant="ghost" size="sm" onClick={() => setDetailsOpen(false)}>
                  Close Case Study
                </Button>
                {onEnquireSimilar && (
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => {
                      setDetailsOpen(false);
                      onEnquireSimilar(`Inquiry for system similar to: ${project.title}`);
                    }}
                  >
                    Request Similar Installation
                  </Button>
                )}
              </div>

            </div>

          </div>
        </div>
      )}
    </>
  );
};

