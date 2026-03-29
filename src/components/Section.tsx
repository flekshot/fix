import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 mb-12">
      <h2 className="font-display text-xl font-semibold text-holo-cyan glow-text mb-4 tracking-wide uppercase">
        {title}
      </h2>
      <div className="glow-line mb-6" />
      <div className="space-y-4 text-slate-300 leading-relaxed text-[15px]">
        {children}
      </div>
    </section>
  );
}

