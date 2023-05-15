export default function Dashboard() {
  return (
    <>
      <main>
        <div
          className="title text-center font-mono h-screen"
          style={{ borderTop: "1px solid black" }}
        >
          <div className="title-text">
            <h1>My I-Pond</h1>
            <span>Automation water quality control.</span>
          </div>
        </div>

        <div className="datas grid grid-cols-3 gap-3 text-center m-3 font-serif h-screen">
          <div className="" style={{ border: "1px dashed black" }}>
            <h1>pH Level</h1>
          </div>

          <div style={{ border: "1px dashed black" }}>
            <h1>Kekeruhan</h1>
          </div>

          <div style={{ border: "1px dashed black" }}>
            <h1>Suhu</h1>
          </div>
        </div>
      </main>
    </>
  );
}
