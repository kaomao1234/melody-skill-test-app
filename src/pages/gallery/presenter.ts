import { Presenter } from "@/hooks";

class GalleryPresenter extends Presenter {
  gallery = [
    {
      image: "/image_1.png",
      category: "bedroom",
    },
    {
      image: "/image_2.png",
      category: "bedroom",
    },
    {
      image: "/image_3.png",
      category: "bedroom",
    },
    {
      image: "/image_4.png",
      category: "bedroom",
    },
    {
      image: "/superior_modern.png",
      category: "bedroom",
    },
    {
      image: "/business_suite.png",
      category: "bedroom",
    },
    {
      image: "/image_5.png",
      category: "lobby",
    },
    {
      image: "/image_6.png",
      category: "lobby",
    },
  ];

  getBedroom = () => {
    return this.gallery.filter((value, index) => value.category === "bedroom");
  };

  getLobby = () => {
    return this.gallery.filter((value, index) => value.category === "lobby");
  };
}

export { GalleryPresenter };
