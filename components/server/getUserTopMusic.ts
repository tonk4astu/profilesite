import { SpotifyData } from "@/app/types/spotifyResponseType";
import access_token from "@/components/server/getSpotifyAccessToken";
const accessToken = await access_token();
export default async function getUserTopMusic() {
  const data: SpotifyData = await fetch(
    `https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=1`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "content-type": "application/json",
      },
      cache: "no-cache",
    }
  ).then((res) => {
    return res.json();
  });
  return data;
}
