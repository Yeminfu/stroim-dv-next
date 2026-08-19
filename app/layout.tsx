import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "ДОМ ДВ | Банные комплексы",
  description:
    "Собственное производство бань-бочек в г. Хабаровске. Продажа банных чанов. Строительство загородных жилых домов. Комплексное ландшафтное проектирование.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${inter.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
