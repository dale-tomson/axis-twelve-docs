'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { v1Features } from '@/lib/v1-data';
import { v2Modules } from '@/lib/v2-data';
import SearchInput from './SearchInput';

const Sidebar = ({ onClose }: { onClose?: () => void }) => {
  const pathname = usePathname();
  const isV1 = pathname.startsWith('/v1');
  const isV2 = pathname.startsWith('/v2');

  return (
    <div className="ax-h-full ax-flex ax-flex-column">
      <div className="ax-p-6 ax-flex-1">
        <div className="ax-mb-8 ax-flex ax-items-center ax-justify-between">
          <div className="ax-flex ax-items-center ax-gap-4">
            {/* Axis-Twelve Logo */}
            <Image 
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.svg`}
              alt="Axis-Twelve" 
              width={32}
              height={32}
              className="ax-w-8 ax-h-8"
            />
            <Link href="/" className="ax-text-xl ax-font-bold ax-text-gray-900 ax-tracking-tight">
              Axis-Twelve
            </Link>
          </div>
          
          {/* Close button for mobile */}
          <button 
            onClick={onClose}
            className="ax-lg-show ax-text-gray-400 ax-hover-text-gray-600 ax-transition-colors"
          >
            <svg className="ax-w-6 ax-h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Global Navigation - Mobile Only */}
        <div className="ax-lg-show ax-mb-8 ax-space-y-4">
          <div className="ax-px-2 ax-text-xs ax-font-semibold ax-text-gray-400 ax-uppercase ax-tracking-wider">
            Navigation
          </div>
          <div className="ax-space-y-1">
            <Link
              href="/"
              className={`ax-block ax-px-3 ax-py-2 ax-text-sm ax-font-medium ax-rounded-lg ax-transition-colors ${
                pathname === '/' 
                  ? 'ax-bg-white ax-text-primary ax-shadow-sm ax-border ax-border-gray-200' 
                  : 'ax-text-gray-600 ax-hover-text-gray-900 ax-hover-bg-gray-100'
              }`}
            >
              Home
            </Link>
            <Link
              href="/v1"
              className={`ax-block ax-px-3 ax-py-2 ax-text-sm ax-font-medium ax-rounded-lg ax-transition-colors ${
                pathname.startsWith('/v1') 
                  ? 'ax-bg-white ax-text-primary ax-shadow-sm ax-border ax-border-gray-200' 
                  : 'ax-text-gray-600 ax-hover-text-gray-900 ax-hover-bg-gray-100'
              }`}
            >
              Version 1.x
            </Link>
            <Link
              href="/v2"
              className={`ax-block ax-px-3 ax-py-2 ax-text-sm ax-font-medium ax-rounded-lg ax-transition-colors ${
                pathname.startsWith('/v2') 
                  ? 'ax-bg-white ax-text-primary ax-shadow-sm ax-border ax-border-gray-200' 
                  : 'ax-text-gray-600 ax-hover-text-gray-900 ax-hover-bg-gray-100'
              }`}
            >
              Version 2.x
            </Link>
            <a 
              href="https://github.com/dale-tomson/axis-twelve" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ax-flex ax-items-center ax-gap-2 ax-px-3 ax-py-2 ax-text-sm ax-font-medium ax-text-gray-600 ax-hover-text-gray-900 ax-hover-bg-gray-100 ax-rounded-lg ax-transition-colors"
            >
              <svg viewBox="0 0 24 24" className="ax-w-4 ax-h-4 ax-fill-current">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>

        <div className="ax-mb-6">
            <SearchInput />
        </div>

        <nav className="ax-space-y-1">
          {!isV1 && !isV2 && (
             <div className="ax-lg-hidden-off ax-text-sm ax-text-gray-500 ax-p-2">Select a version to view documentation.</div>
          )}

          {isV1 && (
            <div className="ax-space-y-6">
              <div>
                <div className="ax-px-2 ax-mb-2 ax-text-xs ax-font-semibold ax-text-gray-400 ax-uppercase ax-tracking-wider">
                  V1 Documentation
                </div>
                <Link
                  href="/v1"
                  className={`ax-block ax-px-3 ax-py-2 ax-text-sm ax-font-medium ax-rounded-lg ax-transition-colors ${
                    pathname === '/v1' 
                      ? 'ax-bg-white ax-text-primary ax-shadow-sm ax-border ax-border-gray-200' 
                      : 'ax-text-gray-600 ax-hover-text-gray-900 ax-hover-bg-gray-100'
                  }`}
                >
                  Introduction
                </Link>
              </div>
              
              <div>
                <div className="ax-px-2 ax-mb-2 ax-text-xs ax-font-semibold ax-text-gray-400 ax-uppercase ax-tracking-wider">
                  Features
                </div>
                <div className="ax-space-y-1">
                  {v1Features.map((feature) => (
                    <Link
                      key={feature.slug}
                      href={`/v1/features/${feature.slug}`}
                      className={`ax-block ax-px-3 ax-py-2 ax-text-sm ax-font-medium ax-rounded-lg ax-transition-colors ${
                        pathname === `/v1/features/${feature.slug}`
                          ? 'ax-bg-white ax-text-primary ax-shadow-sm ax-border ax-border-gray-200'
                          : 'ax-text-gray-600 ax-hover-text-gray-900 ax-hover-bg-gray-100'
                      }`}
                    >
                      {feature.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <Link
                  href="/v1/changelog"
                  className={`ax-block ax-px-3 ax-py-2 ax-text-sm ax-font-medium ax-rounded-lg ax-transition-colors ${
                    pathname === '/v1/changelog' 
                      ? 'ax-bg-white ax-text-primary ax-shadow-sm ax-border ax-border-gray-200' 
                      : 'ax-text-gray-600 ax-hover-text-gray-900 ax-hover-bg-gray-100'
                  }`}
                >
                  Changelog
                </Link>
              </div>
            </div>
          )}

          {isV2 && (
             <div className="ax-space-y-6">
              <div>
                <div className="ax-px-2 ax-mb-2 ax-text-xs ax-font-semibold ax-text-gray-400 ax-uppercase ax-tracking-wider">
                  V2 Documentation
                </div>
                <Link
                  href="/v2"
                  className={`ax-block ax-px-3 ax-py-2 ax-text-sm ax-font-medium ax-rounded-lg ax-transition-colors ${
                    pathname === '/v2' 
                      ? 'ax-bg-white ax-text-primary ax-shadow-sm ax-border ax-border-gray-200' 
                      : 'ax-text-gray-600 ax-hover-text-gray-900 ax-hover-bg-gray-100'
                  }`}
                >
                  Introduction
                </Link>
              </div>

               <div>
                <div className="ax-px-2 ax-mb-2 ax-text-xs ax-font-semibold ax-text-gray-400 ax-uppercase ax-tracking-wider">
                  Modules
                </div>
                <div className="ax-space-y-1">
                  {v2Modules.map((module) => (
                    <Link
                      key={module.slug}
                      href={`/v2/modules/${module.slug}`}
                      className={`ax-block ax-px-3 ax-py-2 ax-text-sm ax-font-medium ax-rounded-lg ax-transition-colors ${
                        pathname === `/v2/modules/${module.slug}`
                          ? 'ax-bg-white ax-text-primary ax-shadow-sm ax-border ax-border-gray-200'
                          : 'ax-text-gray-600 ax-hover-text-gray-900 ax-hover-bg-gray-100'
                      }`}
                    >
                      {module.title}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div>
                <Link
                  href="/v2/changelog"
                  className={`ax-block ax-px-3 ax-py-2 ax-text-sm ax-font-medium ax-rounded-lg ax-transition-colors ${
                    pathname === '/v2/changelog' 
                      ? 'ax-bg-white ax-text-primary ax-shadow-sm ax-border ax-border-gray-200' 
                      : 'ax-text-gray-600 ax-hover-text-gray-900 ax-hover-bg-gray-100'
                  }`}
                >
                  Changelog
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};


export default Sidebar;
