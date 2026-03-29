import type { ReactElement } from "react";
import { Link } from "react-router-dom";
import { getRouteGroups, routes } from "../data/navigation";
const groupMeta: Record<string, { desc: string; icon: ReactElement }> = {
  "Основа": {
    desc: "Устав, командование и базовые регламенты",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  "Формирования": {
    desc: "Специализированные подразделения армии",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  "Орден Джедаев": {
    desc: "Кодекс и пути Джедаев",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
};

const totalSections = routes.reduce((acc, r) => acc + r.sections.length, 0);
const groups = getRouteGroups();
const totalFormations = groups.find(g => g.group === "Формирования")?.items.length ?? 0;

const stats = [
  { label: "Разделов документов", value: routes.length },
  { label: "Статей и регламентов", value: totalSections },
  { label: "Подразделений", value: totalFormations },
  { label: "Орден Джедаев", value: 4 },
];

export function LandingPage() {
  const groups = getRouteGroups();

  return (
    <div className="landing-page">
      {/* Hero */}
      <div className="landing-hero">
        <div className="landing-scanline" />
        <div className="landing-logo" data-text="ROTR">ROTR</div>
        <p className="landing-title">Великая Армия Республики</p>
        <p className="landing-subtitle">Система уставов и регламентов</p>
      </div>

      {/* Stats row */}
      <div className="landing-stats">
        {stats.map((s) => (
          <div key={s.label} className="landing-stat">
            <span className="landing-stat-value">{s.value}</span>
            <span className="landing-stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="landing-divider">
        <div className="landing-divider-line" />
        <svg className="landing-divider-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
            d="M12 3l1.5 4.5h4.5l-3.75 2.75 1.5 4.5L12 12l-3.75 2.75 1.5-4.5L6 7.5h4.5L12 3z" />
        </svg>
        <div className="landing-divider-line" />
      </div>

      {/* Category cards */}
      <div className="landing-grid">
        {groups.map((group, i) => {
          const meta = groupMeta[group.group];
          return (
            <div
              key={group.group}
              className="landing-card"
              style={{ animationDelay: `${0.2 + i * 0.15}s` }}
            >
              <div className="landing-card-header">
                <span className="text-holo-cyan">{meta?.icon}</span>
                <span className="landing-card-title">{group.group}</span>
              </div>
              {meta?.desc && (
                <p className="landing-card-desc">{meta.desc}</p>
              )}
              <ul className={`landing-card-links${group.items.length > 4 ? " two-cols" : ""}`}>
                {group.items.map((route) => (
                  <li key={route.path}>
                    <Link to={route.path} className="landing-card-link">
                      <span className="landing-card-arrow">›</span>
                      {route.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
