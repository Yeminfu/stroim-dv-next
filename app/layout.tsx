import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";

import "./globals.css";
import ScrollToTop from "./components/scroll-to-top";
import Link from "next/link";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const LOGO_SRC = "/logo.jpg";

const NAV_LINKS = [
  { href: "#home", label: "Главная" },
  { href: "#services", label: "Услуги" },
  { href: "#projects", label: "Проекты" },
  { href: "#benefits", label: "Преимущества" },
  { href: "#about", label: "О компании" },
  { href: "#contacts", label: "Контакты" },
];

export const metadata: Metadata = {
  title: "ДОМ ДВ | Банные комплексы",
  description:
    "Собственное производство бань-бочек в г. Хабаровске. Продажа банных чанов. Строительство загородных жилых домов. Комплексное ландшафтное проектирование.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${inter.variable} antialiased`}>
      <body>
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
              <Link href={"/"}>
                {" "}
                <Image
                  src={LOGO_SRC}
                  alt="ДОМ ДВ"
                  width={277}
                  height={95}
                  className="h-[40px] w-auto"
                />
              </Link>
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
        <main></main>
        {children}

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
      </body>
    </html>
  );
}
