import { specializations, advancedSpecs } from "../data/specializations";
import type { Specialization } from "../data/specializations";

function SpecRow({ spec }: { spec: Specialization }) {
  return (
    <tr className="border-b border-slate-800/50 hover:bg-space-light/30 transition-colors">
      <td className="py-2 px-3 font-display text-holo-cyan text-xs tracking-wider whitespace-nowrap">
        {spec.abbr}
      </td>
      <td className="py-2 px-3 text-slate-200 whitespace-nowrap">{spec.name}</td>
      <td className="py-2 px-3 text-slate-400 text-xs">{spec.minRank}+</td>
      <td className="py-2 px-3 text-slate-400 text-xs">
        {spec.compatibleWith[0] === "ALL" ? (
          <span className="text-code-green">Со всем</span>
        ) : (
          <span className="flex flex-wrap gap-1">
            {spec.compatibleWith.map((c) => (
              <span
                key={c}
                className="bg-slate-700/50 px-1.5 py-0.5 rounded text-slate-300"
              >
                {c}
              </span>
            ))}
          </span>
        )}
        {spec.note && (
          <p className="mt-1 text-slate-500 text-[11px]">{spec.note}</p>
        )}
      </td>
    </tr>
  );
}

export function SpecTable() {
  return (
    <div className="space-y-6">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-700/50">
              <th className="text-left py-2 px-3 text-slate-400 font-medium w-20">Код</th>
              <th className="text-left py-2 px-3 text-slate-400 font-medium">Специализация</th>
              <th className="text-left py-2 px-3 text-slate-400 font-medium w-16">Мин.</th>
              <th className="text-left py-2 px-3 text-slate-400 font-medium">Совместимость</th>
            </tr>
          </thead>
          <tbody>
            {specializations.map((spec) => (
              <SpecRow key={spec.abbr} spec={spec} />
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h3 className="font-display text-sm font-semibold text-holo-purple tracking-wide uppercase mb-3">
          Специализации с особыми требованиями
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700/50">
                <th className="text-left py-2 px-3 text-slate-400 font-medium w-20">Код</th>
                <th className="text-left py-2 px-3 text-slate-400 font-medium">Специализация</th>
                <th className="text-left py-2 px-3 text-slate-400 font-medium w-16">Мин.</th>
                <th className="text-left py-2 px-3 text-slate-400 font-medium">Совместимость</th>
              </tr>
            </thead>
            <tbody>
              {advancedSpecs.map((spec) => (
                <SpecRow key={spec.abbr} spec={spec} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
