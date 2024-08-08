import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      setIsVisible(position > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 mb-10 mr-10 flex flex-col items-center gap-1 rounded-full bg-stone-950 p-4 text-white shadow-lg transition-all duration-200 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <IoIosArrowUp className="text-[24px]" />
        <h1 className="font-noto-sans-thai text-xs font-medium text-white">
          TOP
        </h1>
      </button>
    </>
  );
};

export default BackToTopButton;
