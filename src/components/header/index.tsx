import { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
  const linkLabel = [
    "Hotels",
    "Flights",
    "Airport Transfer",
    "Car Rental",
    "Things to Do",
  ];
  return (
    <header className="flex flex-col sticky w-full top-0  shadow-lg shadow-stone-950/50">
      <h1 className="text-white text-[32px] font-semibold font-noto-sans-thai bg-zinc-830 py-[15px] pl-[105px]">
        MELODY SKILL TEST
      </h1>
      <div className="flex flex-row py-[20px] px-[105px] bg-orange-250 items-stretch">
        <img src="/logo.svg" alt="" />
        <div
          className="flex flex-row gap-x-[30px]
        text-lg font-normal font-noto-sans-thai w-full pl-[54px]
        "
        >
          {linkLabel.map((val, index) => (
            <button
              className="px-2 py-1 text-stone-950 active:scale-[0.8] duration-200 hover:bg-zinc-830/40 transition-all rounded-[5px]"
              key={index}
            >
              {val}
            </button>
          ))}
        </div>
        <div className="flex flex-row gap-x-5">
          <button className="px-4 py-1  bg-orange-250 rounded-lg border border-stone-950 justify-center items-center duration-200 hover:bg-zinc-830/40 active:scale-[0.8] transition-all text-stone-950">
            <h1 className=" text-base font-semibold font-noto-sans-thai capitalize">
              Login
            </h1>
          </button>
          <button className="text-orange-250 px-4 py-1 bg-stone-950 rounded-lg justify-center items-center transition-all duration-200 active:scale-[0.8] hover:bg-stone-950/80">
            <h1 className=" text-base font-semibold font-noto-sans-thai capitalize">
              register
            </h1>
          </button>
        </div>
      </div>
    </header>
  );
};

export { Header };
