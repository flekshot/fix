export interface AlertCode {
  name: string;
  color: string;
  bgClass: string;
  borderClass: string;
  textClass: string;
  description: string;
}

export const alertCodes: AlertCode[] = [
  {
    name: "Зелёный код",
    color: "green",
    bgClass: "bg-code-green/10",
    borderClass: "border-code-green/40",
    textClass: "text-code-green",
    description:
      "Территория ВАР в штатном режиме. Оружие согласно ТБ.",
  },
  {
    name: "Жёлтый код",
    color: "yellow",
    bgClass: "bg-code-yellow/10",
    borderClass: "border-code-yellow/40",
    textClass: "text-code-yellow",
    description:
      "Повышенная боевая готовность. Оружие в руках на предохранителе.",
  },
  {
    name: "Красный код",
    color: "red",
    bgClass: "bg-code-red/10",
    borderClass: "border-code-red/40",
    textClass: "text-code-red",
    description:
      "Нападение / проникновение / диверсия. Оружие в полной боевой готовности.",
  },
  {
    name: "Чёрный код",
    color: "black",
    bgClass: "bg-code-black/30",
    borderClass: "border-code-black",
    textClass: "text-gray-300",
    description:
      "Угроза полного уничтожения. Эвакуация состава. Оружие в полной боевой готовности.",
  },
];
