import { FunctionComponent, useMemo, useRef } from "react";
import { usePresenter } from "@/hooks";
import { HomePresenter } from "./presenter";
import { useRouter } from "next/router";
import {
  HotelDetails,
  HotelOverview,
  MapLocation,
  RoomList,
} from "@/templates/home";

const HomePage: FunctionComponent = () => {
  const router = useRouter();
  const presenter = usePresenter<HomePresenter>(
    (set) => new HomePresenter(set, router)
  );
  return (
    <div className="flex flex-col">
      <HotelOverview />
      <HotelDetails />
      <RoomList />
      <MapLocation />
    </div>
  );
};

export default HomePage;
