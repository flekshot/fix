import { Section } from "../components/Section";
import { Accordion } from "../components/Accordion";

export function EngineeringPage() {
  return (
    <div>
      <Section id="eng-intro" title="Инженерия">
        <p>
          Инженер - специалист, работающий с техникой, оборудованием, сооружениями, обслуживанием, ремонтом и
          управлением устройств.
        </p>
      </Section>

      <Section id="eng-rules" title="Правила инженеров">
        <ul className="list-disc pl-5 space-y-2">
          <li>Запрещено распространение информации инженеров.</li>
          <li>Обязан выполнить задачи.</li>
          <li>Готов выдвинуться за 5-7 минут.</li>
          <li>Следить и помогать младшим.</li>
          <li>Запрещено красть имущество (понижение до ENG|X на 1 неделю).</li>
        </ul>
      </Section>

      <Section id="eng-duties" title="Должностные обязанности">
        <ul className="list-disc pl-5 space-y-2">
          <li>Научно-техническая деятельность.</li>
          <li>Документация.</li>
          <li>Технико-экономический анализ.</li>
          <li>Участие в проектах.</li>
          <li>Анализ информации и расчёты.</li>
        </ul>
      </Section>

      <Section id="eng-hierarchy" title="Иерархия инженеров">
        <Accordion title="Младший состав" defaultOpen>
          <div className="space-y-2">
            {[
              ["ENG|T", "Стажёр"],
              ["ENG|INF", "Инфраструктурщик"],
            ].map(([code, desc]) => (
              <div key={code} className="flex items-start gap-3">
                <span className="font-display text-[11px] text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider min-w-[110px]">
                  {code}
                </span>
                <span className="text-slate-300 text-sm">{desc}</span>
              </div>
            ))}
          </div>
        </Accordion>

        <Accordion title="Профилактики">
          <div className="space-y-2">
            {[
              ["ENG|M-A-C", "Воздушная"],
              ["ENG|M-L-C", "Наземная"],
              ["ENG|M-U-C", "Универсал"],
            ].map(([code, desc]) => (
              <div key={code} className="flex items-start gap-3">
                <span className="font-display text-[11px] text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider min-w-[110px]">
                  {code}
                </span>
                <span className="text-slate-300 text-sm">{desc}</span>
              </div>
            ))}
          </div>
        </Accordion>

        <Accordion title="Диагностики">
          <div className="space-y-2">
            {[
              ["ENG|D-E-C", "Энергетика"],
              ["ENG|D-S-C", "Программирование"],
              ["ENG|D-U-C", "Универсал"],
            ].map(([code, desc]) => (
              <div key={code} className="flex items-start gap-3">
                <span className="font-display text-[11px] text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider min-w-[110px]">
                  {code}
                </span>
                <span className="text-slate-300 text-sm">{desc}</span>
              </div>
            ))}
          </div>
        </Accordion>

        <Accordion title="Доп. квалификации">
          <div className="space-y-2">
            {[
              ["ENG|*-SA", "Сапёр"],
              ["ENG|*-RCH", "РХБЗ"],
            ].map(([code, desc]) => (
              <div key={code} className="flex items-start gap-3">
                <span className="font-display text-[11px] text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider min-w-[110px]">
                  {code}
                </span>
                <span className="text-slate-300 text-sm">{desc}</span>
              </div>
            ))}
          </div>
        </Accordion>

        <Accordion title="Астромеханики">
          <div className="space-y-2">
            {[
              ["ENG|A", "Дроид-астромеханик"],
            ].map(([code, desc]) => (
              <div key={code} className="flex items-start gap-3">
                <span className="font-display text-[11px] text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider min-w-[110px]">
                  {code}
                </span>
                <span className="text-slate-300 text-sm">{desc}</span>
              </div>
            ))}
          </div>
        </Accordion>

        <Accordion title="Командный состав">
          <div className="space-y-2">
            {[
              ["ENG|SPC", "Специалист инженерного состава"],
              ["ENG|INS", "Инженер-инструктор"],
              ["ENG|S-INS", "Старший инженер-инструктор"],
              ["ENG|CO-S-INS", "Глава старших инструкторов"],
              ["ENG|DEP", "Заместитель командира"],
              ["ENG|CO", "Командир инженерного направления"],
            ].map(([code, desc]) => (
              <div key={code} className="flex items-start gap-3">
                <span className="font-display text-[11px] text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider min-w-[110px]">
                  {code}
                </span>
                <span className="text-slate-300 text-sm">{desc}</span>
              </div>
            ))}
          </div>
        </Accordion>
      </Section>

      <div className="glow-line mt-12 mb-6" />
      <footer className="text-center text-slate-600 text-xs pb-8">
        <p>© Rise of the Republic</p>
      </footer>
    </div>
  );
}
