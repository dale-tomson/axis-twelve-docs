'use client';

import React from 'react';
import ApiClass from './ApiClass';
import { APIComponent as APIComponentType } from '@/lib/v1-types';

interface ApiComponentProps {
  component: APIComponentType;
}

const ApiComponent: React.FC<ApiComponentProps> = ({ component }) => {
  return (
    <div className="ax-mb-8">
      <h2 className="ax-text-2xl ax-font-semibold ax-mb-2 ax-mt-8 ax-text-gray-800 ax-border-b ax-border-gray-200 ax-pb-2">
        {component.title}
      </h2>
      
      {component.description && (
        <p className="ax-text-gray-700 ax-mb-6 ax-leading-relaxed">
          {component.description}
        </p>
      )}
      
      {component.classes && component.classes.length > 0 && (
        <div className="ax-space-y-4">
          {component.classes.map((apiClass, idx) => (
            <ApiClass key={idx} apiClass={apiClass} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ApiComponent;
