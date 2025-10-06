import { Rocket } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-gray-900">
          <Rocket className="h-5 w-5 text-violet-600" />
          <span className="tracking-tight">HelloWorld</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Docs</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
        </nav>
        <a href="#features" className="inline-flex items-center rounded-md bg-violet-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-violet-700 transition-colors">Get Started</a>
      </div>
    </header>
  );
}
