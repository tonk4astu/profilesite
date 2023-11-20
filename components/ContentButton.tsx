"use client";
import { useContentStore } from "@/app/store/store";

const ContentTab = () => {
  return (
    <div className="flex content-between">
      <TabButton title={"コンテンツ0"} contentType={"0"} />
      <TabButton title={"コンテンツ1"} contentType={"1"} />
      <TabButton title={"現在のLoLランク"} contentType={"2"} />
    </div>
  );
};
export default ContentTab;

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
      className="hover:bg-gray-800 p-3 rounded-md"
      onClick={(e) => {
        clickHandler(e);
      }}
      value={Props.contentType}
    >
      {Props.title}
    </button>
  );
};
