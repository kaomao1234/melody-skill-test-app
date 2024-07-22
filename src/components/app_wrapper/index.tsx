import { FunctionComponent, ReactNode, useEffect } from "react";
import { Header } from "../header";
import { Footer } from "../footer";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { useRouter } from "next/router";
import BackToTopButton from "../back_to_top_button";

interface Props {
  children: ReactNode;
}

const AppWrapper: FunctionComponent<Props> = ({ children }) => {
  const router = useRouter();
  const renderBreadcrumbs = () => (
    <Breadcrumbs className="bg-zinc-830 px-[100px] py-[38px]">
      <BreadcrumbItem
        classNames={{
          separator: "text-white text-[20px]",
          item: "text-white text-xs font-normal font-noto-sans-thai",
        }}
      >
        Home
      </BreadcrumbItem>
      <BreadcrumbItem
        classNames={{
          separator: "text-white text-[20px]",
          item: "text-white text-xs font-normal font-noto-sans-thai",
        }}
      >
        Hotels
      </BreadcrumbItem>
      <BreadcrumbItem
        classNames={{
          separator: "text-white text-[20px]",
          item: "text-white text-xs font-normal font-noto-sans-thai",
        }}
      >
        <button
          onClick={() => {
            if (router.asPath === "/gallery") {
              router.push("/home");
            }
          }}
        >
          THE LUXURY HOTEL
        </button>
      </BreadcrumbItem>
      {router.asPath === "/gallery" && (
        <BreadcrumbItem
          classNames={{
            separator: "text-white text-[20px]",
            item: "text-white text-xs font-normal font-noto-sans-thai",
          }}
        >
          Photo by Hotel
        </BreadcrumbItem>
      )}
    </Breadcrumbs>
  );

  return (
    <div className="flex flex-col">
      <h1 className="bg-zinc-830 py-[15px] pl-[105px] font-noto-sans-thai text-[32px] font-semibold text-white">
        MELODY SKILL TEST
      </h1>
      <Header />
      {renderBreadcrumbs()}
      {children}
      <BackToTopButton />
      <Footer />
      <div className="flex h-[60px] items-center justify-center bg-zinc-830">
        <h1 className="font-['Kanit'] text-sm font-light text-white">
          © 2024 Go TRAVEL, Melody Skill
        </h1>
      </div>
    </div>
  );
};

export { AppWrapper };
