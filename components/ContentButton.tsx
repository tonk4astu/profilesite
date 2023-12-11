"use client";
import { useContentStore } from "@/app/store/store";

const ContentTab = () => {
  return (
    <div className="flex content-between">
      <TabButton title={"プロフィール"} contentType={"0"} />
      <TabButton title={"一番聴いてる曲"} contentType={"1"} />
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
  const setContentType = useContentStore((state) => state.setContent);
  const contentType = useContentStore((state) => state.contentType);
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setContentType(e.currentTarget.value);
  };
  return (
    <button
      className={
        "hover:bg-gray-800 p-3 rounded-md" +
        (Props.contentType === contentType ? " bg-gray-800" : "")
      }
      onClick={(e) => {
        clickHandler(e);
      }}
      value={Props.contentType}
    >
      {Props.title}
    </button>
  );
};
