import { Section } from "../components/Section";
import { Accordion } from "../components/Accordion";

const codeBadge = (label: string) => (
  <span className="font-display text-[11px] text-holo-purple bg-holo-purple/10 px-2 py-1 rounded shrink-0 tracking-wider">
    {label}
  </span>
);

export function JediCodePage() {
  return (
    <div>
      <Section id="jedi-intro" title="Орден Джедаев">
        <p>
          Джедаи — рыцари и хранители мира, адепты Силы. Орден объединяет чувствительных к Силе; штаб и духовный центр — на Корусанте.
          Это организация, призванная защищать Республику и баланс Светлой стороны.
        </p>
      </Section>

      <Section id="jedi-codex" title="Кодекс Джедаев">
        <div className="grid gap-3 sm:grid-cols-1">
          {[
            "Не эмоции, а покой",
            "Не неведение, а знание",
            "Не страсть, а безмятежность",
            "Не хаос, а гармония",
            "Не смерть, а Сила",
          ].map((tenet) => (
            <blockquote
              key={tenet}
              className="border border-slate-700/50 rounded-lg px-4 py-3 bg-space-light/20 italic text-slate-200 text-[15px] leading-relaxed"
            >
              «{tenet}»
            </blockquote>
          ))}
        </div>
      </Section>

      <Section id="jedi-path" title="Следование пути Кодекса">
        <div className="space-y-3">
          <Accordion title="Самодисциплина">
            <p>
              Джедай обучается владеть собой: тело, речь и поступки соответствуют Кодексу даже вне заданий и тренировок.
            </p>
          </Accordion>
          <Accordion title="Ответственность">
            <p>
              Честность и сдержанность слова; уважение к падавану, наставнику, Совету, Ордену, закону и жизни.
              Обязанность помогать нуждающимся и защищать слабых в меру полномочий.
            </p>
          </Accordion>
        </div>
      </Section>

      <Section id="jedi-rules" title="Правила Джедаев">
        <div className="space-y-3">
          <Accordion title="Честь">
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li className="flex flex-wrap items-center gap-2">
                Использование Силы без причины — {codeBadge("1 зам")}
              </li>
              <li className="flex flex-wrap items-center gap-2">
                Неуважение — {codeBadge("1 зам")}
              </li>
              <li className="flex flex-wrap items-center gap-2">
                Техника без квалификации — {codeBadge("2 зам")}
              </li>
              <li className="flex flex-wrap items-center gap-2">
                Оспаривание Совета — {codeBadge("2 зам")}
              </li>
              <li className="flex flex-wrap items-center gap-2">
                Агрессия — {codeBadge("1 выг")}
              </li>
              <li className="flex flex-wrap items-center gap-2">
                Тёмная сторона — {codeBadge("1 выг")}
              </li>
              <li className="flex flex-wrap items-center gap-2">
                Убийство — {codeBadge("1 выг")}
              </li>
              <li className="flex flex-wrap items-center gap-2">
                Привязанность — {codeBadge("1 выг")}
              </li>
            </ul>
          </Accordion>
          <Accordion title="Меч">
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li className="flex flex-wrap items-center gap-2">
                Стойки без обучения — {codeBadge("1 выг")}
              </li>
              <li className="flex flex-wrap items-center gap-2">
                Ультимативный удар без статуса Рыцаря — {codeBadge("1 выг")}
              </li>
              <li className="flex flex-wrap items-center gap-2">
                Юнлинг берёт меч — {codeBadge("1 выг")}
              </li>
              <li className="flex flex-wrap items-center gap-2">
                Отбирание меча — {codeBadge("1 выг")}
              </li>
              <li className="flex flex-wrap items-center gap-2">
                Неправильный цвет клинка — {codeBadge("2 выг")}
              </li>
              <li className="flex flex-wrap items-center gap-2">
                Продажа / покупка меча — {codeBadge("2 выг")}
              </li>
            </ul>
          </Accordion>
          <Accordion title="Ученичество">
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Падаван подчиняется наставнику в учёбе, тренировках и на заданиях в рамках Устава.</li>
              <li>Наставник несёт ответственность за действия падавана и докладывает Совету о прогрессе.</li>
              <li>Смена наставника или прерывание ученичества — только по решению Совета или регламенту Ордена.</li>
              <li>Юнлинг не вмешивается в дела Рыцарей без поручения; очерёдность и очаг обучения определяет Храм.</li>
              <li>Испытания на звание проводятся по процедуре Ордена; самовольное объявление себя выше ступени — нарушение.</li>
            </ol>
          </Accordion>
          <Accordion title="О гражданах ВАР">
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Джедай не унижает и не провоцирует бойцов ВАР; субординация на объекте соблюдается согласно уставу базы.</li>
              <li>Вмешательство в цепь приказов клонов — только по запросу командования или в угрозе жизни.</li>
              <li>Разглашение данных о джедаях / заданиях гражданскому и военному персоналу без нужды — запрещено.</li>
              <li>Совместные операции оформляются через каналы Республики; личные «инициативы» в тылу ВАР согласуются с ВК / Советом.</li>
            </ol>
          </Accordion>
          <Accordion title="Система наказания">
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>
                <strong className="text-slate-200">Замечание</strong> — лёгкое дисциплинарное взыскание.
              </li>
              <li>Три замечания равны одному выговору.</li>
              <li>Три выговора ведут к снятию с должности или изгнанию из Ордена по решению Совета.</li>
            </ul>
          </Accordion>
        </div>
      </Section>

      <Section id="jedi-hierarchy" title="Иерархия Ордена">
        <div className="space-y-3">
          {[
            ["Юнлинг", "Ребёнок и ученик Храма; базовая подготовка, без меча и полевых полномочий Рыцаря."],
            ["Падаван", "Ученик наставника; полевые задания под надзором, углублённое изучение Силы и дисциплины."],
            ["Рыцарь", "Полноценный джедай Ордена; самостоятельные миссии, право обучать и нести ответственность за решения."],
            ["Мастер", "Опытный наставник и стратег; участие в Совете, подготовка падаванов и развитие традиций."],
            ["Гранд-Мастер", "Высшая ступень (Йода) — духовный и организационный стержень Ордена на Корусанте."],
          ].map(([rank, desc]) => (
            <div key={rank} className="flex flex-col sm:flex-row sm:items-start gap-2 border border-slate-700/40 rounded-lg p-3 bg-space-light/15">
              <span className="font-display text-[11px] text-holo-purple bg-holo-purple/10 px-2 py-1 rounded shrink-0 tracking-wider uppercase">
                {rank}
              </span>
              <p className="text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="jedi-docs" title="Примечание">
        <p>
          <strong className="text-slate-200">IDN-карта</strong> оформляется по единому формату личного дела Республики; на ней указываются звание в Ордене,
          приписки специализаций и статус допуска на объектах ВАР.
        </p>
        <p>
          Джедай может быть <strong className="text-slate-200">привязан к формированию ВАР</strong> для совместных операций — тогда в приказах и рапортах
          фигурирует закреплённый легион / группа.
        </p>
        <p>
          <strong className="text-slate-200">Привязанный джедай</strong> соблюдает устав базы, координируется с командиром операции и не подменяет цепь приказов клонов
          без полномочий Совета или ВК.
        </p>
      </Section>

      <div className="glow-line mt-12 mb-6" />
      <footer className="text-center text-slate-600 text-xs pb-8">
        <p>© Rise of the Republic</p>
      </footer>
    </div>
  );
}
