import { Section } from "../components/Section";
import { Accordion } from "../components/Accordion";
import { AlertCodeCard } from "../components/AlertCodeCard";
import { RankTable } from "../components/RankTable";
import { AccessTable } from "../components/AccessTable";
import { SpecTable } from "../components/SpecTable";
import { DisciplineTable } from "../components/DisciplineTable";
import { alertCodes } from "../data/alertCodes";

export function CharterPage() {
  return (
    <div>
      {/* Intro */}
      <Section id="intro" title="Устав Великой Армии Республики">
        <p>
          Все бойцы, поступившие в ряды «Великой Армии Республики» (далее — ВАР),
          обязуются соблюдать ниже поставленные правила. Нарушение пунктов данного
          документа означает некомпетентность единицы, что приведёт к дисциплинарному
          взысканию или более серьёзному наказанию.
        </p>
        <Accordion title="Кадетская">
          <p>При поступлении на военный объект каждый кадет проходит две ступени:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Тест на профпригодность — подтверждение умения отрабатывать теоретический материал на практике.</li>
            <li>Получение первой брони — после этого кадет переходит под командование СТ легиона для специализированной подготовки.</li>
          </ul>
        </Accordion>
      </Section>

      {/* Golden Rules */}
      <Section id="golden-rules" title="Золотые правила">
        <p className="text-slate-400 text-sm mb-3">Правила, которые обязан соблюдать каждый боец:</p>
        <ol className="list-decimal pl-5 space-y-3">
          <li>
            Не наносить увечья союзникам.
            <span className="text-slate-500 text-sm"> (Искл.: прямая угроза жизни; для успокоения единицы — LT+, Гвардия, Ударный клон.)</span>
          </li>
          <li>
            Исполнять приказы старших по званию и должности:
            <ul className="list-disc pl-5 mt-1 space-y-1 text-sm text-slate-400">
              <li>Старшими считаются единицы с более высоким рангом / должностью.</li>
              <li>Приказы отдают только единицы вашего формирования с более высоким званием. (Искл.: Высшее Командование.)</li>
              <li>Подчинение — в первую очередь формированию, во вторую — специализации. В экстренных ситуациях (медики, инженеры) приоритет переходит специализации.</li>
            </ul>
          </li>
          <li>Соблюдать регламент ношения оружия.</li>
          <li>Не нарушать субординацию и дисциплину — соблюдать лексикон и этикет, вести себя подобающе.</li>
        </ol>
      </Section>

      {/* Etiquette */}
      <Section id="etiquette" title="Воинский этикет">
        <ol className="list-decimal pl-5 space-y-2">
          <li>Исполнять воинское приветствие старшим по званию. <span className="text-slate-500 text-sm">(Джедаи — поклон; наёмники — «Sucuy'gar».)</span></li>
          <li>При входе в казарму — спросить разрешение. <span className="text-slate-500 text-sm">(Искл.: Гвардия с ордером, ВК.)</span></li>
          <li>Не перебивать старшего по званию, не делать замечаний, не влезать в разговор без запроса.</li>
          <li>Обращаться на «Вы», не повышать тон, стоять лицом к лицу в стойке смирно.</li>
        </ol>
      </Section>

      {/* Lexicon */}
      <Section id="lexicon" title="Воинский лексикон">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            ["Да", "Так точно"],
            ["Нет", "Никак нет"],
            ["Не знаю", "Не могу знать"],
            ["Можно", "Разрешите"],
            ["Извините", "Виноват, исправлюсь"],
            ["Хорошо", "Есть"],
            ["Спасибо", "Благодарю"],
          ].map(([from, to]) => (
            <div key={from} className="bg-space-light/30 border border-slate-700/30 rounded px-3 py-2">
              <span className="text-slate-500 text-xs line-through">{from}</span>
              <span className="text-slate-500 text-xs mx-1.5">→</span>
              <span className="text-holo-cyan text-sm">{to}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Formation Rules */}
      <Section id="formation-rules" title="Правила поведения в строю">
        <p className="text-slate-400 text-sm mb-2">Без разрешения руководящего строем или более старшего по званию нельзя:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Вставать в строй и выходить из него.</li>
          <li>Двигаться и поворачивать головой.</li>
          <li>Разговаривать и издавать звуки.</li>
          <li>Исполнять воинское приветствие.</li>
        </ol>
      </Section>

      {/* Weapon Regulations */}
      <Section id="weapon-regs" title="Регламент ношения оружия">
        <ol className="list-decimal pl-5 space-y-3">
          <li>
            <strong className="text-slate-200">Зелёный код:</strong> Разрешено только DC-17 для CPL+. Рукоятки мечей запрещены.
            <span className="text-slate-500 text-sm"> (Искл.: Командиры+, Гвардия, ВК, Ghost на территории ЗС, Ударный клон, БСО. Рядовым — только с CPL+.)</span>
          </li>
          <li>
            <strong className="text-slate-200">Жёлтый / Красный / Чёрный код:</strong> Оружие в руках на предохранителе. Снимать — по приказу или при угрозе жизни.
          </li>
          <li>При патрулировании, постах, сборе на вылет — оружие на предохранителе.</li>
          <li>По приказу командования формирования и выше.</li>
          <li>При ЗК на ОВО запрещено ношение взрывоопасных средств, РПС, Z-6, огнемётов и гранат. <span className="text-slate-500 text-sm">(Искл.: выдвижение на тренировку, обучение, вход/выход.)</span></li>
          <li>PVT/PV1 не имеют права на вооружение вне регламентированных случаев.</li>
        </ol>
      </Section>

      {/* Duties */}
      <Section id="duties" title="Обязанности и права единиц ВАР">
        <Accordion title="Обязанности (19 пунктов)" defaultOpen>
          <ol className="list-decimal pl-5 space-y-2 text-sm">
            <li>Строго соблюдать Устав ВАР и все дополнительные документы.</li>
            <li>Защищать интересы Республики, совершенствовать навыки, поднимать боевой дух.</li>
            <li>Выполнять все приказы старших по званию без обсуждения. Если приказ противоречит Уставу — не исполнять и доложить Гвардии или ВК.</li>
            <li>Знать должности, звания и отличительные черты своих командиров и ВК.</li>
            <li>Предоставлять достоверные сведения по запросам Гвардии, 9-го батальона, ВК и командования формирования.</li>
            <li>Сохранять конфиденциальность секретной информации.</li>
            <li>При красном коде — занять посты и оборону.</li>
            <li>При КК/ЖК — вход/выход без запроса при уведомлении командования.</li>
            <li>Не проявлять агрессии к мирным гражданским.</li>
            <li>Оказывать содействие Гвардии, SOB, Ударным клонам.</li>
            <li>Не игнорировать и не скрывать факты нарушений.</li>
            <li>Не использовать уязвимости Устава в личных целях.</li>
            <li>Бережно относиться к имуществу Республики.</li>
            <li>Своевременно обновлять личное дело.</li>
            <li>Отсутствие 1+ мес. без отпуска (или 6+ мес. с отпуском) — переобучение.</li>
            <li>Запрещена чёрная агитация.</li>
            <li>Организатор тренировки обязан уведомить ОВО/ВО. При использовании техники — одобрение Army.</li>
            <li>Запрещено провоцировать конфликты и межлегионные споры.</li>
            <li>При ЧС и кодах реагирования — обязательно в шлеме.</li>
          </ol>
        </Accordion>
        <Accordion title="Права единиц ВАР">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Уволиться или перевестись (после 5 дней службы в формировании).</li>
            <li>Применять оружие для защиты охраняемой зоны, жизни единиц и граждан Республики.</li>
            <li>Выражать мнение после выполнения задачи, соблюдая субординацию.</li>
            <li>Получение обучения, мед. помощи, саморазвитие в свободное время.</li>
          </ul>
        </Accordion>
      </Section>

      {/* Post Service */}
      <Section id="post-service" title="Постовая служба">
        <p>
          На пост ставит клон своего формирования CPL+ или Высшее командование.
          На посту — от 1 до 4 клонов PVT+. SGT+ может заступить самостоятельно, сообщив в рацию.
        </p>
        <Accordion title="Обязанности постового">
          <ol className="list-decimal pl-5 space-y-2 text-sm">
            <li>Оружие на предохранителе в оглушающем режиме, шлем обязателен.</li>
            <li>Не пропускать неуполномоченных (рекруты — только с CPL+).</li>
            <li>Не покидать и не заступать на пост без уведомления/приказа. <span className="text-slate-500">(Искл.: PVT/PV1 CT.)</span></li>
            <li>Проверять документы: запрос чипа/IDN-карты + снятие шлема.</li>
            <li>При отказе — приказ остановиться → выстрел в оглушающем → вызов Гвардии.</li>
            <li>ВК в солдатской форме — вправе запросить снять шлем и документы.</li>
            <li>
              Проверка по кодам:
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li><span className="text-code-green">ЗК</span> — шлем снять + документы.</li>
                <li><span className="text-code-yellow">ЖК</span> — шлем по запросу + документы.</li>
                <li><span className="text-code-red">КК</span> — шлем снять, если нет угрозы.</li>
                <li><span className="text-gray-400">ЧК</span> — проход свободный.</li>
              </ul>
            </li>
          </ol>
        </Accordion>
      </Section>

      {/* Arsenal */}
      <Section id="arsenal" title="Правила Арсенала">
        <ul className="list-disc pl-5 space-y-2">
          <li>Проход с разрешения постового, снятие шлема и документы обязательны.</li>
          <li>Перед заступлением на пост в арсенал — аналогичная проверка.</li>
          <li>ВК проверку не проходит, если его можно распознать.</li>
          <li>Оружие — согласно РНО, только с CPL+.</li>
        </ul>
      </Section>

      {/* Free Time */}
      <Section id="free-time" title="Свободное время">
        <p className="text-slate-400 text-sm mb-2">Во время ЗК разрешено:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Отдыхать в казарме.</li>
          <li>Чистить вооружение / броню.</li>
          <li>Самосовершенствоваться — тренировки, тактики, чтение устава.</li>
          <li>Посещать бар, казармы других формирований (с разрешения старших).</li>
        </ol>
      </Section>

      {/* Military Objects */}
      <Section id="military-objects" title="Военные объекты">
        <div className="space-y-4">
          <div className="bg-space-light/30 border border-slate-700/30 rounded-lg p-4">
            <h4 className="font-display text-xs text-holo-cyan tracking-wider uppercase mb-1">Основной военный объект / База</h4>
            <p className="text-sm text-slate-400">Место основного базирования армии — форт, станция, крейсер, звёздный разрушитель. Изначально — зелёный код.</p>
          </div>
          <div className="bg-space-light/30 border border-slate-700/30 rounded-lg p-4">
            <h4 className="font-display text-xs text-holo-cyan tracking-wider uppercase mb-1">Военный объект</h4>
            <p className="text-sm text-slate-400">Дополнительный / развертываемый состав — бастион, аванпост, лагерь, вышка. Изначально — жёлтый код.</p>
          </div>
        </div>
        <Accordion title="Правила военных объектов (16 пунктов)">
          <ol className="list-decimal pl-5 space-y-2 text-sm">
            <li>Запрещено нахождение лиц не из ВАР без контракта/разрешения.</li>
            <li>Разрешение могут дать: CPT+ ВК, старший по званию на ВО, Guard WO1+.</li>
            <li>Разрешение — разовое (искл.: контракт).</li>
            <li>Без контракта — сдать всё оружие.</li>
            <li>Не допускать к терминалам, консолям, аккламатору, закрытому сектору.</li>
            <li>Обыск обязателен — изъять опасные предметы и записывающие устройства.</li>
            <li>Гостям запрещено иметь оружие (искл.: контракт).</li>
            <li>Гости не допускаются в карцер, медблок, закрытый сектор.</li>
            <li>Прибывшие обязаны ознакомиться с правилами.</li>
            <li>Составлять запрос перед входом/выходом по форме.</li>
            <li>Проход — только по разрешению постового/диспетчера.</li>
            <li>При проникновении без разрешения — задержание + доклад Гвардии.</li>
            <li>Представитель армии может пройти, уведомив ВО.</li>
            <li>Выход — с CPL+ (искл.: Джедаи, наёмники).</li>
            <li>Выход с ОВО пешком — от 2 солдат (искл.: Джедаи, наёмники, SOB, Army).</li>
            <li>При КК — все формирования возвращаются на базу.</li>
          </ol>
        </Accordion>
      </Section>

      {/* Alert Codes */}
      <Section id="alert-codes" title="Коды на военном объекте">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {alertCodes.map((code) => (
            <AlertCodeCard key={code.name} code={code} />
          ))}
        </div>
      </Section>

      {/* Behavior Rules */}
      <Section id="behavior-rules" title="Правила поведения на военном объекте">
        <Accordion title="Солдату запрещено" defaultOpen>
          <ol className="list-decimal pl-5 space-y-2 text-sm">
            <li>Необоснованные действия без причины/приказа (покидать объект, прыгать, брать технику без квалификации).</li>
            <li>Чрезмерная нецензурная брань, необоснованные угрозы.</li>
            <li>Использование спецсредств и мед. препаратов вне экстренных случаев при ЗК/ЖК. <span className="text-slate-500">(Спецсредства: гранаты, джетпаки, Джаггернаут, крюк-кошка.)</span></li>
            <li>Вход в симуляции/стрельбище без CPL+.</li>
            <li>Блокировка дверей без приказа.</li>
            <li>Возведение укреплений (искл.: ЖК/КК, приказ Army, инженерные работы).</li>
            <li>Слежка и подслушивание (искл.: Guard, Army).</li>
            <li>Сон в неположенном месте.</li>
            <li>Кадету/рекруту покидать кадетскую без CPL+.</li>
            <li>Проникновение в зону ограниченного доступа.</li>
            <li>Табак, алкоголь, наркотики (искл.: медпрепараты по назначению).</li>
            <li>Пение / танцы / музыка (искл.: казарма, бар при ЗК).</li>
          </ol>
        </Accordion>
      </Section>

      {/* Exit Regulations */}
      <Section id="exit-regs" title="Регламент выхода">
        <div className="space-y-2">
          {[
            ["Боевой", "для совершения боевой задачи с указанием зоны операции"],
            ["Учебный", "для обучения с указанием зоны"],
            ["Тренировочный", "для тренировки / симуляции с указанием зоны"],
            ["Разведывательный", "обследование местности с указанием зоны / маршрута"],
            ["Патрульный", "с указанием зоны / маршрута патруля"],
            ["Передислокация", "перемещение с указанием места назначения"],
            ["Приказ", "если получен приказ без инструкций — указать лицо, отдавшее приказ"],
          ].map(([type, desc]) => (
            <div key={type} className="flex items-start gap-3">
              <span className="font-display text-xs text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider min-w-[120px]">
                {type}
              </span>
              <span className="text-slate-400 text-sm">{desc}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Request Forms */}
      <Section id="request-forms" title="Формы запросов">
        <Accordion title="Воздушная техника">
          <div className="bg-space-dark/50 border border-slate-700/30 rounded p-3 font-mono text-xs text-holo-cyan mb-2">
            [IDN/Имя Фамилия][Эскадра][Формирование][База/Аванпост][Техника][Взлёт/Посадка из...][Состав, техника]
          </div>
          <p className="text-sm text-slate-400">
            <strong className="text-slate-300">Пример:</strong> [IDN][Легион: ARC][База: Анаксис][Техника: V-Wing][Совершаю взлёт с ВПП-номер][Состав:1, техника:1]
          </p>
        </Accordion>
        <Accordion title="Наземная техника">
          <div className="bg-space-dark/50 border border-slate-700/30 rounded p-3 font-mono text-xs text-holo-cyan mb-2">
            [IDN/Имя Фамилия][Формирование][База/Аванпост][Техника][Выезжаю/Заезжаю][Состав]
          </div>
          <p className="text-sm text-slate-400">
            <strong className="text-slate-300">Пример:</strong> [IDN][Легион: CT][База: Анаксис][Техника: TX-130][Совершаю выезд с главных ворот][Состав:1, техника:1]
          </p>
        </Accordion>
        <Accordion title="Пешие силы ВАР">
          <div className="bg-space-dark/50 border border-slate-700/30 rounded p-3 font-mono text-xs text-holo-cyan mb-2">
            [IDN/Имя Фамилия][Формирование][База/Аванпост][Выход/Вход с ворот][Состав]
          </div>
          <p className="text-sm text-slate-400">
            <strong className="text-slate-300">Пример:</strong> [IDN][Легион: CT][База: Анаксис][Совершаю выход за базу с главных ворот][Состав:14]
          </p>
        </Accordion>
      </Section>

      {/* Safety */}
      <Section id="safety" title="Техника безопасности">
        <ol className="list-decimal pl-5 space-y-2">
          <li>Запрещено нахождение на крышах (искл.: КК, инженерные работы, посты, приказ).</li>
          <li>Оружие — всегда на предохранителе при ЗК/ЖК. Запрещено щёлкать предохранителем.</li>
          <li>Запрещён выход на патрули за территорию без уведомления по рации.</li>
          <li>Запрещено нахождение в зоне огня при боевом режиме.</li>
          <li>Запрещено находиться на ВПП во время движения воздушной техники; наземный транспорт — дистанция 2 м.</li>
          <li>Пилот воздушного транспорта обязан предупредить и ждать; наземного — соблюдать 2 м.</li>
          <li>Запрещено создание аварийных ситуаций при управлении техникой.</li>
        </ol>
      </Section>

      {/* Access Levels */}
      <Section id="access-levels" title="Места с ограниченным допуском">
        <AccessTable />
        <div className="mt-4 space-y-2 text-sm text-slate-500">
          <p>Примечание: 5-й флот на подконтрольном судне автоматически получает допуск класса 1.</p>
          <p>Если для входа требуется допуск — это указано на табличке. Даже при открытой двери вход запрещён без допуска.</p>
          <p>Вход в казармы без разрешения старшего — нарушение. (Искл.: Гвардия с ордером, задержание нарушителя, ВК.)</p>
        </div>
      </Section>

      {/* Command */}
      <Section id="command" title="Командование формирования">
        <Accordion title="Генерал формирования">
          <p className="text-sm">
            Назначается Верховным Командованием Республики. Может взять командование ВО при ЖК/КК,
            если нет представителя ВК (Army). Может быть отстранён по решению собрания командующего состава или приказом ВКСР.
          </p>
        </Accordion>
        <Accordion title="Командир формирования">
          <p className="text-sm">
            Назначается Высшим Командованием. Командует подконтрольными единицами. Звание CPT+ (командир отряда — WO+).
          </p>
        </Accordion>
        <Accordion title="Заместитель">
          <p className="text-sm">
            И.о. командира. Назначается командиром. Звание LT+ (зам. отряда — CPL+).
          </p>
        </Accordion>
        <Accordion title="Обязанности командования">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Ответственность за боеготовность, подготовку, дисциплину.</li>
            <li>Предотвращение гибели и травматизма; сохранность вооружения.</li>
            <li>Проведение занятий, руководство планом подготовки.</li>
            <li>Соблюдение правил перевода и набора.</li>
            <li>Право понижать, отправлять на переобучение (до недели), приказывать о переводе.</li>
            <li>Право повышать при выполнении критериев.</li>
            <li>Назначение до 2 заместителей.</li>
          </ul>
        </Accordion>
        <Accordion title="Командир операции">
          <p className="text-sm mb-2">Временная должность — CPT+ / Член Высшего совета джедаев. Права:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Командовать формированиями на операции.</li>
            <li>Назначать временных командиров.</li>
            <li>Составить характеристику для ВК.</li>
            <li>Отрапортовать ВК по окончании операции.</li>
          </ul>
        </Accordion>
        <Accordion title="Другие должности">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><strong className="text-slate-200">Адъютант</strong> — помощник командира операции. LT+ / CPT+ / Член Совета.</li>
            <li><strong className="text-slate-200">Интендант</strong> — обеспечение войск, личные дела. CPL+.</li>
            <li><strong className="text-slate-200">Тренер</strong> — обучение и аттестация. CWO+. Может повышать (с разрешения), обучать тактикам, распоряжаться составом.</li>
          </ul>
        </Accordion>
      </Section>

      {/* Ranks */}
      <Section id="ranks" title="Система званий">
        <p className="text-slate-400 text-sm mb-4">
          Повышение: очередной порядок (выполнение требований) или внеочередной (рапорт командования за особые заслуги, одобрение Представителя Армии).
        </p>
        <RankTable />
      </Section>

      {/* Transfer */}
      <Section id="transfer" title="Перевод и набор">
        <Accordion title="Общие правила набора" defaultOpen>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Набор из СТ — для PV1 в дни набора, без потери звания. В иных случаях для рядового состава — запрещён.</li>
            <li>Свободный набор и перевод выдают только Представители Армии+.</li>
          </ul>
        </Accordion>
        <Accordion title="Правила агитации">
          <ol className="list-decimal pl-5 space-y-2 text-sm">
            <li>Набор/агитация — только с представителем командующего состава обеих сторон или Представителем Армии.</li>
            <li>Проводить может только BG Army+ или командующий состав.</li>
            <li>Агитация — в месте СТ, по разрешению командования СТ или Army. Объявление за 30 мин. до начала. Опоздавшие (5+ мин.) — не допускаются.</li>
            <li>Рассказ: характеристика, предназначение, отряды, плюсы и минусы. 1 мин. 30 сек. на формирование.</li>
          </ol>
        </Accordion>
        <Accordion title="Правила перевода">
          <ol className="list-decimal pl-5 space-y-2 text-sm">
            <li>При переводе — понижение на 1 состав до первого звания.</li>
            <li>Уведомить командование + получить одобрение с двух сторон + отработать выговоры.</li>
            <li>Командование может запретить перевод при нарушениях (нужны доказательства).</li>
            <li>Свободный перевод — без потери звания, SGT–LT.</li>
            <li>Перевод в ARC — с PV1, без потери звания.</li>
            <li>Из ARC в другое — с CSM (искл.: NULL/ALPHA), без потери.</li>
            <li>В RC — с SGT+. Если выше SGT — понижение до SGT.</li>
            <li>Из SOB — не осуществляется (искл.: решение Director SOB).</li>
          </ol>
        </Accordion>
      </Section>

      {/* Specializations */}
      <Section id="specializations" title="Специализации">
        <SpecTable />
        <div className="mt-4 space-y-2 text-sm text-slate-500">
          <p>Республиканские коммандос обязаны выбрать ENG, MED или ARF с соблюдением совместимости.</p>
          <p>Квалификации [CM] и [S] могут обходить несовместимость исключительно для SOB.</p>
          <p>Определённые специализации требуют соответствующей формы (PLT, PR, ARF, MED, FT, DM, ARC, CM, SP, S). Искл.: ARC, ARF Rancor, RC, 99 отряд-коммандос, ВК.</p>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Навыки">
        <div className="space-y-2">
          {[
            ["GH", "Крюк-Кошка", "PV1+"],
            ["PLT|A", "Пилот воздушной техники", "CPL+ (или при получении спецов)"],
            ["PLT|E", "Пилот наземной техники", "PV1+ (или при получении спецов)"],
            ["JT", "Джетпак", "Специализация десантника, PV1+"],
            ["Shock", "Оглушающий инструмент и наручники", "Гвардия, Ghost, Ударные клоны, командиры, ВК"],
            ["RB", "Ракетные ботинки", "Только для 9-го батальона SOB / Взвод наёмников (эксперим. образец, непригоден к бою)"],
            ["S", "Виброклинок", "Обучение у Ордена джедаев (Мастер меча)"],
          ].map(([abbr, name, req]) => (
            <div key={abbr} className="flex items-start gap-3">
              <span className="font-display text-xs text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider min-w-[60px] text-center">
                {abbr}
              </span>
              <div>
                <span className="text-slate-200 text-sm">{name}</span>
                <p className="text-slate-500 text-xs">{req}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-sm text-slate-500">
          <p><strong className="text-slate-300">Кто обучает:</strong> ARC (CSM+) — на всё; INS — по своей ветви; ALL|INS — на всё кроме RB (искл. 9-й батальон SOB).</p>
        </div>
      </Section>

      {/* Discipline */}
      <Section id="discipline" title="Система дисциплинарных взысканий">
        <DisciplineTable />
        <div className="mt-4 space-y-2 text-sm text-slate-500">
          <p>За одно нарушение — только одно наказание по соответствующему пункту.</p>
          <p>Гвардия не инкриминирует средние/тяжкие преступления, но обязана задержать и направить прошение ВК.</p>
          <p>Сроки по разным категориям не суммируются.</p>
          <p>Видеодоказательства действительны 14 дней.</p>
        </div>
        <Accordion title="Штрафной батальон">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Дисциплинарное подразделение CT для грубых нарушений / халатности.</li>
            <li>Усиленная дисциплина и повышенная физическая нагрузка.</li>
            <li>Назначает командование формирования с уведомлением CT (до 1 недели).</li>
            <li>Может быть пожизненным — как альтернатива расстрелу (по решению трибунала / ВКСР).</li>
          </ul>
        </Accordion>
      </Section>

      {/* Tribunal */}
      <Section id="tribunal" title="Трибунал">
        <Accordion title="Правила судопроизводства" defaultOpen>
          <ol className="list-decimal pl-5 space-y-2 text-sm">
            <li>Трибунал обязателен начиная с преступления. Нужны 3 свидетеля или прямые доказательства.</li>
            <li>Присутствуют: судья, обвинитель, обвиняемый. Защитник — по запросу обвиняемого.</li>
            <li>Обязательно присутствие Гвардии.</li>
            <li>Командиры/офицеры — как наблюдатели.</li>
            <li>Право на апелляцию у другого судьи.</li>
            <li>Судья из формирования подсудимого / с тесными связями — отвод.</li>
          </ol>
        </Accordion>
        <Accordion title="Правила поведения на трибунале">
          <ol className="list-decimal pl-5 space-y-2 text-sm">
            <li>Судья имеет высшее значение — нельзя перебивать, говорить без разрешения.</li>
            <li>Порядок: обвинение → обвиняемый/защитник → обвинение → обвиняемый/защитник.</li>
            <li>Запрещено уходить/являться без разрешения судьи.</li>
            <li>Полная версия событий. Дезинформация — умышленное преступление.</li>
            <li>Стоять смирно, указывать к кому обращаешься.</li>
          </ol>
        </Accordion>
        <Accordion title="Вердикт — категории виновности">
          <div className="space-y-3 text-sm">
            <div className="flex gap-2 items-start">
              <span className="font-display text-xs bg-code-green/10 text-code-green px-2 py-0.5 rounded shrink-0">5 кат.</span>
              <span className="text-slate-300">Неумышленные проступки — понижение или изолятор.</span>
            </div>
            <div className="flex gap-2 items-start">
              <span className="font-display text-xs bg-code-yellow/10 text-code-yellow px-2 py-0.5 rounded shrink-0">4 кат.</span>
              <span className="text-slate-300">Умышленные проступки — понижение, изолятор или обслуживающий персонал.</span>
            </div>
            <div className="flex gap-2 items-start">
              <span className="font-display text-xs bg-code-yellow/10 text-code-yellow px-2 py-0.5 rounded shrink-0">3 кат.</span>
              <span className="text-slate-300">Умышленные преступления — снятие должностей, переобучение или длительный обслуживающий персонал.</span>
            </div>
            <div className="flex gap-2 items-start">
              <span className="font-display text-xs bg-code-red/10 text-code-red px-2 py-0.5 rounded shrink-0">2 кат.</span>
              <span className="text-slate-300">Рецидив — снятие всех должностей, медалей, заслуг; переобучение.</span>
            </div>
            <div className="flex gap-2 items-start">
              <span className="font-display text-xs bg-code-red/10 text-code-red px-2 py-0.5 rounded shrink-0">1 кат.</span>
              <span className="text-slate-300">Особо тяжкие — пожизненное заключение или расстрел.</span>
            </div>
          </div>
        </Accordion>
        <div className="mt-4 text-sm text-slate-500">
          <p>Трибунал проводят только [Justicar]. Дела клонов рассматриваются Justicar, дела джедаев — советом джедаев.</p>
          <p>Защитники — компетентные лица с припиской [Defender] (присваивают Justicar+).</p>
        </div>
      </Section>

      {/* Footer */}
      <div className="glow-line mt-12 mb-6" />
      <footer className="text-center text-slate-600 text-xs pb-8">
        <p>© Rise of the Republic. Любое копирование — с разрешения создателя.</p>
      </footer>
    </div>
  );
}
