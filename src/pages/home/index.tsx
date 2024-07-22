import { FunctionComponent, RefObject, useMemo, useRef } from "react";
import { usePresenter } from "@/hooks";
import { HomePresenter } from "./presenter";
import { useRouter } from "next/router";
import { HotelDetails, HotelOverview, RoomList,MapLocation } from "@/templates/home";



const HomePage: FunctionComponent = () => {
  const router = useRouter();
  const hotelDetailsRef = useRef<HTMLDetailsElement>(null);
  const roomListRef = useRef<HTMLDetailsElement>(null);
  const mapLocationRef = useRef<HTMLDetailsElement>(null);
  const presenter = usePresenter<HomePresenter>(
    (set) => new HomePresenter(set, router),
  );

  const handleScrollTo = (ref: RefObject<HTMLDetailsElement>) => {
    const offset = 176 + 20; // Height of the fixed navbar
    const element = ref.current;
    if (element) {
      console.log(element.getBoundingClientRect);
      
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col gap-[30px] bg-zinc-830 pb-[52px]">
      <HotelOverview
        presenter={presenter}
        handleLocation={() => handleScrollTo(mapLocationRef)}
        handleOverview={() => handleScrollTo(hotelDetailsRef)}
        handleRooms={() => handleScrollTo(roomListRef)}
      />
      <HotelDetails presenter={presenter} ref={hotelDetailsRef} />
      <RoomList ref={roomListRef} presenter={presenter} />
      <MapLocation ref={mapLocationRef} presenter={presenter} />
    </div>
  );
};

export default HomePage;
