import { Image } from "@nextui-org/react";
import { FunctionComponent } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

interface Props {
  title: string;
  description: string;
  guests: number;
  price: number;
  imageUrl: string;
  handleChoose?: () => void;
  handleSee?: () => void;
}

const RoomItem: FunctionComponent<Props> = ({
  title,
  description,
  guests,
  price,
  imageUrl,
  handleChoose,
  handleSee,
}) => {
  return (
    <section>
      <div className="flex w-full flex-col items-start border-b-1 border-b-orange-250 pb-[21px]">
        <h1 className="mb-4 text-2xl font-medium text-white">{title}</h1>
        <div className="mb-5 flex flex-row gap-5">
          <Image src={imageUrl} isZoomed />
          <div className="flex basis-2/6 flex-col gap-[17px] font-noto-sans-thai text-base text-white">
            <h1 className="font-semibold">Room Option(s)</h1>
            <h1 className="font-normal">{description}</h1>
          </div>
          <div className="flex basis-2/6 flex-col items-center font-noto-sans-thai text-base text-white">
            <h1 className="font-semibold">Guest(s)</h1>
            <div className="flex h-full flex-row items-center justify-center gap-2">
              <div className="font-medium">{guests}</div>
              <div className="flex flex-row flex-wrap gap-1">
                {Array.from({ length: guests }).map((value, index) => (
                  <FaUserLarge key={index} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex basis-2/6 flex-col items-center font-noto-sans-thai text-base text-white">
            <h1 className="font-semibold">Price/room/night</h1>
            <h1 className="flex h-full items-center font-normal">฿{price}</h1>
          </div>
          <button className="my-auto rounded-full bg-orange-250 px-4 py-[9px] font-noto-sans-thai text-base font-semibold text-stone-950 transition-all duration-200 hover:bg-stone-950 hover:text-orange-250">
            Choose
          </button>
        </div>
        <button className="flex flex-row items-center gap-1 font-noto-sans-thai text-sm font-normal text-orange-250 transition-all duration-200 hover:font-semibold">
          See room details <IoIosArrowForward className="text-[20px]" />
        </button>
      </div>
    </section>
  );
};

export { RoomItem };
