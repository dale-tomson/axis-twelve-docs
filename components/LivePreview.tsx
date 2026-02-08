'use client';

import React from 'react';

interface LivePreviewProps {
  code: string;
  title?: string;
}

const LivePreview: React.FC<LivePreviewProps> = ({ code, title }) => {
  return (
    <div className="ax-mb-4 ax-border ax-border-gray-200 ax-rounded-xl ax-overflow-hidden ax-bg-white ax-shadow-sm">
      {title && (
        <div className="ax-px-4 ax-py-2 ax-bg-gray-50 ax-border-b ax-border-gray-200 ax-flex ax-justify-between ax-items-center">
          <span className="ax-text-xs ax-font-bold ax-text-gray-500 ax-uppercase ax-tracking-wider">Preview: {title}</span>
          <div className="ax-flex ax-gap-1.5">
            <div className="ax-w-2.5 ax-h-2.5 ax-rounded-full ax-bg-red-400/20"></div>
            <div className="ax-w-2.5 ax-h-2.5 ax-rounded-full ax-bg-yellow-400/20"></div>
            <div className="ax-w-2.5 ax-h-2.5 ax-rounded-full ax-bg-green-400/20"></div>
          </div>
        </div>
      )}
      <div 
        className="ax-p-6 ax-flex ax-flex-wrap ax-items-center ax-justify-center ax-gap-4"
        dangerouslySetInnerHTML={{ __html: code }} 
      />
    </div>
  );
};

export default LivePreview;
