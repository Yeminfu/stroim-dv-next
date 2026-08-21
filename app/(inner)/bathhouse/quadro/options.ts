export interface PriceVariant {
  label: string;
  price: number;
  img?: string;
}

export interface OptionItem {
  id: string;
  name: string;
  variants: PriceVariant[];
}

export interface OptionCategory {
  title: string;
  items: OptionItem[];
  type: "single" | "multiple"
}

export const OPTION_CATEGORIES: OptionCategory[] = [
  {
    title: "Базовая безопасность и долговечность",
    items: [
      {
        id: "iskrogasitel",
        name: "Дымоход с искрогасителем",
        variants: [{ label: "Стандарт", price: 3900, img: "/images/options/iskrogasitel.png" }],
      },
      {
        id: "brevna",
        name: "Бревна-основания под баню (обработанные антисептиком)",
        variants: [
          { label: "2 шт", price: 9900, img: "/images/options/brevna-2.png" },
          { label: "3 шт", price: 12900, img: "/images/options/brevna-3.png" },
        ],
      },
      {
        id: "lak-luxens",
        name: "Обработка полов водоотталкивающим лаком Luxens (2 слоя)",
        variants: [
          { label: "Стандарт", price: 10900, img: "/images/options/lak-std.png" },
          { label: "Увеличенная площадь", price: 15900, img: "/images/options/lak-xl.png" },
        ],
      },
      {
        id: "upakovka",
        name: "Упаковка на дальние расстояния (скотч/тент)",
        variants: [{ label: "Стандарт", price: 6000, img: "/images/options/upakovka.png" }],
      },
      {
        id: "vosk-propitka",
        name: "Обработка восксодержащей пропиткой полков, трапиков, мебели",
        variants: [
          { label: "Базовая", price: 6000, img: "/images/options/vosk-1.png" },
          { label: "Стандарт", price: 8000, img: "/images/options/vosk-2.png" },
          { label: "Полная", price: 10000, img: "/images/options/vosk-3.png" },
        ],
      },
      {
        id: "neomid",
        name: "Антисептическая противогрибковая обработка (Neomid)",
        variants: [{ label: "Стандарт", price: 8000, img: "/images/options/neomid.png" }],
      },
    ],
    type: "single",
  },
  {
    title: "Комфорт эксплуатации",
    items: [
      {
        id: "pech",
        name: "Тип печи",
        variants: [
          { label: "Внутренняя", price: 20900, img: "/images/options/pech-vnutrennyaya.png" },
          { label: "Внешняя", price: 25900, img: "/images/options/pech-vneshnyaya.png" },
        ],
      },
      {
        id: "bak-samovar",
        name: "Бак-самовар из нержавеющей стали",
        variants: [
          { label: "25 л", price: 9000, img: "/images/options/bak-25.png" },
          { label: "50 л", price: 15000, img: "/images/options/bak-50.png" },
        ],
      },
      {
        id: "elektropaket",
        name: "Электропакет",
        variants: [
          { label: "Базовый", price: 8000, img: "/images/options/elektro-1.png" },
          { label: "Стандарт", price: 10000, img: "/images/options/elektro-2.png" },
          { label: "Полный", price: 12000, img: "/images/options/elektro-3.png" },
        ],
      },
      {
        id: "fortochka",
        name: "Деревянная форточка дополнительная",
        variants: [{ label: "Стандарт", price: 5900, img: "/images/options/fortochka.png" }],
      },
    ],
    type: "single",
  },
  {
    title: "Эргономика и функциональность",
    items: [
      {
        id: "g-polki",
        name: "Г-образные полки",
        variants: [{ label: "Стандарт", price: 5000, img: "/images/options/g-polki.png" }],
      },
      {
        id: "otkidnoy-polok",
        name: "Откидной полок",
        variants: [{ label: "Стандарт", price: 9900, img: "/images/options/otkidnoy-polok.png" }],
      },
      {
        id: "lavka-chemodan",
        name: "Лавка-чемодан",
        variants: [{ label: "Стандарт", price: 5900, img: "/images/options/lavka-chemodan.png" }],
      },
      {
        id: "otkidnoy-stol",
        name: "Откидной стол",
        variants: [
          { label: "Мини", price: 3000, img: "/images/options/stol-mini.png" },
          { label: "Большой", price: 6000, img: "/images/options/stol-big.png" },
        ],
      },
      {
        id: "stupeni",
        name: "Деревянные ступени-крылечко",
        variants: [
          { label: "1 ступень", price: 3900, img: "/images/options/stupeni-1.png" },
          { label: "2 ступени", price: 5900, img: "/images/options/stupeni-2.png" },
        ],
      },
      {
        id: "stol-lavki",
        name: "Стол с лавочками",
        variants: [{ label: "Стандарт", price: 3900, img: "/images/options/stol-lavki.png" }],
      },
    ],
    type: "single",
  },
  {
    title: "Атмосфера и премиальный эффект",
    items: [
      {
        id: "tonirovka",
        name: "Тонировка полков и трапиков",
        variants: [
          { label: "2 секции", price: 14900, img: "/images/options/tonirovka-2.png" },
          { label: "3 секции", price: 24900, img: "/images/options/tonirovka-3.png" },
        ],
      },
      {
        id: "podsvetka",
        name: "Подсветка мультицвет в парном отделении",
        variants: [{ label: "Стандарт", price: 32000, img: "/images/options/podsvetka.png" }],
      },
      {
        id: "oblivka",
        name: "Обливочное ведро",
        variants: [{ label: "Стандарт", price: 15900, img: "/images/options/oblivka.png" }],
      },
      {
        id: "vozduh",
        name: 'Система "Второй воздух"',
        variants: [{ label: "Стандарт", price: 24000, img: "/images/options/vozduh.png" }],
      },
      {
        id: "skoby",
        name: "Скобы-проушины и навесной замок",
        variants: [{ label: "Стандарт", price: 2000, img: "/images/options/skoby.png" }],
      },
      {
        id: "kamni",
        name: "Камни для бани (20 кг)",
        variants: [{ label: "Стандарт", price: 900, img: "/images/options/kamni.png" }],
      },
    ],
    type: "single",
  },
  {
    title: "Новые премиальные опции",
    items: [
      {
        id: "dver-rehau",
        name: "Замена деревянной двери на пластиковую REHAU с замком",
        variants: [{ label: "Стандарт", price: 30000, img: "/images/options/dver-rehau.png" }],
      },
      {
        id: "okno-parnaya",
        name: "Дополнительное окно в парной 1×1 м (закалённое стекло 8 мм)",
        variants: [{ label: "Стандарт", price: 15000, img: "/images/options/okno-parnaya.png" }],
      },
      {
        id: "okno-otdyh",
        name: "Увеличенное окно в комнате отдыха 60×60 см (пластиковое ламинированное)",
        variants: [{ label: "Стандарт", price: 15000, img: "/images/options/okno-otdyh.png" }],
      },
    ],
    type: "single",
  },
  {
    title: "Установка и доставка",
    items: [
      {
        id: "fundament",
        name: "Монтаж свайно-винтового фундамента",
        variants: [{ label: "Стандарт", price: 0, img: "/images/options/fundament.png" }],
      },
      {
        id: "sborka",
        name: "Сборка на участке",
        variants: [{ label: "Стандарт", price: 20000, img: "/images/options/sborka.png" }],
      },
      {
        id: "dostavka",
        name: "Доставка в готовом виде",
        variants: [{ label: "Стандарт", price: 6000, img: "/images/options/dostavka.png" }],
      },
    ],
    type: "single",
  },
]

export const QUADRO_MODELS = [
  { id: "mini-2", name: "Квадро Мини 2 м", price: 270_000, options: OPTION_CATEGORIES },
  { id: "mini-3", name: "Квадро Мини 3 м", price: 285_000, options: OPTION_CATEGORIES },
  { id: "standart-4", name: "Квадро Стандарт 4 м", price: 385_000, options: OPTION_CATEGORIES },
  { id: "komfort-45", name: "Квадро Комфорт 4,5 м", price: 405_000, options: OPTION_CATEGORIES },
  { id: "maksi-5", name: "Квадро Макси 5 м", price: 490_000, options: OPTION_CATEGORIES },
  { id: "maksi-6", name: "Квадро Макси 6 м", price: 535_000, options: OPTION_CATEGORIES },
  { id: "bok-45", name: "Квадро с боковым входом 4,5 м", price: 515_000, options: OPTION_CATEGORIES },
  { id: "bok-6", name: "Квадро с боковым входом 6 м", price: 640_000, options: OPTION_CATEGORIES },
] as const;
