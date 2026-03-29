import { Section } from "../components/Section";
import { Accordion } from "../components/Accordion";

export function PilotingPage() {
  return (
    <div>
      <Section id="plt-intro" title="Устав пилотов">
        <p>
          <strong className="text-holo-cyan">Клон-Пилот</strong> — боевая единица поддержки, специализирующаяся в:
          ведении воздушных и наземных боёв с использованием техники, транспортировке состава, разведке с воздуха,
          доставке десанта и техники на поле боя, осуществлении воздушных диверсий, воздушного и наземного патруля.
        </p>
      </Section>

      <Section id="plt-duties" title="Обязанности пилотов">
        <ol className="list-decimal pl-5 space-y-2">
          <li>Знать всё про воздушную / наземную технику ВАР.</li>
          <li>Знать особенности своей брони и вооружения.</li>
          <li>Участвовать в тренировках пехоты своего легиона.</li>
          <li>Проводить техническое обслуживание закреплённой техники.</li>
          <li>При нападении — немедленно к своей технике. При КК вправе покинуть ВО без запроса.</li>
          <li>При обнаружении брошенной техники ВАР за территорией ВО — доставить на ближайший ВО.</li>
        </ol>
      </Section>

      <Section id="plt-safety" title="Техника безопасности (пилоты)">
        <ol className="list-decimal pl-5 space-y-2">
          <li>Взлёт / посадка на ВПП с людьми строго запрещены.</li>
          <li>Полёты ниже 25 метров без необходимости — запрещены.</li>
          <li>Фигуры высшего пилотажа без приказа — запрещены. <span className="text-slate-500">(Искл.: PLT|A|S.)</span></li>
          <li>При разгерметизации / поломке — экстренная посадка.</li>
          <li>При вылете LAAT в/из космоса — закрыть створки, быстро совершить посадку.</li>
          <li>Перед вылетом — пристегнуться, включить систему замкнутого дыхания, убедиться что пассажиры на местах.</li>
          <li>Запрещено использовать технику без необходимости.</li>
          <li>Запрещено нарушать разметку ВПП.</li>
        </ol>
      </Section>

      <Section id="plt-ranks" title="Иерархия званий в пилотировании">
        <Accordion title="Командный состав" defaultOpen>
          <div className="space-y-2">
            {[
              ["PLT|CO", "Командир — ответственный за всю специализацию"],
              ["PLT|A|DEP", "Заместитель воздушного отделения"],
              ["PLT|E|DEP", "Заместитель наземного отделения"],
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

        <Accordion title="Инструкторский состав">
          <div className="space-y-1 mb-3">
            <h4 className="text-xs text-slate-500 uppercase tracking-wider">Старший инструкторский состав</h4>
          </div>
          <div className="space-y-2 mb-4">
            {[
              ["PLT|CO-S-INS", "Глава старших инструкторов"],
              ["PLT|A|S-INS", "Старший инструктор воздушного отделения"],
              ["PLT|E|S-INS", "Старший инструктор наземного отделения"],
            ].map(([code, desc]) => (
              <div key={code} className="flex items-start gap-3">
                <span className="font-display text-[11px] text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider min-w-[130px]">
                  {code}
                </span>
                <span className="text-slate-300 text-sm">{desc}</span>
              </div>
            ))}
          </div>
          <div className="space-y-1 mb-3">
            <h4 className="text-xs text-slate-500 uppercase tracking-wider">Инструкторский состав</h4>
          </div>
          <div className="space-y-2">
            {[
              ["PLT|INS", "Пилот-инструктор воздушного и наземного отделения"],
              ["PLT|A|INS", "Пилот-инструктор воздушного отделения"],
              ["PLT|E|INS", "Пилот-инструктор наземного отделения"],
            ].map(([code, desc]) => (
              <div key={code} className="flex items-start gap-3">
                <span className="font-display text-[11px] text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider min-w-[130px]">
                  {code}
                </span>
                <span className="text-slate-300 text-sm">{desc}</span>
              </div>
            ))}
          </div>
        </Accordion>

        <Accordion title="Воздушное отделение">
          <div className="space-y-2">
            {[
              ["PLT|M", "Дроид-астромеханик", "ARC-40b, V-Wing, ARC-170, ETA-2"],
              ["PLT|A|S", "Старший пилот", "ARC-170, Clone Starfighter, T51 Heavy Bomber, Y-Wing + PLT|A|Jr"],
              ["PLT|A|Jr", "Младший пилот", "V-Wing, ARC-40b, T-38, Z-95 + PLT|A|T-c"],
              ["PLT|A|T-c", "Транспортник техники", "LAAT/c + PLT|A|T-i"],
              ["PLT|A|T-i", "Транспортник пехоты", "LAAT/i, LAAT/mn, Z-66, Redran"],
              ["PLT|A|R", "Рекрут-пилот", "Не имеет права управлять техникой"],
            ].map(([code, name, tech]) => (
              <div key={code} className="flex items-start gap-3">
                <span className="font-display text-[11px] text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider min-w-[110px]">
                  {code}
                </span>
                <div>
                  <span className="text-slate-200 text-sm">{name}</span>
                  <p className="text-slate-500 text-xs">{tech}</p>
                </div>
              </div>
            ))}
          </div>
        </Accordion>

        <Accordion title="Наземное отделение">
          <div className="space-y-2">
            {[
              ["PLT|E|H", "Тяжёлый класс", "AT-TE, TX-427; управляет всей наземной техникой"],
              ["PLT|E|M", "Средний класс", "TX-130 и модификации"],
              ["PLT|E|L", "Лёгкий класс", "Мотоспидеры, AT-RT"],
              ["PLT|E|T", "Наводчик", "Артиллерийские установки, AV-7"],
            ].map(([code, name, tech]) => (
              <div key={code} className="flex items-start gap-3">
                <span className="font-display text-[11px] text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider min-w-[110px]">
                  {code}
                </span>
                <div>
                  <span className="text-slate-200 text-sm">{name}</span>
                  <p className="text-slate-500 text-xs">{tech}</p>
                </div>
              </div>
            ))}
          </div>
        </Accordion>
      </Section>

      <Section id="plt-codes" title="Коды реагирования (пилоты)">
        <div className="space-y-3">
          <div className="rounded-lg border border-code-black p-4 bg-code-black/20">
            <div className="font-display text-sm font-semibold tracking-wider uppercase mb-1 text-gray-300">
              Код «Чёрный»
            </div>
            <p className="text-slate-400 text-sm">Всем пилотам занять LAAT или транспорт. Эвакуация на указанную точку.</p>
          </div>
          <div className="rounded-lg border border-code-yellow/40 p-4 bg-code-yellow/10">
            <div className="font-display text-sm font-semibold tracking-wider uppercase mb-1 text-code-yellow">
              Код «Жёлтый»
            </div>
            <p className="text-slate-400 text-sm">Всем пилотам занять воздушную технику. Патрулирование местности.</p>
          </div>
          <div className="rounded-lg border border-code-red/40 p-4 bg-code-red/10">
            <div className="font-display text-sm font-semibold tracking-wider uppercase mb-1 text-code-red">
              Код «Красный»
            </div>
            <p className="text-slate-400 text-sm">Срочно занять боевую технику. Ждать распоряжений.</p>
          </div>
          <div className="rounded-lg border border-holo-cyan/30 p-4 bg-holo-cyan/5">
            <div className="font-display text-sm font-semibold tracking-wider uppercase mb-1 text-holo-cyan">
              Код «База»
            </div>
            <p className="text-slate-400 text-sm">Всем пилотам явиться на указанную точку.</p>
          </div>
        </div>
        <p className="text-slate-500 text-sm mt-3">
          Приказ исполнять директивы / коды может только Высшее Командование и PLT|CO.
        </p>
      </Section>

      <Section id="plt-punishment" title="Степени наказания">
        <div className="space-y-3">
          <p>Пилот, управляющий техникой, несёт полную ответственность за её сохранность.</p>
          <p>В случае ущерба (уничтожение / утрата пригодности) — проверка обстоятельств.</p>
          <p>Если причина — халатность: привлечение к ответственности в соответствии с Уставом.</p>
        </div>
      </Section>

      <Section id="plt-docs" title="Документы для пилотов">
        <Accordion title="Маршрутный лист">
          <p className="text-sm mb-2">Документ с отражением всех вылетов из определённого места.</p>
          <div className="bg-space-dark/50 border border-slate-700/30 rounded p-3 font-mono text-xs text-holo-cyan">
            Станция по переработке Z-12 (Камино) | Звёздный разрушитель класса Венатор
          </div>
        </Accordion>
        <Accordion title="Грузовой лист">
          <p className="text-sm mb-2">Документ для учёта перевозимого груза и работы подвижного состава.</p>
          <div className="bg-space-dark/50 border border-slate-700/30 rounded p-3 font-mono text-xs text-holo-cyan">
            Консервированное мясо Горнтов: 3000 ед. | Протеиновые батончики: 1000 ед. | DC-15A: 1000 ед. | Z-6: 100 ед. | Газ тибана: 1 000 000 ед.
          </div>
        </Accordion>
        <Accordion title="Транспортный лист">
          <p className="text-sm mb-2">Информация о технике и количестве состава.</p>
          <div className="bg-space-dark/50 border border-slate-700/30 rounded p-3 font-mono text-xs text-holo-cyan">
            Шатл класса Nu | Состав: 2
          </div>
        </Accordion>
      </Section>

      <Section id="plt-rules" title="Постановления ВКСР">
        <ol className="list-decimal pl-5 space-y-3">
          <li>
            Пилот обязан носить свою броню для воздушного судна. Без формы пилота — обучение запрещено.
            <span className="text-slate-500 text-sm"> (Искл.: ARC, ARF, Guard, Army, SOB, Mercenary.)</span>
          </li>
          <li>
            Клон, взявший технику, несёт за неё полную ответственность. При уничтожении / потере по своей вине —
            ЧС пилотов до 3 месяцев. При поломке — вызов инженеров.
          </li>
          <li>
            Корусантская служба безопасности при активном вызове вправе взлетать / садиться на любое ВПП без запроса.
          </li>
          <li>
            Макс. звание пилота вне эскадры: <span className="font-display text-xs text-holo-cyan">PLT|A|T-c</span> и
            <span className="font-display text-xs text-holo-cyan"> PLT|E|M</span>.
            <span className="text-slate-500 text-sm"> (Искл.: Guard для воздушной ветки.)</span>
            <br />В эскадре — до <span className="font-display text-xs text-holo-cyan">PLT|A|S</span> и
            <span className="font-display text-xs text-holo-cyan"> PLT|E|H</span>.
            <span className="text-slate-500 text-sm"> (Искл.: ARC, Guard, Army, SOB кроме RC.)</span>
          </li>
          <li>
            LAAT/i(mn) — только при наличии 3+ клонов для доставки.
            <span className="text-slate-500 text-sm"> (Искл.: Army, забрать раненого, вызов гвардии, приказ ВК, экскурсия / учения.)</span>
          </li>
          <li>
            Истребители T-38, ARC-170, T-51 Heavy Bomber — только в ЖК/КК для обороны.
            Z-95, ARC40b, V-Wing, Clone Starfighter — для патрулирования в ЗК и обороны в ЖК/КК.
            Передислокация на истребителях запрещена. <span className="text-slate-500 text-sm">(Искл.: Джедаи, наёмники.)</span>
          </li>
          <li>
            Право открытия / закрытия воздушного пространства: <span className="font-display text-xs text-holo-cyan">PLT|A|DEP+</span>, Высшее Командование.
          </li>
          <li>
            При агрессии неопознанного объекта: доложить базе → приказать посадить технику →
            при неповиновении выстрелить по двигателям → проследовать до крушения → доложить Гвардии / ВК.
          </li>
        </ol>
      </Section>

      <div className="glow-line mt-12 mb-6" />
      <footer className="text-center text-slate-600 text-xs pb-8">
        <p>© Rise of the Republic</p>
      </footer>
    </div>
  );
}
