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

export function GuardPage() {
  return (
    <div>
      <Section id="guard-intro" title="Устав Гвардии">
        <p>
          Устав Гвардии определяет задачи, полномочия и порядок действий подразделений, ответственных за
          правопорядок, безопасность и соблюдение регламентов на военных объектах и в зонах ответственности
          Великой Армии Республики.
        </p>
      </Section>

      <Section id="guard-units" title="Единицы гвардии">
        <div className="space-y-2">
          <CodeRow code="СЛЕД" description="Следователь — расследования." />
          <CodeRow code="О.С.Н." description="О.С.Н. — защита VIP, штурм, работа с заложниками." />
          <CodeRow code="УК" description="Ударные клоны — патрули и посты, штурмовые задачи." />
          <CodeRow code="ГОН" description="Гончая — поимка нарушителей; проход за ВО с ордером." />
          <CodeRow code="МАС" description="Массиф — поиск веществ." />
        </div>
      </Section>

      <Section id="guard-duties" title="Обязанности Гвардии">
        <ol className="list-decimal pl-5 space-y-2">
          <li>Следовать уставу и регламентам ВАР.</li>
          <li>Обеспечивать порядок на объектах и в зонах ответственности.</li>
          <li>Откликаться на запросы о помощи в пределах компетенции.</li>
          <li>Реагировать на нарушения устава и угрозы безопасности.</li>
          <li>Вне военного объекта — соблюдать достоинство и честь формы.</li>
          <li>Предотвращать опасности для личного состава и гражданских.</li>
          <li>Проявлять уважение ко всем лицам при исполнении служебных обязанностей.</li>
        </ol>
      </Section>

      <Section id="guard-rights" title="Права гвардейцев">
        <div className="space-y-2">
          <CodeRow code="ПРЕСЕЧ" description="Пресечение нарушений устава и регламентов." />
          <CodeRow code="АГРЕСС" description="Остановка агрессии и угрозы жизни и здоровью." />
          <CodeRow code="ПРОХОД" description="Беспрепятственный проход в зонах службы по долгу." />
          <CodeRow code="ДОПРОС" description="Допрос подозрительных лиц в рамках полномочий." />
          <CodeRow code="ТРАНСП" description="Проверка транспорта при наличии оснований." />
          <CodeRow code="СПС" description="Применение парализатора и наручников по регламенту." />
          <CodeRow
            code="СВИД"
            description="Допрос свидетелей (исключения: ВК, SOB — вне компетенции без отдельного порядка)."
          />
          <CodeRow code="ЛД" description="Личный досмотр при законных основаниях." />
          <CodeRow code="ДТ" description="Досмотр транспорта." />
          <CodeRow code="ДЕЗЕРТ" description="Покинуть базу при преследовании дезертира — по уставу." />
          <CodeRow code="ДОКУМ" description="Проверка документов и опознавательных данных." />
        </div>
      </Section>

      <Section id="guard-arrest" title="Порядок задержания">
        <Accordion title="Кто может задерживать" defaultOpen>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>ИО от CPT и выше.</li>
            <li>Гвардия.</li>
            <li>Battalion Ghost на охраняемой территории.</li>
            <li>Ударные клоны — внутри своего формирования и в рамках устава.</li>
            <li>Командиры своего формирования в отношении подчинённых.</li>
          </ul>
        </Accordion>
        <Accordion title="Процедура">
          <ol className="list-decimal pl-5 space-y-2 text-sm">
            <li>Подойти, назвать себя и сформулировать причину остановки.</li>
            <li>Отдать приказ встать к стене, руки вверх.</li>
            <li>
              При подчинении: досмотр, наложение наручников, сопровождение при необходимости.
            </li>
            <li>
              При неподчинении: выстрел в оглушающем режиме, наручники, эскорт в КПЗ.
            </li>
          </ol>
        </Accordion>
        <Accordion title="Доказательная база">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Видео- или фотофиксация.</li>
            <li>Либо два патруля от SGT и выше.</li>
            <li>Либо три независимых свидетеля.</li>
          </ul>
          <p className="text-slate-400 text-sm mt-3">
            Задержание представителей Высшего командования — только через трибунал и установленный порядок.
          </p>
        </Accordion>
      </Section>

      <div className="glow-line mt-12 mb-6" />
      <footer className="text-center text-slate-600 text-xs pb-8">
        <p>© Rise of the Republic</p>
      </footer>
    </div>
  );
}
