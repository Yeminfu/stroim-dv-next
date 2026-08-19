export default async function Page(params: any) {
  return (
    <>
      <pre>{JSON.stringify({ params }, null, 2)}</pre>
      {/* Why us */}
      <section className="py-20 border-y border-white/5">
        <div className="container-xl">
          <div className="text-center">
            <div className="section-label">НАМ ДОВЕРЯЮТ БОЛЬШЕ 10 ЛЕТ</div>
            <h2 className="text-4xl font-black mt-3">ПОЧЕМУ ВЫБИРАЮТ НАС</h2>
          </div>
        </div>
      </section>
    </>
  );
}
