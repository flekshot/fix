import { Section } from "../components/Section";
import { Accordion } from "../components/Accordion";

export function HighCommandPage() {
  return (
    <div>
      <Section id="hc-intro" title="Высшее Командование">
        <p>
          Надпись <strong className="text-holo-cyan">Army</strong> в документах / личном деле — обозначение Высшего
          командования, которое имеет полномочия на командование всеми составами.
        </p>
        <p className="text-slate-500 text-sm mt-2">
          Любая единица ВК может быть отстранена (на любой срок) по решению 80% голосов
          основного состава командования ОВО (командиры, заместители формирований и выше).
        </p>
      </Section>

      <Section id="hc-types" title="Виды Высшего командования">
        <div className="space-y-4">
          <div className="border border-slate-700/50 rounded-lg p-4">
            <h4 className="font-display text-xs text-holo-cyan tracking-wider uppercase mb-1">
              Высший командный состав Республики <span className="text-slate-500">(FM / MR / GC)</span>
            </h4>
            <p className="text-sm text-slate-300">
              Верховное командование базой — устав и полное управление Республикой. Имеет неприкосновенность
              и право вынести исключение в любом пункте устава. Подчиняется правилам чести и справедливости,
              действует на благо всех составов.
            </p>
          </div>

          <div className="border border-slate-700/50 rounded-lg p-4">
            <h4 className="font-display text-xs text-holo-cyan tracking-wider uppercase mb-1">
              Представитель Армии <span className="text-slate-500">(BG / GM / MC)</span>
            </h4>
            <p className="text-sm text-slate-300">
              Полный спектр прав и обязанностей на командование любым формированием или структурой.
              В звании MC могут заниматься стратегическими решениями по согласованию с ВКСР.
            </p>
          </div>

          <div className="border border-slate-700/50 rounded-lg p-4">
            <h4 className="font-display text-xs text-holo-cyan tracking-wider uppercase mb-1">
              Командир Армии <span className="text-slate-500">(CO)</span>
            </h4>
            <p className="text-sm text-slate-300">
              Назначенное должностное лицо с большим опытом. Право распоряжаться всеми составами ВО.
              Подчиняется коллегам выше по рангу (Chief Commandant, Deputy Chief Commandant в звании CO).
            </p>
          </div>

          <div className="border border-slate-700/50 rounded-lg p-4">
            <h4 className="font-display text-xs text-slate-400 tracking-wider uppercase mb-1">
              Исполняющий обязанности командира армии
            </h4>
            <p className="text-sm text-slate-300">
              Единица с полномочиями ВК, но не считается им в полной мере — помогает командиру.
              <span className="text-slate-500"> (Commandant / Senior Commandant / Deputy Commandant Chief в звании COL,
              или выдвинутый на испытательный срок CO / JCOM / CPT Army.)</span>
            </p>
          </div>

          <div className="border border-slate-700/50 rounded-lg p-4">
            <h4 className="font-display text-xs text-holo-purple tracking-wider uppercase mb-1">
              Советник Республики / Вице-Канцлер
            </h4>
            <p className="text-sm text-slate-300">
              Назначенное должностное или политическое лицо. Следит за закреплённым ВО / группой формирований / дипломатических
              делегаций. Распоряжается закреплёнными формированиями. Не имеет воинского звания.
            </p>
          </div>
        </div>
      </Section>

      <Section id="hc-command-dept" title="Отдел комендатуры (Command Department)">
        <p className="text-slate-400 text-sm mb-4">
          Особый отдел ответвления ВК. Сотрудники следят за объектами армии и подразделениями.
          Зачисление — по прямой рекомендации главы отдела.
        </p>

        <div className="space-y-3">
          {[
            { rank: "Assistant Commandant", desc: "Ассистент коменданта (LT / SLT). Проходит обучение, помогает старшим офицерам." },
            { rank: "Commandant", desc: "Комендант (CPT / MAJ). Оперативное управление объектами, проверки, обязанности командира армии." },
            { rank: "Senior Commandant", desc: "Старший комендант (COL). Руководит группой комендантов. Может быть юстициаром. В звании CO — командир армии." },
            { rank: "Deputy Chief Commandant", desc: "Заместитель шефа комендатуры (COL). В звании CO — командир армии. Координация работы отдела, анализ деятельности." },
            { rank: "Chief Commandant", desc: "Шеф комендатуры, глава отдела. Управляет всей структурой, утверждает стратегические решения. Командир армии и выше." },
          ].map((item) => (
            <div key={item.rank} className="flex items-start gap-3">
              <span className="font-display text-[11px] text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider min-w-[200px]">
                {item.rank}
              </span>
              <span className="text-slate-300 text-sm">{item.desc}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section id="hc-secondary" title="Второстепенные воинские должности">
        <div className="space-y-4">
          <div className="border border-slate-700/50 rounded-lg p-4">
            <h4 className="font-display text-xs text-holo-cyan tracking-wider uppercase mb-1">
              [Justicar] — Юстициарий
            </h4>
            <p className="text-sm text-slate-300">
              Сотрудник управления армии: самостоятельные расследования, руководство дознанием и
              следственно-оперативными мероприятиями, право проведения военного трибунала.
            </p>
          </div>

          <div className="border border-slate-700/50 rounded-lg p-4">
            <h4 className="font-display text-xs text-holo-cyan tracking-wider uppercase mb-1">
              [SPEC|CO] — Командующий специализациями
            </h4>
            <p className="text-sm text-slate-300">
              Руководство всеми специализациями армии: стратегические планы, эффективное использование
              ресурсов, координация действий между специализациями.
            </p>
          </div>

          <div className="border border-slate-700/50 rounded-lg p-4">
            <h4 className="font-display text-xs text-holo-cyan tracking-wider uppercase mb-1">
              [SEC|CO] — Командующий охранных формирований
            </h4>
            <p className="text-sm text-slate-300">
              Координация деятельности Гвардии и подразделения Ghost: содействие в задачах,
              контроль дисциплины, взаимодействие с остальными структурами.
            </p>
          </div>
        </div>
      </Section>

      <Section id="hc-duties" title="Обязанности командира армии">
        <div className="space-y-3">
          <Accordion title="Контроль" defaultOpen>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Контроль соблюдения устава бойцами и командирами.</li>
              <li>Контроль постовой службы на режимных объектах.</li>
              <li>Контроль изучения бойцами необходимых документов.</li>
              <li>Контроль ведения списков личных дел.</li>
              <li>Контроль материала, преподаваемого командованием формирований.</li>
            </ul>
          </Accordion>
          <Accordion title="Наставничество">
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Советы и наставления по командованию (по необходимости или просьбе).</li>
              <li>Помощь начинающим командирам и заместителям (включая временное отстранение на время повышения квалификации).</li>
            </ul>
          </Accordion>
          <Accordion title="Воспитание и обучение">
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Воспитательные беседы с провинившимися.</li>
              <li>Лекции для составов и обучение.</li>
              <li>Выговоры командирам и заместителям — с одобрения Представителя Армии. <span className="text-slate-500">(Искл.: Глава комендатуры.)</span></li>
            </ul>
          </Accordion>
          <Accordion title="Организация">
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Организация и контроль всех войск на закреплённом ВО во время нападения.</li>
              <li>Составление планов тренировок, тактических выпадов и материала для повышения боеспособности.</li>
            </ul>
          </Accordion>
        </div>
      </Section>

      <Section id="hc-inspections" title="Оформление проверки">
        <ol className="list-decimal pl-5 space-y-2">
          <li>Подготовить материал, подать готовый вариант Представителю Армии и получить одобрение.</li>
          <li>Предупредить Представителя Армии за день до начала.</li>
          <li>Приступить к проверке.</li>
          <li>Доклад обо всех этапах и результатах.</li>
        </ol>
        <p className="text-slate-500 text-sm mt-3">
          Искл.: Глава комендатуры вправе назначить проверку за день без уведомления ПА+.
        </p>
      </Section>

      <Section id="hc-training-plans" title="Оформление плана тренировок">
        <ol className="list-decimal pl-5 space-y-2">
          <li>Договориться с формированием о дате начала занятий.</li>
          <li>Вместе с командиром изготовить планы тренировок / тактик исходя из списков личных дел.</li>
          <li>Провести тренировки и проверить эффективность в условиях, приближённых к боевым.</li>
          <li>Доклад обо всех этапах и результатах.</li>
        </ol>
        <div className="mt-4 border border-slate-700/30 rounded-lg p-4 bg-space-light/20">
          <p className="text-sm text-slate-400">
            <strong className="text-slate-300">Примечание:</strong> Командование любого формирования может запросить у ВК помощь:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-slate-400">
            <li>Выдача дней свободного набора / перевода.</li>
            <li>Организация совместных тренировок между составами.</li>
            <li>Привязка Высшего командования к формированию.</li>
          </ul>
        </div>
      </Section>

      <div className="glow-line mt-12 mb-6" />
      <footer className="text-center text-slate-600 text-xs pb-8">
        <p>© Rise of the Republic</p>
      </footer>
    </div>
  );
}
