
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, light = false }) => {
  return (
    <div className="text-center mb-12">
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-stone-800'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${light ? 'text-stone-300' : 'text-stone-500'} max-w-2xl mx-auto`}>
          {subtitle}
        </p>
      )}
      <div className="mt-4 flex justify-center">
        <div className={`h-1 w-16 ${light ? 'bg-emerald-400' : 'bg-emerald-800'}`}></div>
      </div>
    </div>
  );
};

export default SectionTitle;
