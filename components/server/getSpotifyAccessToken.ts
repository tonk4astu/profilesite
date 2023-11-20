import { acessToken } from "@/app/types/spotifyResponseType";

const REDIRECT_URL = encodeURI("http://localhost:4000/spotify");
const CODE = process.env.NEXT_PUBLIC_CODE as string;
const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN as string;
//認証コードを取得する際に使用
const getAuthCodeURL =
  "https://accounts.spotify.com/authorize?response_type=code&client_id=" +
  CLIENT_ID +
  "&redirect_uri=" +
  REDIRECT_URL +
  "&scope=user-top-read";

const getAccessToken = async () => {
  const param = new URLSearchParams();
  param.append("grant_type", "refresh_token");
  param.append("refresh_token", REFRESH_TOKEN);
  const token: acessToken = await fetch(
    `https://accounts.spotify.com/api/token`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(
          CLIENT_ID + ":" + CLIENT_SECRET
        ).toString("base64")}`,
        "content-type": "application/x-www-form-urlencoded",
      },
      cache: "no-cache",
      body: param,
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      return json;
    });

  return token.access_token;
};
export default getAccessToken;

//refreshTokenを取得
const getRefreshToken = async () => {
  console.log(getAuthCodeURL);
  const param = new URLSearchParams();
  param.append("grant_type", "authorization_code");
  param.append("code", CODE);
  param.append("redirect_uri", REDIRECT_URL);
  const token: any = await fetch(`https://accounts.spotify.com/api/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        CLIENT_ID + ":" + CLIENT_SECRET
      ).toString("base64")}`,
      "content-type": "application/x-www-form-urlencoded",
    },
    cache: "no-cache",
    body: param,
  })
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      return json;
    });
};
