import { notFound } from 'next/navigation';
import { v1Features, v1FeatureData } from '@/lib/v1-data';
import ApiComponent from '@/components/ApiComponent';
import NavLink from '@/components/NavLink';

export async function generateStaticParams() {
  return v1Features.map((feature) => ({
    feature: feature.slug,
  }));
}

interface PageProps {
  params: Promise<{ feature: string }>;
}

export default async function V1FeaturePage({ params }: PageProps) {
  const { feature: slug } = await params;
  const feature = v1Features.find((f) => f.slug === slug);

  if (!feature) {
    notFound();
  }

  // Get feature documentation data
  const parsedDoc = v1FeatureData[slug];

  // Find previous and next features
  const currentIndex = v1Features.findIndex((f) => f.slug === slug);
  const previousFeature = currentIndex > 0 ? v1Features[currentIndex - 1] : null;
  const nextFeature = currentIndex < v1Features.length - 1 ? v1Features[currentIndex + 1] : null;

  if (!parsedDoc) {
    return (
      <div className="ax-max-w-4xl ax-mx-auto">
        <h1 className="ax-text-4xl ax-font-bold ax-mb-4 ax-text-primary">{feature.title}</h1>
        <p className="ax-text-xl ax-text-gray-600 ax-mb-8">{feature.description}</p>
        <div className="ax-p-6 ax-bg-gray-50 ax-rounded-lg ax-border ax-border-gray-200">
          <p className="ax-text-gray-600">Documentation coming soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="ax-max-w-4xl ax-mx-auto">
      <h1 className="ax-text-4xl ax-font-bold ax-mb-4 ax-text-primary">{feature.title}</h1>
      <p className="ax-text-xl ax-text-gray-600 ax-mb-8">{feature.description}</p>
      
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
          <p className="ax-text-gray-600">No API documentation available for this feature yet.</p>
        </div>
      )}

      {/* Previous/Next Navigation */}
      <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #e5e7eb' }}>
        <div className="ax-grid ax-gap-md">
          <div className="ax-col-6">
            {previousFeature ? (
              <NavLink
                href={`/v1/features/${previousFeature.slug}`}
                direction="previous"
                title={previousFeature.title}
              />
            ) : (
              <div style={{ padding: '1rem' }}></div>
            )}
          </div>

          <div className="ax-col-6">
            {nextFeature ? (
              <NavLink
                href={`/v1/features/${nextFeature.slug}`}
                direction="next"
                title={nextFeature.title}
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
