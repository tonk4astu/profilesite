"use client";
import { Bevan } from "next/font/google";
import { useState } from "react";

const bevan = Bevan({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

type MusicContainerProps = {
  data: JSX.Element[];
};

export default function MusicContainer(props: MusicContainerProps) {
  const [count, setCount] = useState(0);
  if (!props.data) return <></>;
  const countUp = () => {
    data.length <= count + 1 ? setCount(0) : setCount(count + 1);
  };
  const data = props.data.map((item) => {
    return item;
  });
  return (
    <div className="flex flex-wrap justify-center">
      <div className={"top-0 left-0 float-left text-3xl " + bevan.className}>
        {count + 1}
      </div>
      {data[count]}

      <button className="border border-zinc-700" onClick={() => countUp()}>
        +1
      </button>
    </div>
  );
}
