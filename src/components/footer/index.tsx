import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  const linkLabel = [
    "Hotels",
    "Flights",
    "Airport Transfer",
    "Car Rental",
    "Things to Do",
  ];

  return (
    <footer className="flex flex-col items-center justify-center gap-[51px] bg-orange-250 px-[105px] py-[58px]">
      <img src="/logo.svg" alt="" />
      <div className="flex flex-row gap-x-[30px] font-noto-sans-thai text-lg font-normal">
        {linkLabel.map((val, index) => (
          <button
            className="rounded-[5px] px-2 py-1 text-stone-950 transition-all duration-200 hover:bg-stone-950 hover:text-white"
            key={index}
          >
            {val}
          </button>
        ))}
      </div>
    </footer>
  );
};

export { Footer };
