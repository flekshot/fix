import type { AlertCode } from "../data/alertCodes";

export function AlertCodeCard({ code }: { code: AlertCode }) {
  return (
    <div
      className={`rounded-lg border p-4 ${code.bgClass} ${code.borderClass}`}
    >
      <div className={`font-display text-sm font-semibold tracking-wider uppercase mb-2 ${code.textClass}`}>
        {code.name}
      </div>
      <p className="text-slate-300 text-sm leading-relaxed">{code.description}</p>
    </div>
  );
}
