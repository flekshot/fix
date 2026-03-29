export interface Specialization {
  abbr: string;
  name: string;
  compatibleWith: string[];
  minRank: string;
  note?: string;
}

export const specializations: Specialization[] = [
  {
    abbr: "MED",
    name: "Медик",
    compatibleWith: ["PLT/E/L", "SM", "SN", "PR", "FT", "SP", "GH", "RB", "ARF", "CM", "DM"],
    minRank: "PV1",
  },
  {
    abbr: "PLT/A",
    name: "Пилот воздушной техники",
    compatibleWith: ["PLT/E", "ENG|M-A-C/M-AL-C", "GH", "RB"],
    minRank: "CPL",
  },
  {
    abbr: "PLT/E",
    name: "Пилот наземной техники",
    compatibleWith: ["MED", "PLT/A", "ENG|M-L-C/M-AL-C", "GH", "RB", "ARF", "CM", "DM", "SM", "SN", "PR", "FT"],
    minRank: "PV1",
  },
  {
    abbr: "ENG",
    name: "Инженер",
    compatibleWith: ["PLT/A", "PLT/E", "SM", "DM", "FT", "GH", "PR", "JGT", "RB", "CM"],
    minRank: "CPL",
  },
  {
    abbr: "SM",
    name: "Штурмовик",
    compatibleWith: ["MED", "ENG", "PR", "CM", "DM", "FT", "SP", "GH", "RB", "JGT", "PLT/E/L"],
    minRank: "PV1",
  },
  {
    abbr: "SN",
    name: "Снайпер",
    compatibleWith: ["MED", "SP", "RB", "GH", "CM", "PR", "DM", "PLT/E/L", "ARF", "ENG|D-1-C"],
    minRank: "PV1",
  },
  {
    abbr: "PR",
    name: "Десантник",
    compatibleWith: ["MED", "SM", "ENG", "SN", "FT", "SP", "GH", "CM", "JGT", "DM", "PLT/E/L"],
    minRank: "PV1",
  },
  {
    abbr: "DM",
    name: "Подрывник",
    compatibleWith: ["ENG", "SM", "SN", "PR", "FT", "RB", "ARF", "CM", "JGT", "GH", "PLT/E/L", "MED", "SP"],
    minRank: "CPL",
  },
  {
    abbr: "FT",
    name: "Выжигатель",
    compatibleWith: ["MED", "ENG", "PR", "SM", "DM", "RB", "JGT", "CM", "GH", "PLT/E/L"],
    minRank: "CPL",
  },
  {
    abbr: "SP",
    name: "Ударный взвод",
    compatibleWith: ["PLT|E", "RB", "MED", "GH", "SM", "SN", "PR", "ARF", "DM", "CM", "FT"],
    minRank: "SGT",
  },
  {
    abbr: "GH",
    name: "Крюк-кошка",
    compatibleWith: ["ALL"],
    minRank: "PV1",
    note: "Запрещено использовать в броне Джаггернаута.",
  },
  {
    abbr: "RB",
    name: "Реактивные ботинки",
    compatibleWith: ["ALL"],
    minRank: "SGT",
    note: "Запрещено в броне Джаггернаута. Обучение только для 9-го батальона SOB.",
  },
];

export const advancedSpecs: Specialization[] = [
  {
    abbr: "ARF",
    name: "Элитный разведчик",
    compatibleWith: ["MED", "SN", "GH", "SP", "PLT/E/L", "RB", "DM", "ENG|D-1-C"],
    minRank: "CPL",
  },
  {
    abbr: "JGT",
    name: "Джаггернаут",
    compatibleWith: ["SM", "PR", "DM", "FT", "ENG", "GH"],
    minRank: "CSM",
  },
  {
    abbr: "CM",
    name: "Коммандос",
    compatibleWith: ["MED", "ENG", "SM", "SN", "PR", "DM", "FT", "RB", "GH", "PLT/E/L", "PLT|A/T-I", "SP"],
    minRank: "SGT",
  },
];
