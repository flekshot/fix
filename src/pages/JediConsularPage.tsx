import { Section } from "../components/Section";

export function JediConsularPage() {
  return (
    <div>
      <Section id="consular-intro" title="Джедай-Консул">
        <p>
          Консул — дипломат и исследователь Силы; традиционно ассоциируется с зелёным клинком и углубленным изучением потоков Света,
          исцеления и переговоров. Его задача — слова и прозрение там, где меч оставлен в ножнах.
        </p>
      </Section>

      <Section id="consular-specs" title="Специальности">
        <div className="space-y-3">
          {[
            ["Целитель", "Healer", "Медитация, стабилизация и помощь раненым; этика вмешательства Силой в живые организмы."],
            ["Дипломат", "DIP", "Миссии переговоров, представительство Ордена и Республики, деэскалация конфликтов."],
            ["Хранитель знаний", "KK", "Архивы, история Ордена и Галактики, доступ к сводам и регламентам Храма."],
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

      <Section id="consular-keeper" title="Хранитель знаний">
        <p>
          Хранители — архивариусы и историки: собирают, проверяют и передают сведения через HoloNet и внутренние сети Храма.
        </p>
        <p className="mt-3 flex flex-wrap items-center gap-2">
          <span className="font-display text-[11px] text-holo-purple bg-holo-purple/10 px-2 py-1 rounded shrink-0 tracking-wider">LIB</span>
          <span>
            <strong className="text-slate-200">Библиотекарь</strong> контролирует доступ к библиотеке, выдачу томов и цифровых матриц, ведёт учёт редких источников.
          </span>
        </p>
      </Section>

      <Section id="consular-keeper-rules" title="Права и обязанности хранителя">
        <div className="space-y-4">
          <div className="border border-slate-700/50 rounded-lg p-4 bg-space-light/20">
            <h4 className="font-display text-xs text-holo-purple tracking-wider uppercase mb-2">Права</h4>
            <ol className="list-decimal pl-5 space-y-1 text-sm text-slate-300">
              <li>Временно ограничивать выдачу материалов при угрозе утечки или порче фонда.</li>
              <li>Требовать регистрацию запроса и цели изучения у падаванов и гостей Храма.</li>
              <li>Инициировать проверку достоверности записей у Совета или Мастеров-архивистов.</li>
            </ol>
          </div>
          <div className="border border-slate-700/50 rounded-lg p-4 bg-space-light/20">
            <h4 className="font-display text-xs text-holo-purple tracking-wider uppercase mb-2">Обязанности</h4>
            <ol className="list-decimal pl-5 space-y-1 text-sm text-slate-300">
              <li>Поддерживать порядок в хранилищах и актуальность каталогов (физических и цифровых).</li>
              <li>Обучать пользователей правилам обращения с древними носителями и защищёнными секциями.</li>
              <li>Немедленно докладывать о пропаже, порче или несанкционированном копировании.</li>
              <li>Соблюдать гриф секретности: не разглашать содержание закрытых сводов без ордера Совета.</li>
            </ol>
          </div>
          <div className="border border-slate-700/50 rounded-lg p-4 bg-space-light/20">
            <h4 className="font-display text-xs text-holo-purple tracking-wider uppercase mb-2">Требования</h4>
            <ol className="list-decimal pl-5 space-y-1 text-sm text-slate-300">
              <li>Статус Рыцаря+ и рекомендация Мастера знаний или Совета.</li>
              <li>Сдача аттестации по регламенту библиотеки и работе с HoloNet.</li>
              <li>Чистая дисциплинарная история в вопросах хранения и доступа к информации.</li>
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
