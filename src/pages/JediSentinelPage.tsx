import { Section } from "../components/Section";
import { Accordion } from "../components/Accordion";

export function JediSentinelPage() {
  return (
    <div>
      <Section id="sentinel-intro" title="Стражи Храма">
        <p>
          Стражи держат баланс между светом мудрости и тенью Храма: оборона святынь, устойчивость к искушению тёмной стороны
          и выстраивание дисциплины у юнлингов. Их долг — чтобы стены Храма оставались неприступными, а умы учеников — ясными.
        </p>
      </Section>

      <Section id="sentinel-dogmas" title="Догмы Стража">
        <div className="space-y-3">
          <Accordion title="Честь стража">
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Страж не бежит от ответственности за порученный периметр — физический или духовный.</li>
              <li>Ложь ради «спокойствия» в Храме недопустима; доклад Совету должен быть точным.</li>
              <li>Приоритет — жизни обитателей Храма, затем имущество, затем репутация.</li>
              <li>Вмешательство в дела других ступеней — только по уставу или приказу старшего Стража.</li>
              <li>Символ меча у Стража — последний аргумент; угроза без необходимости ослабляет доверие.</li>
            </ul>
          </Accordion>
          <Accordion title="Сила стража">
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Сила применяется экономно: сначала внимание, голос, укрепление барьеров — затем приказ, затем сдерживание.</li>
              <li>Медитация на тёмные варианты исхода — для подготовки, не для питания страха.</li>
              <li>Страж изучает слабые места Храма, чтобы знать их лучше потенциального врага.</li>
              <li>Искушение и зов тьмы фиксируются и передаются наставнику или Совету без самосуда.</li>
              <li>Ни одна миссия за стенами не отменяет долга перед юнлингами, если Страж назначен наставником по дисциплине.</li>
            </ul>
          </Accordion>
          <Accordion title="Единение стража">
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Смены и пары Стражей действуют согласованно; раздвоение приказов устраняется через старшего на посту.</li>
              <li>Конфликт мнений решается в закрытом докладе, а не публичным обесчещением брата по Ордену.</li>
            </ul>
          </Accordion>
        </div>
      </Section>

      <Section id="sentinel-specs" title="Специальности">
        <div className="space-y-3">
          {[
            ["Следователь", "Investigator", "Расследования внутри Храма и на объектах Республики; сбор фактов для Совета."],
            ["Тень", "Shadow", "Скрытое наблюдение, контрразведка, работа там, где открытый меч навредит миссии."],
            ["Профессор", "Professor", "Преподавание дисциплины, истории и практик устойчивости для падаванов и юнлингов."],
          ].map(([name, code, desc]) => (
            <div key={code} className="flex flex-col sm:flex-row sm:items-start gap-2 border border-slate-700/40 rounded-lg p-3 bg-space-light/15">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-medium text-slate-200">{name}</span>
                <span className="font-display text-[11px] text-holo-purple bg-holo-purple/10 px-2 py-1 rounded shrink-0 tracking-wider">
                  {code}
                </span>
              </div>
              <p className="text-sm text-slate-400 sm:flex-1">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="sentinel-professor" title="Страж-Профессор">
        <p>
          Страж-Профессор ведёт учебные циклы по этике, истории Ордена и устойчивости к манипуляциям; формирует привычку к порядку
          и уважению к Кодексу у младших ступеней.
        </p>
        <p className="mt-3 flex flex-wrap items-center gap-2">
          <span className="font-display text-[11px] text-holo-purple bg-holo-purple/10 px-2 py-1 rounded shrink-0 tracking-wider">Dean</span>
          <span>
            <strong className="text-slate-200">Декан</strong> координирует расписание занятий, утверждает программы модулей и взаимодействует с Советом по отчётам об успеваемости.
          </span>
        </p>
        <div className="mt-6 space-y-4">
          <div className="border border-slate-700/50 rounded-lg p-4 bg-space-light/20">
            <h4 className="font-display text-xs text-holo-purple tracking-wider uppercase mb-2">Права</h4>
            <ol className="list-decimal pl-5 space-y-1 text-sm text-slate-300">
              <li>Назначать вспомогательных инструкторов из числа Рыцарей с согласия Совета.</li>
              <li>Требовать посещаемости на обязательных модулях для закреплённых групп юнлингов / падаванов.</li>
              <li>Вносить предложения о дополнительных занятиях для отстающих или отмеченных риском.</li>
              <li>Временно отстранять слушателя от практики при угрозе безопасности класса (с немедленным докладом).</li>
              <li>Запрашивать доступ к учебным материалам Храма в приоритетном порядке на период курса.</li>
              <li>Присутствовать на дисциплинарных беседах как наблюдатель по учебной части.</li>
              <li>Рекомендовать Мастерам пересмотр учебного плана конкретного ученика.</li>
              <li>Обжаловать в Совете решения, противоречащие образовательным стандартам Ордена.</li>
            </ol>
          </div>
          <div className="border border-slate-700/50 rounded-lg p-4 bg-space-light/20">
            <h4 className="font-display text-xs text-holo-purple tracking-wider uppercase mb-2">Требования</h4>
            <ol className="list-decimal pl-5 space-y-1 text-sm text-slate-300">
              <li>Статус Рыцаря+ и не менее одного полного цикла полевых миссий.</li>
              <li>Подтверждённая подготовка по педагогике Ордена (семинар Стражей + аттестация).</li>
              <li>Чистая дисциплинарная история в вопросах обучения и обращения с учениками.</li>
              <li>Рекомендация Декана или двух Мастеров, ведающих учебной частью.</li>
              <li>Готовность вести не менее двух модулей в стандартном семестре.</li>
              <li>Соблюдение нейтралитета в межфракционных спорах среди учеников на занятиях.</li>
            </ol>
          </div>
        </div>
      </Section>

      <div className="glow-line mt-12 mb-6" />
      <footer className="text-center text-slate-600 text-xs pb-8">
        <p>© Rise of the Republic</p>
      </footer>
    </div>
  );
}
