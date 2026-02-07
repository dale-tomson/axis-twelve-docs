import { notFound } from 'next/navigation';
import { v2Modules, v2ModuleData } from '@/lib/v2-data';
import ApiComponent from '@/components/ApiComponent';
import NavLink from '@/components/NavLink';

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

  // Get module documentation data
  const parsedDoc = v2ModuleData[slug];

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
          <p className="ax-text-gray-600">Documentation coming soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="ax-max-w-4xl ax-mx-auto">
      <h1 className="ax-text-4xl ax-font-bold ax-mb-4 ax-text-primary">{moduleInfo.title}</h1>
      <p className="ax-text-xl ax-text-gray-600 ax-mb-8">{moduleInfo.description}</p>
      
      {/* Import Info */}
      <div className="ax-mb-8 ax-p-4 ax-bg-gradient-to-r ax-from-purple-50 ax-to-pink-50 ax-rounded-lg ax-border ax-border-purple-100">
        <div className="ax-text-sm ax-font-semibold ax-text-gray-700 ax-mb-2">CDN Import</div>
        <code className="ax-text-sm ax-bg-white ax-px-3 ax-py-2 ax-rounded ax-block ax-text-gray-800">
          {`<link rel="stylesheet" href="https://unpkg.com/${moduleInfo.importPath}">`}
        </code>
      </div>

      {/* Overview Section */}
      {parsedDoc.overview && (
        <div className="ax-mb-8 ax-p-6 ax-bg-gradient-to-r ax-from-blue-50 ax-to-indigo-50 ax-rounded-lg ax-border ax-border-blue-100">
          <p className="ax-text-gray-700 ax-leading-relaxed">
            {parsedDoc.overview}
          </p>
        </div>
      )}
      
      {/* Components/API Sections */}
      {parsedDoc.components && parsedDoc.components.length > 0 ? (
        <div className="ax-space-y-8">
          {parsedDoc.components.map((component, idx) => (
            <ApiComponent key={idx} component={component} />
          ))}
        </div>
      ) : (
        <div className="ax-p-6 ax-bg-gray-50 ax-rounded-lg ax-border ax-border-gray-200">
          <p className="ax-text-gray-600">No API documentation available for this module yet.</p>
        </div>
      )}

      {/* Previous/Next Navigation */}
      <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #e5e7eb' }}>
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
