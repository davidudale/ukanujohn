import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  Award, Filter, ArrowRight
} from 'lucide-react';
import { Button } from '../components/Button';
import { ProjectCard } from '../components/ProjectCard';
import { projectsData } from '../data/projects';

interface OutletContextType {
  onOpenQuoteModal: (enquiryType?: string, subject?: string) => void;
}

export const Projects: React.FC = () => {
  const { onOpenQuoteModal } = useOutletContext<OutletContextType>();
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filters = ['All', 'Residential', 'Commercial', 'Institutional', 'Agricultural'];

  const filteredProjects = selectedFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === selectedFilter);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* Page Header Banner */}
      <section className="bg-forest-950 text-white py-16 sm:py-20 border-b border-forest-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900 border border-forest-800 text-solar-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Documented Field Deployments</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl leading-tight">
            Our Completed Projects & Case Studies
          </h1>
          <p className="mt-4 text-base sm:text-lg text-forest-100/90 max-w-2xl leading-relaxed">
            Real-world renewable energy installations delivering verified uptime, generator fuel cuts, and silent autonomy across sectors.
          </p>
        </div>
      </section>

      {/* Aggregate Metrics Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-forest-900 rounded-2xl p-6 sm:p-8 text-white grid grid-cols-2 md:grid-cols-4 gap-6 text-center shadow-lg border border-forest-800">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white">165+ kWp</div>
            <div className="text-xs text-forest-200 mt-1">Solar PV Generation Deployed</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-solar-400">220+ kWh</div>
            <div className="text-xs text-forest-200 mt-1">LiFePO4 Energy Storage Installed</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white">&gt; 75%</div>
            <div className="text-xs text-forest-200 mt-1">Average Diesel Reduction</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-solar-400">100%</div>
            <div className="text-xs text-forest-200 mt-1">Commissioning Safety Compliance</div>
          </div>
        </div>
      </div>

      {/* Projects Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filter bar */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 border-b border-slate-200 pb-4 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5" /> Sector Filter:
          </span>
          {filters.map((fil) => (
            <button
              key={fil}
              onClick={() => setSelectedFilter(fil)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedFilter === fil
                  ? 'bg-forest-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {fil}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onEnquireSimilar={(subject) => onOpenQuoteModal('Project Portfolio Inquiry', subject)}
            />
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12">
          <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900">
            Have a project with custom technical specifications?
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto mt-2">
            Our engineering team conducts feasibility reviews, single-line diagrams, and bill of engineering measurement & evaluation (BEME).
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button
              variant="primary"
              size="md"
              onClick={() => onOpenQuoteModal('Custom Project Feasibility Request')}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Request Engineering Feasibility Review
            </Button>
          </div>
        </div>

      </div>

    </div>
  );
};
