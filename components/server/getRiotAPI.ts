// RiotAPIからランク情報を取得する関数
const getRiotApi = async () => {
  //開発用キーは有効期限が1日
  const riotApiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY as string;
  const uri = `https://jp1.api.riotgames.com/lol/league/v4/entries/by-summoner/NLuYdIiih90xsugb_VCTYpSZ9y9ONn5-svfy1Ylr7YwsAl0?api_key=${riotApiKey}`;
  const result = await fetch(uri)
    .then((res) => {
      if (!res.ok) {
        console.error(res);
      }
      return res.json();
    })
    .then((json) => {
      return json;
    });
  if (result.length >= 1) {
    return result[0].tier + " " + result[0].rank;
  }
};
export default getRiotApi;
