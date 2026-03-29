import { Section } from "../components/Section";
import { Accordion } from "../components/Accordion";

function CodeRow({ code, description }: { code: string; description: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="font-display text-[11px] text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider min-w-[100px]">
        {code}
      </span>
      <span className="text-slate-300 text-sm">{description}</span>
    </div>
  );
}

export function GhostPage() {
  return (
    <div>
      <Section id="ghost-intro" title="Батальон Ghost">
        <p>
          Формирование ВАР: защита VIP, зачистка бунтов, уничтожение вражеских баз.
        </p>
        <Accordion title="Направления применения">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Охрана и сопровождение особо важных лиц.</li>
            <li>Подавление массовых беспорядков и вооружённых выступлений.</li>
            <li>Рейды и ликвидация опорных пунктов противника.</li>
          </ul>
        </Accordion>
      </Section>

      <Section id="ghost-duties" title="Обязанности">
        <ol className="list-decimal pl-5 space-y-2">
          <li>Защищать старших по званию и должности ценой собственной жизни при прямой угрозе.</li>
          <li>Соблюдать устав ВАР и приказы командования.</li>
          <li>Соблюдать строгую субординацию внутри батальона и при взаимодействии с другими подразделениями.</li>
        </ol>
      </Section>

      <Section id="ghost-rights" title="Права">
        <div className="space-y-2">
          <CodeRow
            code="ДОПРОС"
            description="Пытки в допросной — только с разрешения Высшего командования."
          />
          <CodeRow code="МЕСТО" description="Охрана места происшествия на закреплённых объектах." />
          <CodeRow
            code="ПОСЕТ"
            description="Досмотр посетителей при наличии предписания Army."
          />
          <CodeRow code="ОХР-Р" description="Охрана представителей Республики по задаче." />
          <CodeRow
            code="ЗАДЕРЖ"
            description="Задержание нарушителей на охраняемых объектах в рамках полномочий."
          />
          <CodeRow code="ППС" description="ППС на территориях, закреплённых за Ghost." />
        </div>
      </Section>

      <Section id="ghost-security" title="Полномочия в охране">
        <div className="space-y-2">
          <CodeRow
            code="ОГЛ-1"
            description="Оглушение при устойчивом игнорировании законного приказа охраны."
          />
          <CodeRow code="ОГЛ-2" description="Оглушение при непосредственной угрозе жизни и здоровью." />
          <CodeRow code="РАЗГОН" description="Разгон толпы и восстановление контроля над периметром." />
          <CodeRow
            code="ПЕРЕМ"
            description="Перемещение по важным объектам в соответствии с допуском и задачей."
          />
        </div>
      </Section>

      <div className="glow-line mt-12 mb-6" />
      <footer className="text-center text-slate-600 text-xs pb-8">
        <p>© Rise of the Republic</p>
      </footer>
    </div>
  );
}
