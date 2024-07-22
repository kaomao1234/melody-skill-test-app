import { FunctionComponent } from "react";
import { usePresenter } from "@/hooks";
import { HeaderPresenter } from "./presenter";
import { useRouter } from "next/router";
import { SearchBar } from "./searchbar";

const Header: FunctionComponent = () => {
  const router = useRouter();
  const presenter = usePresenter<HeaderPresenter>(
    (set) => new HeaderPresenter(set, router)
  );
  const linkLabel = [
    "Hotels",
    "Flights",
    "Airport Transfer",
    "Car Rental",
    "Things to Do",
  ];

  return (
    <header className="flex flex-col w-full sticky top-0  shadow-lg shadow-stone-950/50 z-20">
      <div className="flex flex-row py-[20px] px-[105px] bg-orange-250 items-stretch">
        <img src="/logo.svg" alt="" />
        <div
          className="flex flex-row gap-x-[30px]
        text-lg font-normal font-noto-sans-thai w-full pl-[54px]
        "
        >
          {linkLabel.map((val, index) => (
            <button
              className="px-2 py-1 text-stone-950 duration-200 hover:bg-stone-950 hover:text-white transition-all rounded-[5px]"
              key={index}
            >
              {val}
            </button>
          ))}
        </div>
        <div className="flex flex-row gap-x-5">
          <button className="px-4 py-1  bg-orange-250 rounded-lg border border-stone-950 justify-center items-center duration-200 hover:bg-stone-950 hover:text-white transition-all text-stone-950">
            <h1 className=" text-base font-semibold font-noto-sans-thai capitalize">
              Login
            </h1>
          </button>
          <button className="px-4 py-1  bg-orange-250 rounded-lg border border-stone-950 justify-center items-center duration-200 hover:bg-stone-950 hover:text-white transition-all text-stone-950">
            <h1 className=" text-base font-semibold font-noto-sans-thai capitalize">
              Register
            </h1>
          </button>
        </div>
      </div>
      <SearchBar presenter={presenter} />
    </header>
  );
};

export { Header };
