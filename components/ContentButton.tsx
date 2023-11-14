"use client";
import { useContentStore } from "@/app/store/store";

const contentTab = () => {
  return (
    <div className="flex content-between">
      <button
        className=" hover:bg-gray-700"
        value={"0"}
        onClick={(e) => {
          e.preventDefault();
          clickHandler(e);
        }}
      >
        コンテンツ0
      </button>
      <button
        className=" hover:bg-gray-700"
        value={"1"}
        onClick={(e) => {
          e.preventDefault();
          clickHandler(e);
        }}
      >
        コンテンツ1
      </button>
    </div>
  );
};
export default contentTab;

const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
  useContentStore.setState({ contentType: e.currentTarget.value });
};
