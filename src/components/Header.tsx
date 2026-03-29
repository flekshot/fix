import { Link, useLocation } from "react-router-dom";
import { getRouteByPath } from "../data/navigation";

interface HeaderProps {
  onMenuToggle: () => void;
  onSearchOpen: () => void;
}

export function Header({ onMenuToggle, onSearchOpen }: HeaderProps) {
  const { pathname } = useLocation();
  const currentRoute = getRouteByPath(pathname);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 bg-space-dark/90 backdrop-blur-sm border-b border-slate-800/60 flex items-center px-4 gap-4">
      <button
        onClick={onMenuToggle}
        className="text-slate-400 hover:text-holo-cyan transition-colors p-1"
        aria-label="Меню"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <span className="font-display text-sm font-bold text-holo-cyan tracking-wider">ROTR</span>
      </Link>

      {currentRoute && (
        <>
          <span className="text-slate-600 text-xs hidden sm:inline">/</span>
          <span className="text-slate-400 text-xs hidden sm:inline">{currentRoute.label}</span>
        </>
      )}

      <div className="ml-auto">
        <button
          onClick={onSearchOpen}
          className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-300 bg-space-light/50 border border-slate-700/50 rounded-md px-3 py-1.5 transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="hidden sm:inline">Поиск...</span>
          <kbd className="hidden md:inline text-[10px] bg-slate-700/50 px-1.5 py-0.5 rounded">Ctrl+K</kbd>
        </button>
      </div>
    </header>
  );
}
