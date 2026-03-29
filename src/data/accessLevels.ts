export interface AccessLevel {
  level: string;
  description: string;
}

export const accessLevels: AccessLevel[] = [
  {
    level: "Класс 1",
    description:
      "Высшее командование, Guard, Ghost, 9-й батальон SOB. Даёт право на использование допуска классов 2–5.",
  },
  {
    level: "Класс 2",
    description:
      "Командующий состав (General / Commander / Dep. Commander). Даёт право на классы 3–5.",
  },
  {
    level: "Класс 3",
    description: "Квалификация инженера.",
  },
  {
    level: "Класс 4",
    description: "Квалификация медика.",
  },
  {
    level: "Класс 5",
    description: "Заступление на службу ВАР / заключение контракта с армией.",
  },
];

export interface LocationAccess {
  location: string;
  accessLevel: string;
  note?: string;
}

export const locationAccess: LocationAccess[] = [
  { location: "Штаб", accessLevel: "Класс 2" },
  { location: "Генераторная, серверная", accessLevel: "Класс 3" },
  { location: "Казармы формирований", accessLevel: "Класс 5" },
  { location: "Медблок", accessLevel: "Класс 4" },
  { location: "КПЗ", accessLevel: "Класс 1" },
  { location: "Склад", accessLevel: "Класс 5" },
  { location: "Академия", accessLevel: "Класс 5" },
  { location: "Допросная, трибунальная", accessLevel: "Класс 1" },
  { location: "Закрытый сектор", accessLevel: "Класс 2", note: "Искл: Джедаи для входа/выхода из храма" },
  { location: "Зал собраний", accessLevel: "Класс 2" },
  { location: "Левый / Правый мостик", accessLevel: "Класс 1" },
  { location: "Пульт управления базой", accessLevel: "Класс 3" },
  { location: "Большая пещера (Anaxes)", accessLevel: "—", note: "Только по приглашению совета джедаев" },
  { location: "Храм джедаев", accessLevel: "—", note: "Только по приглашению совета джедаев" },
];
