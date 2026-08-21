"use client";

import { useState } from "react";
import Image from "next/image";
import { QUADRO_MODELS } from "./options";
import QuadroCalculator from "./calculator";

export interface QuadroModelCard {
  name: string;
  img: string;
  size: string;
  ceiling: string;
  sections: { label: string; value: string }[];
  kosek: string;
  price: string;
  oldPrice: string;
}

export default function CatalogAndCalculator({
  models,
}: {
  models: QuadroModelCard[];
}) {
  const [modelId, setModelId] = useState<string | null>(null);

  function order(name: string) {
    const m = QUADRO_MODELS.find((q) => q.name === name);
    if (m) setModelId(m.id);
  }

  return (
    <>
      {/* Models Catalog */}
      <section className="py-16">
        <div className="container-xl">
          <div className="text-center">
            <div className="section-label">КАТАЛОГ МОДЕЛЕЙ</div>
            <h2 className="text-3xl font-black mt-3">КВАДРО-БАНИ</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mt-12">
            {models.map((m) => (
              <div key={m.name} className="card rounded-2xl overflow-hidden">
                <div className="relative h-48 w-full bg-white/5 overflow-hidden">
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-black">{m.name}</h3>
                      <div className="mt-2 flex items-center gap-3 text-sm text-white/50">
                        <span className="inline-flex items-center gap-1">
                          <span className="text-gold">■</span> {m.size}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <span className="text-gold">⌂</span> {m.ceiling}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-black text-gold">{m.price}</div>
                      <div className="text-xs text-white/30 line-through">{m.oldPrice}</div>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-2">
                    {m.sections.map((s) => (
                      <li
                        key={s.label}
                        className="flex justify-between text-sm border-b border-white/5 pb-2"
                      >
                        <span className="text-white/50">{s.label}</span>
                        <span className="font-medium">{s.value}</span>
                      </li>
                    ))}
                    <li className="flex justify-between text-sm border-b border-white/5 pb-2">
                      <span className="text-white/50">Козырёк</span>
                      <span className="font-medium">{m.kosek}</span>
                    </li>
                  </ul>

                  <a
                    href="#calculator"
                    onClick={() => order(m.name)}
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

      {/* Calculator */}
      <section id="calculator" className="py-16">
        <div className="container-xl">
          <div className="text-center mb-10">
            <div className="section-label">КАЛЬКУЛЯТОР</div>
            <h2 className="text-3xl font-black mt-3">
              РАССЧИТАЙТЕ СТОИМОСТЬ
            </h2>
            <p className="mt-3 text-white/50 max-w-2xl mx-auto">
              Выберите модель и дополнительные опции — итоговая стоимость рассчитается автоматически.
            </p>
          </div>
          <QuadroCalculator
            key={modelId ?? "none"}
            modelId={modelId}
            onModelSelect={setModelId}
          />
        </div>
      </section>
    </>
  );
}
