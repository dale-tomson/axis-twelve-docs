import { v2Changelog } from '@/lib/v2-data';
import Collapsible from '@/components/Collapsible';

export default function V2Changelog() {
  return (
    <div className="ax-max-w-4xl ax-mx-auto">
      <h1 className="ax-text-4xl ax-font-bold ax-mb-6 ax-text-primary">Axis-Twelve V2 Changelog</h1>
      <p className="ax-text-gray-600 ax-mb-8">Full history of changes for Axis-Twelve version 2.x.</p>
      
      <div className="ax-space-y-6">
        {v2Changelog.map((log) => (
          <Collapsible key={log.version} title={`v${log.version} - ${log.date}`} defaultOpen={true}>
            <ul className="ax-text-gray-700 ax-ml-4" style={{ listStyleType: 'disc', listStylePosition: 'inside' }}>
              {log.changes.map((change, index) => (
                <li key={index} className="ax-mb-2">{change}</li>
              ))}
            </ul>
          </Collapsible>
        ))}
      </div>
    </div>
  );
}
