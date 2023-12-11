import getUserTopMusic from "./getUserTopMusic";
import MusicCarousel from "../MusicCarousel";
const userTopMusic = await getUserTopMusic();

export default function MusicData() {
  const data = userTopMusic.items.map((item) => {
    return (
      <div className="">
        <img className="max-w-40 max-h-40" src={item.album.images[0].url} />
        <div className="flex flex-col items-start max-w-[160px] ">
          <div className="text-xl whitespace-nowrap">{item.name}</div>
          <div className="text-base whitespace-nowrap">
            {item.artists[0].name}
          </div>
          <div className="text-sm whitespace-nowrap">{item.album.name}</div>
        </div>
      </div>
    );
  });
  return <MusicCarousel data={data} />;
}
