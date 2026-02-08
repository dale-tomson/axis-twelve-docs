'use client';

import React, { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'html' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="ax-relative ax-rounded-md ax-bg-gray-900 ax-p-4 ax-overflow-x-auto ax-my-4">
      <div className="ax-absolute ax-top-2 ax-right-2 ax-flex ax-items-center ax-gap-2">
        <span className="ax-text-xs ax-text-gray-400 ax-uppercase ax-select-none">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className={`ax-p-2 ax-rounded-md ax-transition-all ax-duration-200 ax-flex ax-items-center ax-justify-center ax-border ax-backdrop-blur-sm ${
            copied 
              ? 'ax-bg-green-500/10 ax-text-green-400 ax-border-green-500/20' 
              : 'ax-bg-white/5 ax-text-gray-400 ax-border-white/10 ax-hover-bg-white/10 ax-hover-text-gray-200 ax-hover-border-white/20'
          }`}
          aria-label="Copy code to clipboard"
        >
          {copied ? (
            <svg className="ax-w-4 ax-h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="ax-w-4 ax-h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>
      </div>
      <pre className="ax-text-sm ax-text-gray-100 ax-font-mono ax-pr-20">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
