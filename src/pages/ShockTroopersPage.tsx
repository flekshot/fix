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

export function ShockTroopersPage() {
  return (
    <div>
      <Section id="sp-intro" title="Ударные Клоны">
        <p>
          Shock Platoon (SP) — подразделение под руководством SGT с широким спектром полномочий: поддержка
          Гвардии, поддержание дисциплины, быстрые силовые ответы на инциденты. R-SP предназначен для
          обучения и адаптации кадетов и младшего состава.
        </p>
        <Accordion title="R-SP (ученики)">
          <p className="text-sm text-slate-400">
            R-SP — учебный контур: освоение тактики, взаимодействия с Гвардией и командованием без полного
            набора оперативных полномочий до подтверждения готовности.
          </p>
        </Accordion>
      </Section>

      <Section id="sp-duties" title="Обязанности">
        <ol className="list-decimal pl-5 space-y-2">
          <li>Поиск и выявление дефективных клонов и нарушителей внутри формирования.</li>
          <li>Обеспечение безопасности при жёлтом и красном кодах (ЖК/КК).</li>
          <li>Подавление бунтов и массовых нарушений дисциплины.</li>
          <li>Урегулирование конфликтов между единицами с приоритетом деэскалации где возможно.</li>
          <li>Ударная функция — в том числе с применением щитов по задаче командования.</li>
          <li>Выдача дисциплинарных взысканий (ДВ) нарушителям в установленном порядке.</li>
        </ol>
      </Section>

      <Section id="sp-rights" title="Права">
        <div className="space-y-2">
          <CodeRow
            code="ЗК"
            description="Ношение оружия, наручников и оглушающих средств при зелёном коде — по регламенту и уставу."
          />
          <CodeRow
            code="СИЛА"
            description="Применение силы к нарушителям при наличии оснований и в рамках полномочий SP."
          />
          <CodeRow code="КПЗ" description="Свободное посещение КПЗ в служебных целях." />
          <CodeRow
            code="КК"
            description="Охрана командующего состава при красном коде и по приказу."
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
