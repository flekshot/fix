import { Section } from "../components/Section";

export function JediGuardianPage() {
  return (
    <div>
      <Section id="guardian-intro" title="Джедай-Защитник">
        <p>
          Защитник — символ надежды на передовой: генералы и воины Ордена, для которых боевые навыки, тактика и присутствие в строю
          так же важны, как владение Силой. Их путь — удерживать мир силой убеждения и, когда нужно, клинком.
        </p>
      </Section>

      <Section id="guardian-ace" title="Джедай-Ас [PLT|A|J]">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="font-display text-[11px] text-holo-purple bg-holo-purple/10 px-2 py-1 rounded shrink-0 tracking-wider">
            PLT|A|J
          </span>
        </div>
        <p>
          Асы — пилоты истребителей Республики и стражи неба в совместных операциях с ВАР.
        </p>
        <p className="text-slate-400 text-sm mt-2">
          <strong className="text-slate-300">Обязанности:</strong> регулярные тренировки на симуляторах и реальной технике; обучение падаванов и рыцарей основам пилотирования;
          чтение лекций по боевому применению звёздных истребителей и взаимодействию с наземными силами.
        </p>
      </Section>

      <Section id="guardian-fencer" title="Джедай-Фехтовальщик [S-INS]">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="font-display text-[11px] text-holo-purple bg-holo-purple/10 px-2 py-1 rounded shrink-0 tracking-wider">
            S-INS
          </span>
        </div>
        <p>
          Фехтовальщики — мастера светового меча Ордена; хранители формы стоек и безопасной передачи техники боя.
        </p>
        <p className="text-slate-400 text-sm mt-2">
          <strong className="text-slate-300">Обязанности:</strong> проведение тренировок по фехтованию; обучение допустимым стойкам и переходам; лекции по дисциплине клинка
          и Кодексу в применении к поединку.
        </p>
      </Section>

      <div className="glow-line mt-12 mb-6" />
      <footer className="text-center text-slate-600 text-xs pb-8">
        <p>© Rise of the Republic</p>
      </footer>
    </div>
  );
}
