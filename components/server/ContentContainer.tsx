import MusicContainer from "@/components/server/MusicContainer";
import Content from "@/components/Contents";
import ContentTab from "@/components/ContentButton";
const ContentContainer = () => {
  return (
    <>
      <ContentTab />
      <Content id="1" Content={<MusicContainer />} />
    </>
  );
};

export default ContentContainer;
