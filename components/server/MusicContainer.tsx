import getUserTopMusic from "./getUserTopMusic";
import Image from "next/image";
const userTopMusic = await getUserTopMusic();

const MusicData = () => {
  console.log(userTopMusic);
  const data = userTopMusic.items.map((item) => {
    return [
      item.name,
      item.artists[0].name,
      item.album.name,
      item.album.images[0].url,
    ];
  });
  return data[0];
};

export default function MusicContainer() {
  const [songName, artistName, albumName, albumImage] = MusicData();
  return (
    <div>
      <img src={albumImage} />
      <p>{songName}</p>
      <p>{artistName}</p>
      <p>{albumName}</p>
    </div>
  );
}
