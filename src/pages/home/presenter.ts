import { Presenter } from "@/hooks";
import { NextRouter, useRouter } from "next/router";
import { useContext, useMemo, useState } from "react";

class HomePresenter extends Presenter {
  router: NextRouter;
  constructor(set: any, router: NextRouter) {
    super(set);
    this.router = router;
  }
  gotoGallery = () => {
    this.router.push({
      pathname: "/gallery",
    });
  };
}

export { HomePresenter };
