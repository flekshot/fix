import { Section } from "../components/Section";
import { Accordion } from "../components/Accordion";

export function SOBPage() {
  return (
    <div>
      <Section id="sob-intro" title="Бригада Специальных Операций">
        <p>
          <strong className="text-slate-200">БСО:</strong> клоны-коммандос; тайные операции; разведка; контрразведка;
          диверсии; антитеррор; партизанские действия.
        </p>
      </Section>

      <Section id="sob-hierarchy" title="Иерархия БСО">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="font-display text-[11px] text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider min-w-[80px]">
              SOB|Director
            </span>
            <span className="text-slate-300 text-sm">Директор бригады.</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-display text-[11px] text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider min-w-[80px]">
              SOB|CO
            </span>
            <span className="text-slate-300 text-sm">Командующий (2 макс).</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-display text-[11px] text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider min-w-[80px]">
              SOB|Agent
            </span>
            <span className="text-slate-300 text-sm">Агент (4 макс).</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-display text-[11px] text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider min-w-[80px]">
              SOB|Council
            </span>
            <span className="text-slate-300 text-sm">Совет БСО.</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-display text-[11px] text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider min-w-[80px]">
              SOB|INS
            </span>
            <span className="text-slate-300 text-sm">Инструкторская линия.</span>
          </div>
        </div>
      </Section>

      <Section id="sob-battalions" title="Батальоны и подразделения">
        <div className="space-y-3">
          <Accordion title="5-й бат (RC)" defaultOpen>
            <p className="text-sm text-slate-300">
              Republic Commando; оперативные группы по 4–6 человек.
            </p>
          </Accordion>
          <Accordion title="17-й бат (ARC)">
            <p className="text-sm text-slate-300">
              ARC Company; подразделения: Null, Alpha, 666th, Рота Жнецов.
            </p>
          </Accordion>
          <Accordion title="9-й бат (COD)">
            <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
              <li>
                <strong className="text-slate-200">ОКА</strong> — ассасины.
              </li>
              <li>
                <strong className="text-slate-200">ОТО</strong> — тайные операции.
              </li>
              <li>
                <strong className="text-slate-200">Arcane</strong>.
              </li>
            </ul>
          </Accordion>
        </div>
        <p className="text-slate-500 text-sm mt-4">
          <strong className="text-slate-400">Примечания про приписки:</strong> 666th — 4 на формирование; RC — 2; Alpha —
          без ограничений.
        </p>
      </Section>

      <Section id="sob-duties" title="Обязанности и права БСО">
        <ol className="list-decimal pl-5 space-y-2">
          <li>Соблюдать устав ВАР и положения БСО.</li>
          <li>Соблюдать режим секретности по уровням доступа.</li>
          <li>Вести себя достойно; не дискредитировать бригаду и Республику.</li>
          <li>Оказывать помощь ВАР в рамках приказов и совместимости задач.</li>
          <li>Быть образцовым примером для остальных составов, где это применимо.</li>
          <li>
            При приписке к формированию: подчиняться старшим по должности <span className="font-mono text-holo-cyan/90">DEP+</span>,
            оказывать содействие формированию; задачи БСО остаются первичными.
          </li>
        </ol>
      </Section>

      <Section id="sob-secrets" title="Секретная информация">
        <p className="text-slate-400 text-sm mb-4">Четыре уровня секретности:</p>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="font-display text-[11px] text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider min-w-[80px]">
              Уровень 1
            </span>
            <span className="text-slate-300 text-sm">Общая информация о БСО, КПК — доступна всем БСО.</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-display text-[11px] text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider min-w-[80px]">
              Уровень 2
            </span>
            <span className="text-slate-300 text-sm">IDN, задачи батальонов — 5-й бат.</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-display text-[11px] text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider min-w-[80px]">
              Уровень 3
            </span>
            <span className="text-slate-300 text-sm">Совещания, документация — Совет, Представители.</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-display text-[11px] text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider min-w-[80px]">
              Уровень 4
            </span>
            <span className="text-slate-300 text-sm">
              Командование, деятельность COD — 9-й бат; Директор и Заместитель.
            </span>
          </div>
        </div>
      </Section>

      <div className="glow-line mt-12 mb-6" />
      <footer className="text-center text-slate-600 text-xs pb-8">
        <p>© Rise of the Republic. Любое копирование — с разрешения создателя.</p>
      </footer>
    </div>
  );
}
