'use client';

import React from 'react';
import { V2Class } from '@/lib/v2-types';

interface ApiUsageProps {
  classes: V2Class[];
}

const ApiUsage: React.FC<ApiUsageProps> = ({ classes }) => {
  if (!classes || classes.length === 0) return null;
  
  return (
    <div className="ax-space-y-4">
      {classes.map((cls, idx) => (
        <div 
          key={idx} 
          className="ax-p-4 ax-bg-white ax-border ax-border-gray-200 ax-rounded-xl ax-shadow-sm ax-hover-border-primary ax-transition-colors"
        >
          <div className="ax-flex ax-flex-wrap ax-items-center ax-justify-between ax-gap-2 ax-mb-2">
            <code className="ax-text-lg ax-font-bold ax-text-gray-900 ax-font-mono">
              {cls.name}
            </code>
            <span className={`ax-text-xs ax-font-bold ax-px-2 ax-py-0.5 ax-rounded-full ax-uppercase ax-tracking-wider ${
              cls.type === 'Base' 
                ? 'ax-bg-blue-100 ax-text-blue-700' 
                : cls.type === 'Modifier' 
                  ? 'ax-bg-purple-100 ax-text-purple-700' 
                  : 'ax-bg-gray-100 ax-text-gray-700'
            }`}>
              {cls.type}
            </span>
          </div>
          <p className="ax-text-gray-600 ax-text-sm ax-leading-relaxed">
            {cls.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ApiUsage;
