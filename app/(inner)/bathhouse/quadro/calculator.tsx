"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  QUADRO_MODELS,
  OPTION_CATEGORIES,
  type OptionItem,
} from "./options";

function formatPrice(n: number) {
  return n.toLocaleString("ru-RU") + " ₽";
}

type Selections = Record<string, { enabled: boolean; variantIdx: number }>;

function OptionItemRow({
  item,
  sel,
  onChange,
}: {
  item: OptionItem;
  sel: { enabled: boolean; variantIdx: number };
  onChange: (enabled: boolean, variantIdx: number) => void;
}) {
  return (
    <div
      className={`flex flex-col gap-2 rounded-lg border px-4 py-3 transition ${
        sel.enabled
          ? "border-gold/50 bg-gold/5"
          : "border-white/10 bg-white/[0.02]"
      }`}
    >
      <div className="text-sm leading-snug">{item.name}</div>

      <div className="grid grid-cols-2 gap-2">
        {item.variants.map((v, i) => {
          const active = sel.enabled && i === sel.variantIdx;
          return (
            <label
              key={i}
              className={`flex flex-col items-center gap-1.5 p-1.5 rounded-xl border cursor-pointer transition ${
                active
                  ? "border-gold bg-gold/15 text-gold"
                  : "border-white/15 text-white/50 hover:border-white/30"
              }`}
            >
              <input
                type="checkbox"
                checked={active}
                onChange={() => onChange(!active, i)}
                className="sr-only"
              />
              {v.img && (
                <span className="relative block w-[100px] h-[100px] shrink-0 rounded-lg overflow-hidden border border-white/10">
                  <Image
                    src={v.img}
                    alt={v.label}
                    fill
                    sizes="100px"
                    className={`object-cover transition ${
                      active ? "" : "opacity-60"
                    }`}
                  />
                </span>
              )}
              <span className="text-center leading-tight">
                {v.label}
                <span className="block opacity-70">
                  {v.price > 0 ? `+${formatPrice(v.price)}` : "бесплатно"}
                </span>
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default function QuadroCalculator({
  modelId,
  onModelSelect,
}: {
  modelId: string | null;
  onModelSelect: (id: string) => void;
}) {
  const [selections, setSelections] = useState<Selections>({});

  const model = QUADRO_MODELS.find((m) => m.id === modelId);

  const optionsTotal = useMemo(() => {
    if (!model) return 0;
    let sum = 0;
    for (const cat of OPTION_CATEGORIES) {
      for (const item of cat.items) {
        const s = selections[item.id];
        if (s?.enabled) {
          sum += item.variants[s.variantIdx]?.price ?? 0;
        }
      }
    }
    return sum;
  }, [model, selections]);

  const total = (model?.price ?? 0) + optionsTotal;

  function handleOptionChange(
    item: OptionItem,
    enabled: boolean,
    variantIdx: number
  ) {
    setSelections((prev) => ({
      ...prev,
      [item.id]: {
        enabled,
        variantIdx: enabled ? variantIdx : prev[item.id]?.variantIdx ?? 0,
      },
    }));
  }

  function handleModelSelect(id: string) {
    onModelSelect(id);
  }

  return (
    <div className="space-y-10">
      {/* Model selector */}
      <div>
        <h3 className="text-lg font-bold mb-4">1. Выберите модель</h3>
        <select
          value={modelId ?? ""}
          onChange={(e) =>
            e.target.value ? handleModelSelect(e.target.value) : null
          }
          className="w-full sm:w-auto bg-black/40 border border-white/20 rounded-lg px-4 py-3 outline-none focus:border-gold text-white appearance-none cursor-pointer min-w-[320px]"
        >
          <option value="" disabled>
            — выберите модель —
          </option>
          {QUADRO_MODELS.map((m) => (
            <option key={m.id} value={m.id}>
              {m.name} — от {formatPrice(m.price)}
            </option>
          ))}
        </select>
      </div>

      {/* Options */}
      {model && (
        <>
          <div className="card rounded-2xl p-6 md:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-4 mb-8">
              <h3 className="text-lg font-bold">
                2. Дополнительные опции
              </h3>
              <div className="text-sm text-white/50">
                Базовая стоимость:{" "}
                <span className="text-gold font-bold text-base">
                  {formatPrice(model.price)}
                </span>
              </div>
            </div>

            <div className="space-y-8">
              {OPTION_CATEGORIES.map((cat) => (
                <div key={cat.title}>
                  <div className="section-label mb-3">{cat.title}</div>
                  <div className="grid gap-2">
                    {cat.items.map((item) => (
                      <OptionItemRow
                        key={item.id}
                        item={item}
                        sel={selections[item.id] ?? {
                          enabled: false,
                          variantIdx: 0,
                        }}
                        onChange={(enabled, variantIdx) =>
                          handleOptionChange(item, enabled, variantIdx)
                        }
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="card rounded-2xl p-6 md:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <div className="text-sm text-white/50">Итого</div>
                <div className="mt-1 flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-black text-gold">
                    {formatPrice(total)}
                  </span>
                  {optionsTotal > 0 && (
                    <span className="text-sm text-white/40">
                      (базовая {formatPrice(model.price)} + опции{" "}
                      {formatPrice(optionsTotal)})
                    </span>
                  )}
                </div>
                <div className="mt-1 text-xs text-white/35">
                  {model.name} — точная стоимость при оформлении заявки
                </div>
              </div>
              <a
                href="#contact"
                className="gold-gradient text-black font-bold rounded-lg px-8 py-3.5 hover:brightness-110 transition shrink-0"
              >
                ОФОРМИТЬ ЗАЯВКУ
              </a>
            </div>

            {optionsTotal > 0 && (
              <div className="mt-6 border-t border-white/10 pt-5">
                <div className="text-xs text-white/40 mb-2">
                  Выбранные опции:
                </div>
                <div className="flex flex-wrap gap-2">
                  {OPTION_CATEGORIES.flatMap((cat) =>
                    cat.items
                      .filter((item) => selections[item.id]?.enabled)
                      .map((item) => {
                        const s = selections[item.id];
                        const v = item.variants[s.variantIdx];
                        return (
                          <span
                            key={item.id}
                            className="text-xs bg-white/5 border border-white/10 rounded-full px-3 py-1"
                          >
                            {item.name}
                            {item.variants.length > 1 && ` (${v.label})`}
                            {v.price > 0 && ` +${formatPrice(v.price)}`}
                          </span>
                        );
                      })
                  )}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
