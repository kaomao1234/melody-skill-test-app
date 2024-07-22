import { Breadcrumbs, BreadcrumbItem, Image, useDisclosure } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { FunctionComponent, useState } from "react";
import { TbMapPinStar } from "react-icons/tb";
import { DefaultProps } from "../default_prop";
import { TiCameraOutline } from "react-icons/ti";
import { FaStar } from "react-icons/fa6";

interface Props {
  handleOverview: () => void;
  handleRooms: () => void;
  handleLocation: () => void;
}

const HotelOverview: FunctionComponent<Props & DefaultProps> = ({
  presenter,
  handleLocation,
  handleOverview,
  handleRooms,
}) => {

  const pathname = usePathname();
  const [selected, setSelected] = useState("Overview");

  const handleSelect = (val: string, callback: () => void) => {
    callback();
    setSelected(val);
  };

  const isSelected = (val: string) => selected === val;

  return (
    <section className="flex flex-col">
      <div className="flex flex-col items-start gap-[19px] px-[100px]">
        <h1 className="font-noto-sans-thai text-[32px] font-semibold text-orange-250">
          THE LUXURY HOTEL
        </h1>
        <div className="flex items-center gap-2">
          <TbMapPinStar className="text-[20px] text-white" />
          <h1 className="font-noto-sans-thai text-sm font-normal text-white">
            The Luxury Hotel, Pattaya, Chonburi, Thailand.
          </h1>
        </div>
        <div className="grid grid-cols-5 grid-rows-2 gap-[15px]">
          {presenter.images.slice(0, 5).map((value, index) => {
            const isFirstImage = index === 0;
            const isLastImage = index === 4;
            return (
              <div
                key={index}
                className={`relative ${
                  isFirstImage
                    ? "col-span-3 row-span-2"
                    : "group flex items-center overflow-clip rounded-lg"
                }`}
              >
                <Image
                  loading="lazy"
                  alt="Hotel image"
                  src={value}
                  isZoomed
                  classNames={{
                    wrapper: "size-full",
                    zoomedWrapper: "size-full",
                    img: `size-full ${isFirstImage ? "hover:scale-125" : "group-hover:scale-125"}`,
                  }}
                />
                {isFirstImage && (
                  <div className="absolute bottom-0 z-10 flex w-full flex-row items-end justify-between pb-7 pr-5">
                    <div
                      className="-ml-1 flex flex-row items-center gap-1 bg-cover px-[15px] py-3"
                      style={{
                        backgroundImage: `url('review_background.svg')`,
                      }}
                    >
                      <FaStar className="text-8 text-orange-250" />
                      <h1 className="mr-5 text-lg font-normal text-orange-250">
                        9.0 Reviews
                      </h1>
                    </div>
                    <button className="group flex flex-row items-center gap-1 rounded-full bg-orange-250 px-4 py-[9px] transition-all duration-200 hover:bg-stone-950" onClick={presenter.gotoGallery}>
                      <TiCameraOutline className="text-[20px] group-hover:text-orange-250" />
                      <h1 className="font-noto-sans-thai text-base font-semibold text-stone-950 group-hover:text-orange-250">
                        See all photos
                      </h1>
                    </button>
                  </div>
                )}
                {isLastImage && (
                  <button className="absolute z-10 flex size-full items-center justify-center bg-black/60 text-2xl font-medium text-white">
                    +{presenter.images.length - 5}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-12 flex w-full flex-row justify-between px-[100px] shadow-lg shadow-stone-950/50">
        <div className="flex flex-row gap-[33px]">
          {[
            { label: "Overview", callback: handleOverview },
            { label: "Rooms", callback: handleRooms },
            { label: "Location", callback: handleLocation },
          ].map(({ label, callback }) => (
            <button
              key={label}
              className={`border-b-2 border-b-transparent py-2.5 font-noto-sans-thai text-base font-medium text-white duration-200 hover:border-orange-250 hover:text-orange-250 ${
                isSelected(label) ? "border-orange-250 text-orange-250" : ""
              }`}
              onClick={() => handleSelect(label, callback)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="my-2 flex flex-row gap-[20px]">
          <h1 className="font-noto-sans-thai text-[32px] font-medium text-orange-300">
            ฿1,358
          </h1>
          <button className="rounded-full bg-orange-250 px-4 py-[9px] font-noto-sans-thai text-base font-semibold text-stone-950 transition-all duration-200 hover:bg-stone-950 hover:text-orange-250">
            View This Deal
          </button>
        </div>
      </div>
    </section>
  );
};

export { HotelOverview };
