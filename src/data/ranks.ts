export interface Rank {
  abbr: string;
  name: string;
  requirement: string;
}

export interface RankGroup {
  title: string;
  serviceRequirement?: string;
  ranks: Rank[];
}

export const rankGroups: RankGroup[] = [
  {
    title: "Рекрут",
    ranks: [
      {
        abbr: "RCT",
        name: "Recruit — рекрут",
        requirement: "Сдать тест у инструктора",
      },
    ],
  },
  {
    title: "Рядовой состав",
    ranks: [
      {
        abbr: "PVT",
        name: "Private — рядовой",
        requirement:
          "КМБ, первая часть экскурсии, 3 базовых тренировки (только для СТ)",
      },
      {
        abbr: "PV1",
        name: "Private 1 — рядовой 1 класса",
        requirement:
          "Обучение рядовому составу, вторая часть экскурсии, 1 доп. тренировка, 2 поста",
      },
      {
        abbr: "CPL",
        name: "Corporal — капрал",
        requirement:
          "Экзамен по рядовому составу (обязан проводить КМБ и обучение/аттестацию по рядовому составу)",
      },
    ],
  },
  {
    title: "Сержантский состав",
    serviceRequirement: "7 дней общей службы",
    ranks: [
      {
        abbr: "SGT",
        name: "Sergeant — сержант",
        requirement: "Обучение сержантскому составу",
      },
      {
        abbr: "MSG",
        name: "Master Sergeant — мастер-сержант",
        requirement: "—",
      },
      {
        abbr: "CSM",
        name: "Command Sergeant Major — главный сержант-майор",
        requirement:
          "Экзамен по сержантскому составу (обязан проводить обучение и аттестацию)",
      },
    ],
  },
  {
    title: "Уоррент-офицеры",
    serviceRequirement: "15 дней общей службы",
    ranks: [
      {
        abbr: "WO1",
        name: "Warrant Officer 1 — УО 1 класса",
        requirement: "Обучение уоррент-офицерскому составу",
      },
      {
        abbr: "WO2",
        name: "Warrant Officer 2 — УО 2 класса",
        requirement: "—",
      },
      {
        abbr: "CWO",
        name: "Chief Warrant Officer — главный УО",
        requirement:
          "Экзамен по уоррент-офицерскому составу (обязан проводить обучение и аттестацию)",
      },
    ],
  },
  {
    title: "Младший офицерский состав",
    serviceRequirement: "30 дней общей службы",
    ranks: [
      {
        abbr: "LT",
        name: "Lieutenant — лейтенант",
        requirement: "Обучение мл. офицерскому составу",
      },
      {
        abbr: "SLT",
        name: "Senior Lieutenant — старший лейтенант",
        requirement: "—",
      },
      {
        abbr: "CPT",
        name: "Captain — капитан",
        requirement:
          "Экзамен по мл. офицерскому составу (обязан проводить обучение и аттестацию)",
      },
    ],
  },
  {
    title: "Старший офицерский состав",
    serviceRequirement: "50 дней общей службы + выдвижение",
    ranks: [
      {
        abbr: "MAJ",
        name: "Major — майор",
        requirement: "Обучение ст. офицерскому составу",
      },
      {
        abbr: "COL",
        name: "Colonel — полковник",
        requirement: "Экзамен по ст. офицерскому составу у ВК",
      },
      {
        abbr: "CO",
        name: "Commander — коммандер",
        requirement: "Выдаётся командирам формирований",
      },
    ],
  },
  {
    title: "Генеральский состав",
    serviceRequirement: "Выдвижение + одобрение Представителей Армии",
    ranks: [
      { abbr: "BG", name: "Brigadier General — бригадный генерал", requirement: "—" },
      { abbr: "GM", name: "General Major — генерал-майор", requirement: "—" },
      { abbr: "MC", name: "Marshal Commander — маршал коммандер", requirement: "—" },
    ],
  },
  {
    title: "Высший командный состав Республики",
    serviceRequirement: "Только Army",
    ranks: [
      { abbr: "FM", name: "Field Marshal — фельдмаршал", requirement: "—" },
      { abbr: "MR", name: "Marshal of the Republic — маршал Республики", requirement: "—" },
      { abbr: "GC", name: "Grand Commander — главнокомандующий", requirement: "—" },
    ],
  },
];

export interface JediRank {
  abbr: string;
  name: string;
  equivalent: string;
  description: string;
}

export const jediRanks: JediRank[] = [
  {
    abbr: "JCOM",
    name: "Джедай-Коммандер",
    equivalent: "CO",
    description: "Для рыцарей, в исключениях для падаванов. Командир подразделения.",
  },
  {
    abbr: "JGEN",
    name: "Джедай-Генерал",
    equivalent: "BG",
    description: "Для рыцарей и мастеров. Генерал подразделения.",
  },
  {
    abbr: "SGEN",
    name: "Старший Генерал-Джедай",
    equivalent: "GM",
    description: "Для мастеров, в исключениях для рыцарей. Генерал высшего ранга.",
  },
  {
    abbr: "HGEN",
    name: "Высший Генерал-Джедай",
    equivalent: "MC",
    description: "Для мастеров Совета. Может быть только один на состав.",
  },
];
