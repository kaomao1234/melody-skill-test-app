import { Presenter } from "@/hooks";
import { NextRouter, useRouter } from "next/router";
import { useContext, useMemo, useState } from "react";

class HomePresenter extends Presenter {
  router: NextRouter;
  rooms = [
    {
      title: "Superior Modern",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
      guests: 2,
      price: 1358,
      imageUrl: "/superior_modern.png", // Make sure to replace this with your actual image path
    },
    {
      title: "Business Suite",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
      guests: 2,
      price: 2358,
      imageUrl: "/business_suite.png", // Make sure to replace this with your actual image path
    },
  ];
  mainFacilities = [
    {
      title: "AC",
      icon: "/ac.svg",
    },
    {
      title: "Restaurant",
      icon: "/restaurant.svg",
    },
    {
      title: "Swimming Pool",
      icon: "/swimming_pool.svg",
    },
    {
      title: "24-Hour Front Desk",
      icon: "/24_hour_front_desk.svg",
    },
    {
      title: "Parking",
      icon: "/parking.svg",
    },
    {
      title: "Elevator",
      icon: "/elevator.svg",
    },
    {
      title: "WiFi",
      icon: "/wifi.svg",
    },
  ];
  features = [
    {
      title: "Food and Drinks",
      icon: "/food_and_drink.svg",
      items: ["Room service [24-hour]", "Coffee shop", "Room service"],
    },
    {
      title: "Wellness",
      icon: "/wellness.svg",
      items: ["Salon", "Fitness center"],
    },
    {
      title: "Activities",
      icon: "/activities.svg",
      items: ["Swimming Pool"],
    },
  ];
  images = [
    "/image_1.png",
    "/image_2.png",
    "/image_3.png",
    "/image_4.png",
    "/image_5.png",
    "/image_6.png",
  ];
  constructor(set: any, router: NextRouter) {
    super(set);
    this.router = router;
  }
  gotoGallery = () => {
    this.router.push({
      pathname: "/gallery",
    });
  };
}

export { HomePresenter };
