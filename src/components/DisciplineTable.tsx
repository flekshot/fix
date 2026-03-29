import { disciplineCategories, punishmentTypes } from "../data/disciplines";

export function DisciplineTable() {
  return (
    <div className="space-y-6">
      {disciplineCategories.map((cat) => (
        <div key={cat.title} className="border border-slate-700/50 rounded-lg overflow-hidden">
          <div className="px-4 py-3 bg-space-light/50 flex items-center justify-between">
            <span className="font-medium text-slate-200 text-sm">{cat.title}</span>
            <span className="text-xs text-code-red bg-code-red/10 border border-code-red/30 px-2 py-0.5 rounded">
              {cat.punishment}
            </span>
          </div>
          <ul className="px-4 py-3 space-y-1.5">
            {cat.items.map((item, i) => (
              <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                <span className="text-slate-600 select-none shrink-0">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div>
        <h3 className="font-display text-sm font-semibold text-holo-cyan tracking-wide uppercase mb-3">
          Виды наказаний
        </h3>
        <div className="space-y-2">
          {punishmentTypes.map((pt) => (
            <div key={pt.abbr} className="flex gap-3 items-start">
              <span className="font-display text-xs text-code-red bg-code-red/10 px-2 py-1 rounded shrink-0 tracking-wider">
                {pt.abbr}
              </span>
              <div>
                <span className="text-slate-200 text-sm font-medium">{pt.name}</span>
                <p className="text-slate-400 text-xs mt-0.5">{pt.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-sm text-slate-500">
        1 срок в КПЗ = 15 минут.
      </p>
    </div>
  );
}
