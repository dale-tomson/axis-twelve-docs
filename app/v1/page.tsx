import Link from 'next/link';
import { v1Features, v1Changelog } from '@/lib/v1-data';

export default function V1Index() {
  return (
    <div className="ax-max-w-4xl ax-mx-auto">
      <h1 className="ax-text-4xl ax-font-bold ax-mb-6 ax-text-primary">Axis-Twelve V1 Documentation</h1>
      
      <section className="ax-mb-12">
        <h2 className="ax-text-2xl ax-font-semibold ax-mb-4 ax-text-gray-800">Introduction</h2>
        <p className="ax-text-gray-600 ax-mb-4">
          Axis-Twelve V1 is the stable, legacy version of the framework. It provides a robust set of CSS utilities and components for building responsive web applications.
        </p>
        <div className="ax-bg-gray-50 ax-p-4" style={{ backgroundColor: '#fefce8', borderLeft: '4px solid #facc15' }}>
          <div className="ax-flex">
            <div className="ax-shrink-0">
              <svg className="ax-h-5 ax-w-5" style={{ color: '#facc15', width: '1.25rem', height: '1.25rem' }} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ax-ml-4">
              <p className="ax-text-sm" style={{ color: '#a16207' }}>
                This version is in maintenance mode. For new projects, we recommend using <Link href="/v2" className="ax-font-medium" style={{ color: '#a16207', textDecoration: 'underline' }}>Version 2.x</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ax-mb-12">
        <h2 className="ax-text-2xl ax-font-semibold ax-mb-4 ax-text-gray-800">Features</h2>
         <div className="ax-grid ax-gap-4">
          {v1Features.map((feature) => (
            <div key={feature.slug} className="ax-col-12 ax-col-md-6 ax-col-lg-4">
                <Link href={`/v1/features/${feature.slug}`} className="ax-block ax-p-6 ax-border ax-border-gray-200 ax-rounded-lg ax-hover-shadow-md ax-transition-colors">
                <h3 className="ax-text-lg ax-font-bold ax-mb-2 ax-text-gray-900">{feature.title}</h3>
                <p className="ax-text-sm ax-text-gray-600">{feature.description}</p>
                </Link>
            </div>
          ))}
        </div>
      </section>

       <section>
        <h2 className="ax-text-2xl ax-font-semibold ax-mb-4 ax-text-gray-800">Latest Updates</h2>
        {v1Changelog.slice(0, 3).map((log) => (
            <div key={log.version} className="ax-mb-4">
                <h3 className="ax-font-bold ax-text-gray-900">v{log.version} <span className="ax-text-sm ax-font-medium ax-text-gray-500">({log.date})</span></h3>
                <ul className="ax-text-sm ax-text-gray-600 ax-ml-4" style={{ listStyleType: 'disc', listStylePosition: 'inside' }}>
                    {log.changes.slice(0, 2).map((change, i) => (
                        <li key={i}>{change}</li>
                    ))}
                </ul>
            </div>
        ))}
        <Link href="/v1/changelog" className="ax-text-primary ax-text-sm ax-hover-text-primary">View full changelog &rarr;</Link>
      </section>
    </div>
  );
}
