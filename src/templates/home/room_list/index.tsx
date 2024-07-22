import {
  forwardRef,
  FunctionComponent,
  MutableRefObject,
  RefObject,
} from "react";
import { DefaultProps } from "../default_prop";
import { RoomItem } from "./room_item";

interface Props {}

const RoomList = forwardRef<HTMLDetailsElement, Props & DefaultProps>(
  ({ presenter }, ref) => {
    return (
      <section ref={ref} className="px-[100px]">
        <div className="container flex flex-col gap-[23px]">
          <h1 className="w-fit border-b-2 border-b-orange-250 font-noto-sans-thai text-2xl font-semibold text-orange-250">
            ROOMS
          </h1>
          <div className="flex flex-col gap-5">
            {presenter.rooms.map((room) => (
              <RoomItem key={room.title} {...room} />
            ))}
          </div>
        </div>
      </section>
    );
  },
);

RoomList.displayName = "RoomList";

export { RoomList };
