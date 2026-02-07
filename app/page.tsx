import Link from "next/link";

export default function Home() {
  return (
    <div className="ax-space-y-12 ax-pb-16 ax-mt-16">
      {/* Hero Section */}
      <section className="ax-relative ax-py-20 ax-overflow-hidden ax-rounded-3xl ax-bg-gradient-hero ax-text-white ax-shadow-xl">
        <div className="ax-absolute ax-inset-0 ax-bg-black-10"></div>
        <div className="ax-relative ax-z-10 ax-max-w-4xl ax-mx-auto ax-px-6 ax-text-center">
          <h1 className="ax-text-5xl ax-font-bold ax-mb-6 ax-tracking-tight">
            Axis-Twelve
          </h1>
          <p className="ax-text-xl ax-text-white ax-mb-10 ax-max-w-2xl ax-mx-auto ax-leading-relaxed">
            The modular, utility-first CSS framework for building beautiful, responsive user interfaces with speed and precision.
          </p>
          <div className="ax-flex ax-justify-center ax-items-center ax-gap-4">
            <Link
              href="/v2"
              className="ax-block ax-px-6 ax-py-4 ax-rounded-lg ax-bg-white ax-text-primary ax-font-bold ax-text-lg ax-hover-bg-gray-50 ax-transition-colors ax-shadow-lg"
            >
              Get Started with v2.x
            </Link>
            <a
              href="https://github.com/dale-tomson/axis-twelve"
              target="_blank"
              rel="noopener noreferrer"
              className="ax-block ax-px-6 ax-py-4 ax-rounded-lg ax-bg-black-20 ax-text-white ax-font-bold ax-text-lg ax-hover-bg-black-30 ax-transition-colors ax-backdrop-blur"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Version Selectors */}
      <section className="ax-grid ax-max-w-5xl ax-mx-auto ax-gap-8">
        <div className="ax-col-12 ax-col-md-6">
            <Link 
                href="/v2"
                className="ax-group ax-block ax-relative ax-overflow-hidden ax-p-6 ax-rounded-lg ax-bg-white ax-border ax-border-gray-200 ax-shadow-lg ax-hover-shadow-md ax-transition-colors ax-hover-border-primary"
            >
                <div className="ax-absolute ax-inset-0 ax-flex ax-justify-end ax-p-4 ax-opacity-10">
                    <span className="ax-font-bold ax-text-primary ax-text-version-number">2</span>
                </div>
                <div className="ax-relative ax-z-10">
                    <span className="ax-block ax-px-2 ax-py-1 ax-rounded-lg ax-bg-gray-100 ax-text-primary ax-text-sm ax-font-bold ax-mb-4 ax-w-fit ax-uppercase ax-tracking-wide">
                        Latest & Modular
                    </span>
                    <h2 className="ax-text-3xl ax-font-bold ax-text-gray-900 ax-mb-2">Version 2.x</h2>
                    <p className="ax-text-gray-600 ax-mb-6">
                        Rebuilt from the ground up with a modular architecture. Import only what you need and optimize your bundle size.
                    </p>
                    <div className="ax-flex ax-items-center ax-text-primary ax-font-medium">
                        Explore Documentation <span className="ax-ml-4 ax-group-hover-rotate-180 ax-transition-transform">&rarr;</span>
                    </div>
                </div>
            </Link>
        </div>

        <div className="ax-col-12 ax-col-md-6">
            <Link 
                href="/v1"
                className="ax-group ax-block ax-relative ax-overflow-hidden ax-p-6 ax-rounded-lg ax-bg-gray-50 ax-border ax-border-gray-200 ax-hover-bg-white ax-hover-shadow-md ax-transition-colors"
            >
                 <div className="ax-absolute ax-inset-0 ax-flex ax-justify-end ax-p-4 ax-opacity-5">
                    <span className="ax-font-bold ax-text-gray-500 ax-text-version-number">1</span>
                </div>
                 <div className="ax-relative ax-z-10">
                    <span className="ax-block ax-px-2 ax-py-1 ax-rounded-lg ax-bg-gray-200 ax-text-gray-600 ax-text-sm ax-font-bold ax-mb-4 ax-w-fit ax-uppercase ax-tracking-wide">
                        Legacy Stable
                    </span>
                    <h2 className="ax-text-3xl ax-font-bold ax-text-gray-900 ax-mb-2">Version 1.x</h2>
                    <p className="ax-text-gray-600 ax-mb-6">
                        The classic, robust monolithic bundle. Stable and reliable for existing projects.
                    </p>
                    <div className="ax-flex ax-items-center ax-text-gray-600 ax-font-medium ax-group-hover-text-gray-900">
                        View Legacy Docs <span className="ax-ml-4 ax-group-hover-rotate-180 ax-transition-transform">&rarr;</span>
                    </div>
                </div>
            </Link>
        </div>
      </section>

      {/* Quick Install */}
      <section className="ax-max-w-3xl ax-mx-auto">
        <div className="ax-bg-gray-800 ax-rounded-lg ax-overflow-hidden ax-shadow-xl">
            <div className="ax-flex ax-items-center ax-px-4 ax-py-2 ax-bg-black-10 ax-border-b ax-border-terminal">
                <div className="ax-flex ax-gap-4">
                    <div className="ax-terminal-dot ax-terminal-dot-red"></div>
                    <div className="ax-terminal-dot ax-terminal-dot-yellow"></div>
                    <div className="ax-terminal-dot ax-terminal-dot-green"></div>
                </div>
                <div className="ax-ml-4 ax-text-sm ax-text-gray-400 ax-font-mono">Terminal</div>
            </div>
            <div className="ax-p-6">
                <div className="ax-flex ax-items-center ax-justify-between ax-mb-4">
                    <span className="ax-text-gray-400 ax-text-sm">Install via npm</span>
                    <button className="ax-text-sm ax-text-gray-500 ax-hover-text-white ax-transition-colors">Copy</button>
                </div>
                <code className="ax-text-sm ax-font-mono ax-text-white">
                    <span className="ax-text-terminal-green">$</span> npm install <span className="ax-text-terminal-red">axis-twelve</span>
                </code>
            </div>
        </div>
      </section>
    </div>
  );
}
