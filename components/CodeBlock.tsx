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
          className="ax-px-2 ax-py-1 ax-text-xs ax-text-gray-300 ax-bg-gray-800 ax-rounded ax-hover-bg-gray-700 ax-transition-colors ax-border ax-border-gray-700"
          aria-label="Copy code to clipboard"
        >
          {copied ? (
            <span className="ax-flex ax-items-center ax-gap-1">
              <svg className="ax-w-3 ax-h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Copied
            </span>
          ) : (
            <span className="ax-flex ax-items-center ax-gap-1">
              <svg className="ax-w-3 ax-h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy
            </span>
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
