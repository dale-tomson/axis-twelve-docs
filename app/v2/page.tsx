import Link from 'next/link';
import { v2Modules, v2Changelog, apiIndex } from '@/lib/v2-data';
import CodeBlock from '@/components/CodeBlock';

export default function V2Index() {
  return (
    <div className="ax-max-w-4xl ax-mx-auto">
      <h1 className="ax-text-4xl ax-font-bold ax-mb-6 ax-text-primary">Axis-Twelve V2 Documentation</h1>
      
      <section className="ax-mb-12">
        <h2 className="ax-text-2xl ax-font-semibold ax-mb-4 ax-text-gray-800">Introduction</h2>
        <p className="ax-text-gray-600 ax-mb-4">
          Axis-Twelve V2 introduces a completely new modular architecture. You can now import only the modules you need, keeping your bundle size minimal.
        </p>
         <div className="ax-bg-gray-100 ax-p-4 ax-mb-6" style={{ backgroundColor: '#f0fdf4', borderLeft: '4px solid #4ade80' }}>
          <div className="ax-flex">
            <div className="ax-shrink-0">
              <svg className="ax-h-5 ax-w-5" style={{ color: '#4ade80', width: '1.25rem', height: '1.25rem' }} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ax-ml-4">
              <p className="ax-text-sm" style={{ color: '#15803d' }}>
                This is the latest stable version recommended for all new projects.
              </p>
            </div>
          </div>
        </div>

        <div className="ax-grid ax-gap-4">
          <div className="ax-col-12 ax-col-md-4">
            <div className="ax-p-4 ax-bg-white ax-border ax-border-gray-200 ax-rounded-xl ax-text-center">
              <div className="ax-text-xs ax-text-gray-500 ax-uppercase ax-tracking-wider ax-mb-1">Standard</div>
              <div className="ax-text-2xl ax-font-bold ax-text-primary">{apiIndex.assets.stats.standard}</div>
            </div>
          </div>
          <div className="ax-col-12 ax-col-md-4">
            <div className="ax-p-4 ax-bg-white ax-border ax-border-gray-200 ax-rounded-xl ax-text-center">
              <div className="ax-text-xs ax-text-gray-500 ax-uppercase ax-tracking-wider ax-mb-1">Minified</div>
              <div className="ax-text-2xl ax-font-bold ax-text-primary">{apiIndex.assets.stats.minified}</div>
            </div>
          </div>
          <div className="ax-col-12 ax-col-md-4">
            <div className="ax-p-4 ax-bg-white ax-border ax-border-gray-200 ax-rounded-xl ax-text-center">
              <div className="ax-text-xs ax-text-gray-500 ax-uppercase ax-tracking-wider ax-mb-1">Gzipped</div>
              <div className="ax-text-2xl ax-font-bold ax-text-primary">{apiIndex.assets.stats.gzipped}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="ax-mb-12">
        <h2 className="ax-text-2xl ax-font-semibold ax-mb-6 ax-text-gray-800">Getting Started</h2>
        <div className="ax-grid ax-gap-6">
          <div className="ax-col-12 ax-col-md-6">
            <div className="ax-p-6 ax-bg-white ax-border ax-border-gray-200 ax-rounded-2xl ax-h-full ax-flex ax-flex-column">
              <h3 className="ax-text-lg ax-font-bold ax-mb-3 ax-text-gray-900 ax-flex ax-items-center">
                <span className="ax-w-2 ax-h-2 ax-bg-primary ax-rounded-full ax-mr-2"></span>
                Package Manager
              </h3>
              <p className="ax-text-sm ax-text-gray-600 ax-mb-4 ax-flex-1">Install Axis-Twelve via npm, pnpm, or yarn to get the full modular SCSS source.</p>
              <div className="ax-rounded-xl ax-overflow-hidden ax-border ax-border-gray-100">
                <CodeBlock code={`npm install axis-twelve@${apiIndex.version}`} language="bash" />
              </div>
            </div>
          </div>
          
          <div className="ax-col-12 ax-col-md-6">
            <div className="ax-p-6 ax-bg-white ax-border ax-border-gray-200 ax-rounded-2xl ax-h-full ax-flex ax-flex-column">
              <h3 className="ax-text-lg ax-font-bold ax-mb-3 ax-text-gray-900 ax-flex ax-items-center">
                <span className="ax-w-2 ax-h-2 ax-bg-orange-500 ax-rounded-full ax-mr-2"></span>
                Direct Link (CDN)
              </h3>
              <p className="ax-text-sm ax-text-gray-600 ax-mb-4 ax-flex-1">Drop the full bundle into your project via UNPKG for a zero-config setup.</p>
              <div className="ax-rounded-xl ax-overflow-hidden ax-border ax-border-gray-100">
                <CodeBlock 
                  code={`<link rel="stylesheet" href="https://unpkg.com/axis-twelve@${apiIndex.version}/dist/axis-twelve.min.css">`} 
                  language="html" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ax-mb-12">
        <h2 className="ax-text-2xl ax-font-semibold ax-mb-4 ax-text-gray-800">Modules</h2>
         <div className="ax-grid ax-gap-4">
          {v2Modules.map((module) => (
            <div key={module.slug} className="ax-col-12 ax-col-md-6 ax-col-lg-4">
                <Link href={`/v2/modules/${module.slug}`} className="ax-block ax-p-6 ax-border ax-border-gray-200 ax-rounded-xl ax-hover-shadow-md ax-transition-all ax-bg-white ax-group">
                  <h3 className="ax-text-lg ax-font-bold ax-mb-2 ax-text-gray-900 ax-group-hover-text-primary ax-transition-colors">{module.title}</h3>
                  <p className="ax-text-sm ax-text-gray-600 ax-mb-4">{module.description}</p>
                  <div className="ax-flex ax-gap-3 ax-pt-3 ax-border-t ax-border-gray-50">
                    <div className="ax-text-[10px] ax-text-gray-400 ax-uppercase ax-tracking-wider">
                      Min: <span className="ax-font-bold ax-text-gray-600">{module.stats.minified}</span>
                    </div>
                    <div className="ax-text-[10px] ax-text-gray-400 ax-uppercase ax-tracking-wider">
                      Zip: <span className="ax-font-bold ax-text-gray-600">{module.stats.gzipped}</span>
                    </div>
                  </div>
                </Link>
            </div>
          ))}
        </div>
      </section>

       <section>
        <h2 className="ax-text-2xl ax-font-semibold ax-mb-4 ax-text-gray-800">Latest Updates</h2>
        {v2Changelog.slice(0, 3).map((log) => (
            <div key={log.version} className="ax-mb-4">
                <h3 className="ax-font-bold ax-text-gray-900">v{log.version} <span className="ax-text-sm ax-font-medium ax-text-gray-500">({log.date})</span></h3>
                <ul className="ax-text-sm ax-text-gray-600 ax-ml-4" style={{ listStyleType: 'disc', listStylePosition: 'inside' }}>
                    {log.changes.slice(0, 2).map((change, i) => (
                        <li key={i}>{change}</li>
                    ))}
                </ul>
            </div>
        ))}
        <Link href="/v2/changelog" className="ax-text-primary ax-text-sm ax-hover-text-primary">View full changelog &rarr;</Link>
      </section>
    </div>
  );
}
