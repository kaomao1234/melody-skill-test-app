import { usePresenter } from "@/hooks";
import {
  FunctionComponent,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { GalleryPresenter } from "../../templates/gallery/presenter";
import Slider, { Settings } from "react-slick";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { Image } from "@nextui-org/react";

const GalleryPage: FunctionComponent = () => {
  const presenter = usePresenter<GalleryPresenter>(
    (set) => new GalleryPresenter(set),
  );

  const { gallery, getBedroom, getLobby } = presenter;

  const sliderRef = useRef<Slider>(null);
  const [selected, setSelect] = useState<string>("All Photos");
  const [currentPhoto, setCurrentPhoto] = useState<number>(0);
  const [selectedPhoto, setSelectedPhoto] = useState(gallery);

  const isSelected = useCallback((val: string) => selected === val, [selected]);

  const settings: Settings = useMemo(
    () => ({
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      afterChange(currentSlide) {
        setCurrentPhoto(currentSlide);
      },
    }),
    [],
  );

  const buttons = useMemo(
    () => [
      {
        label: "All Photos",
        callback: () => setSelectedPhoto(gallery),
      },
      {
        label: `Bedroom(${getBedroom().length})`,
        callback: () => setSelectedPhoto(getBedroom()),
      },
      {
        label: `Lobby(${getLobby().length})`,
        callback: () => setSelectedPhoto(getLobby()),
      },
    ],
    [gallery, getBedroom, getLobby],
  );

  return (
    <div className="flex min-h-screen w-full flex-col gap-[50px] bg-zinc-830 pb-[131px]">
      <div className="px-[100px] shadow-lg shadow-stone-950/50">
        <h1 className="mb-10 w-fit border-b-2 border-orange-300 py-1 font-noto-sans-thai text-2xl font-semibold uppercase text-orange-300">
          Photo by Hotel
        </h1>
        <div className="flex flex-row items-center justify-center gap-10">
          <button
            className="text-[48px] text-white"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <MdArrowBackIos />
          </button>
          <Slider {...settings} ref={sliderRef} className="h-[420px] w-[50vw]">
            {selectedPhoto.map((value, index) => (
              <Image
                loading="lazy"
                src={value.image}
                key={index}
                className="h-[420px] rounded-xl object-cover"
                alt={`Gallery image ${index + 1}`}
              />
            ))}
          </Slider>
          <button
            className="text-[48px] text-white"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <MdArrowForwardIos />
          </button>
        </div>
        <div className="mt-[60px] flex flex-row items-center justify-center gap-10">
          {buttons.map((value, index) => (
            <button
              key={value.label}
              className={`border-b-2 py-2.5 font-noto-sans-thai text-base font-medium duration-200 hover:border-orange-250 hover:text-orange-250 ${
                isSelected(value.label)
                  ? "border-orange-250 text-orange-250"
                  : "border-b-transparent text-white"
              }`}
              onClick={() => {
                setSelect(value.label);
                value.callback();
                setCurrentPhoto(0);
              }}
            >
              {value.label}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-3 px-[180px]">
        {selectedPhoto.map((value, index) => (
          <button
            key={index}
            className="relative rounded-xl"
            onClick={() => {
              setCurrentPhoto(index);
              sliderRef.current?.slickGoTo(index);
            }}
          >
            <div
              className={`absolute z-10 h-full w-full transition-all duration-200 ${
                currentPhoto === index ? "" : "bg-black/50"
              }`}
            />
            <img
              src={value.image}
              className="h-full w-full"
              alt={`Thumbnail image ${index + 1}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
