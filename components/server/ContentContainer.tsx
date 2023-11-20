import MusicContainer from "@/components/server/MusicContainer";
import Content from "@/components/Contents";
import ContentTab from "@/components/ContentButton";
import LoLContainer from "@/components/lolContainer";
import { Suspense } from "react";
const ContentContainer = () => {
  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <ContentTab />
        <Content id="0" Content={<>まだない</>} />
        <Content id="1" Content={<MusicContainer />} />
        <Content id="2" Content={<LoLContainer />} />
      </Suspense>
    </>
  );
};

export default ContentContainer;
