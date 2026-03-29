export interface NavItem {
  id: string;
  label: string;
}

export interface PageRoute {
  path: string;
  label: string;
  shortLabel: string;
  group: string;
  sections: NavItem[];
}

export const routes: PageRoute[] = [
  // ——— Основа ———
  {
    path: "/charter",
    label: "Устав ВАР",
    shortLabel: "Устав",
    group: "Основа",
    sections: [
      { id: "intro", label: "Введение" },
      { id: "golden-rules", label: "Золотые правила" },
      { id: "etiquette", label: "Воинский этикет" },
      { id: "lexicon", label: "Воинский лексикон" },
      { id: "formation-rules", label: "Правила в строю" },
      { id: "weapon-regs", label: "Регламент оружия" },
      { id: "duties", label: "Обязанности и права" },
      { id: "post-service", label: "Постовая служба" },
      { id: "arsenal", label: "Правила Арсенала" },
      { id: "free-time", label: "Свободное время" },
      { id: "military-objects", label: "Военные объекты" },
      { id: "alert-codes", label: "Коды на объекте" },
      { id: "behavior-rules", label: "Правила поведения на ВО" },
      { id: "exit-regs", label: "Регламент выхода" },
      { id: "request-forms", label: "Формы запросов" },
      { id: "safety", label: "Техника безопасности" },
      { id: "access-levels", label: "Допуски" },
      { id: "command", label: "Командование" },
      { id: "ranks", label: "Система званий" },
      { id: "transfer", label: "Перевод и набор" },
      { id: "specializations", label: "Специализации" },
      { id: "skills", label: "Навыки" },
      { id: "discipline", label: "Дисциплинарные взыскания" },
      { id: "tribunal", label: "Трибунал" },
    ],
  },
  {
    path: "/high-command",
    label: "Высшее Командование",
    shortLabel: "ВК",
    group: "Основа",
    sections: [
      { id: "hc-intro", label: "Общие сведения" },
      { id: "hc-types", label: "Виды ВК" },
      { id: "hc-command-dept", label: "Отдел комендатуры" },
      { id: "hc-secondary", label: "Второстепенные должности" },
      { id: "hc-duties", label: "Обязанности командира армии" },
      { id: "hc-inspections", label: "Оформление проверки" },
      { id: "hc-training-plans", label: "Планы тренировок" },
    ],
  },
  {
    path: "/piloting",
    label: "Пилотирование",
    shortLabel: "Пилоты",
    group: "Основа",
    sections: [
      { id: "plt-intro", label: "Общие сведения" },
      { id: "plt-duties", label: "Обязанности пилотов" },
      { id: "plt-safety", label: "Техника безопасности" },
      { id: "plt-ranks", label: "Иерархия званий" },
      { id: "plt-codes", label: "Коды реагирования" },
      { id: "plt-punishment", label: "Степени наказания" },
      { id: "plt-docs", label: "Документы для пилотов" },
      { id: "plt-rules", label: "Постановления ВКСР" },
    ],
  },

  // ——— Формирования ———
  {
    path: "/engineering",
    label: "Инженерия",
    shortLabel: "Инженеры",
    group: "Формирования",
    sections: [
      { id: "eng-intro", label: "Общие сведения" },
      { id: "eng-rules", label: "Правила инженеров" },
      { id: "eng-duties", label: "Должностные обязанности" },
      { id: "eng-hierarchy", label: "Иерархия" },
    ],
  },
  {
    path: "/medical",
    label: "Медицина",
    shortLabel: "Медики",
    group: "Формирования",
    sections: [
      { id: "med-intro", label: "Общие сведения" },
      { id: "med-codex", label: "Кодекс медиков" },
      { id: "med-general", label: "Общие правила" },
      { id: "med-block", label: "Правила медблока" },
      { id: "med-hierarchy", label: "Иерархия" },
      { id: "med-defects", label: "Пороги дефектности" },
    ],
  },
  {
    path: "/guard",
    label: "Корусантская Гвардия",
    shortLabel: "Гвардия",
    group: "Формирования",
    sections: [
      { id: "guard-intro", label: "Устав Гвардии" },
      { id: "guard-units", label: "Единицы гвардии" },
      { id: "guard-duties", label: "Обязанности" },
      { id: "guard-rights", label: "Права гвардейцев" },
      { id: "guard-arrest", label: "Порядок задержания" },
    ],
  },
  {
    path: "/ghost",
    label: "Батальон Ghost",
    shortLabel: "Ghost",
    group: "Формирования",
    sections: [
      { id: "ghost-intro", label: "Общие сведения" },
      { id: "ghost-duties", label: "Обязанности" },
      { id: "ghost-rights", label: "Права" },
      { id: "ghost-security", label: "Полномочия в охране" },
    ],
  },
  {
    path: "/shock-troopers",
    label: "Ударные Клоны",
    shortLabel: "Ударные",
    group: "Формирования",
    sections: [
      { id: "sp-intro", label: "Общие сведения" },
      { id: "sp-duties", label: "Обязанности" },
      { id: "sp-rights", label: "Права" },
    ],
  },
  {
    path: "/mercenaries",
    label: "Взвод Наёмников",
    shortLabel: "Наёмники",
    group: "Формирования",
    sections: [
      { id: "merc-intro", label: "Общие сведения" },
      { id: "merc-ranks", label: "Звания наёмников" },
      { id: "merc-command", label: "Должности" },
      { id: "merc-duties", label: "Обязанности" },
    ],
  },
  {
    path: "/sob",
    label: "Бригада Спецопераций",
    shortLabel: "SOB",
    group: "Формирования",
    sections: [
      { id: "sob-intro", label: "Общие сведения" },
      { id: "sob-hierarchy", label: "Иерархия БСО" },
      { id: "sob-battalions", label: "Батальоны" },
      { id: "sob-duties", label: "Обязанности и права" },
      { id: "sob-secrets", label: "Секретная информация" },
    ],
  },

  // ——— Орден Джедаев ———
  {
    path: "/jedi-code",
    label: "Кодекс Джедаев",
    shortLabel: "Кодекс",
    group: "Орден Джедаев",
    sections: [
      { id: "jedi-intro", label: "Орден Джедаев" },
      { id: "jedi-codex", label: "Кодекс" },
      { id: "jedi-path", label: "Следование Кодексу" },
      { id: "jedi-rules", label: "Правила Джедаев" },
      { id: "jedi-hierarchy", label: "Иерархия Ордена" },
      { id: "jedi-docs", label: "Примечание" },
    ],
  },
  {
    path: "/jedi-guardian",
    label: "Джедай-Защитник",
    shortLabel: "Защитник",
    group: "Орден Джедаев",
    sections: [
      { id: "guardian-intro", label: "Общие сведения" },
      { id: "guardian-ace", label: "Джедай-Ас" },
      { id: "guardian-fencer", label: "Фехтовальщик" },
    ],
  },
  {
    path: "/jedi-consular",
    label: "Джедай-Консул",
    shortLabel: "Консул",
    group: "Орден Джедаев",
    sections: [
      { id: "consular-intro", label: "Общие сведения" },
      { id: "consular-specs", label: "Специальности" },
      { id: "consular-keeper", label: "Хранитель знаний" },
      { id: "consular-keeper-rules", label: "Права и обязанности" },
    ],
  },
  {
    path: "/jedi-sentinel",
    label: "Джедай-Страж",
    shortLabel: "Страж",
    group: "Орден Джедаев",
    sections: [
      { id: "sentinel-intro", label: "Общие сведения" },
      { id: "sentinel-dogmas", label: "Догмы Стража" },
      { id: "sentinel-specs", label: "Специальности" },
      { id: "sentinel-professor", label: "Страж-Профессор" },
    ],
  },
];

export function getRouteByPath(path: string): PageRoute | undefined {
  return routes.find((r) => r.path === path);
}

export function getRouteGroups(): { group: string; items: PageRoute[] }[] {
  const groups: { group: string; items: PageRoute[] }[] = [];
  for (const route of routes) {
    const existing = groups.find((g) => g.group === route.group);
    if (existing) {
      existing.items.push(route);
    } else {
      groups.push({ group: route.group, items: [route] });
    }
  }
  return groups;
}

/** Backward compat alias */
export const charterNav = routes[0].sections;
