"use client";
import { forwardRef, FunctionComponent } from "react";
import { DefaultProps } from "../default_prop";
import { IoIosArrowForward } from "react-icons/io";
import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { FaCheck } from "react-icons/fa6";

interface Props extends DefaultProps {}

const HotelDetails = forwardRef<HTMLDetailsElement, Props>(
  ({ presenter }, ref) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
      <section ref={ref} className="mt-12 px-[100px]">
        <div className="grid w-full grid-cols-3 grid-rows-2 gap-x-[20px] gap-y-[30px] border-b-1 border-orange-250 pb-[64px]">
          <div className="col-span-2 flex flex-col items-start gap-5 border-b-1 border-b-orange-250 pb-10">
            <h1 className="font-noto-sans-thai text-2xl font-semibold text-orange-250">
              THE LUXURY HOTEL
            </h1>
            <h1 className="font-noto-sans-thai text-base font-normal text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h1>
            <button
              className="flex flex-row items-center gap-1 font-noto-sans-thai text-sm font-normal text-orange-250 transition-all duration-200 hover:font-semibold"
              onClick={onOpen}
            >
              Read More <IoIosArrowForward className="text-[20px]" />
            </button>
          </div>
          <div className="row-span-2 flex size-full flex-col rounded-xl border-1 border-orange-250 px-6 pt-[18px]">
            <h1 className="font-noto-sans-thai text-xl font-medium text-orange-250">
              Main Facilities
            </h1>
            <div className="mb-[114px] mt-[47px] flex h-[50%] w-full flex-col flex-wrap gap-5">
              {presenter.mainFacilities.map((value, index) => (
                <div key={index} className="flex flex-row items-center gap-1">
                  <Image src={value.icon} />
                  <h1 className="text-base font-normal text-white">
                    {value.title}
                  </h1>
                </div>
              ))}
            </div>
            <button className="flex flex-row items-center gap-1 font-noto-sans-thai text-sm font-normal text-orange-250 transition-all duration-200 hover:font-semibold">
              Read More <IoIosArrowForward className="text-[20px]" />
            </button>
            <Modal
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              size="2xl"
              classNames={{
                body: "px-[40px] py-5",
              }}
            >
              <ModalContent className="bg-zinc-830">
                {(onClose) => (
                  <>
                    <ModalBody className="!w-full">
                      <div className="flex flex-col gap-2">
                        <h1 className="font-noto-sans-thai text-2xl font-semibold text-orange-250">
                          THE LUXURY HOTEL
                        </h1>
                        <h1 className="font-noto-sans-thai text-base font-normal text-white">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </h1>
                      </div>
                      <div className="mt-6 flex flex-col gap-2">
                        <h1 className="font-noto-sans-thai text-2xl font-semibold text-orange-250">
                          Sub title
                        </h1>
                        <h1 className="font-noto-sans-thai text-base font-normal text-white">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </h1>
                      </div>
                    </ModalBody>
                    <ModalFooter></ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
          <div className="col-span-2 flex flex-col gap-6">
            <h1 className="font-noto-sans-thai text-xl font-medium text-orange-250">
              Staycation offers available
              <br />
              Get special benefits for your stay
            </h1>
            <div className="grid grid-cols-3 place-content-between">
              {presenter.features.map(({ title, icon, items }) => (
                <div key={title} className="flex flex-col gap-[15px]">
                  <div className="flex flex-row items-center gap-2.5">
                    <Image src={icon} />
                    <h1 className="text-lg font-medium text-white">{title}</h1>
                  </div>
                  <div className="flex flex-col">
                    {items.map((item) => (
                      <div
                        key={item}
                        className="flex flex-row items-center gap-3"
                      >
                        <FaCheck className="text-[16px] text-orange-250" />
                        <h1 className="text-lg font-normal text-white">
                          {item}
                        </h1>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  },
);

HotelDetails.displayName = "HotelDetails";

export { HotelDetails };
