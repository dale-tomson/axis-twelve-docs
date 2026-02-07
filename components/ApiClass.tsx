'use client';

import React from 'react';
import Collapsible from './Collapsible';
import CodeBlock from './CodeBlock';
import { APIClass as APIClassType } from '@/lib/v1-types';

interface ApiClassProps {
  apiClass: APIClassType;
}

const ApiClass: React.FC<ApiClassProps> = ({ apiClass }) => {
  return (
    <div className="ax-mb-6 ax-border ax-border-gray-200 ax-rounded-lg ax-bg-white ax-shadow-sm ax-overflow-hidden">
      <div className="ax-p-4">
        <h3 className="ax-text-lg ax-font-semibold ax-text-gray-900 ax-mb-2 ax-font-mono">
          {apiClass.name}
        </h3>
        {apiClass.description && (
          <p className="ax-text-gray-600 ax-mb-3">
            {apiClass.description}
          </p>
        )}
        
        {apiClass.properties && apiClass.properties.length > 0 && (
          <div className="ax-mb-3">
            <h4 className="ax-text-sm ax-font-semibold ax-text-gray-700 ax-mb-2">Properties:</h4>
            <ul className="ax-list-disc ax-ml-4 ax-space-y-1">
              {apiClass.properties.map((prop, idx) => (
                <li key={idx} className="ax-text-sm ax-text-gray-600">
                  <code className="ax-bg-gray-100 ax-text-gray-800 ax-px-2 ax-py-1 ax-rounded ax-text-sm ax-font-mono">
                    {prop.name}: {prop.value}
                  </code>
                  {prop.description && ` - ${prop.description}`}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {apiClass.example && (
          <Collapsible title="View Example" defaultOpen={false}>
            <CodeBlock code={apiClass.example} language="html" />
          </Collapsible>
        )}
      </div>
    </div>
  );
};

export default ApiClass;
