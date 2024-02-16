export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-lg font-semibold">
        Türkiyedeki akaryakıt istasyonlarının güncel fiyatlarını dönen API
      </h1>
      <p>
        Sorun bildirmek veya katkı yapmak için{" "}
        <a href="https://github.com/ademilter/akaryakit-fiyatlari">
          github.com/ademilter/akaryakit-fiyatlari
        </a>
      </p>

      <table className="mt-6">
        <tbody>
          <tr>
            <td>Petrol Ofisi:</td>
            <td>
              <a href="/api/po/34">
                <code>/api/po/34</code>
              </a>
            </td>
          </tr>
          <tr>
            <td>Opet:</td>
            <td>
              <a href="/api/opet/34">
                <code>/api/opet/34</code>
              </a>
            </td>
          </tr>
          <tr>
            <td>Alpet:</td>
            <td>
              <a href="/api/alpet/34">
                <code>/api/alpet/34</code>
              </a>
            </td>
          </tr>
          <tr>
            <td>Türkiye Petrolleri:</td>
            <td>
              <a href="/api/tp/34">
                <code>/api/tp/34</code>
              </a>
            </td>
          </tr>
          <tr>
            <td>BP:</td>
            <td>
              <a href="/api/bp/34">
                <code>/api/bp/34</code>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
