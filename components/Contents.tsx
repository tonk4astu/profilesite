"use client";
import { DotGothic16 } from "next/font/google";
import { useContentStore } from "@/app/store/store";
import { JsxElement } from "typescript";
const Dots = DotGothic16({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

type Props = {
  id: string;
  Content: JSX.Element;
};
const Content = (props: Props) => {
  const contentType = useContentStore((state) => state.contentType);
  if (contentType === props.id) {
    return props.Content;
  }
  return <></>;
};

export default Content;
