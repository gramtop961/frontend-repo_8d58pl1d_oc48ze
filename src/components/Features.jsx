import { Star, Sparkles, Shield } from 'lucide-react';

const features = [
  {
    icon: Star,
    title: 'Fast by default',
    desc: 'Vite-powered dev server and build for an instant feedback loop.'
  },
  {
    icon: Sparkles,
    title: 'Modern stack',
    desc: 'React + Tailwind CSS with sensible defaults and clean structure.'
  },
  {
    icon: Shield,
    title: 'Type-safe ready',
    desc: 'Optional TypeScript friendly setup and linting patterns.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-transparent via-violet-50 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({icon: Icon, title, desc}) => (
            <div key={title} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <Icon className="h-6 w-6 text-violet-600" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
