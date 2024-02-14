export default function Home() {
  return (
    <main className="">
      <h3>
        Türkiye&apos;deki akaryakıt fiyatlarını listelemek için aşağıdaki
        endpointi kullanın
      </h3>

      <hr />

      <p>
        Petrol Ofisi şehir isimleri: <a href="/api/po">/api/po</a>
      </p>
      <p>
        Petrol Ofisi fiyatları: <a href="/api/po/istanbul">/api/po/istanbul</a>
      </p>

      <hr />

      <p>
        Opet şehir isimleri: <a href="/api/opet">/api/opet</a>
      </p>
      <p>
        Opet fiyatları:{" "}
        <a href="/api/opet/istanbul-avrupa">/api/opet/istanbul-avrupa</a>
      </p>

      <hr />

      <p>
        Alpet şehir isimleri: <a href="/api/alpet">/api/alpet</a>
      </p>
      <p>
        Alpet fiyatları: <a href="/api/alpet/ADANA">/api/alpet/ADANA</a>
      </p>

      <hr />

      <p>
        Türkiye Petrolleri şehir isimleri: <a href="/api/tp">/api/tp</a>
      </p>
      <p>
        Türkiye Petrolleri: <a href="/api/tp/adana">/api/tp/adana</a>
      </p>

      <hr />

      <p>
        BP şehir isimleri: <a href="/api/bp">/api/tp</a>
      </p>
      <p>
        BP: <a href="/api/bp/ANTALYA">/api/tp/ANTALYA</a>
      </p>
    </main>
  );
}
