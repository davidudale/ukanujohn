import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
  light = false
}) => {
  const alignments = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto'
  };

  return (
    <div className={`flex flex-col max-w-3xl ${alignments[align]} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3.5 ${
          light 
            ? 'bg-forest-800 text-solar-300 border border-forest-700' 
            : 'bg-forest-50 text-forest-800 border border-forest-200'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-solar-500"></span>
          {badge}
        </div>
      )}
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight ${
        light ? 'text-white' : 'text-charcoal-900'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3.5 text-base sm:text-lg leading-relaxed ${
          light ? 'text-forest-100/90' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

