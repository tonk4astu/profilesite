"use client";
import { DotGothic16 } from "@next/font/google";
import { useContentStore } from "@/app/store/store";
import getRiotApi from "@/components/sever/getRiotAPI";
const Dots = DotGothic16({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

type Props = {
  tier?: string;
};
const Content = (props: Props) => {
  const contentType = useContentStore((state) => state.contentType);
  if (contentType === "0") {
    return <ContentText text="コンテンツ" />;
  } else if (contentType === "1") {
    return <ContentText text="⚠表示できるコンテンツがありません" />;
  } else {
    return (
      <ContentText
        font={Dots.className}
        style={" text-5xl"}
        text={props.tier ? props.tier : "un Rank"}
      />
    );
  }
};

export default Content;

type ContentProps = {
  font?: string;
  style?: string;
  text: string;
};
const ContentText = (Props: ContentProps) => {
  return (
    <div className={`${Props.font} ${Props.style}`}>
      <p>{Props.text}</p>
    </div>
  );
};
