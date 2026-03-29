import { Section } from "../components/Section";
import { Accordion } from "../components/Accordion";

function MedRankRow({ code, description }: { code: string; description: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="font-display text-[11px] text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider min-w-[100px]">
        {code}
      </span>
      <span className="text-slate-300 text-sm">{description}</span>
    </div>
  );
}

export function MedicalPage() {
  return (
    <div>
      <Section id="med-intro" title="Медицинский устав">
        <p>
          Медики «Великой Армии Республики» несут ответственность за жизнь и боеспособность личного состава:
          диагностику, лечение, реабилитацию и учёт психофизического состояния бойцов. Работа с дефектностью —
          обязательная часть службы: выявление отклонений, ведение карт, соблюдение порогов и процедур
          дефектологии без сокрытия данных от уполномоченных структур.
        </p>
        <p className="text-slate-500 text-sm">
          Настоящий документ дополняет общий устав ВАР; при противоречии в медицинских вопросах приоритет имеют
          положения медицинского устава и приказы руководства медблока в пределах их компетенции.
        </p>
      </Section>

      <Section id="med-codex" title="Кодекс медиков">
        <ol className="list-decimal pl-5 space-y-3">
          <li>
            Оказывать квалифицированную помощь любому бойцу ВАР в пределах своей подготовки и полномочий, без
            дискриминации по формированию, если это не угрожает выполнению прямого приказа командования медблока.
          </li>
          <li>
            Незамедлительно информировать дежурного медблока и старшего на посту о поступивших раненых,
            массовых поражениях и подозрении на заражение — через рацию и/или установленный канал отчётности.
          </li>
          <li>
            Не покидать назначенный медицинский пост без отмашки смены или письменного/голосового приказа
            MED|CO / MED|DEP / MED|SO и выше по медицинской иерархии на объекте.
          </li>
          <li>
            Использовать только штатное и учтённое оборудование; самовольная модификация аппаратуры,
            расходников и препаратов запрещена. Выдача средств — по протоколу и с отметкой ответственного MED.
          </li>
          <li>
            В зоне медблока и на медицинских постах подчиняться иерархии MED. При совместных действиях с
            другими специализациями — координация через старшего MED на месте; спорные решения эскалируются
            MED|CO / MED|DEP.
          </li>
          <li>
            Приоритизация оказания помощи определяется клинической остротой; звание и должность учитываются
            только при равной медицинской тяжести и не могут отодвигать критически раненого ради менее
            тяжёлого случая с более высоким рангом.
          </li>
          <li>
            Соблюдать медицинскую тайну: сведения о диагнозах, дефектности и лечении — только уполномоченным
            лицам и в установленных формах (рапорты, карты, заключения дефектологии).
          </li>
          <li>
            Фиксировать процедуры, назначения и результаты скринингов дефектности в регистратуре медблока;
            искажение записей или утаивание факторов риска влечёт дисциплинарные меры вплоть до трибунала.
          </li>
          <li>
            В экстренных ситуациях (КК, массовые потери) действовать по алгоритму триажа медблока; личный состав
            обязан беспрекословно выполнять указания дежурного MED|INS+ по эвакуации и расстановке носилок.
          </li>
        </ol>
      </Section>

      <Section id="med-general" title="Общие правила">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-slate-200">Запрещённые вещества:</strong> алкоголь, наркотические и
            психоактивные средства вне официального медицинского назначения; самовольный приём стимуляторов и
            седативов — нарушение устава.
          </li>
          <li>
            <strong className="text-slate-200">Гигиена:</strong> дезинфекция рук и рабочих поверхностей,
            одноразовые расходники где предусмотрено; повторное использование инструментов без стерилизации
            запрещено.
          </li>
          <li>
            <strong className="text-slate-200">Стабилизация:</strong> перед эвакуацией — остановка кровотечения,
            проходимость дыхательных путей, фиксация переломов по протоколу; не транспортировать без базовой
            стабилизации, если это не создаёт прямой угрозы жизни.
          </li>
          <li>
            <strong className="text-slate-200">Квалификации:</strong> сложные вмешательства, хирургия,
            назначение сильнодействующих препаратов и заключения по дефектности выше 1-го порога — только
            уполномоченный персонал с соответствующим кодом MED и допуском; MED|E и MED|CV не ведут самостоятельно
            заключительную диагностику без супервизии MED|FL+.
          </li>
        </ul>
        <Accordion title="Карантин и изоляция (MED|O+)" defaultOpen={false}>
          <p className="text-sm mb-2">
            Объявление карантина на отсек, палату или объект, ограничение перемещения личного состава по
            медицинским причинам (инфекция, неизвестный агент, подозрение на неконтролируемую дефектность) —
            право <strong className="text-holo-cyan">MED|O</strong> и выше по медицинской иерархии
            (MED|INS, MED|SO, MED|S-INS, MED|DEP, MED|CO).
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-slate-400">
            <li>Ниже MED|O — исполняют режим карантина, но не отменяют и не расширяют его без согласования.</li>
            <li>Нарушение периметра карантина без ордера — доклад Гвардии и командованию формирования.</li>
          </ul>
        </Accordion>
      </Section>

      <Section id="med-block" title="Правила медблока">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            В зоне регистрации и приёмного покоя — минимум шума; разговоры не мешают диспетчеру и приёмному
            персоналу. Громкая музыка, посторонние дебаты и игнорирование очереди запрещены.
          </li>
          <li>
            В операционную и зону активной хирургии посторонним вход запрещён, кроме уполномоченного
            ассистирующего состава (MED) и лиц с прямым письменным/голосовым разрешением MED|INS+ на конкретную
            процедуру.
          </li>
        </ul>
      </Section>

      <Section id="med-hierarchy" title="Иерархия медиков">
        <p className="text-slate-500 text-sm mb-4">
          Коды MED отражают роль в медицинской службе. <strong className="text-slate-300">**</strong> в суффиксах
          отделений — уровень ранга внутри структуры (например, MED|CO-L — лаборатория при руководящем составе).
        </p>

        <h3 className="font-display text-xs text-holo-cyan/90 tracking-wider uppercase mb-2 mt-6">Ведущий</h3>
        <div className="space-y-2 mb-4">
          <MedRankRow code="MED|CO" description="Руководитель медицинской службы на объекте / в структуре." />
          <MedRankRow code="MED|DEP" description="Заместитель руководителя, исполнение обязанностей MED|CO при отсутствии." />
        </div>

        <h3 className="font-display text-xs text-holo-cyan/90 tracking-wider uppercase mb-2">Организационный</h3>
        <div className="space-y-2 mb-4">
          <MedRankRow code="MED|S-INS" description="Старший инструктор / методическая верхушка подготовки медиков." />
          <MedRankRow code="MED|SO" description="Старший офицер медблока, оперативное руководство сменами и постами." />
          <MedRankRow code="MED|INS" description="Инструктор: обучение, аттестации, контроль соблюдения протоколов." />
          <MedRankRow code="MED|O" description="Офицер медслужбы; допуск к решениям по карантину и ограничению доступа." />
        </div>

        <h3 className="font-display text-xs text-holo-cyan/90 tracking-wider uppercase mb-2">Персонал</h3>
        <div className="space-y-2 mb-4">
          <MedRankRow code="MED|FL" description="Фельдшер: первичная помощь, триаж, стабилизация под супервизией." />
        </div>

        <h3 className="font-display text-xs text-holo-cyan/90 tracking-wider uppercase mb-2">Второстепенный</h3>
        <div className="space-y-2 mb-4">
          <MedRankRow code="MED|AS" description="Ассистент хирурга / процедурного кабинета." />
          <MedRankRow code="MED|CV" description="Санитар: транспортировка, уборка, помощь без самостоятельных диагнозов." />
        </div>

        <h3 className="font-display text-xs text-holo-cyan/90 tracking-wider uppercase mb-2">Студенты</h3>
        <div className="space-y-2 mb-4">
          <MedRankRow code="MED|E" description="Интерн: обучение, только под наблюдением MED|FL+." />
        </div>

        <h3 className="font-display text-xs text-holo-cyan/90 tracking-wider uppercase mb-2">Отделения</h3>
        <div className="space-y-2">
          <MedRankRow code="MED|**-L" description="Лаборатория: анализы, заключения; ** — грейд должности в структуре лаборатории." />
          <MedRankRow code="MED|**-D" description="Дефектология: пороги дефектности, переобучение, заключения; ** — грейд в отделении." />
        </div>
      </Section>

      <Section id="med-defects" title="Пороги дефектности">
        <p className="text-slate-500 text-sm mb-4">
          Скринг по стандартному опроснику (10 вопросов). «Неответ» — отсутствие адекватного ответа или отказ
          от прохождения пункта без уважительной причины, зафиксированной MED.
        </p>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-start gap-3 rounded-lg border border-code-green/35 bg-code-green/10 p-4">
            <span className="font-display text-xs text-code-green bg-code-green/15 border border-code-green/40 px-2.5 py-1 rounded shrink-0 tracking-wider w-fit">
              1 порог
            </span>
            <div className="text-sm text-slate-300">
              <strong className="text-code-green">Не дефективен.</strong> Допускается не более двух неответов
              из 10 (эквивалент: корректные ответы на 8/10 и выше при допустимой методике оценки).
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start gap-3 rounded-lg border border-code-yellow/35 bg-code-yellow/10 p-4">
            <span className="font-display text-xs text-code-yellow bg-code-yellow/15 border border-code-yellow/40 px-2.5 py-1 rounded shrink-0 tracking-wider w-fit">
              2 порог
            </span>
            <div className="text-sm text-slate-300">
              <strong className="text-code-yellow">Определённая дефектность</strong> — 4 неответа. Обязательное
              наблюдение и курс лечения / коррекции по назначению MED|**-D и выше.
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start gap-3 rounded-lg border border-code-red/40 bg-code-red/10 p-4">
            <span className="font-display text-xs text-code-red bg-code-red/15 border border-code-red/50 px-2.5 py-1 rounded shrink-0 tracking-wider w-fit">
              3 порог
            </span>
            <div className="text-sm text-slate-300">
              <strong className="text-code-red">Опасная дефектность</strong> — 6 неответов. Переобучение,
              ограничение допуска к оружию и сложным обязанностям до заключения комиссии.
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start gap-3 rounded-lg border-2 border-code-red bg-code-red/20 p-4 shadow-[0_0_24px_rgba(239,68,68,0.2)] ring-2 ring-code-red/40 ring-offset-2 ring-offset-space-dark">
            <span className="font-display text-xs font-semibold text-code-red bg-code-red/25 border-2 border-code-red px-2.5 py-1 rounded shrink-0 tracking-wider w-fit uppercase">
              4 порог
            </span>
            <div className="text-sm text-slate-200">
              <strong className="text-code-red">Неизлечимая дефектность с агрессией — расстрел</strong>, если
              одновременно зафиксированы все три основания:
              <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-300">
                <li>не подчиняется приказам (медиков и уставного командования) в ущерб безопасности объекта;</li>
                <li>агрессия к личному составу или гражданским;</li>
                <li>стрельба боевыми (вне регламента и без законного приказа).</li>
              </ul>
              <p className="mt-2 text-slate-400 text-xs">
                Решение — протокол MED|**-D и согласование с ВК / трибуналом; самосуд запрещён.
              </p>
            </div>
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
