import { notFound } from 'next/navigation';
import { v2Modules, getV2ModuleData } from '@/lib/v2-data';
import ApiUsage from '@/components/ApiUsage';
import NavLink from '@/components/NavLink';
import CodeBlock from '@/components/CodeBlock';
import LivePreview from '@/components/LivePreview';
import { V2ModuleDoc } from '@/lib/v2-types';

export async function generateStaticParams() {
  return v2Modules.map((module) => ({
    module: module.slug,
  }));
}

interface PageProps {
  params: Promise<{ module: string }>;
}

export default async function V2ModulePage({ params }: PageProps) {
  const { module: slug } = await params;
  const moduleInfo = v2Modules.find((m) => m.slug === slug);

  if (!moduleInfo) {
    notFound();
  }

  // Get module documentation data from JSON
  const parsedDoc: V2ModuleDoc | null = await getV2ModuleData(slug);

  // Find previous and next modules
  const currentIndex = v2Modules.findIndex((m) => m.slug === slug);
  const previousModule = currentIndex > 0 ? v2Modules[currentIndex - 1] : null;
  const nextModule = currentIndex < v2Modules.length - 1 ? v2Modules[currentIndex + 1] : null;

  if (!parsedDoc) {
    return (
      <div className="ax-max-w-4xl ax-mx-auto">
        <h1 className="ax-text-4xl ax-font-bold ax-mb-4 ax-text-primary">{moduleInfo.title}</h1>
        <p className="ax-text-xl ax-text-gray-600 ax-mb-8">{moduleInfo.description}</p>
        <div className="ax-p-6 ax-bg-gray-50 ax-rounded-lg ax-border ax-border-gray-200">
          <p className="ax-text-gray-600">Documentation coming soon for {moduleInfo.title}.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="ax-max-w-4xl ax-mx-auto">
      <div className="ax-flex ax-justify-between ax-items-start ax-mb-2">
        <h1 className="ax-text-4xl ax-font-bold ax-text-primary">{moduleInfo.title}</h1>
        <span className="ax-text-sm ax-bg-gray-100 ax-text-gray-600 ax-px-2 ax-py-1 ax-rounded">
          {parsedDoc.version}
        </span>
      </div>
      <p className="ax-text-xl ax-text-gray-600 ax-mb-8">{parsedDoc.description}</p>
      
      {/* Import Info */}
      <div className="ax-mb-10 ax-p-6 ax-bg-white ax-rounded-xl ax-border ax-border-gray-200 ax-shadow-sm">
        <div className="ax-text-sm ax-font-bold ax-text-gray-900 ax-uppercase ax-tracking-wider ax-mb-4">Installation</div>
        <div className="ax-space-y-4">
          <div>
            <div className="ax-text-xs ax-text-gray-500 ax-mb-1">Full Bundle (via UNPKG)</div>
            <code className="ax-text-sm ax-bg-gray-50 ax-p-3 ax-rounded-lg ax-block ax-text-gray-800 ax-border ax-border-gray-100">
              {`<link rel="stylesheet" href="${parsedDoc.installation.full}">`}
            </code>
          </div>
          <div>
            <div className="ax-text-xs ax-text-gray-500 ax-mb-1">Module Only (via UNPKG)</div>
            <code className="ax-text-sm ax-bg-gray-50 ax-p-3 ax-rounded-lg ax-block ax-text-gray-800 ax-border ax-border-gray-100">
              {`<link rel="stylesheet" href="${parsedDoc.installation.module}">`}
            </code>
          </div>
        </div>
      </div>

      {/* Classes/API Reference */}
      {(parsedDoc.classes && parsedDoc.classes.length > 0) && (
        <div className="ax-mb-12">
          <h2 className="ax-text-2xl ax-font-bold ax-mb-6 ax-text-gray-900 ax-flex ax-items-center">
            <span className="ax-w-1 ax-h-8 ax-bg-primary ax-rounded-full ax-mr-3"></span>
            Class Reference
          </h2>
          <ApiUsage classes={parsedDoc.classes} />
        </div>
      )}

      {/* Attributes Section */}
      {parsedDoc.attributes && parsedDoc.attributes.length > 0 && (
        <div className="ax-mb-12">
          <h2 className="ax-text-2xl ax-font-bold ax-mb-6 ax-text-gray-900 ax-flex ax-items-center">
            <span className="ax-w-1 ax-h-8 ax-bg-orange-500 ax-rounded-full ax-mr-3"></span>
            Data Attributes
          </h2>
          <div className="ax-overflow-x-auto ax-border ax-border-gray-200 ax-rounded-xl">
            <table className="ax-w-full ax-text-left ax-border-collapse">
              <thead className="ax-bg-gray-50">
                <tr className="ax-border-b ax-border-gray-200">
                  <th className="ax-py-3 ax-px-4 ax-font-semibold ax-text-sm ax-text-gray-600">Attribute</th>
                  <th className="ax-py-3 ax-px-4 ax-font-semibold ax-text-sm ax-text-gray-600">Default</th>
                  <th className="ax-py-3 ax-px-4 ax-font-semibold ax-text-sm ax-text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="ax-divide-y ax-divide-gray-100">
                {parsedDoc.attributes.map((attr, idx) => (
                  <tr key={idx}>
                    <td className="ax-py-4 ax-px-4">
                      <code className="ax-text-xs ax-bg-orange-50 ax-text-orange-700 ax-px-2 ax-py-1 ax-rounded">
                        {attr.name}
                      </code>
                    </td>
                    <td className="ax-py-4 ax-px-4 ax-text-sm ax-text-gray-700 ax-font-mono">
                      {attr.default}
                    </td>
                    <td className="ax-py-4 ax-px-4 ax-text-sm ax-text-gray-600">
                      {attr.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Breakpoints Section */}
      {parsedDoc.breakpoints && parsedDoc.breakpoints.length > 0 && (
        <div className="ax-mb-12">
          <h2 className="ax-text-2xl ax-font-bold ax-mb-6 ax-text-gray-900 ax-flex ax-items-center">
            <span className="ax-w-1 ax-h-8 ax-bg-pink-500 ax-rounded-full ax-mr-3"></span>
            Breakpoints
          </h2>
          <div className="ax-grid ax-gap-4">
            {parsedDoc.breakpoints.map((bp, idx) => (
              <div key={idx} className="ax-p-4 ax-bg-white ax-border ax-border-gray-200 ax-rounded-xl ax-flex ax-justify-between ax-items-center">
                <span className="ax-font-bold ax-text-gray-900">{bp.prefix}</span>
                <code className="ax-text-sm ax-bg-gray-100 ax-px-2 ax-py-1 ax-rounded">{bp.minWidth}</code>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Features Section */}
      {parsedDoc.features && parsedDoc.features.length > 0 && (
        <div className="ax-mb-12 ax-p-8 ax-bg-gray-50 ax-rounded-2xl ax-border ax-border-gray-200">
          <h2 className="ax-text-xl ax-font-bold ax-mb-4 ax-text-gray-900">Key Features</h2>
          <ul className="ax-space-y-2">
            {parsedDoc.features.map((feature, idx) => (
              <li key={idx} className="ax-flex ax-items-center ax-text-gray-700">
                <span className="ax-text-primary ax-mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Notes Section */}
      {parsedDoc.notes && parsedDoc.notes.length > 0 && (
        <div className="ax-mb-12 ax-p-6 ax-bg-yellow-50 ax-rounded-xl ax-border ax-border-yellow-100">
          <h2 className="ax-text-lg ax-font-bold ax-mb-3 ax-text-yellow-900">💡 Implementation Notes</h2>
          <ul className="ax-space-y-2">
            {parsedDoc.notes.map((note, idx) => (
              <li key={idx} className="ax-text-sm ax-text-yellow-800">• {note}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Examples Section */}
      {parsedDoc.examples && parsedDoc.examples.length > 0 && (
        <div className="ax-mb-12">
          <h2 className="ax-text-2xl ax-font-bold ax-mb-6 ax-text-gray-900 ax-flex ax-items-center">
            <span className="ax-w-1 ax-h-8 ax-bg-indigo-500 ax-rounded-full ax-mr-3"></span>
            Live Examples
          </h2>
          <div className="ax-space-y-12">
            {parsedDoc.examples.map((example, idx) => (
              <div key={idx} className="ax-space-y-4">
                <div className="ax-p-4 ax-bg-gray-50 ax-rounded-lg ax-border ax-border-gray-200">
                  <h3 className="ax-text-lg ax-font-semibold ax-text-gray-800">{example.title}</h3>
                  <p className="ax-text-sm ax-text-gray-600">{example.description}</p>
                </div>
                
                <LivePreview 
                  code={example.code} 
                  title={example.title}
                />
                
                <div className="ax-rounded-xl ax-overflow-hidden ax-bg-white ax-shadow-sm ax-border ax-border-gray-200">
                  <div className="ax-px-4 ax-py-2 ax-bg-gray-50 ax-border-b ax-border-gray-200">
                    <span className="ax-text-[10px] ax-font-bold ax-text-gray-400 ax-uppercase ax-tracking-widest">Source Code</span>
                  </div>
                  <div className="ax-p-0">
                    <CodeBlock code={example.code} language="html" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Customization Section */}
      {parsedDoc.customization && parsedDoc.customization.variables && parsedDoc.customization.variables.length > 0 && (
        <div className="ax-mb-12">
          <h2 className="ax-text-2xl ax-font-bold ax-mb-6 ax-text-gray-900 ax-flex ax-items-center">
            <span className="ax-w-1 ax-h-8 ax-bg-green-500 ax-rounded-full ax-mr-3"></span>
            Customization
          </h2>
          <div className="ax-overflow-x-auto ax-border ax-border-gray-200 ax-rounded-xl">
            <table className="ax-w-full ax-text-left ax-border-collapse">
              <thead className="ax-bg-gray-50">
                <tr className="ax-border-b ax-border-gray-200">
                  <th className="ax-py-3 ax-px-4 ax-font-semibold ax-text-sm ax-text-gray-600">Variable</th>
                  <th className="ax-py-3 ax-px-4 ax-font-semibold ax-text-sm ax-text-gray-600">Default</th>
                  <th className="ax-py-3 ax-px-4 ax-font-semibold ax-text-sm ax-text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="ax-divide-y ax-divide-gray-100">
                {parsedDoc.customization.variables.map((v, idx) => (
                  <tr key={idx}>
                    <td className="ax-py-4 ax-px-4">
                      <code className="ax-text-xs ax-bg-blue-50 ax-text-blue-700 ax-px-2 ax-py-1 ax-rounded">
                        {v.name}
                      </code>
                    </td>
                    <td className="ax-py-4 ax-px-4 ax-text-sm ax-text-gray-700 ax-font-mono">
                      {v.default}
                    </td>
                    <td className="ax-py-4 ax-px-4 ax-text-sm ax-text-gray-600">
                      {v.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Accessibility Section */}
      {parsedDoc.accessibility && parsedDoc.accessibility.length > 0 && (
        <div className="ax-mb-12 ax-p-8 ax-bg-blue-50 ax-rounded-2xl ax-border ax-border-blue-100">
          <h2 className="ax-text-xl ax-font-bold ax-mb-4 ax-text-blue-900 ax-flex ax-items-center">
            <span className="ax-mr-2">♿</span> Accessibility Guidelines
          </h2>
          <ul className="ax-space-y-3">
            {parsedDoc.accessibility.map((item, idx) => (
              <li key={idx} className="ax-flex ax-items-start ax-text-blue-800">
                <span className="ax-text-blue-400 ax-mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Evolution Section */}
      {parsedDoc.evolution && parsedDoc.evolution.length > 0 && (
        <div className="ax-mb-12">
          <h2 className="ax-text-xl ax-font-bold ax-mb-4 ax-text-gray-900">Module Evolution</h2>
          <div className="ax-overflow-x-auto">
            <table className="ax-w-full ax-text-left ax-border-collapse">
              <thead>
                <tr className="ax-border-b ax-border-gray-200">
                  <th className="ax-py-3 ax-font-semibold ax-text-sm ax-text-gray-600">Version</th>
                  <th className="ax-py-3 ax-font-semibold ax-text-sm ax-text-gray-600">Type</th>
                  <th className="ax-py-3 ax-font-semibold ax-text-sm ax-text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody className="ax-divide-y ax-divide-gray-100">
                {parsedDoc.evolution.map((entry, idx) => (
                  <tr key={idx}>
                    <td className="ax-py-4 ax-text-sm ax-font-mono ax-text-gray-700">{entry.version}</td>
                    <td className="ax-py-4">
                      <span className="ax-px-2 ax-py-1 ax-bg-gray-100 ax-text-gray-600 ax-rounded ax-text-xs">
                        {entry.type}
                      </span>
                    </td>
                    <td className="ax-py-4 ax-text-sm ax-text-gray-600">{entry.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Previous/Next Navigation */}
      <div className="ax-mt-16 ax-pt-8 ax-border-t ax-border-gray-200">
        <div className="ax-grid ax-gap-md">
          <div className="ax-col-6">
            {previousModule ? (
              <NavLink
                href={`/v2/modules/${previousModule.slug}`}
                direction="previous"
                title={previousModule.title}
                hoverColor="#a78bfa"
                hoverBgColor="#faf5ff"
              />
            ) : (
              <div style={{ padding: '1rem' }}></div>
            )}
          </div>

          <div className="ax-col-6">
            {nextModule ? (
              <NavLink
                href={`/v2/modules/${nextModule.slug}`}
                direction="next"
                title={nextModule.title}
                hoverColor="#a78bfa"
                hoverBgColor="#faf5ff"
              />
            ) : (
              <div style={{ padding: '1rem' }}></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
