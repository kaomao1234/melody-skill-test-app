import { forwardRef, FunctionComponent, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { DefaultProps } from "../default_prop"; // Ensure this is defined properly
import { LatLngExpression } from "leaflet";
import { Accordion, AccordionItem, Divider, Image } from "@nextui-org/react";
import { IoLocation } from "react-icons/io5";
import { FaStar, FaWalking } from "react-icons/fa";
import L from "leaflet";
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});
interface Props {}

const MapLocationInner: FunctionComponent<Props & DefaultProps> = ({
  presenter,
}) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const customIcon = L.icon({
    iconUrl: "https://simpleicon.com/wp-content/uploads/map-marker-1.png",
    iconSize: [40, 40], // size of the icon
    iconAnchor: [20, 40], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -40], // point from which the popup should open relative to the iconAnchor
  });
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const position: LatLngExpression = [13.625393777128824, 100.75890657720375]; // London coordinates
  return (
    <section  className="flex flex-col gap-8 px-24">
      <h1 className="w-fit border-b-2 border-b-orange-250 font-noto-sans-thai text-2xl font-semibold text-orange-250">
        Where&apos;s the LUXURY Hotel
      </h1>
      <div className="flex flex-row overflow-clip rounded-xl">
        {isBrowser && (
          <MapContainer
            center={position}
            zoom={13}
            style={{ height: "400px", width: "100%", zIndex: 10 }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} icon={customIcon}>
              <Popup>
                <div className="flex h-[100px] w-[250px] flex-shrink-0 flex-row gap-2">
                  <Image
                    src="/image_3.png"
                    className="!size-[100px] object-cover"
                  />
                  <div className="flex flex-shrink-0 flex-col gap-2">
                    <h1 className="font-noto-sans-thai text-sm font-medium text-black">
                      THE LUXURY HOTEL2
                    </h1>
                    <div className="flex flex-row items-center">
                      <FaStar className="text-xs text-orange-250" />
                      <FaStar className="text-xs text-orange-250" />
                      <FaStar className="text-xs text-orange-250" />
                      <FaStar className="text-xs text-orange-250" />
                      <FaStar className="text-xs text-orange-250" />
                      <h1 className="ml-1 text-sm font-normal text-stone-950">
                        9.0
                      </h1>
                    </div>
                  </div>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        )}
        <div className="flex w-2/4 flex-col bg-gray-100">
          <div className="flex h-12 items-center justify-center bg-orange-250 font-noto-sans-thai text-sm font-normal text-stone-950">
            What&apos;s near by
          </div>

          <Accordion
            itemClasses={{
              base: "bg-white px-4",
              title: "text-stone-950 text-sm font-normal font-noto-sans-thai",
              indicator: "text-black size-5",
              content: "bg-white",
            }}
            showDivider
          >
            <AccordionItem
              key="1"
              title="Current Selection"
              startContent={<IoLocation className="text-2xl text-black" />}
            >
              <Divider />
              <div className="flex flex-row gap-2 py-2">
                <Image src="/image_3.png" className="h-20 w-24 object-cover" />
                <div className="flex flex-col gap-2">
                  <h1 className="font-noto-sans-thai text-sm font-medium text-black">
                    THE LUXURY HOTEL2
                  </h1>
                  <div className="flex flex-row items-center">
                    <FaStar className="text-xs text-orange-250" />
                    <FaStar className="text-xs text-orange-250" />
                    <FaStar className="text-xs text-orange-250" />
                    <FaStar className="text-xs text-orange-250" />
                    <FaStar className="text-xs text-orange-250" />
                    <h1 className="ml-1 text-sm font-normal text-stone-950">
                      9.0
                    </h1>
                  </div>
                </div>
              </div>
            </AccordionItem>
            <AccordionItem
              key="2"
              title="Explorer"
              startContent={
                <Image src="/explorer.png" width={24} height={24} />
              }
            >
              <div className="flex flex-col">
                <h1 className="font-noto-sans-thai text-sm font-medium text-stone-950">
                  The Gallery
                </h1>
                <div className="flex flex-row items-center">
                  <FaWalking className="text-xs" />
                  <h1 className="font-noto-sans-thai text-xs font-medium text-neutral-500">
                    0.2 km from Property
                  </h1>
                </div>
              </div>
            </AccordionItem>
            <AccordionItem
              key="3"
              title="Play"
              startContent={<Image src="/play.png" width={24} height={24} />}
            >
              <div className="flex flex-col">
                <h1 className="font-noto-sans-thai text-sm font-medium text-stone-950">
                  The Bar
                </h1>
                <div className="flex flex-row items-center">
                  <FaWalking className="text-xs" />
                  <h1 className="font-noto-sans-thai text-xs font-medium text-neutral-500">
                    0.1 km from Property
                  </h1>
                </div>
              </div>
            </AccordionItem>
            <AccordionItem
              key="4"
              title="Shop"
              startContent={<Image src="/shop.png" width={24} height={24} />}
            >
              <div className="flex flex-col">
                <h1 className="font-noto-sans-thai text-sm font-medium text-stone-950">
                  The Mall
                </h1>
                <div className="flex flex-row items-center">
                  <FaWalking className="text-xs" />
                  <h1 className="font-noto-sans-thai text-xs font-medium text-neutral-500">
                    0.8 km from Property
                  </h1>
                </div>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default MapLocationInner ;
