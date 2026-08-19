"use client";

export default function ScrollToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 w-12 h-12 rounded-full gold-gradient text-black font-bold shadow-xl cursor-pointer"
    >
      ↑
    </button>
  );
}
