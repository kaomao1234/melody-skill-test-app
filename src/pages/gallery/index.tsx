import { usePresenter } from "@/hooks";
import { FunctionComponent } from "react";
import { GalleryPresenter } from "./presenter";

const GalleryPage: FunctionComponent = () => {
  const presenter = usePresenter<GalleryPresenter>(
    (set) => new GalleryPresenter(set)
  );
  return <div></div>;
};

export default GalleryPage;
