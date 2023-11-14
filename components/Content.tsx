"use client";

import { useContentStore } from "@/app/store/store";

const Content = () => {
  const contentType = useContentStore((state) => state.contentType);
  if (contentType === "0") {
    return (
      <div className="">
        <p>コンテンツ</p>
      </div>
    );
  } else {
    return (
      <div className="">
        <p>表示できるコンテンツがありません！</p>
      </div>
    );
  }
};

export default Content;
