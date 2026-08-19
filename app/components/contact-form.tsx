"use client";

import { type FormEvent } from "react";

export default function ContactForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Спасибо! Мы свяжемся с вами для расчёта.");
  }

  return (
    <form className="mt-7 flex flex-col gap-3" onSubmit={handleSubmit}>
      <input
        required
        className="bg-black/40 border border-white/20 rounded-lg px-4 py-3 outline-none focus:border-gold"
        placeholder="Ваше имя"
      />
      <input
        required
        type="tel"
        className="bg-black/40 border border-white/20 rounded-lg px-4 py-3 outline-none focus:border-gold"
        placeholder="Телефон"
      />
      <button className="gold-gradient text-black font-bold rounded-lg py-3.5 cursor-pointer">
        ОТПРАВИТЬ ЗАЯВКУ
      </button>
    </form>
  );
}
