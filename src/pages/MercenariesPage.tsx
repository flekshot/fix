import { Section } from "../components/Section";
import { Accordion } from "../components/Accordion";

export function MercenariesPage() {
  return (
    <div>
      <Section id="merc-intro" title="Устав наёмников">
        <p>
          <strong className="text-slate-200">Взвод Наёмников</strong> — формирование ВАР на контрактной основе, любая раса.
          Контракт; при разрыве — изгнание или расстрел. Приписка{" "}
          <span className="text-holo-cyan font-mono text-sm">[S-Формирование]</span>.
        </p>
        <p className="text-slate-400 text-sm">
          <strong className="text-slate-300">IDN-карта:</strong>{" "}
          <span className="font-mono text-holo-cyan/90">
            [Имя][Возраст][Планета][Номер договора][Право допуска]
          </span>
        </p>
      </Section>

      <Section id="merc-ranks" title="Звания наёмников">
        <div className="space-y-3">
          <Accordion title="Рядовой" defaultOpen>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <span className="font-display text-[11px] text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider min-w-[80px]">
                  LN
                </span>
                <span className="text-slate-300 text-sm">Лебин = PV1</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-display text-[11px] text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider min-w-[80px]">
                  MT
                </span>
                <span className="text-slate-300 text-sm">Мат = CPL</span>
              </div>
            </div>
          </Accordion>
          <Accordion title="Сержантский (7 дн)">
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <span className="font-display text-[11px] text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider min-w-[80px]">
                  CH
                </span>
                <span className="text-slate-300 text-sm">Chiliarch = SGT</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-display text-[11px] text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider min-w-[80px]">
                  ST
                </span>
                <span className="text-slate-300 text-sm">Стратег = MSG</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-display text-[11px] text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider min-w-[80px]">
                  NH
                </span>
                <span className="text-slate-300 text-sm">Наварх = CSM</span>
              </div>
            </div>
          </Accordion>
          <Accordion title="Уоррент (15 дн)">
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <span className="font-display text-[11px] text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider min-w-[80px]">
                  EN
                </span>
                <span className="text-slate-300 text-sm">Энсин = WO1</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-display text-[11px] text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider min-w-[80px]">
                  SN
                </span>
                <span className="text-slate-300 text-sm">Шхиман = WO2</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-display text-[11px] text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider min-w-[80px]">
                  FK
                </span>
                <span className="text-slate-300 text-sm">Фендрик = CWO</span>
              </div>
            </div>
          </Accordion>
          <Accordion title="Мл. офицеры (30 дн)">
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <span className="font-display text-[11px] text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider min-w-[80px]">
                  RD
                </span>
                <span className="text-slate-300 text-sm">Раид = LT</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-display text-[11px] text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider min-w-[80px]">
                  SE
                </span>
                <span className="text-slate-300 text-sm">Стратилат = SLT</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-display text-[11px] text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider min-w-[80px]">
                  KR
                </span>
                <span className="text-slate-300 text-sm">Смотритель = CPT</span>
              </div>
            </div>
          </Accordion>
          <Accordion title="Ст. офицеры (50 дн)">
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <span className="font-display text-[11px] text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider min-w-[80px]">
                  LR
                </span>
                <span className="text-slate-300 text-sm">Лэндмейстер = MAJ</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-display text-[11px] text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider min-w-[80px]">
                  GS
                </span>
                <span className="text-slate-300 text-sm">Гроссмейстер = COL</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-display text-[11px] text-holo-cyan bg-holo-cyan/10 px-2 py-1 rounded shrink-0 tracking-wider min-w-[80px]">
                  RN
                </span>
                <span className="text-slate-300 text-sm">Рион = CO</span>
              </div>
            </div>
          </Accordion>
        </div>
      </Section>

      <Section id="merc-command" title="Должности">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-slate-200">Командир (RN):</strong> полный контроль.
          </li>
          <li>
            <strong className="text-slate-200">Заместитель (AR):</strong> помощь, дисциплина.
          </li>
        </ul>
        <p className="text-slate-300">
          <strong className="text-slate-200">Деятельность:</strong> координация, управление, тренировки, боевые действия.
        </p>
        <p className="text-slate-500 text-sm">
          <strong className="text-slate-400">Примечание:</strong> RN = представитель; приказывает только ВК, полномочия CO.
        </p>
      </Section>

      <Section id="merc-duties" title="Обязанности наёмников">
        <ol className="list-decimal pl-5 space-y-2">
          <li>Соблюдать устав.</li>
          <li>Не мешать ВАР.</li>
          <li>Не нарушать контракт.</li>
          <li>Работать вместе.</li>
          <li>Работать по классу.</li>
        </ol>
      </Section>

      <div className="glow-line mt-12 mb-6" />
      <footer className="text-center text-slate-600 text-xs pb-8">
        <p>© Rise of the Republic. Любое копирование — с разрешения создателя.</p>
      </footer>
    </div>
  );
}
