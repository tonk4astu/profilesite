import { DotGothic16 } from "@next/font/google";
const Dots = DotGothic16({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

type Props = {
  tier?: string;
};
const lolContainer = (Props: Props) => {
  return (
    <div className={`${Dots.className} text-5xl`}>
      <p>{Props.tier ? Props.tier : "un Rank"}</p>
    </div>
  );
};

export default lolContainer;
