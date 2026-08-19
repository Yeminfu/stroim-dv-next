import Image from "next/image";
import Link from "next/link";
import ContactForm from "../../../components/contact-form";

const MODELS = [
  {
    name: "Квадро 3",
    size: "3 м",
    area: "4,5 м²",
    specs: [
      { label: "Размер", value: "3 × 1,5 м" },
      { label: "Высота потолка", value: "2,1 м" },
      { label: "Парная", value: "до 2 чел." },
    ],
    price: "от 185 000 ₽",
    oldPrice: "210 000 ₽",
  },
  {
    name: "Квадро 4",
    size: "4 м",
    area: "6 м²",
    specs: [
      { label: "Размер", value: "4 × 1,5 м" },
      { label: "Высота потолка", value: "2,1 м" },
      { label: "Парная", value: "до 3 чел." },
    ],
    price: "от 240 000 ₽",
    oldPrice: "275 000 ₽",
  },
  {
    name: "Квадро 5",
    size: "5 м",
    area: "7,5 м²",
    specs: [
      { label: "Размер", value: "5 × 1,5 м" },
      { label: "Высота потолка", value: "2,1 м" },
      { label: "Парная", value: "до 4 чел." },
    ],
    price: "от 310 000 ₽",
    oldPrice: "350 000 ₽",
  },
  {
    name: "Квадро 6 Макси",
    size: "6 м",
    area: "9 м²",
    specs: [
      { label: "Размер", value: "6 × 1,5 м" },
      { label: "Высота потолка", value: "2,2 м" },
      { label: "Парная", value: "до 4 чел." },
    ],
    price: "от 385 000 ₽",
    oldPrice: "430 000 ₽",
  },
];

const ADVANTAGES = [
  {
    icon: "▲",
    title: "Компактность",
    text: "Квадратная форма позволяет установить баню даже на небольшом участке. Минимальная площадь для размещения — от 6 м².",
  },
  {
    icon: "⚒",
    title: "Быстрый монтаж",
    text: "Собирается на участке за 1–2 дня. Не требуется ленточный фундамент — достаточно столбчатого.",
  },
  {
    icon: "♨",
    title: "Равномерный прогрев",
    text: "Планировка без лишних перегородок обеспечивает равномерную циркуляцию пара и быстрый нагрев.",
  },
  {
    icon: "❤",
    title: "Эргономичная планировка",
    text: "Продуманное расположение полков, печи и тамбура. Удобно для семьи из 3–4 человек.",
  },
];

const STANDARD_PKG = [
  {
    icon: "🏗",
    title: "Корпус из профилированной древесины",
    desc: "Просушенная до 10–12% влажности древесина породы ель/сосна. Обручи из нержавеющей стали с регулируемыми замками.",
  },
  {
    icon: "🚪",
    title: "Двери на выбор",
    desc: "Входная и дверь в парное отделение — комбинированные или сплошные, на ваш выбор.",
  },
  {
    icon: "♨",
    title: "Печь-каменка в сборе",
    desc: "Дровяная печь российского производства с дымоходом. Защита от нагрева из минерита и асбокартона за печью.",
  },
  {
    icon: "🛋",
    title: "Две лавочки в предбаннике",
    desc: "Удобные лавки для отдыха перед парной или после неё.",
  },
  {
    icon: "🚿",
    title: "Трапики и подиум",
    desc: "Деревянные трапики во всех отделениях, деревянный подиум под печь, сливное отверстие для воды в парной.",
  },
  {
    icon: "🎨",
    title: "Крыша и отделка",
    desc: "Крыша из гибкой кровли — цвет на выбор. Внешняя обработка антисептиком на основе лака-пропитки — цвет на выбор.",
  },
];

const OTHER_TYPES = [
  {
    title: "Бани-бочки",
    img: "/images/banya-types/kruglaya.png",
    href: "/bathhouse/bochki",
  },
  {
    title: "Модульные бани",
    img: "/images/banya-types/module.png",
    href: "/bathhouse/module",
  },
  {
    title: "Бани-избушки",
    img: "/images/banya-types/izbushka.png",
    href: "/bathhouse/izbushka",
  },
];

export default function QuadroPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="container-xl py-4 text-xs text-white/40 flex items-center gap-2">
        <Link href="/" className="hover:text-gold transition">
          Главная
        </Link>
        <span>/</span>
        <Link href="/bathhouse" className="hover:text-gold transition">
          Бани
        </Link>
        <span>/</span>
        <span className="text-white/70">Квадро бани</span>
      </div>

      {/* Hero */}
      <section className="relative h-[360px] overflow-hidden">
        <Image
          src="/images/banya-types/quadro.png"
          alt="Квадро бани"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1F1C] via-[#1E1F1C]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 pb-12">
          <div className="container-xl">
            <h1 className="text-4xl sm:text-5xl font-black">
              КВАДРО БАНИ
            </h1>
            <p className="mt-3 max-w-xl text-white/60">
              Компактные бани квадратной формы с увеличенной вместимостью. Идеальны для семьи из 3–4 человек.
            </p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="section-label">О КВАДРО БАНЯХ</div>
              <h2 className="text-3xl font-black mt-3">
                Квадратная форма — максимум полезного пространства
              </h2>
              <div className="mt-6 space-y-4 text-white/60 leading-relaxed">
                <p>
                  Квадро-бани — это компактные бани квадратной формы, которые сочетают компактность и простоту установки. Благодаря квадратной конфигурации, всё пространство используется эффективно.
                </p>
                <p>
                  Квадро-бани идеально подходят для участков с ограниченной площадью. Компактная планировка позволяет разместить парную, предбанную и зону отдыха в одном компактном корпусе.
                </p>
                <p>
                  Производим из сухой древесины 8–10% влажности. Каждая баня проходит контроль качества и получает сертификат.
                </p>
              </div>
            </div>
            <div className="relative h-[320px] w-full rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/images/banya-types/quadro.png"
                alt="Квадро баня изнутри"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 border-y border-white/5">
        <div className="container-xl">
          <div className="text-center">
            <div className="section-label">ПОЧЕМУ КВАДРО</div>
            <h2 className="text-3xl font-black mt-3">ПРЕИМУЩЕСТВА</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {ADVANTAGES.map((a) => (
              <div key={a.title} className="card rounded-xl p-6 text-center">
                <div className="w-14 h-14 mx-auto rounded-full border border-gold text-gold flex items-center justify-center text-xl">
                  {a.icon}
                </div>
                <h3 className="mt-5 font-bold text-gold">{a.title}</h3>
                <p className="mt-3 text-sm text-white/55 leading-6">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standard Package */}
      <section className="py-16">
        <div className="container-xl">
          <div className="text-center">
            <div className="section-label">В СТАНДАРТЕ</div>
            <h2 className="text-3xl font-black mt-3">СТАНДАРТНАЯ КОМПЛЕКТАЦИЯ</h2>
            <p className="mt-3 text-white/50 max-w-2xl mx-auto">
              Каждая баня собирается из просушенной до 10–12% влажности профилированной древесины (ель/сосна) и проходит контроль качества.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {STANDARD_PKG.map((item) => (
              <div key={item.title} className="card rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-gold/10 text-gold flex items-center justify-center text-lg">
                  {item.icon}
                </div>
                <h3 className="mt-4 font-bold text-sm">{item.title}</h3>
                <p className="mt-2 text-sm text-white/50 leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Models Catalog */}
      <section className="py-16">
        <div className="container-xl">
          <div className="text-center">
            <div className="section-label">КАТАЛОГ МОДЕЛЕЙ</div>
            <h2 className="text-3xl font-black mt-3">КВАДРО-БАНИ</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mt-12">
            {MODELS.map((m) => (
              <div key={m.name} className="card rounded-2xl overflow-hidden">
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-black">{m.name}</h3>
                      <div className="mt-2 flex items-center gap-3 text-sm text-white/50">
                        <span className="inline-flex items-center gap-1">
                          <span className="text-gold">■</span> {m.size}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <span className="text-gold">⌂</span> {m.area}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-black text-gold">{m.price}</div>
                      <div className="text-xs text-white/30 line-through">{m.oldPrice}</div>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-2">
                    {m.specs.map((s) => (
                      <li
                        key={s.label}
                        className="flex justify-between text-sm border-b border-white/5 pb-2"
                      >
                        <span className="text-white/50">{s.label}</span>
                        <span className="font-medium">{s.value}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#calculator"
                    className="mt-6 block text-center gold-gradient text-black font-bold rounded-lg py-3 hover:brightness-110 transition"
                  >
                    ЗАКАЗАТЬ
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="calculator" className="py-16">
        <div className="container-xl">
          <div className="card rounded-2xl p-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="section-label">ЗАКАЖИТЕ КВАДРО</div>
              <h2 className="text-3xl font-black mt-3">
                ПОДБЕРЕМ МОДЕЛЬ ПОД ВАШИ НУЖДЫ
              </h2>
              <p className="mt-4 text-white/60">
                Оставьте заявку — мы свяжемся с вами, подскажем по стоимости и срокам.
              </p>
              <ContactForm />
            </div>
            <div className="relative h-[280px] w-full rounded-xl overflow-hidden">
              <Image
                src="/images/banya-types/quadro.png"
                alt="Квадро баня"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Other Types */}
      <section className="py-16 border-t border-white/5">
        <div className="container-xl">
          <div className="text-center">
            <div className="section-label">ДРУГИЕ ТИПЫ БАНЬ</div>
            <h2 className="text-3xl font-black mt-3">СМОТРИТЕ ТАКЖЕ</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 mt-10">
            {OTHER_TYPES.map((t) => (
              <Link
                key={t.title}
                href={t.href}
                className="card rounded-xl overflow-hidden group block"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={t.img}
                    alt={t.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-bold">{t.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
