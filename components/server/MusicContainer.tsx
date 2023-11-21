import getUserTopMusic from "./getUserTopMusic";
import MusicCarousel from "../MusicCarousel";
const userTopMusic = await getUserTopMusic();

export default function MusicData() {
  const data = userTopMusic.items.map((item) => {
    return (
      <div className="">
        <img className="max-w-xs max-h-xs" src={item.album.images[0].url} />
        <div className="">
          <p>{item.name}</p>
          <p>{item.artists[0].name}</p>
          <p>{item.album.name}</p>
        </div>
      </div>
    );
  });
  return <MusicCarousel data={data} />;
}
