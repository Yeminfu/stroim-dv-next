export interface PriceVariant {
  label: string;
  price: number;
}

export interface OptionItem {
  id: string;
  name: string;
  variants: PriceVariant[];
}

export interface OptionCategory {
  title: string;
  items: OptionItem[];
}

export const QUADRO_MODELS = [
  { id: "mini-2", name: "Квадро Мини 2 м", price: 270_000 },
  { id: "mini-3", name: "Квадро Мини 3 м", price: 285_000 },
  { id: "standart-4", name: "Квадро Стандарт 4 м", price: 385_000 },
  { id: "komfort-45", name: "Квадро Комфорт 4,5 м", price: 405_000 },
  { id: "maksi-5", name: "Квадро Макси 5 м", price: 490_000 },
  { id: "maksi-6", name: "Квадро Макси 6 м", price: 535_000 },
  { id: "bok-45", name: "Квадро с боковым входом 4,5 м", price: 515_000 },
  { id: "bok-6", name: "Квадро с боковым входом 6 м", price: 640_000 },
] as const;

export const OPTION_CATEGORIES: OptionCategory[] = [
  {
    title: "Базовая безопасность и долговечность",
    items: [
      { id: "iskrogasitel", name: "Дымоход с искрогасителем", variants: [{ label: "Стандарт", price: 3_900 }] },
      {
        id: "brevna",
        name: "Бревна-основания под баню (обработанные антисептиком)",
        variants: [
          { label: "2 шт", price: 9_900 },
          { label: "3 шт", price: 12_900 },
        ],
      },
      {
        id: "lak-luxens",
        name: "Обработка полов водоотталкивающим лаком Luxens (2 слоя)",
        variants: [
          { label: "Стандарт", price: 10_900 },
          { label: "Увеличенная площадь", price: 15_900 },
        ],
      },
      { id: "upakovka", name: "Упаковка на дальние расстояния (скотч/тент)", variants: [{ label: "Стандарт", price: 6_000 }] },
      {
        id: "vosk-propitka",
        name: "Обработка восксодержащей пропиткой полков, трапиков, мебели",
        variants: [
          { label: "Базовая", price: 6_000 },
          { label: "Стандарт", price: 8_000 },
          { label: "Полная", price: 10_000 },
        ],
      },
      { id: "neomid", name: "Антисептическая противогрибковая обработка (Neomid)", variants: [{ label: "Стандарт", price: 8_000 }] },
    ],
  },
  {
    title: "Комфорт эксплуатации",
    items: [
      { id: "pech-moshnaya", name: "Замена печи на более мощную (16–18 кВт) и/или с выносной топкой", variants: [{ label: "Стандарт", price: 25_900 }] },
      {
        id: "bak-samovar",
        name: "Бак-самовар из нержавеющей стали",
        variants: [
          { label: "25 л", price: 9_000 },
          { label: "50 л", price: 15_000 },
        ],
      },
      {
        id: "elektropaket",
        name: "Электропакет",
        variants: [
          { label: "Базовый", price: 8_000 },
          { label: "Стандарт", price: 10_000 },
          { label: "Полный", price: 12_000 },
        ],
      },
      { id: "fortochka", name: "Деревянная форточка дополнительная", variants: [{ label: "Стандарт", price: 5_900 }] },
    ],
  },
  {
    title: "Эргономика и функциональность",
    items: [
      { id: "g-polki", name: "Г-образные полки", variants: [{ label: "Стандарт", price: 5_000 }] },
      { id: "otkidnoy-polok", name: "Откидной полок", variants: [{ label: "Стандарт", price: 9_900 }] },
      { id: "lavka-chemodan", name: "Лавка-чемодан", variants: [{ label: "Стандарт", price: 5_900 }] },
      {
        id: "otkidnoy-stol",
        name: "Откидной стол",
        variants: [
          { label: "Мини", price: 3_000 },
          { label: "Большой", price: 6_000 },
        ],
      },
      {
        id: "stupeni",
        name: "Деревянные ступени-крылечко",
        variants: [
          { label: "1 ступень", price: 3_900 },
          { label: "2 ступени", price: 5_900 },
        ],
      },
      { id: "stol-lavki", name: "Стол с лавочками", variants: [{ label: "Стандарт", price: 3_900 }] },
    ],
  },
  {
    title: "Атмосфера и премиальный эффект",
    items: [
      {
        id: "tonirovka",
        name: "Тонировка полков и трапиков",
        variants: [
          { label: "2 секции", price: 14_900 },
          { label: "3 секции", price: 24_900 },
        ],
      },
      { id: "podsvetka", name: "Подсветка мультицвет в парном отделении", variants: [{ label: "Стандарт", price: 32_000 }] },
      { id: "oblivka", name: "Обливочное ведро", variants: [{ label: "Стандарт", price: 15_900 }] },
      { id: "vozduh", name: 'Система "Второй воздух"', variants: [{ label: "Стандарт", price: 24_000 }] },
      { id: "skoby", name: "Скобы-проушины и навесной замок", variants: [{ label: "Стандарт", price: 2_000 }] },
      { id: "kamni", name: "Камни для бани (20 кг)", variants: [{ label: "Стандарт", price: 900 }] },
    ],
  },
  {
    title: "Новые премиальные опции",
    items: [
      { id: "dver-rehau", name: "Замена деревянной двери на пластиковую REHAU с замком", variants: [{ label: "Стандарт", price: 30_000 }] },
      { id: "okno-parnaya", name: "Дополнительное окно в парной 1×1 м (закалённое стекло 8 мм)", variants: [{ label: "Стандарт", price: 15_000 }] },
      { id: "okno-otdyh", name: "Увеличенное окно в комнате отдыха 60×60 см (пластиковое ламинированное)", variants: [{ label: "Стандарт", price: 15_000 }] },
    ],
  },
  {
    title: "Установка и доставка",
    items: [
      { id: "fundament", name: "Монтаж свайно-винтового фундамента", variants: [{ label: "Стандарт", price: 0 }] },
      { id: "sborka", name: "Сборка на участке", variants: [{ label: "Стандарт", price: 20_000 }] },
      { id: "dostavka", name: "Доставка в готовом виде", variants: [{ label: "Стандарт", price: 6_000 }] },
    ],
  },
];

