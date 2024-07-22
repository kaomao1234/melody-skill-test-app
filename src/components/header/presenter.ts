import { Presenter } from "@/hooks";
import { getLocalTimeZone, today } from "@internationalized/date";
import { CalendarDate } from "@nextui-org/react";
import { NextRouter } from "next/router";
class HeaderPresenter extends Presenter {
  checkIndate = today(getLocalTimeZone());
  checkOutDate = today(getLocalTimeZone()).add({ days: 1 });
  selectedLocation?:{ name: string; region: string; };
  selectedRoom = {
    room: 1,
    adult: 1,
    children: 0,
  };
  mockLocations = [
    { name: "Bangkok", region: "Thailand" },
    { name: "New York", region: "USA" },
    { name: "Paris", region: "France" },
    { name: "Tokyo", region: "Japan" },
    { name: "Sydney", region: "Australia" },
    { name: "London", region: "UK" },
    { name: "Berlin", region: "Germany" },
    { name: "Dubai", region: "UAE" },
    { name: "Singapore", region: "Singapore" },
    { name: "Cape Town", region: "South Africa" },
  ];
  router: NextRouter;
  constructor(set: any, router: NextRouter) {
    super(set);
    this.router = router;
  }

  handleCheckIn = (date: CalendarDate) => {
    this.checkIndate = date;
    this.update();
    // Check if the date is valid and not in the past
  };
  handleCheckOut = (date: CalendarDate) => {
    this.checkOutDate = date;
    this.update();
  };

  handleSelectLocation = (value: { name: string; region: string }) => {
    this.selectedLocation = value;
    this.update()
  };

  handleRoomAdd = () => {
    if (this.selectedRoom.room < 10) {
      this.selectedRoom.room += 1;
    }
    this.update();
  };
  handleRoomMinus = () => {
    if (this.selectedRoom.room > 0) {
      this.selectedRoom.room -= 1;
    }
    this.update();
  };

  handleAdultAdd = () => {
    if (this.selectedRoom.adult < 10) {
      this.selectedRoom.adult += 1;
    }
    this.update();
  };

  handleAdultMinus = () => {
    if (this.selectedRoom.adult > 0) {
      this.selectedRoom.adult -= 1;
    }
    this.update();
  };

  handleChildrenAdd = () => {
    if (this.selectedRoom.children < 10) {
      this.selectedRoom.children += 1;
    }
    this.update();
  };

  handleChildrenMinus = () => {
    if (this.selectedRoom.children > 0) {
      this.selectedRoom.children -= 1;
    }
    this.update();
  };
}

export { HeaderPresenter };
