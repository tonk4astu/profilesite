import { DotGothic16 } from "@next/font/google";
import getRiotApi from "@/components/server/getRiotAPI";
const data = await getRiotApi();
const Dots = DotGothic16({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

const lolContainer = () => {
  return (
    <div className={`${Dots.className} text-5xl`}>
      <p>{data ? data : "un Rank"}</p>
    </div>
  );
};

export default lolContainer;
