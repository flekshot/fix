import { useLocation, Link } from "react-router-dom";
import { getRouteByPath, getRouteGroups } from "../data/navigation";

interface SidebarProps {
  activeSection: string;
  open: boolean;
  desktopVisible: boolean;
  onClose: () => void;
}

export function Sidebar({ activeSection, open, desktopVisible, onClose }: SidebarProps) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-40 h-full w-64 bg-space-dark border-r border-slate-800/60
          pt-16 overflow-y-auto transition-transform lg:hidden
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <SidebarContent activeSection={activeSection} onClose={onClose} />
      </aside>

      <aside className={`hidden w-64 shrink-0${desktopVisible ? " lg:block" : ""}`}>
        <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto border-r border-slate-800/60">
          <SidebarContent activeSection={activeSection} onClose={onClose} />
        </div>
      </aside>
    </>
  );
}

const routeGroups = getRouteGroups();

function SidebarContent({
  activeSection,
  onClose,
}: {
  activeSection: string;
  onClose: () => void;
}) {
  const { pathname } = useLocation();
  const currentRoute = getRouteByPath(pathname);

  return (
    <div className="px-4 py-4">
      {routeGroups.map((group) => (
        <div key={group.group} className="mb-4">
          <div className="font-display text-[10px] tracking-[0.2em] text-slate-500 uppercase mb-2 px-3">
            {group.group}
          </div>
          <nav className="space-y-0.5 mb-1">
            {group.items.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                onClick={onClose}
                className={`sidebar-link block py-1.5 text-sm ${
                  pathname === route.path ? "active" : "text-slate-400"
                }`}
              >
                {route.shortLabel}
              </Link>
            ))}
          </nav>
        </div>
      ))}

      {currentRoute && (
        <>
          <div className="glow-line mb-4" />
          <div className="font-display text-[10px] tracking-[0.2em] text-slate-500 uppercase mb-3 px-3">
            {currentRoute.shortLabel}
          </div>
          <nav className="space-y-0.5">
            {currentRoute.sections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={onClose}
                className={`sidebar-link block py-1.5 text-sm ${
                  activeSection === item.id ? "active" : "text-slate-400"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </>
      )}
    </div>
  );
}
