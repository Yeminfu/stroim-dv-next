import Image from "next/image";
import ContactForm from "./components/contact-form";
import ScrollToTop from "./components/scroll-to-top";

const SITE = "https://xn--b1adlqilgi.xn--p1ai";

const LOGO_SRC = "/logo.jpg";

const NAV_LINKS = [
  { href: "#home", label: "Главная" },
  { href: "#services", label: "Услуги" },
  { href: "#projects", label: "Проекты" },
  { href: "#benefits", label: "Преимущества" },
  { href: "#about", label: "О компании" },
  { href: "#contacts", label: "Контакты" },
];

const SERVICES = [
  {
    icon: "\u2668",
    title: "БАНИ-БОЧКИ",
    text: "Производство бань-бочек в г. Хабаровске.",
    img: `${SITE}/sites/default/files/directions-1.png`,
    alt: "Бани-бочки",
  },
  {
    icon: "\u2302",
    title: "БАННЫЕ ЧАНЫ",
    text: "Продажа банных чанов \u2014 малые, большие, средние.",
    img: `${SITE}/sites/default/files/directions-2.png`,
    alt: "Банные чаны",
  },
  {
    icon: "\u2692",
    title: "ДОМА И КОТТЕДЖИ",
    text: "Строительство загородных жилых домов и коттеджей.",
    img: `${SITE}/sites/default/files/directions-3.png`,
    alt: "Дома и коттеджи",
  },
  {
    icon: "\u25A5",
    title: "КОМПЛЕКСЫ ПОД КЛЮЧ",
    text: "Организация банных комплексов: баня, чан, дом.",
    img: `${SITE}/sites/default/files/directions-4.png`,
    alt: "Банные комплексы под ключ",
  },
];

const STATS = [
  { value: "10+", label: "лет на рынке" },
  { value: "2014", label: "год основания производства" },
  { value: "270", label: "семей въехали в новые дома за год" },
  { value: "30+", label: "моделей банных чанов" },
];

const ADVANTAGES = [
  {
    num: "01",
    title: "ПРОИЗВОДСТВО С 2014 ГОДА",
    text: "Собственное производство бань-бочек в г. Хабаровске с 2014 года.",
  },
  {
    num: "02",
    title: "ВЫСТАВОЧНАЯ ПЛОЩАДКА",
    text: "Готовые бани можно посмотреть в удобной локации города.",
  },
  {
    num: "03",
    title: "ТЕХНОЛОГИЯ \u00ABБАНЯ-ИЗБУШКА\u00BB",
    text: "Запатентованная технология, сертификаты качества и гарантия.",
  },
  {
    num: "04",
    title: "ДОСТАВКА В РЕГИОНЫ ДФО",
    text: "Доставка во все регионы Дальнего Востока.",
  },
];

const PROJECTS = [
  `/images/gallery/project-1_0.png`,
  `/images/gallery/project-2_0.png`,
  `/images/gallery/project-3_0.png`,
  `/images/gallery/project-4_0.png`,
];

const BENEFITS = [
  {
    title: "Собственное производство",
    text: "Бани-бочки собственного производства в Хабаровске с 2014 года.",
  },
  {
    title: "Технология \u00ABБаня-Избушка\u00BB",
    text: "Запатентованная технология, сертификаты качества и гарантия.",
  },
  {
    title: "Доставка в регионы ДФО",
    text: "Привезём и установим баню в любом регионе Дальнего Востока.",
  },
  {
    title: "Бизнесу",
    text: "Базы отдыха \u00ABпод ключ\u00BB с расчётом финансовой модели.",
  },
];

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <div className="container-xl flex items-center justify-between py-5">
          <div
            style={{
              background: "#2E3E3194",
              padding: 10,
              borderRadius: 10,
              lineHeight: 0,
            }}
          >
            <Image
              src={LOGO_SRC}
              alt="ДОМ ДВ"
              width={277}
              height={95}
              className="h-[40px] w-auto"
            />
          </div>
          <nav className="hidden lg:flex items-center gap-8 text-sm text-white/80">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-gold">
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="tel:+79242207378"
            className="hidden sm:flex rounded-full border border-gold px-5 py-2.5 text-sm font-semibold hover:bg-gold hover:text-black transition"
          >
            ☎ +7 (924) 220-73-78
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section
          id="home"
          className="relative min-h-[680px] flex items-center overflow-hidden"
        >
          <div className="absolute inset-0">
            <Image
              src={`/images/gallery/project-1_0.png`}
              fill
              className="object-cover"
              alt="Банные комплексы"
            />
          </div>
          <div className="absolute inset-0 hero-overlay" />
          <div className="absolute inset-0 bg-black/20" />

          <div className="container-xl relative z-10 pt-28 pb-20">
            <div className="max-w-2xl">
              <span className="inline-flex border border-gold/50 text-gold rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider">
                Производство в Хабаровске с 2014 года
              </span>
              <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-black leading-[.95] tracking-tight">
                ОРГАНИЗАЦИЯ БАННЫХ
                <br />
                <span className="text-gold">
                  КОМПЛЕКСОВ НА ВАШЕМ УЧАСТКЕ
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-white/75 leading-relaxed">
                Собственное производство бань-бочек в г.Хабаровске. Продажа
                банных чанов. Строительство загородных жилых домов. Комплексное
                ландшафтное проектирование.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#calculator"
                  className="gold-gradient text-black font-bold px-7 py-4 rounded-lg hover:brightness-110 transition"
                >
                  ▣&nbsp; ОТПРАВИТЬ ЗАЯВКУ
                </a>
                <a
                  href="tel:+79242207378"
                  className="border border-gold text-white font-bold px-7 py-4 rounded-lg hover:bg-gold hover:text-black transition"
                >
                  ☎ &nbsp; ПОЗВОНИТЬ
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20">
          <div className="container-xl">
            <div className="text-center">
              <div className="section-label">НАШИ НАПРАВЛЕНИЯ</div>
              <h2 className="text-4xl sm:text-5xl font-black mt-3">
                БАНИ • ЧАНЫ • ДОМА
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
              {SERVICES.map((s) => (
                <article
                  key={s.title}
                  className="card rounded-xl overflow-hidden group"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={s.img}
                      alt={s.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-full bg-gold text-black flex items-center justify-center -mt-12 mb-5 relative text-xl">
                      {s.icon}
                    </div>
                    <h3 className="font-extrabold text-xl">{s.title}</h3>
                    <p className="mt-3 text-sm text-white/55 leading-6">
                      {s.text}
                    </p>
                    <a
                      href="#calculator"
                      className="inline-block mt-5 text-gold text-sm font-bold"
                    >
                      Подробнее →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="pb-20">
          <div className="container-xl rounded-2xl border border-white/10 bg-[#2E3E31] px-6 py-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((s, i) => (
              <div
                key={s.value}
                className={`text-center ${i < STATS.length - 1 ? "lg:border-r border-white/10" : ""}`}
              >
                <div className="text-4xl font-black text-gold">{s.value}</div>
                <div className="mt-1 text-xs text-white/55 uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why us */}
        <section id="about" className="py-20 border-y border-white/5">
          <div className="container-xl">
            <div className="text-center">
              <div className="section-label">НАМ ДОВЕРЯЮТ БОЛЬШЕ 10 ЛЕТ</div>
              <h2 className="text-4xl font-black mt-3">
                ПОЧЕМУ ВЫБИРАЮТ НАС
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-10 mt-14">
              {ADVANTAGES.map((a) => (
                <div key={a.num} className="text-center">
                  <div className="mx-auto w-14 h-14 rounded-full border border-gold text-gold flex items-center justify-center font-bold">
                    {a.num}
                  </div>
                  <h3 className="mt-5 font-bold text-gold">{a.title}</h3>
                  <p className="mt-3 text-sm text-white/55">{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20">
          <div className="container-xl">
            <div className="flex items-end justify-between gap-4">
              <div>
                <div className="section-label">ПОРТФОЛИО</div>
                <h2 className="text-4xl font-black mt-3">НАШИ ПРОЕКТЫ</h2>
              </div>
              <a
                href={`${SITE}/projects`}
                className="hidden sm:block border border-gold text-gold px-5 py-3 rounded-lg text-sm font-bold"
              >
                Смотреть все проекты
              </a>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
              {PROJECTS.map((src, i) => (
                <div key={i} className="relative h-64 w-full overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src={src}
                    alt="Наш проект"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits / Calculator / Contacts */}
        <section id="benefits" className="pb-20">
          <div className="container-xl grid lg:grid-cols-3 gap-5">
            <div className="card rounded-2xl p-7">
              <div className="section-label">ПОЧЕМУ ВЫБИРАЮТ НАС</div>
              <div className="space-y-6 mt-7">
                {BENEFITS.map((b) => (
                  <div key={b.title}>
                    <h3 className="font-bold">{b.title}</h3>
                    <p className="text-sm text-white/50 mt-1">{b.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              id="calculator"
              className="rounded-2xl p-8 min-h-[390px] flex flex-col justify-center text-center bg-[linear-gradient(rgba(30,22,12,.75),rgba(30,22,12,.85)),url('https://xn--b1adlqilgi.xn--p1ai/sites/default/files/images/gallery/project-5_0.png')] bg-cover bg-center border border-gold/20"
            >
              <div className="section-label">ОСТАВЬТЕ ЗАЯВКУ</div>
              <h2 className="text-3xl font-black mt-3">
                ПОДБЕРЕМ ПРОЕКТ ПОД ВАШИ НУЖДЫ
              </h2>
              <p className="mt-4 text-white/70">
                Оставьте заявку — и мы свяжемся с вами, подскажем по стоимости и
                срокам.
              </p>
              <ContactForm />
            </div>

            <div id="contacts" className="card rounded-2xl p-7">
              <div className="section-label">СВЯЖИТЕСЬ С НАМИ</div>
              <div className="mt-7 space-y-5 text-sm">
                <a href="tel:+79242207378" className="flex gap-3">
                  <span className="text-gold">☎</span>
                  <span>+7 (924) 220-73-78</span>
                </a>
                <a href="tel:+79242015015" className="flex gap-3">
                  <span className="text-gold">✉</span>
                  <span>+7 (924) 201-50-15</span>
                </a>
                <div className="flex gap-3">
                  <span className="text-gold">⌖</span>
                  <span>
                    680031, г. Хабаровск, ул. Карла Маркса, 144а/2
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="text-gold">◷</span>
                  <span>Выставочная площадка в городе</span>
                </div>
              </div>
              <div className="flex gap-3 mt-8">
                <a
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-black transition"
                  href="https://wa.me/79242207378"
                  target="_blank"
                  rel="noopener"
                >
                  WA
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-black transition"
                  href="https://t.me/bathhouse27"
                  target="_blank"
                  rel="noopener"
                >
                  TG
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-black transition"
                  href="tel:+79242207378"
                >
                  ☎
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="container-xl flex flex-col md:flex-row items-center justify-between gap-5 text-xs text-white/40">
          <div className="flex items-center gap-3">
            <span className="text-gold text-2xl">⌂</span>
            <div>
              <b className="text-white">ДОМ ДВ</b>
              <div>банные комплексы</div>
            </div>
          </div>
          <div>© 2026 Дом ДВ. Все права защищены</div>
          <div className="flex gap-5">
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Пользовательское соглашение</a>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </>
  );
}
