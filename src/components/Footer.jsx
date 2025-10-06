export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-sm text-gray-600">
        <p>
          © {new Date().getFullYear()} HelloWorld. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
