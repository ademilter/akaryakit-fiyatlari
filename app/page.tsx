export default function Home() {
  return (
    <main className="">
      <h1>Merhaba</h1>

      <p>
        Akaryakıt fiyatlarına ait listeyi görmek için şehir adıyla sorgulayınız.
      </p>
      <p>
        Örnek: <a href="/api?sehir=istanbul">/api?sehir=istanbul</a>
      </p>
    </main>
  );
}
