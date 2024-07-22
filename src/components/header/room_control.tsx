import { FunctionComponent } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const RoomControl: FunctionComponent<{
  label: string;
  subLabel?: string;
  value: number;
  onAdd: () => void;
  onMinus: () => void;
}> = ({ label, subLabel, value, onAdd, onMinus }) => (
  <div className="flex h-[60px] flex-row items-center justify-between">
    <div className="flex flex-col">
      <h1 className="font-noto-sans-thai text-sm font-semibold text-yellow-850">
        {label}
      </h1>
      {subLabel && (
        <h1 className="font-noto-sans-thai text-sm font-medium text-neutral-500">
          {subLabel}
        </h1>
      )}
    </div>
    <div className="flex flex-row gap-3">
      <button onClick={onAdd}>
        <CiCirclePlus className="text-[24px] text-neutral-500" />
      </button>
      <h1 className="text-base font-semibold text-stone-950">{value}</h1>
      <button onClick={onMinus}>
        <CiCircleMinus className="text-[24px] text-yellow-850" />
      </button>
    </div>
  </div>
);

export default RoomControl;

export { RoomControl };
