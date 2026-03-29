import { rankGroups, jediRanks } from "../data/ranks";

export function RankTable() {
  return (
    <div className="space-y-6">
      {rankGroups.map((group) => (
        <div key={group.title}>
          <div className="flex items-baseline gap-3 mb-3">
            <h3 className="font-display text-sm font-semibold text-holo-cyan tracking-wide uppercase">
              {group.title}
            </h3>
            {group.serviceRequirement && (
              <span className="text-xs text-slate-500">({group.serviceRequirement})</span>
            )}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700/50">
                  <th className="text-left py-2 px-3 text-slate-400 font-medium w-20">Код</th>
                  <th className="text-left py-2 px-3 text-slate-400 font-medium">Звание</th>
                  <th className="text-left py-2 px-3 text-slate-400 font-medium">Требования</th>
                </tr>
              </thead>
              <tbody>
                {group.ranks.map((rank) => (
                  <tr key={rank.abbr} className="border-b border-slate-800/50 hover:bg-space-light/30 transition-colors">
                    <td className="py-2 px-3 font-display text-holo-cyan text-xs tracking-wider">
                      {rank.abbr}
                    </td>
                    <td className="py-2 px-3 text-slate-200">{rank.name}</td>
                    <td className="py-2 px-3 text-slate-400">{rank.requirement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      <div>
        <h3 className="font-display text-sm font-semibold text-holo-purple tracking-wide uppercase mb-3">
          Звания Джедаев
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700/50">
                <th className="text-left py-2 px-3 text-slate-400 font-medium w-20">Код</th>
                <th className="text-left py-2 px-3 text-slate-400 font-medium">Звание</th>
                <th className="text-left py-2 px-3 text-slate-400 font-medium w-16">= ВАР</th>
                <th className="text-left py-2 px-3 text-slate-400 font-medium">Описание</th>
              </tr>
            </thead>
            <tbody>
              {jediRanks.map((rank) => (
                <tr key={rank.abbr} className="border-b border-slate-800/50 hover:bg-space-light/30 transition-colors">
                  <td className="py-2 px-3 font-display text-holo-purple text-xs tracking-wider">
                    {rank.abbr}
                  </td>
                  <td className="py-2 px-3 text-slate-200">{rank.name}</td>
                  <td className="py-2 px-3 text-slate-400 font-display text-xs">{rank.equivalent}</td>
                  <td className="py-2 px-3 text-slate-400">{rank.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
