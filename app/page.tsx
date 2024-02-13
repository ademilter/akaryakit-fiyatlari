export default function Home() {
  return (
    <main className="">
      <h3>
        Türkiye'deki akaryakıt fiyatlarını listelemek için aşağıdaki endpointi
        kullanın
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
    </main>
  );
}
