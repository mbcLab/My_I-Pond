import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-row items-center bg-gray-700 text-white py-10 mx-auto text-center">
      <div className="basis-1/4 items-center scale-75">
        <img src="/logo.png" alt="logo" />
      </div>
      <div className="basis-3/4 flex-col">
        <div className="flex justify-center align-middle">
          <a href="https://instagram.com/mbclab/" target="_blank">
            <img src="/instagram.svg" alt="instagram" className="h-20" />
          </a>
        </div>
        <span className="basis3/4">Copyright by MBC Laboratory</span>
      </div>
    </div>
  );
}
