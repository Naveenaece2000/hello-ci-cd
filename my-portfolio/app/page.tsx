import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col gap-16 px-6 py-24">

      {/* --- SECTION 1: HEADER / HERO --- */}
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Naveena
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          Cloud Native Developer & Full Stack Engineer. I build accessible,
          pixel-perfect, and performant web applications using AWS and Kubernetes.
        </p>

        {/* Social Links */}
        <div className="flex gap-4 text-sm font-medium text-gray-500">
          <Link href="https://github.com/Naveenaece2000" target="_blank" className="hover:text-white transition">
            GITHUB ↗
          </Link>
          <Link href="https://linkedin.com/in/yourprofile" target="_blank" className="hover:text-white transition">
            LINKEDIN ↗
          </Link>
          <Link href="mailto:your@email.com" className="hover:text-white transition">
            EMAIL ↗
          </Link>
        </div>
      </section>

      {/* --- SECTION 2: ABOUT --- */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">About</h2>
        <p className="text-gray-400 text-sm leading-7">
          I specialize in building robust backend systems and connecting them to modern frontends.
          My focus is on <span className="text-white">AWS Cloud Architecture</span>, <span className="text-white">Microservices</span>, and <span className="text-white">DevOps automation</span>.
          I enjoy turning complex infrastructure problems into simple, automated solutions.
        </p>
      </section>

      {/* --- SECTION 3: PROJECTS --- */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-white">Selected Projects</h2>

        <div className="flex flex-col gap-8">

          {/* PROJECT CARD 1: CloudEats */}
          <Link href="https://github.com/Naveenaece2000/CloudEats-Food-Delivery-App" target="_blank" className="group block">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start">

              <div className="space-y-2">
                <h3 className="text-base font-medium text-white group-hover:text-blue-400 transition">
                  CloudEats - Full Stack Food Delivery
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-md">
                  A complete delivery platform featuring a React Native mobile app,
                  S3-hosted frontend, and an AWS EKS backend with real-time order tracking via Lambda & SNS.
                </p>
                {/* Tech Tags */}
                <div className="flex gap-2 pt-2">
                  <span className="px-2 py-1 bg-gray-900 text-xs text-gray-300 rounded border border-gray-800">AWS EKS</span>
                  <span className="px-2 py-1 bg-gray-900 text-xs text-gray-300 rounded border border-gray-800">React Native</span>
                  <span className="px-2 py-1 bg-gray-900 text-xs text-gray-300 rounded border border-gray-800">DynamoDB</span>
                </div>
              </div>

              {/* Year or Status */}
              <span className="text-xs text-gray-600 border border-gray-800 px-2 py-1 rounded">
                2025
              </span>

            </div>
          </Link>

          {/* PROJECT CARD 2: (Example - You can edit this) */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start opacity-75">
            <div className="space-y-2">
              <h3 className="text-base font-medium text-white">
                More Projects Coming Soon
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed max-w-md">
                Currently building more cloud-native applications.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 4: CONTACT --- */}
      <section className="pt-10 border-t border-gray-800">
        <p className="text-gray-500 text-sm">
          © 2025 Naveena. Built with Next.js & Tailwind.
        </p>
      </section>

    </main>
  );
}