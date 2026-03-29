import { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { searchIndex } from "../data/searchIndex";
import { routes } from "../data/navigation";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

function getPageLabel(path: string): string {
  return routes.find((r) => r.path === path)?.shortLabel ?? "";
}

export function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (q.length < 2) return [];

    const words = q.split(/\s+/);
    return searchIndex
      .map((entry) => {
        const haystack = `${entry.title} ${entry.text}`.toLowerCase();
        const matchCount = words.filter((w) => haystack.includes(w)).length;
        return { ...entry, matchCount };
      })
      .filter((e) => e.matchCount > 0)
      .sort((a, b) => b.matchCount - a.matchCount)
      .slice(0, 15);
  }, [query]);

  function handleSelect(path: string, sectionId: string) {
    onClose();
    navigate(path);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center pt-[12vh]">
      <div className="fixed inset-0 bg-black/70" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-space-blue border border-slate-700/50 rounded-lg shadow-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/30">
          <svg className="w-4 h-4 text-slate-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Поиск по всему уставу..."
            className="flex-1 bg-transparent text-sm text-slate-200 placeholder:text-slate-500 outline-none"
          />
          <kbd
            onClick={onClose}
            className="text-[10px] text-slate-500 bg-slate-700/50 px-1.5 py-0.5 rounded cursor-pointer hover:text-slate-300"
          >
            ESC
          </kbd>
        </div>

        <div className="max-h-80 overflow-y-auto py-2">
          {query.trim().length < 2 ? (
            <div className="px-4 py-6 text-center text-slate-500 text-sm">
              Введите минимум 2 символа
            </div>
          ) : results.length === 0 ? (
            <div className="px-4 py-6 text-center text-slate-500 text-sm">
              Ничего не найдено
            </div>
          ) : (
            results.map((item) => (
              <button
                key={`${item.path}-${item.sectionId}`}
                onClick={() => handleSelect(item.path, item.sectionId)}
                className="w-full text-left px-4 py-2.5 hover:bg-space-light/50 transition-colors flex items-center gap-3"
              >
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-slate-200 truncate">{item.title}</div>
                </div>
                <span className="text-[10px] text-slate-500 bg-slate-700/40 px-2 py-0.5 rounded shrink-0">
                  {getPageLabel(item.path)}
                </span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
