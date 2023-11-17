import { SpotifyData } from "@/app/types/spotifyResponseType";
import access_token from "@/components/sever/getSpotifyAccessToken";
const accesstoken = await access_token();
const getUserTopMusic = async () => {
  const data: SpotifyData = await fetch(
    `https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=20`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accesstoken}`,
        "content-type": "application/json",
      },
      cache: "no-cache",
    }
  ).then((res) => {
    return res.json();
  });
  console.log(await data);
  return data;
};

export default getUserTopMusic;
