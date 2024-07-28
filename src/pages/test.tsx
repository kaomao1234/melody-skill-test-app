import { Target, useAdapter } from "@/hooks/useAdapter";
import { CubitAction, CubitDispatch, useBLoC } from "@/hooks/useBLoC";
import { NextRouter, useRouter } from "next/router";
import { FunctionComponent, useRef } from "react";

class TestTarget extends Target {
  count = 0;
  countR!: number;
  increment = () => {
    console.log(this);
    this.count += 1;
    this.request();
  };
  decrement = () => {
    this.count -= 1;
    this.request();
  };
}

const Test: FunctionComponent = () => {
  const countR = useRef(0);
  const target = useAdapter(new TestTarget(), { countR: countR.current });
  const { increment, decrement, count } = target;
  countR.current += 1;
  return (
    <div className="flex h-20 w-full flex-row items-center justify-center gap-10">
      <button onClick={increment}>increment</button>
      <h1>{count}</h1>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default Test;
