import React from 'react';

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Collapsible: React.FC<CollapsibleProps> = ({ title, children, defaultOpen = false }) => {
  return (
    <details className="ax-card ax-mb-4 ax-group" open={defaultOpen}>
      <summary className="ax-card__header ax-flex ax-items-center ax-justify-between ax-cursor-pointer">
        <span className="ax-card__title ax-mb-0">{title}</span>
        <span className="ax-transition-transform ax-group-hover-rotate-180 ax-rotate-180">
          <svg className="ax-w-5 ax-h-5 ax-text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </summary>
      <div className="ax-card__body">
        {children}
      </div>
    </details>
  );
};

export default Collapsible;
