import Image from "next/image";
import searchImage from "../public/search.webp";

import Header from '../components/Header';

export default function Home() {
  const states = [
    { id: "1", name: "Himachal Pradesh" },
    { id: "2", name: "Uttarakhand" },
    { id: "3", name: "Kashmir" },
    { id: "4", name: "Sikkim" },
    { id: "5", name: "West Bengal" },
  ];

  return (
    <main className="flex flex-col items-center w-full min-h-screen">
      <section className="flex-1 w-full">
        <div className="relative flex items-center w-full h-96">
          <div className="relative w-full h-full p-8">
            <Image src={searchImage} alt="Search Placeholder" fill={true}></Image>
            <input
              type="text"
              placeholder="Search"
              className="absolute w-5/6 p-4 -translate-x-1/2 -translate-y-1/2 rounded-full md:w-1/2 placeholder-slate-50 bg-opacity-30 top-1/2 left-1/2 bg-slate-50"
            />
          </div>
        </div>
        <div className="flex items-center justify-start p-8 text-2xl font-light tracking-wider md:px-16 md:py-8 md:text-4xl">
          State wise treks
        </div>
        <div className="flex flex-col items-center justify-center gap-8 px-8 lg:flex-row cards">
          {states.map((state) => {
            return (
              <div
                className="flex items-center justify-center w-full h-24 p-4 rounded-md md:h-48 md:w-48 card bg-gradient-to-t to-cyan-600 from-yellow-500"
                key={state.id}
              >
                <span className="text-2xl md:text-lg">{state.name}</span>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
