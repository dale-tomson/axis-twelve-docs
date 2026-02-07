'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { v1Features } from '@/lib/v1-data';
import { v2Modules } from '@/lib/v2-data';
import SearchInput from './SearchInput';

const Sidebar = () => {
  const pathname = usePathname();
  const isV1 = pathname.startsWith('/v1');
  const isV2 = pathname.startsWith('/v2');

  return (
    <aside className="ax-sidebar">
      <div className="ax-p-6">
        <div className="ax-mb-8 ax-flex ax-items-center ax-gap-4">
          {/* Axis-Twelve Logo */}
          <img 
            src="/logo.svg" 
            alt="Axis-Twelve" 
            className="ax-w-8 ax-h-8"
          />
          <Link href="/" className="ax-text-xl ax-font-bold ax-text-gray-900 ax-tracking-tight">
            Axis-Twelve
          </Link>
        </div>
        
        <div className="ax-mb-6">
            <SearchInput />
        </div>

        <nav className="ax-space-y-1">
          {!isV1 && !isV2 && (
             <div className="ax-text-sm ax-text-gray-500 ax-p-2">Select a version to view documentation.</div>
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
    </aside>
  );
};


export default Sidebar;
