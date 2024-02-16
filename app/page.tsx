export default function Home() {
  return (
    <main className="">
      <h3>
        Türkiye&apos;deki akaryakıt fiyatlarını listelemek için aşağıdaki
        endpointi kullanın
      </h3>

      <hr />

      <p>
        Petrol Ofisi fiyatları: <a href="/api/po/34">/api/po/34</a>
      </p>

      <p>
        Opet fiyatları: <a href="/api/opet/34">/api/opet/34</a>
      </p>

      <p>
        Alpet fiyatları: <a href="/api/alpet/34">/api/alpet/34</a>
      </p>

      <p>
        Türkiye Petrolleri: <a href="/api/tp/34">/api/tp/34</a>
      </p>

      <p>
        BP: <a href="/api/bp/34">/api/tp/34</a>
      </p>

      {/*<p>
        aytemiz: <a href="/api/aytemiz/34">/api/aytemiz/34</a>
      </p>*/}
    </main>
  );
}
