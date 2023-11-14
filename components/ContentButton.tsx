"use client";
import { useContentStore } from "@/app/store/store";

const contentTab = () => {
  return (
    <div className="flex content-between">
      <TabButton title={"コンテンツ0"} contentType={"0"} />
      <TabButton title={"コンテンツ1"} contentType={"1"} />
    </div>
  );
};
export default contentTab;

type TabButtonProps = {
  title: string;
  contentType: string;
};

const TabButton = (Props: TabButtonProps) => {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    useContentStore.setState({ contentType: e.currentTarget.value });
  };
  return (
    <button
      className="hover:bg-gray-800"
      onClick={(e) => {
        clickHandler(e);
      }}
      value={Props.contentType}
    >
      {Props.title}
    </button>
  );
};
