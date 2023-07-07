import PH from "@/components/ph";

export default async function page() {
  return (
    <main>
      <div className="w-screen text-center">
        <h1 className="font-serif font-semibold text-4xl">Daily</h1>
      </div>
      {/* PH Section */}
      <section className="grid grid-cols-2 h-screen items-center">
        <div>
          <div>
            <PH data="daily" />
          </div>
        </div>
        <div className="mr-10">
          <h1
            className="text-6xl mb-5 font-serif"
            style={{ color: "#0e2954", paddingBottom: "10px" }}
          >
            pH
          </h1>
          <div
            className="grid grid-cols-3 font-mono font-bold"
            style={{ border: "2px solid #0e2954", borderRadius: "10px" }}
          >
            <button>Daily</button>
            <button>Weekly</button>
            <button>Monthly</button>
          </div>
          <p className="text-xl">
            "Penghujung" atau "pH" adalah sebuah singkatan untuk "potensi
            hidrogen". Ini adalah ukuran yang digunakan untuk menentukan
            keasaman atau kebasaan suatu larutan. Skala pH berkisar dari 0
            hingga 14, dimana 7 dianggap netral. Nilai pH dibawah 7 menunjukan
            sifat keasaman, sedangkan nilai pH diatas 7 menunjukan sifat
            kebasaan. Semakin rendah nilai pH, semakin asam larutan tersebut,
            dan semakin tinggi nilai pH, semakin basa larutan tersebut.
          </p>
        </div>
      </section>
    </main>
  );
}
