import { accessLevels, locationAccess } from "../data/accessLevels";

export function AccessTable() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-display text-sm font-semibold text-holo-cyan tracking-wide uppercase mb-3">
          Уровни допуска
        </h3>
        <div className="space-y-2">
          {accessLevels.map((al) => (
            <div key={al.level} className="flex gap-3 items-start">
              <span className="font-display text-xs text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider">
                {al.level}
              </span>
              <span className="text-slate-300 text-sm">{al.description}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display text-sm font-semibold text-holo-cyan tracking-wide uppercase mb-3">
          Регламент допуска по объектам
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700/50">
                <th className="text-left py-2 px-3 text-slate-400 font-medium">Объект</th>
                <th className="text-left py-2 px-3 text-slate-400 font-medium w-28">Допуск</th>
                <th className="text-left py-2 px-3 text-slate-400 font-medium">Примечание</th>
              </tr>
            </thead>
            <tbody>
              {locationAccess.map((loc) => (
                <tr key={loc.location} className="border-b border-slate-800/50 hover:bg-space-light/30 transition-colors">
                  <td className="py-2 px-3 text-slate-200">{loc.location}</td>
                  <td className="py-2 px-3 font-display text-holo-cyan text-xs tracking-wider">
                    {loc.accessLevel}
                  </td>
                  <td className="py-2 px-3 text-slate-500 text-xs">{loc.note ?? ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
