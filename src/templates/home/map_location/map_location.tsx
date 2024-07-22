import dynamic from "next/dynamic";
import { forwardRef } from "react";
import { DefaultProps } from "../default_prop";

const MapLocationInner = dynamic(
  () => import("./index").then((mod) => mod.default),
  {
    ssr: false,
  }
);

const MapLocation = forwardRef<HTMLDetailsElement, DefaultProps>(
  ({ presenter }, ref) => {
    return (
      <section ref={ref}>
        <MapLocationInner presenter={presenter} />
      </section>
    );
  }
);

MapLocation.displayName = "MapLocation";

export default MapLocation;