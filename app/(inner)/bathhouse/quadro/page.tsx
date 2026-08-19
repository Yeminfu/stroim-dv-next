import Image from "next/image";
import Link from "next/link";
import ContactForm from "../../../components/contact-form";

const MODELS = [
  {
    name: "Квадро 3",
    size: "3 м",
    area: "4,5 м\u00B2",
    specs: [
      { label: "Размер", value: "3 \u00D7 1,5 м" },
      { label: "Высота потолка", value: "2,1 м" },
      { label: "Парная", value: "до 2 чел." },
    ],
    price: "от 185 000 \u20BD",
    oldPrice: "210 000 \u20BD",
  },
  {
    name: "Квадро 4",
    size: "4 м",
    area: "6 м\u00B2",
    specs: [
      { label: "Размер", value: "4 \u00D7 1,5 м" },
      { label: "Высота потолка", value: "2,1 м" },
      { label: "Парная", value: "до 3 чел." },
    ],
    price: "от 240 000 \u20BD",
    oldPrice: "275 000 \u20BD",
  },
  {
    name: "Квадро 5",
    size: "5 м",
    area: "7,5 м\u00B2",
    specs: [
      { label: "Размер", value: "5 \u00D7 1,5 м" },
      { label: "Высота потолка", value: "2,1 м" },
      { label: "Парная", value: "до 4 чел." },
    ],
    price: "от 310 000 \u20BD",
    oldPrice: "350 000 \u20BD",
  },
  {
    name: "Квадро 6 Макси",
    size: "6 м",
    area: "9 м\u00B2",
    specs: [
      { label: "Размер", value: "6 \u00D7 1,5 м" },
      { label: "Высота потолка", value: "2,2 м" },
      { label: "Парная", value: "до 4 чел." },
    ],
    price: "от 385 000 \u20BD",
    oldPrice: "430 000 \u20BD",
  },
];

const ADVANTAGES = [
  {
    icon: "\u25B2",
    title: "Компактность",
    text: "Квадратная форма позволяет установить баню даже на небольшом участке. Минимальная площадь для размещения \u2014 от 6 м\u00B2.",
  },
  {
    icon: "\u2692",
    title: "Быстрый монтаж",
    text: "Собирается на участке за 1\u20132 дня. Не требуется ленточный фундамент \u2014 достаточно столбчатого.",
  },
  {
    icon: "\u2668",
    title: "Равномерный прогрев",
    text: "Планировка без лишних перегородок обеспечивает равномерную циркуляцию пара и быстрый нагрев.",
  },
  {
    icon: "\u2764",
    title: "Эргономичная планировка",
    text: "Продуманное расположение полков, печи и тамбура. Удобно для семьи из 3\u20134 человек.",
  },
];

const OTHER_TYPES = [
  {
    title: "\u0411\u0430\u043D\u0438-\u0431\u043E\u0447\u043A\u0438",
    img: "/images/banya-types/kruglaya.png",
    href: "/bathhouse/bochki",
  },
  {
    title: "\u041C\u043E\u0434\u0443\u043B\u044C\u043D\u044B\u0435 \u0431\u0430\u043D\u0438",
    img: "/images/banya-types/module.png",
    href: "/bathhouse/module",
  },
  {
    title: "\u0411\u0430\u043D\u0438-\u0438\u0437\u0431\u0443\u0448\u043A\u0438",
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
          \u0413\u043B\u0430\u0432\u043D\u0430\u044F
        </Link>
        <span>/</span>
        <Link href="/bathhouse" className="hover:text-gold transition">
          \u0411\u0430\u043D\u0438
        </Link>
        <span>/</span>
        <span className="text-white/70">\u041A\u0432\u0430\u0434\u0440\u043E \u0431\u0430\u043D\u0438</span>
      </div>

      {/* Hero */}
      <section className="relative h-[360px] overflow-hidden">
        <Image
          src="/images/banya-types/quadro.png"
          alt="\u041A\u0432\u0430\u0434\u0440\u043E \u0431\u0430\u043D\u0438"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1F1C] via-[#1E1F1C]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 pb-12">
          <div className="container-xl">
            <h1 className="text-4xl sm:text-5xl font-black">
              \u041A\u0412\u0410\u0414\u0420\u041E \u0411\u0410\u041D\u0418
            </h1>
            <p className="mt-3 max-w-xl text-white/60">
              \u041A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u044B\u0435 \u0431\u0430\u043D\u0438 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u044B \u0441 \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u043D\u043E\u0439 \u0432\u043C\u0435\u0441\u0442\u0438\u043C\u043E\u0441\u0442\u044C\u044E. \u0418\u0434\u0435\u0430\u043B\u044C\u043D\u044B \u0434\u043B\u044F \u0441\u0435\u043C\u044C\u0438 \u0438\u0437 3\u20134 \u0447\u0435\u043B\u043E\u0432\u0438\u043A.
            </p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="section-label">\u041E \u041A\u0412\u0410\u0414\u0420\u041E \u0411\u0410\u041D\u042F\u0425</div>
              <h2 className="text-3xl font-black mt-3">
                \u041A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u0430\u044F \u0444\u043E\u0440\u043C\u0430 \u2014 \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C \u043F\u043E\u043B\u0435\u0437\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430
              </h2>
              <div className="mt-6 space-y-4 text-white/60 leading-relaxed">
                <p>
                  \u041A\u0432\u0430\u0434\u0440\u043E-\u0431\u0430\u043D\u0438 \u2014 \u044D\u0442\u043E \u043A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u044B\u0435 \u0431\u0430\u043D\u0438 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u043E\u0447\u0435\u0442\u0430\u044E\u0442 \u043A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u043E\u0441\u0442\u044C \u0438 \u043F\u0440\u043E\u0441\u0442\u043E\u0440\u0443 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438. \u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438, \u0432\u0441\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E.
                </p>
                <p>
                  \u041A\u0432\u0430\u0434\u0440\u043E-\u0431\u0430\u043D\u0438 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0442 \u0434\u043B\u044F \u0443\u0447\u0430\u0441\u0442\u043A\u043E\u0432 \u0441 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u043D\u043E\u0439 \u043F\u043B\u043E\u0449\u0430\u0434\u044C\u044E. \u041A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u0430\u044F \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0440\u0430\u0437\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u043F\u0430\u0440\u043D\u0443\u044E, \u043F\u0440\u0435\u0434\u0431\u0430\u043D\u043D\u0443\u044E \u0438 \u0437\u043E\u043D\u0443 \u043E\u0442\u0434\u044B\u0445\u0430 \u0432 \u043E\u0434\u043D\u043E\u043C \u043A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u043E\u043C \u043A\u043E\u0440\u043F\u0443\u0441\u0435.
                </p>
                <p>
                  \u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u043C \u0438\u0437 \u0441\u0443\u0445\u043E\u0439 \u0434\u0440\u0435\u0432\u0435\u0441\u0438\u043D\u044B 8\u201310% \u0432\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u0438. \u041A\u0430\u0436\u0434\u0430\u044F \u0431\u0430\u043D\u044F \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430.
                </p>
              </div>
            </div>
            <div className="relative h-[320px] w-full rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/images/banya-types/quadro.png"
                alt="\u041A\u0432\u0430\u0434\u0440\u043E \u0431\u0430\u043D\u044F \u0438\u0437\u043D\u0443\u0442\u0440\u0438"
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
            <div className="section-label">\u041F\u041E\u0427\u0415\u041C\u0423 \u041A\u0412\u0410\u0414\u0420\u041E</div>
            <h2 className="text-3xl font-black mt-3">\u041F\u0420\u0415\u0418\u041C\u0423\u0429\u0415\u0421\u0422\u0412\u0410</h2>
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

      {/* Models Catalog */}
      <section className="py-16">
        <div className="container-xl">
          <div className="text-center">
            <div className="section-label">\u041A\u0410\u0422\u0410\u041B\u041E\u0413 \u041C\u041E\u0414\u0415\u041B\u0415\u0419</div>
            <h2 className="text-3xl font-black mt-3">\u041A\u0412\u0410\u0414\u0420\u041E-\u0411\u0410\u041D\u0418</h2>
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
                          <span className="text-gold">\u25A0</span> {m.size}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <span className="text-gold">\u2302</span> {m.area}
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
                    \u0417\u0410\u041A\u0410\u0417\u0410\u0422\u042C
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
              <div className="section-label">\u0417\u0410\u041A\u0410\u0416\u0418\u0422\u0415 \u041A\u0412\u0410\u0414\u0420\u041E</div>
              <h2 className="text-3xl font-black mt-3">
                \u041F\u041E\u0414\u0411\u0415\u0420\u0415\u041C \u041C\u041E\u0414\u0415\u041B\u042C \u041F\u041E\u0414 \u0412\u0410\u0428\u0418 \u041D\u0423\u0416\u0414\u042B
              </h2>
              <p className="mt-4 text-white/60">
                \u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443 \u2014 \u043C\u044B \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0441 \u0432\u0430\u043C\u0438, \u043F\u043E\u0434\u0441\u043A\u0430\u0436\u0435\u043C \u043F\u043E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u0438 \u0441\u0440\u043E\u043A\u0430\u043C.
              </p>
              <ContactForm />
            </div>
            <div className="relative h-[280px] w-full rounded-xl overflow-hidden">
              <Image
                src="/images/banya-types/quadro.png"
                alt="\u041A\u0432\u0430\u0434\u0440\u043E \u0431\u0430\u043D\u044F"
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
            <div className="section-label">\u0414\u0420\u0423\u0413\u0418\u0415 \u0422\u0418\u041F\u042B \u0411\u0410\u041D\u042C</div>
            <h2 className="text-3xl font-black mt-3">\u0421\u041C\u041E\u0422\u0420\u0415\u0422\u042E \u0422\u0410\u041A\u0416\u0415</h2>
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
