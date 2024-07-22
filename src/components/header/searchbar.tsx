import {
  DatePicker,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  DropdownSection,
} from "@nextui-org/react";
import { FunctionComponent, useState } from "react";
import { FaLocationDot, FaUserGroup } from "react-icons/fa6";
import { RiCalendarCheckLine, RiCalendarCloseFill } from "react-icons/ri";
import { HeaderPresenter } from "./presenter";
import { getLocalTimeZone, today } from "@internationalized/date";
import { IoIosArrowDown } from "react-icons/io";
import { GrSearch } from "react-icons/gr";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { RoomControl } from "./room_control";

const SearchBar: FunctionComponent<{ presenter: HeaderPresenter }> = ({
  presenter,
}) => {
  const [isDropOpen, setDropOpen] = useState(false);

  return (
    <div className="flex flex-row items-stretch justify-between bg-zinc-830 px-[105px] py-[20px] font-noto-sans-thai">
      <Dropdown classNames={{ trigger: "justify-start" }}>
        <DropdownTrigger>
          <Button
            variant="bordered"
            className="h-[56px] w-[400px] border-orange-250 text-white"
            startContent={<FaLocationDot className="text-white" />}
          >
            {presenter.selectedLocation
              ? `${presenter.selectedLocation.name}, ${presenter.selectedLocation.region}`
              : "City, Hotels, Place to go"}
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Location selection" className="w-[400px] p-0">
          <DropdownSection
            title="Popular Destination"
            className="no-scrollbar h-[184px] overflow-y-auto"
            classNames={{ heading: "heading-class" }}
          >
            {presenter.mockLocations.map((value, index) => (
              <DropdownItem
                key={index}
                className="h-[60px] border-b-1 border-b-zinc-200 py-1"
                onClick={() => presenter.handleSelectLocation(value)}
                textValue={`${value.name}, ${value.region}`}
              >
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-col">
                    <h1 className="text-sm font-semibold text-yellow-850">
                      {value.name}
                    </h1>
                    <h1 className="text-sm font-medium text-neutral-500">
                      {value.region}
                    </h1>
                  </div>
                  <div className="items-center justify-center rounded-[20px] border border-yellow-950 px-2 py-1">
                    <h1 className="text-xs font-medium text-yellow-850">
                      District / City
                    </h1>
                  </div>
                </div>
              </DropdownItem>
            ))}
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
      <div className="flex h-14 w-[400px] flex-row rounded-lg border-2 border-orange-250">
        <DatePicker
          radius="none"
          label="Check-in"
          selectorButtonProps={{ isDisabled: false }}
          dateInputClassNames={{
            base: "border-e-1 border-orange-250",
            label: "!text-white",
            inputWrapper: "!bg-transparent",
            segment: "!text-white",
          }}
          popoverProps={{ style: { position: "fixed" } }}
          calendarProps={{ isDisabled: false, isReadOnly: false }}
          isReadOnly
          onChange={presenter.handleCheckIn}
          value={presenter.checkIndate}
          selectorIcon={<RiCalendarCheckLine />}
          minValue={today(getLocalTimeZone())}
          defaultValue={today(getLocalTimeZone())}
          maxValue={presenter.checkOutDate.subtract({ days: 1 })}
        />
        <DatePicker
          label="Check-out"
          radius="none"
          dateInputClassNames={{
            base: "border-e-1 border-orange-250",
            label: "!text-white",
            inputWrapper: "!bg-transparent",
            segment: "!text-white",
          }}
          popoverProps={{ style: { position: "fixed" } }}
          selectorButtonProps={{ isDisabled: false }}
          calendarProps={{ isDisabled: false, isReadOnly: false }}
          isReadOnly
          onChange={presenter.handleCheckOut}
          value={presenter.checkOutDate}
          selectorIcon={<RiCalendarCloseFill />}
          minValue={presenter.checkIndate.add({ days: 1 })}
          defaultValue={today(getLocalTimeZone()).add({ days: 1 })}
        />
      </div>
      <Dropdown onOpenChange={setDropOpen}>
        <DropdownTrigger>
          <button className="flex w-[200px] flex-shrink-0 !scale-100 flex-row items-center gap-1 rounded-lg border-2 border-orange-250 px-[14px] font-noto-sans-thai">
            <FaUserGroup className="size-5 text-white" />
            <div className="flex w-full flex-col items-start">
              <h1 className="text-sm font-normal text-white">
                {presenter.selectedRoom.adult} Adult
              </h1>
              <h1 className="text-xs font-light text-white">
                {presenter.selectedRoom.room} room
              </h1>
            </div>
            <IoIosArrowDown
              className={`size-5 text-white transition-all duration-200 ${
                isDropOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem key="content" isReadOnly>
            <div className="flex w-[300px] flex-col">
              <RoomControl
                label="Room"
                value={presenter.selectedRoom.room}
                onAdd={presenter.handleRoomAdd}
                onMinus={presenter.handleRoomMinus}
              />
              <RoomControl
                label="Adult"
                subLabel="Age 18 or above"
                value={presenter.selectedRoom.adult}
                onAdd={presenter.handleAdultAdd}
                onMinus={presenter.handleAdultMinus}
              />
              <RoomControl
                label="Children"
                subLabel="Age 0-17"
                value={presenter.selectedRoom.children}
                onAdd={presenter.handleChildrenAdd}
                onMinus={presenter.handleChildrenMinus}
              />
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <button className="group flex flex-row items-center justify-center gap-1 rounded-lg bg-orange-250 px-10 py-[9px] transition-all duration-200 hover:bg-black">
        <GrSearch className="size-4 text-black group-hover:text-orange-250" />
        <h1 className="text-base font-medium text-zinc-830 group-hover:text-orange-250">
          Search
        </h1>
      </button>
    </div>
  );
};

export { SearchBar };
